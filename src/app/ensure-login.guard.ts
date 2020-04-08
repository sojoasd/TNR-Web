import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "src/app/service/user-service";

@Injectable()
export class EnsureLoginGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.userService.checkTokenExist();
    return true;
  }
}
