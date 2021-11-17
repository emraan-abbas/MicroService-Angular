import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  added: any;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private toastr: ToastrService,
    private tokenStorage: TokenService
  ) {}

  ngOnInit(): void {}

  loginUser() {    
    if (this.loginForm.value.email && this.loginForm.value.password) {
      this.loginService.loginUserService(this.loginForm.value).subscribe(
        (res:any) => {
          console.log(this.loginForm.value);
          this.added = res;
          localStorage.setItem('token',res.token);
          
          localStorage.setItem('refresh_token',res.refreshToken);
          
          // Token Storage
          // this.tokenStorage.saveToken(res.accessToken);
          // // this.tokenStorage = JSON.parse(localStorage.getItem(token));
          // console.log(this.tokenStorage.saveToken(res.accessToken)); // FROM HERE TOKEN GET UNDEFINED
          // this.tokenStorage.saveRefreshToken(res.refreshToken);
          // this.tokenStorage.saveUser(res);
          // Token Storage

          this.router.navigate(['/dashboard']);
          this.toastr.success('Logged In Successfully !', 'Attention !');
        },
        (err) => {
          console.log('Error');
          console.log(err);
          this.toastr.warning('Unable to login !', 'Attention !');
        }
      );
    } else {
      this.toastr.warning('Fill the Fields !', 'Attention !');
    }
  }



}
