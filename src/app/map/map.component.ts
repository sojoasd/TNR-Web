import { Component, OnInit, TemplateRef, ElementRef, ViewChild } from "@angular/core";
import { BsModalService, BsModalRef, ModalOptions } from "ngx-bootstrap/modal";
import { IMapCenterPointInfo, IFileListCheckWithDB, IClientFile } from "../model/map";
import { getCenterPoint } from "../utility/geoLocationHelper";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/service/user-service";
import { ILoginUser } from "../model/user";
import { HttpClient } from "@angular/common/http";
import { IHttpRequest } from "../model/request";
import HttpHelper from "../utility/httpHelper";
import { IFile } from "../model/folder";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit {
  @ViewChild("sideNavHeader") sideNavHeader: ElementRef;
  @ViewChild("sideNavBody") sideNavBody: ElementRef;
  @ViewChild("template") myModal: TemplateRef<any>;

  loading: boolean;
  userInfo: ILoginUser;
  folderId: string;
  centerPoint: IMapCenterPointInfo;
  files: IFileListCheckWithDB[] = [];
  markers: IClientFile[] = [];
  modalRef: BsModalRef;
  isOpenSideNav: Boolean = false;

  modalInfo: IClientFile = {};

  constructor(private activeRouter: ActivatedRoute, private modalService: BsModalService, private userService: UserService, private httpClient: HttpClient) {}

  ngOnInit() {
    this.folderId = this.activeRouter.snapshot.params.id;

    this.userInfo = this.userService.getUserInfo();
    this.httpClient
      .get<IFileListCheckWithDB[]>(`http://localhost:4002/driver/files?folderId=${this.folderId}`, {
        headers: { Authorization: this.userInfo.accessToken }
      })
      .subscribe((res: IFileListCheckWithDB[]) => {
        this.files = res;
        // this.files.map(f => {
        //   if (f.isDBExist) {
        //     f.fileInfo.icon = {
        //       url: `https://drive.google.com/thumbnail?id=${f.id}`,
        //       // scaledSize: { height: 40, width: 40 },
        //       selected: false
        //     };
        //     this.markers.push(f.fileInfo);
        //   }

        //   f.selected = false;
        // });

        this.refreshFiles();

        this.setCenterPoint();
      });

    const folderId = this.activeRouter.snapshot.params.id;
    if (!folderId) return;
  }

  refreshFiles(importFiles: IClientFile[] = []) {
    this.files.map(f => {
      if (f.isDBExist) {
        f.fileInfo.icon = {
          url: `https://drive.google.com/thumbnail?id=${f.id}`,
          // scaledSize: { height: 40, width: 40 },
          selected: false
        };
        this.markers.push(f.fileInfo);
      }

      if (importFiles.some(s => s.id === f.id)) {
        f.isDBExist = true;
        f.fileInfo = importFiles.find(s => s.id === f.id);
        f.fileInfo.icon = {
          url: `https://drive.google.com/thumbnail?id=${f.id}`,
          selected: false
        };
        this.markers.push(f.fileInfo);
      }

      f.selected = false;
    });
  }

  setCenterPoint() {
    // console.log("center: ", getCenterPoint(this.markers));
    this.centerPoint = getCenterPoint(this.markers.filter(f => f.latitude && f.longitude && f.latitude !== 0 && f.longitude !== 0));
    this.centerPoint.zoom = 15;
  }

  public markerClick(e) {
    // console.log(e);
  }

  changeCenterPoint(markerId: string) {
    const file = this.files.find(f => f.id === markerId);

    if (file.fileInfo) {
      this.centerPoint.latitude = file.fileInfo.latitude;
      this.centerPoint.longitude = file.fileInfo.longitude;

      this.changeIconSelected(markerId);
      this.changeSideSelected(markerId);
    }
  }

  changeIconSelected(markerId: string) {
    this.markers.map(m => {
      if (m.id === markerId) {
        m.icon.selected = true;
      } else {
        m.icon.selected = false;
      }
    });
  }

  changeSideSelected(markerId: string) {
    this.files.map(m => {
      if (m.id === markerId) {
        m.selected = true;
      } else {
        m.selected = false;
      }
    });
  }

  openModal(markerId: string) {
    const file = this.files.find(f => f.id === markerId);

    this.modalInfo = file.fileInfo;
    const option: ModalOptions = { backdrop: "static", keyboard: false };
    this.modalRef = this.modalService.show(this.myModal, option);

    this.changeIconSelected(markerId);
    this.changeSideSelected(markerId);

    const side = document.getElementById(`side-${markerId}`);
    side.scrollIntoView({ block: "center", behavior: "smooth" });
  }

  hideModal() {
    // console.log(this.myModal);
    this.modalRef.hide();
  }

  openNav() {
    this.sideNavHeader.nativeElement.style.width = "300px";
    this.sideNavBody.nativeElement.style.width = "300px";
  }

  closeNav() {
    this.sideNavHeader.nativeElement.style.width = "0px";
    this.sideNavBody.nativeElement.style.width = "0px";

    this.markers.map(m => (m.icon.selected = false));
    this.files.map(m => (m.selected = false));
  }

  async allImport() {
    const fn = "MapComponent.allImport";
    this.loading = true;

    const fileIds = this.files
      .filter(f => !f.isDBExist)
      .map(m => {
        return m.id;
      });

    try {
      const result: IClientFile[] = await this.importCommon(fileIds);
      console.log(fn, { result });

      this.refreshFiles(result);
    } catch (error) {
      console.log(fn, error);
      throw error;
    }

    this.loading = false;
  }

  async import(fileId: string) {
    const fn = "MapComponent.import";
    this.loading = true;

    try {
      const result: IClientFile[] = await this.importCommon([fileId]);
      console.log({ result });

      this.refreshFiles(result);
    } catch (error) {
      console.log(fn, error);
      throw error;
    }
    this.loading = false;
  }

  async importCommon(fileIds: string[]): Promise<IClientFile[]> {
    const request: IHttpRequest = {
      url: "http://localhost:4002/driver/importFiles",
      header: {
        "Content-Type": "application/json",
        Authorization: this.userInfo.accessToken
      },
      body: {
        folderId: this.folderId,
        fileIds: fileIds
      }
    };

    const res = await HttpHelper.post(request);

    return res as IClientFile[];
  }

  async save() {
    const fn = "MapComponent.save";

    if (!this.modalInfo.latitude || !this.modalInfo.longitude) return;

    this.loading = true;

    const body: IFile = {
      id: this.modalInfo.id,
      folderId: this.modalInfo.folderId,
      fileName: this.modalInfo.fileName,
      latitude: this.modalInfo.latitude,
      longitude: this.modalInfo.longitude,
      isPending: this.modalInfo.isPending ? this.modalInfo.isPending : false,
      isStray: this.modalInfo.isStray ? this.modalInfo.isStray : false,
      isNoDog: this.modalInfo.isNoDog ? this.modalInfo.isNoDog : false,
      isChained: this.modalInfo.isChained ? this.modalInfo.isChained : false,
      uncertainCount: this.modalInfo.uncertainCount ? this.modalInfo.uncertainCount : 0,
      notNeuteredCount: this.modalInfo.notNeuteredCount ? this.modalInfo.notNeuteredCount : 0,
      neuteredCount: this.modalInfo.neuteredCount ? this.modalInfo.neuteredCount : 0,
      maleDogCount: this.modalInfo.maleDogCount ? this.modalInfo.maleDogCount : 0,
      description: this.modalInfo.description ? this.modalInfo.description : "",
      contact: this.modalInfo.contact ? this.modalInfo.contact : ""
    };

    const request: IHttpRequest = {
      url: "http://localhost:4002/driver/files",
      header: {
        "Content-Type": "application/json",
        Authorization: this.userInfo.accessToken
      },
      body: body
    };

    try {
      await HttpHelper.patch(request);
      this.modalRef.hide();
    } catch (error) {
      console.log(fn, error);
      throw error;
    }

    this.loading = false;
  }
}
