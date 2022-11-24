import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  
 loginForm = new FormGroup({

  email: new FormControl('',[Validators.required, Validators.email]),
  password: new FormControl('',[Validators.required, Validators.minLength(6),Validators.maxLength(40)])
 });

 get f(){
  return this.loginForm.controls;
 }

 onSubmit(){
  console.log(this.loginForm.value);
 }
}






