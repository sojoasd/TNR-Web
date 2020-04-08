import { Injectable } from "@angular/core";
import { ILoginUser } from "../model/user";
import { ActivatedRoute, Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private activeRouter: ActivatedRoute, private router: Router) {}

  setUserInfo(userInfo: ILoginUser) {
    localStorage.setItem("tnr-user", JSON.stringify(userInfo));
  }

  getUserInfo() {
    const json = localStorage.getItem("tnr-user");
    if (json) {
      return JSON.parse(json);
    }

    return null;
  }

  checkTokenExist() {
    const userInfo = this.getUserInfo();

    if (!userInfo) {
      this.router.navigate(["/login"]);
    }
  }
}
