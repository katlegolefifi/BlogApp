import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';


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

 constructor(private userService: UserService){}

 ngOnInit(): void {
}


 get f(){
  return this.loginForm.controls;
 }

 onSubmit(){
  console.log(this.loginForm.value);
  this.userService.login(this.loginForm.value).subscribe((next:any)=>{
    console.log('user added');
    
  })
 }
}






