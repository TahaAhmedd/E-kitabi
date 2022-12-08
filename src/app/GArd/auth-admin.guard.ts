import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from '../login/login.component';
import { UserService } from './../services/user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthAdminGuard implements CanActivate {
  isloged:boolean
  constructor(private AuthServes: UserService , private router:Router , private toast : ToastrService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

      this.AuthServes.isloginuser.subscribe((data)=>{
        this.isloged = data
      })
    if (this.isloged) {
        return true;
    } else {
      this.toast.error("You Must Be Enter A valid Mail","Authentication Error")
      return this.router.navigate(["login"])
    }
  }
}
