import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class EnsureLoginGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log("next: ", next);
    console.log("state: ", state);

    this.router.navigateByUrl("/Index");
    return true;
    // if (next.queryParams["apikey"] == "123") {
    //   return true;
    // } else {
    //   this.router.navigateByUrl("/Index");
    // }
  }
}
