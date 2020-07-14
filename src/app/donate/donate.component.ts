import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  sum = '';
  details = '';
  emailAddress = '';
  ngOnInit() {
  }

  eventHandler(event: any) {
  this.sum = event.target.value;
  }

  detailsHandler(event: any) {
    this.details = event.target.value;
  }

  emailHandler(event: any) {
    this.emailAddress = event.target.value;
  }

  donate() {
    this.apiService.addDonation(this.sum, this.details, 44).subscribe();
  }

  sendMail() {
    console.log('works');
    this.apiService.sendMail(
      this.emailAddress, 'Donation', 'Thank you for donating' + this.sum + 'to our organisation.').subscribe();
  }

  submit() {
    this.donate();
    this.sendMail();
  }
}
