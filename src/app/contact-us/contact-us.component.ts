import { Component, OnInit } from '@angular/core';
import {UserProfileService} from '../user-profile/user-profile.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
 contactUs: any;

  constructor(private userProfileService: UserProfileService) { }

  ngOnInit() {
    this.getContactSubmission();
    this.itWorks();
  }
  itWorks(){
    console.log(this.contactUs);
  }
  getContactSubmission(){
    this.contactUs = {
      reason: '8 Mayfield Hill',
      city: 'Long Beach',
      first_name: 'Theresa',
      last_name: 'Fiddy',
      state: 'California',
      zipcode: '90831'
    };
  }

}
