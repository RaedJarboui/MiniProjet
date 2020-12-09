import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;
  errorMessage: string;
  Email;
  Pwd;
  fieldTextType: boolean;
  

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) { 

    }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.signInForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required,Validators.pattern('[a-zA-Z0-9]{8,}')]]
     

    });

  }
  get email() {
    return this.signInForm.get('email');
  }
  get password() {
    return this.signInForm.get('password');
  }
  toggleFieldTextType(){
    this.fieldTextType = !this.fieldTextType;
  }


  Submit(){
this.Email = this.signInForm.value['email'];
this.Pwd = this.signInForm.value['password']
this.authService.signInUser(this.Email,this.Pwd).then(
  () => {
    this.router.navigate(['/books']);
  },
  (error) =>{
    this.errorMessage = error;
  }
);

  }

}
