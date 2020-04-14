import {Component, OnInit} from '@angular/core';
import {AuthService} from "./_services/auth.service";
import {Local} from "protractor/built/driverProviders";
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  jwtHelper = new JwtHelperService();

  constructor(private auth:AuthService) {
  }

  ngOnInit(){
    const token = localStorage.getItem('token');
    if (token){
      this.auth.decodedToken = this.jwtHelper.decodeToken(token);
    }
  }
}
