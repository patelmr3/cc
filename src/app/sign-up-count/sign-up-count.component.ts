import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'sign-up-count',
  template: `
    <section class="sign-up-count-wrapper">
      <span class="sign-up-count-num">{{ totalEntries }}</span>
      <span class="sign-up-count-text"> people signed up</span>
    </section>
  `,
  styleUrls: ['sign-up-count.css']
})
export class SignUpCountComponent{
  totalEntries: Number;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    const url = 'http://ec2-13-59-135-248.us-east-2.compute.amazonaws.com:3000/entries';

    this.http.get(url).subscribe(
      res => {
        this.totalEntries = (JSON.parse(res.toString())).total_number_entries
      },
      err => {
        console.log(err);
      }
    );
  }

}