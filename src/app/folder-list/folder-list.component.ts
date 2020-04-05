import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/service/user-service";
import { ILoginUser } from "src/app/model/user";
import { IFolderInfo } from "../model/folder";
import { IHttpRequest } from "../model/request";
import HttpHelper from "../utility/httpHelper";

@Component({
  selector: "app-folder-list",
  templateUrl: "./folder-list.component.html",
  styleUrls: ["./folder-list.component.css"]
})
export class FolderListComponent implements OnInit {
  name: string;

  folders: IFolderInfo[] = [];
  constructor(private userService: UserService) {}

  async ngOnInit() {
    this.userService.checkTokenExist();
    const userInfo: ILoginUser = this.userService.getUserInfo();

    const request: IHttpRequest = {
      url: "http://localhost:4002/driver/folders",
      header: {
        "Content-Type": "application/json",
        Authorization: userInfo.accessToken
      }
    };

    try {
      const data = (await HttpHelper.get(request)) as IFolderInfo[];
      console.log({ data });
      this.folders = data;
    } catch (error) {
      console.log("error:", error);
      throw error;
    }
  }
}
