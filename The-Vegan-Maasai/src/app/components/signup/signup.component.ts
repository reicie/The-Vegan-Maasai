import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: any = {
    firsname: null, 
    lastname: null, 
    email: null, 
    username: null, 
    password: null
  };

  isSuccessfulSignUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit():void {
     const{firstname, lastname, email, username, password} = this.form
     this.authService.register(firstname, lastname, email, username, password).subscribe({
       next: () => {
         this.isSuccessfulSignUp = true
         this.isSignUpFailed = false
        }, 
        error: (err: { error: { message: string; } }) => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true
        }
     })
  }

}
