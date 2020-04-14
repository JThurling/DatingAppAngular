import { Component, OnInit } from '@angular/core';
import {AuthService} from "../_services/auth.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(public authService: AuthService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.model).subscribe(next => {
      this.toastr.success('Logged In Successfully')
    }, error => {
      this.toastr.error(error)
    });
  }

  loggedIn(){
    return this.authService.loggedIn();
  }

  logout(){
    localStorage.removeItem('token');
    this.toastr.info('Logged Out')
  }

}
