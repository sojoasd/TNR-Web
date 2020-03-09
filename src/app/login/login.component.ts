import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}

  loading: boolean;

  ngOnInit() {
    // this.loading = true;

    // setTimeout(() => {
    //   this.loading = false;
    // }, 5000);

    console.log(this.router.url);
  }

  login() {
    this.http.get("http://localhost:4002/account/login").subscribe(data => {
      // window.open(data);
      const url = data as string;

      window.open(url, "_self");
    });
  }
}
