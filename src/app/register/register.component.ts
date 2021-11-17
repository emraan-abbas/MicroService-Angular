import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerationForm = new FormGroup({
    firstName: new FormControl('',[Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('',[Validators.required, Validators.minLength(3)]),
    email: new FormControl('',[Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
    // , Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
  })


  constructor( private registerService: RegisterService, private toastr: ToastrService ) { }

  ngOnInit(): void {
  }

  registerUser(){
    this.registerService.registerUserService(this.registerationForm.value).subscribe(res=>{
      console.log("Register User Success !")
      console.log(res)
      this.toastr.success('Registered Successfully !', 'Attention !');
    },err=>{
      console.log("Register User Error !")
      console.log(err)
    })
  };

}
