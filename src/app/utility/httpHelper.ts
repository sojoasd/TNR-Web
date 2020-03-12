import { HttpClient } from "@angular/common/http";
import { InjectorInstance } from "../app.module";

export let http: HttpClient;

export default class HttpHelper {
  // constructor(private http: HttpClient) {}

  static init() {
    http = InjectorInstance.get<HttpClient>(HttpClient);
  }

  static get(url) {
    return new Promise((resolve, reject) => {
      http.get(url).subscribe(
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
