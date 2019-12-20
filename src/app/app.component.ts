import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../app/user/shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  userClaims: any;
  title = 'Учет товаров';

  constructor(private router: Router, private userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  Logout() {
    localStorage.removeItem('userToken');
    this.toastr.success('User log out successful');
    this.router.navigate(['/login']);
  }
}



