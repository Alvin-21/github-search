import { Component, Input, OnInit } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  @Input() accountDetails!: SearchBarComponent;
  
  constructor() { }

  ngOnInit(): void {
  }

}
