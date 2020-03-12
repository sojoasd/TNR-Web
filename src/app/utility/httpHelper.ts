import { HttpClient } from "@angular/common/http";
import { InjectorInstance } from "../app.module";
import { IHttpRequest } from "../model/request";

export let http: HttpClient;

export default class HttpHelper {
  // constructor(private http: HttpClient) {}

  static init() {
    http = InjectorInstance.get<HttpClient>(HttpClient);
  }

  static get(request: IHttpRequest) {
    return new Promise((resolve, reject) => {
      http
        .get(request.url, {
          headers: request.header
        })
        .subscribe(
          data => {
            const url = data as string;
            resolve(url);
          },
          error => {
            reject(error);
          }
        );
    });
  }

  static post(request: IHttpRequest) {
    return new Promise((resolve, reject) => {
      http
        .post(request.url, request.body, {
          headers: request.header
        })
        .subscribe(
          data => {
            const url = data as string;
            resolve(url);
          },
          error => {
            reject(error);
          }
        );
    });
  }
}
