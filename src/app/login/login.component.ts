import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import HttpHelper from "../utility/httpHelper";
import { ActivatedRoute, Router } from "@angular/router";
import { ILoginUser } from "src/app/model/user";
import { UserService } from "src/app/service/user-service";
import { IHttpRequest } from "../model/request";
import { env } from "../../environments/environment";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private activeRouter: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private userService: UserService // private httpHelper: HttpHelper
  ) {}

  loading: boolean;

  async ngOnInit() {
    this.loading = true;

    const code = this.activeRouter.snapshot.queryParams.code;

    if (code) {
      const loginData = `code=${this.activeRouter.snapshot.queryParams.code}`;

      const request: IHttpRequest = { url: `${env.host}/account/login`, body: { code: loginData } };

      try {
        const data = await HttpHelper.post(request);
        this.userService.setUserInfo(data as ILoginUser);
        this.router.navigate(["/folder-list"]);
      } catch (error) {
        throw error;
      }
    }

    const userInfo = this.userService.getUserInfo();
    if (userInfo) {
      this.router.navigate(["/folder-list"]);
    }

    this.loading = false;
  }

  async login() {
    try {
      const request: IHttpRequest = { url: `${env.host}/account/login` };
      const data = await HttpHelper.get(request);
      const url = data as string;
      window.open(url, "_self");
    } catch (error) {
      throw error;
    }
  }
}
