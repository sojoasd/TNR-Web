import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/service/user-service";
import { ILoginUser } from "src/app/model/user";
import { IFolderInfo } from "../model/folder";
import { IHttpRequest } from "../model/request";
import HttpHelper from "../utility/httpHelper";
import { env } from "../../environments/environment";

@Component({
  selector: "app-folder-list",
  templateUrl: "./folder-list.component.html",
  styleUrls: ["./folder-list.component.css"]
})
export class FolderListComponent implements OnInit {
  name: string;
  loading: boolean;

  originFolders: IFolderInfo[] = [];
  folders: IFolderInfo[] = [];
  constructor(private userService: UserService) {}

  async ngOnInit() {
    this.loading = true;
    // this.userService.checkTokenExist();
    const userInfo: ILoginUser = this.userService.getUserInfo();

    const request: IHttpRequest = {
      url: `${env.host}/driver/folders`,
      header: {
        "Content-Type": "application/json",
        Authorization: userInfo.accessToken
      }
    };

    try {
      const data = (await HttpHelper.get(request)) as IFolderInfo[];
      this.originFolders = data;
      this.folders = data;
    } catch (error) {
      throw error;
    }

    this.loading = false;
  }

  searchFolder(searchFolderInput: string) {
    this.folders = this.originFolders.filter(f => f.name.toLowerCase().includes(searchFolderInput.toLowerCase()));
  }
}
