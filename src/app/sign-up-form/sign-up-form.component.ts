import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'sign-up-form',
  templateUrl: 'sign-up-form.html',
  styleUrls: ['sign-up-form.css']
})
export class SignUpFormComponent{
  signupFormGroup;
  applicantId: Number;
  signupSuccess: Boolean = false;
  signupBtnDisabled: Boolean;
  errorMessage: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.signupFormGroup = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      userEmail: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)
      ]))
    });
  }

  doSignUp(formData) {

    const url = 'http://ec2-13-59-135-248.us-east-2.compute.amazonaws.com:3000/entries';
    const body = {
      'applicant_name': formData.userName,
      'applicant_email': formData.userEmail
    }

    if(this.signupFormGroup._status === 'VALID') {
      this.http.post(url, body).subscribe( 
        res => {
          this.applicantId = JSON.parse(res.toString()).applicant_id;
          this.signupSuccess = true;
        },
        err => {
          this.errorMessage = (JSON.parse(err.error.toString())).message.substring(0,19);
          this.signupFormGroup.reset();
        }
      );
    }

  }

}