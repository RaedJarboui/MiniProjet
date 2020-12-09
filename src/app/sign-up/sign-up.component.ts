import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
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
  }
  initForm(){
 
  }
 
  Submit(f: NgForm){
this.Email = f.value['email'];
this.Pwd = f.value['password']
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
