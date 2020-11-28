import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  errorMessage: string;
  Email;
  Pwd;
  

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) { 

    }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.signUpForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required,Validators.pattern('[a-zA-Z0-9]{8,}')]]
     

    });
  }
  get email() {
    return this.signUpForm.get('email');
  }
  get password() {
    return this.signUpForm.get('password');
  }
  Submit(){
this.Email = this.signUpForm.value['email'];
this.Pwd = this.signUpForm.value['password']
this.authService.createNewUser(this.Email,this.Pwd).then(
  () => {
    this.router.navigate(['/books']);
  },
  (error) =>{
    this.errorMessage = error;
  }
);

  }

}
