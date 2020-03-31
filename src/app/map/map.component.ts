import { Component, OnInit, TemplateRef, ElementRef, ViewChild } from "@angular/core";
import { BsModalService, BsModalRef, ModalOptions } from "ngx-bootstrap/modal";
import { IMapCenterPointInfo, IFileListCheckWithDB, IFile } from "../model/map";
import { getCenterPoint } from "../utility/geoLocationHelper";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit {
  @ViewChild("sideNavHeader") sideNavHeader: ElementRef;
  @ViewChild("sideNavBody") sideNavBody: ElementRef;
  @ViewChild("template") myModal: TemplateRef<any>;

  centerPoint: IMapCenterPointInfo;
  files: IFileListCheckWithDB[];
  markers: IFile[] = [];
  modalRef: BsModalRef;
  isOpenSideNav: Boolean = false;

  modalInfo: IFile = {};

  constructor(private modalService: BsModalService) {}

  ngOnInit() {
    this.files = [
      {
        id: "1rvZc-NnM7YrUIFtNz0WqR6RoCtkw2VAJ",
        fileName: "IMG_7306.JPG",
        isDBExist: true,
        fileInfo: {
          id: "1rvZc-NnM7YrUIFtNz0WqR6RoCtkw2VAJ",
          folderId: "1L0avkeNjyQYq8vhRdxWMOjYxLiW24t23",
          fileName: "IMG_7306.JPG",
          latitude: 25.01178888888889,
          longitude: 121.54583611111111,
          createEpochDate: 1582979556
        }
      },
      {
        id: "1Z1jCfQXeKKGy20mc0Jcy3zyiHTnpd3eJ",
        fileName: "IMG_7284.JPG",
        isDBExist: true,
        fileInfo: {
          id: "1Z1jCfQXeKKGy20mc0Jcy3zyiHTnpd3eJ",
          folderId: "1L0avkeNjyQYq8vhRdxWMOjYxLiW24t23",
          fileName: "IMG_7284.JPG",
          latitude: 24.889805555555554,
          longitude: 121.53086944444445,
          createEpochDate: 1582900648
        }
      },
      {
        id: "1i0mieCYGxzrz8ALckqVctWTYltUIe90l",
        fileName: "IMG_7297.JPG",
        isDBExist: true,
        fileInfo: {
          id: "1i0mieCYGxzrz8ALckqVctWTYltUIe90l",
          folderId: "1L0avkeNjyQYq8vhRdxWMOjYxLiW24t23",
          fileName: "IMG_7297.JPG",
          latitude: 24.964747222222222,
          longitude: 121.53687222222221,
          createEpochDate: 1582963132
        }
      },
      {
        id: "1vnM2l6IVY8K8RDcFwcdzlCkHZDd1cLJQ",
        fileName: "IMG_7232.JPG",
        isDBExist: true,
        fileInfo: {
          id: "1vnM2l6IVY8K8RDcFwcdzlCkHZDd1cLJQ",
          folderId: "1L0avkeNjyQYq8vhRdxWMOjYxLiW24t23",
          fileName: "IMG_7232.JPG",
          latitude: 25.0117778888889,
          longitude: 121.54583611111111,
          createEpochDate: 1583594470666,
          isPending: true,
          contact: "0911123321",
          description: "飼主不想結紮",
          isChained: true,
          isNoDog: false,
          isStray: false,
          maleDogCount: 1,
          neuteredCount: 0,
          notNeuteredCount: 2,
          uncertainCount: 1,
          updateEpochDate: 1583612787874
        }
      },
      {
        id: "1-k3wM23dk17XirbKnud4w1qon87Fw-Gj",
        fileName: "E8071B7C-BAE5-486B-BFAC-AF4DB2880B27.jpg",
        isDBExist: false,
        fileInfo: null
      },
      {
        id: "1zuSY-aZkf3YL-5Aqbhoa2njRt7geH89v",
        fileName: "683185A6-A0AF-4FDB-87D6-F6DB8CCEFB79.jpg",
        isDBExist: false,
        fileInfo: null
      },
      {
        id: "1QV2ESgw6aCxC5B01N9fI10hXcXDwifd6",
        fileName: "D2C313CA-6B84-437F-B570-6B22FAA83D97.jpg",
        isDBExist: false,
        fileInfo: null
      },
      {
        id: "1Eg3pYZRU61yY7FfP-OcKtnMIkDdg64u5",
        fileName: "9F9A2A64-6660-4499-BF11-339336CE368C.jpg",
        isDBExist: false,
        fileInfo: null
      },
      {
        id: "1AGaWmqX02ohPts0rkmL0kA293jDZFbSJ",
        fileName: "0BF67F98-2FEC-4756-A2A6-A237CD373634.jpg",
        isDBExist: false,
        fileInfo: null
      },
      {
        id: "1lUjnerwMTQEamW7f03dCDphtYb7l3Ew0",
        fileName: "IMG_7193.JPG",
        isDBExist: false,
        fileInfo: null
      },
      {
        id: "1HcI4TyE4FUHWe_Diu8LgyOBNqPm3blyd",
        fileName: "IMG_7254.JPG",
        isDBExist: false,
        fileInfo: null
      },
      {
        id: "1iR9E-SmqaHRo_4VOgVTPeLLOiSemYX9t",
        fileName: "IMG_7107.JPG",
        isDBExist: false,
        fileInfo: null
      },
      {
        id: "1PHM6g09ZqDSanm0_ZqCx8xR2BCbcpmIs",
        fileName: "IMG_7188.JPG",
        isDBExist: false,
        fileInfo: null
      },
      {
        id: "1iVBSMX37hlXqQYg2-2gRJP3BIlDBRX_d",
        fileName: "IMG_7164.JPG",
        isDBExist: false,
        fileInfo: null
      },
      {
        id: "1z6UUixAco3Zj_GjH2UO446BMA85Hu6XW",
        fileName: "IMG_7154.JPG",
        isDBExist: false,
        fileInfo: null
      },
      {
        id: "1MFYSpSgU5Ew2MFiTjOiGXOV9uDRBfG7X",
        fileName: "IMG_7170.JPG",
        isDBExist: false,
        fileInfo: null
      },
      {
        id: "1_e8WmtJCWjMF1use1hNvjvw9wN9HIJqP",
        fileName: "IMG_7041.JPG",
        isDBExist: false,
        fileInfo: null
      },
      {
        id: "1W6lnktOas0NhcQzb1m5vW4TwFOhbrYlo",
        fileName: "IMG_6962.JPG",
        isDBExist: false,
        fileInfo: null
      },
      {
        id: "1xKjFGu9iRWMTgE5u5GJXVqsJ-ls1K_OC",
        fileName: "IMG_6924.JPG",
        isDBExist: false,
        fileInfo: null
      },
      {
        id: "1Dsxtc09VdYHXxSMJ504DYxpRrf3PZRjT",
        fileName: "IMG_6967.JPG",
        isDBExist: false,
        fileInfo: null
      },
      {
        id: "1NaF8BDYOn_7BqBmr5WMN-kHnVFhj9OCw",
        fileName: "F5A076F5-0582-490F-9174-586F85697134.jpg",
        isDBExist: false,
        fileInfo: null
      },
      {
        id: "10ymQuUM9-TOdBHCn9tL6oOlbQ4mIl5us",
        fileName: "0F110EAF-63CA-4A73-B0D1-930F223C76E8.jpg",
        isDBExist: false,
        fileInfo: null
      },
      {
        id: "1w1HCz5JAN8gmnufnC5vjq5KqjHLu5mHS",
        fileName: "0A5D12CE-BE63-4E9E-B176-64DB77860D63.jpg",
        isDBExist: false,
        fileInfo: null
      },
      {
        id: "1Y1zJ5HqNKJ10j5V67ZT488M6ae_Uxv-M",
        fileName: "IMG_7340.JPG",
        isDBExist: false,
        fileInfo: null
      },
      {
        id: "1IaE-jHu2IZdvxIFIRci_Ig8bxXJv0Rxk",
        fileName: "IMG_6898.JPG",
        isDBExist: false,
        fileInfo: null
      },
      {
        id: "15-kaztidqDIxzQBdrRlEfkfCKdRW-XRF",
        fileName: "IMG_6962.JPG",
        isDBExist: false,
        fileInfo: null
      },
      {
        id: "10xcgT4mmoMHzKXDXogDgfgRW9-9J2UC2",
        fileName: "IMG_6920.JPG",
        isDBExist: false,
        fileInfo: null
      },
      {
        id: "1XA1B0qBeQ60_Iu5uf34ddNxumTcWwEy9",
        fileName: "IMG_6941.JPG",
        isDBExist: false,
        fileInfo: null
      },
      {
        id: "1EMn2u-grJJH8mcXuREL1JKfBI7cOonXt",
        fileName: "IMG_6936.JPG",
        isDBExist: false,
        fileInfo: null
      },
      {
        id: "1ooAVrKCgOpRVHRZ0m6jbZpHsa2sIXNJF",
        fileName: "IMG_6892.JPG",
        isDBExist: false,
        fileInfo: null
      },
      {
        id: "1rV6Zr4F2L3Ty2kVTwnSkUzjW1mTB27zG",
        fileName: "IMG_6960.JPG",
        isDBExist: false,
        fileInfo: null
      },
      {
        id: "1UIePCn1uxFtbMPI0Sztbn1qhoUE430SQ",
        fileName: "IMG_6666.JPG",
        isDBExist: false,
        fileInfo: null
      },
      {
        id: "1-znq-7nFWFd_2SSH1EVEI5LnieII86zm",
        fileName: "IMG_6961.JPG",
        isDBExist: false,
        fileInfo: null
      },
      {
        id: "1afaAVlhX2hPczINLBzLOdzE2cpw9LgRE",
        fileName: "IMG_7325.JPG",
        isDBExist: false,
        fileInfo: null
      },
      {
        id: "1NlTzpwSMAPVE4LN0z-CflU0thB8hwS4c",
        fileName: "IMG_7321.JPG",
        isDBExist: false,
        fileInfo: null
      },
      {
        id: "1MKgc8yAC4LFO_vS51oeiNQxRrY_eVeVA",
        fileName: "IMG_6966.JPG",
        isDBExist: false,
        fileInfo: null
      },
      {
        id: "1RRfjTKPJybQ0wThnOejSGvMo0Efr7hOs",
        fileName: "IMG_6917.JPG",
        isDBExist: false,
        fileInfo: null
      }
    ];

    this.files.map(f => {
      if (f.isDBExist) {
        f.fileInfo.icon = {
          url: `https://drive.google.com/thumbnail?id=${f.id}`,
          // scaledSize: { height: 40, width: 40 },
          selected: false
        };
        // f.fileInfo.title = `${f.fileInfo.latitude}, ${f.fileInfo.longitude}`;
        this.markers.push(f.fileInfo);
      }
    });

    this.setCenterPoint();

    // console.log(this.markers);

    // console.log(this.centerPoint);

    // setTimeout(() => {
    //   this.markers.map(m => {
    //     m.icon.selected = true;
    //     return m;
    //   });
    // }, 5000);

    // setTimeout(() => {
    //   this.markers.map(m => {
    //     m.icon.selected = false;
    //     return m;
    //   });
    // }, 7000);
  }

  setCenterPoint() {
    this.centerPoint = getCenterPoint(this.markers);
    this.centerPoint.zoom = 15;
  }

  public markerClick(e) {
    // console.log(e);
  }

  openModal(markerId) {
    // console.log("markerId: ", markerId);
    // this.modalInfo.title = "test123";
    const file = this.files.find(f => f.id === markerId);

    console.log(file);
    this.modalInfo = file.fileInfo;
    this.modalInfo.isPending = true;
    const option: ModalOptions = { backdrop: "static", keyboard: false };
    this.modalRef = this.modalService.show(this.myModal, option);
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
  }

  save() {
    console.log("save:", this.modalInfo);
  }
}
