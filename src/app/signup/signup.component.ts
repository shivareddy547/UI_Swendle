import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/user';

import {
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';


declare var $: any;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{

 // constructor(private auth: AuthService) {}

    constructor(private router: Router, private auth: AuthService) {}

  swendle: FormGroup;
  username: FormControl;
  email: FormControl;
  password1: FormControl;
  password2: FormControl;


  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.username = new FormControl('', Validators.required);

    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
     this.password1 = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.password2 = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
  }

  createForm() {
    this.swendle = new FormGroup({
        username: this.username,
      email: this.email,
      password1: this.password1,
      password2: this.password2
    });
  }
  onSubmit(){
  console.log(this.swendle.value);
   this.auth.register(this.swendle.value)
    .then((user) => {
      console.log(user.json());
           this.router.navigateByUrl('/login');
    })
    .catch((err) => {
      console.log(err);
    });
  
  }
}
