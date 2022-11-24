import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required, Validators.minLength(6),Validators.maxLength(40)])

    
  });

  get f(){
    return this.registerForm.controls;
   }
  
   onSubmit(){
    console.log(this.registerForm.value);
   }
  }

  
