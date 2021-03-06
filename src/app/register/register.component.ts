import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from "../_services/auth.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();

  model: any = {};

  constructor(private authService: AuthService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  register(){
    this.authService.register(this.model).subscribe(() =>{
      this.toastr.success('Registration Successful');
    }, error => {
      this.toastr.error(error);
    });
  }

  cancel(){
    this.cancelRegister.emit(false);
    this.toastr.info('Cancelled');
  }

}
