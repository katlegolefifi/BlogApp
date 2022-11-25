import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required, Validators.minLength(6),Validators.maxLength(40)])

    
  });

  constructor(private userService: UserService){}
  
  get f(){
    return this.registerForm.controls;
   }
   
   
  
   onSubmit(){
    console.log(this.registerForm.value);

    this.userService.createUser(this.registerForm.value).subscribe((next:any)=>{
      console.log('user added');
      
    })

    

   }
  }

  
