import { Component, OnInit } from '@angular/core';
import {UserProfileService} from './user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  myUser: any;

  constructor(private userProfileService: UserProfileService) { }

  ngOnInit() {
    this.getUserFromObserv();
    this.displayUser();
  }
    displayUser() {
    console.log(this.myUser);
  }
  getUserFromObserv() {
    // this.userProfileService.getUser().subscribe( response => {
    //   this.myUser = response;
    //   console.log(this.myUser);
    // });
    this.myUser = {
      address: '8 Mayfield Hill',
      city: 'Long Beach',
      first_name: 'Theresa',
      last_name: 'Fiddy',
      state: 'California',
      zipcode: '90831'
    };
  }
}
