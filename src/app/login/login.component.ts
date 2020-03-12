import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import HttpHelper from "../utility/httpHelper";
import { ActivatedRoute, Router } from "@angular/router";
import { ILoginUser } from "src/app/model/user";
import { UserService } from "src/app/service/user-service";

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

  ngOnInit() {
    this.loading = true;

    const code = this.activeRouter.snapshot.queryParams.code;

    if (code) {
      const loginData = `code=${this.activeRouter.snapshot.queryParams.code}`;
      console.log("code: ", loginData);

      this.http.post("http://localhost:4002/account/login", { code: loginData }).subscribe(
        (value: ILoginUser) => {
          this.userService.setUserInfo(value);
          this.router.navigate(["/folder"]);
        },
        (error: any) => {
          console.log("error:", error);
        }
      );
    }

    const userInfo = this.userService.getUserInfo();
    // console.log("userInfo: ", userInfo);

    if (userInfo) {
      this.router.navigate(["/folder"]);
    }

    this.loading = false;
  }

  async login() {
    try {
      const data = await HttpHelper.get("http://localhost:4002/account/login");
      const url = data as string;
      window.open(url, "_self");

      // this.http.get("http://localhost:4002/account/login").subscribe(
      //   data => {
      //     // window.open(data);
      //     const url = data as string;
      //     window.open(url, "_self");
      //   },
      //   error => {
      //     console.log(error);
      //   }
      // );
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
