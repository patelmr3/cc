import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'status-box',
  templateUrl: 'status-box.html',
  styleUrls: ['status-box.css']
})
export class StatusBoxComponent{

  statusForm;
  statusFormCollapsed: Boolean = true;
  errorMessage: Boolean = false;
  statusType: Number;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.statusForm = new FormGroup({
      verificationNum: new FormControl('',
        Validators.compose([
          Validators.required,
          Validators.pattern(/\d+/g)
        ])
      )
    });
  }

  checkStatus(formData) {
    const applicant_id = formData.verificationNum;
    const url = 'http://ec2-13-59-135-248.us-east-2.compute.amazonaws.com:3000/status/' + applicant_id;

    this.http.get(url).subscribe( 
      res => {
        console.log(res);
        this.statusType = (res['status'] === 'Won') ? 1 : 2;
      },
      err => {
        this.errorMessage = true;
        this.statusForm.reset();
      }
    );
  }

  useDifferentId() {
    this.errorMessage = false;
    this.statusType = null;
    this.statusForm.reset();
  }

}