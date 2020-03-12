import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/service/user-service";
// import { ILoginUser } from "src/app/model/user";
import { IFolderInfo } from "../model/folder";

@Component({
  selector: "app-folder-list",
  templateUrl: "./folder-list.component.html",
  styleUrls: ["./folder-list.component.css"]
})
export class FolderListComponent implements OnInit {
  name: string;

  folders: IFolderInfo[] = [
    {
      kind: "drive#file",
      id: "1MssDqRxbNScQpFaHtWSuORvIjuBx6Mad",
      name: "HomeVisit 2020-03-7",
      mimeType: "application/vnd.google-apps.folder"
    },
    {
      kind: "drive#file",
      id: "1L0avkeNjyQYq8vhRdxWMOjYxLiW24t23",
      name: "HomeVisit1",
      mimeType: "application/vnd.google-apps.folder"
    },
    {
      kind: "drive#file",
      id: "1L0avkeNjyQYq8vhRdxWMOjYxLiW24t23",
      name: "2020-01-09 新店祥和路 2",
      mimeType: "application/vnd.google-apps.folder"
    },
    {
      kind: "drive#file",
      id: "1L0avkeNjyQYq8vhRdxWMOjYxLiW24t23",
      name: "2020-01-09 新店祥和路 2",
      mimeType: "application/vnd.google-apps.folder"
    },
    {
      kind: "drive#file",
      id: "1L0avkeNjyQYq8vhRdxWMOjYxLiW24t23",
      name: "2020-01-09 新店祥和路 2",
      mimeType: "application/vnd.google-apps.folder"
    },
    {
      kind: "drive#file",
      id: "1L0avkeNjyQYq8vhRdxWMOjYxLiW24t23",
      name: "2020-01-09 新店祥和路 2",
      mimeType: "application/vnd.google-apps.folder"
    },
    {
      kind: "drive#file",
      id: "1L0avkeNjyQYq8vhRdxWMOjYxLiW24t23",
      name: "2020-01-09 新店祥和路 2",
      mimeType: "application/vnd.google-apps.folder"
    },
    {
      kind: "drive#file",
      id: "1L0avkeNjyQYq8vhRdxWMOjYxLiW24t23",
      name: "2020-01-09 新店祥和路 2",
      mimeType: "application/vnd.google-apps.folder"
    },
    {
      kind: "drive#file",
      id: "1L0avkeNjyQYq8vhRdxWMOjYxLiW24t23",
      name: "2020-01-09 新店祥和路 2",
      mimeType: "application/vnd.google-apps.folder"
    },
    {
      kind: "drive#file",
      id: "1L0avkeNjyQYq8vhRdxWMOjYxLiW24t23",
      name: "2020-01-09 新店祥和路 2",
      mimeType: "application/vnd.google-apps.folder"
    },
    {
      kind: "drive#file",
      id: "1L0avkeNjyQYq8vhRdxWMOjYxLiW24t23",
      name: "2020-01-09 新店祥和路 2",
      mimeType: "application/vnd.google-apps.folder"
    },
    {
      kind: "drive#file",
      id: "1L0avkeNjyQYq8vhRdxWMOjYxLiW24t23",
      name: "2020-01-09 新店祥和路 2",
      mimeType: "application/vnd.google-apps.folder"
    },
    {
      kind: "drive#file",
      id: "1L0avkeNjyQYq8vhRdxWMOjYxLiW24t23",
      name: "2020-01-09 新店祥和路 2",
      mimeType: "application/vnd.google-apps.folder"
    },
    {
      kind: "drive#file",
      id: "1L0avkeNjyQYq8vhRdxWMOjYxLiW24t23",
      name: "2020-01-09 新店祥和路 2",
      mimeType: "application/vnd.google-apps.folder"
    },
    {
      kind: "drive#file",
      id: "1L0avkeNjyQYq8vhRdxWMOjYxLiW24t23",
      name: "2020-01-09 新店祥和路 2",
      mimeType: "application/vnd.google-apps.folder"
    },
    {
      kind: "drive#file",
      id: "1L0avkeNjyQYq8vhRdxWMOjYxLiW24t23",
      name: "2020-01-09 新店祥和路 2",
      mimeType: "application/vnd.google-apps.folder"
    },
    {
      kind: "drive#file",
      id: "1L0avkeNjyQYq8vhRdxWMOjYxLiW24t23",
      name: "2020-01-09 新店祥和路 2",
      mimeType: "application/vnd.google-apps.folder"
    },
    {
      kind: "drive#file",
      id: "1L0avkeNjyQYq8vhRdxWMOjYxLiW24t23",
      name: "2020-01-09 新店祥和路 2",
      mimeType: "application/vnd.google-apps.folder"
    },
    {
      kind: "drive#file",
      id: "1L0avkeNjyQYq8vhRdxWMOjYxLiW24t23",
      name: "2020-01-09 新店祥和路 2",
      mimeType: "application/vnd.google-apps.folder"
    },
    {
      kind: "drive#file",
      id: "1L0avkeNjyQYq8vhRdxWMOjYxLiW24t23",
      name: "2020-01-09 新店祥和路 2",
      mimeType: "application/vnd.google-apps.folder"
    }
  ];

  constructor(private userService: UserService) {}

  ngOnInit() {
    // this.userService.checkTokenExist();
    // const userInfo: ILoginUser = this.userService.getUserInfo();
  }

  doSomething() {
    // console.log(this.users.filter(f => f.name === "zeal1"));
    // if (this.name === "") {
    //   this.users = this.cacheUsers;
    // }
    // this.users = this.users.filter(f => {
    //   if (f.name.indexOf(this.name) >= 0) {
    //     return f;
    //   }
    // });
  }
}