import { Component, OnInit } from '@angular/core';
import { SearchEngineService } from '../search-service/search-engine.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  accountDetails: any;
  accountRepos: any;
  username!: string;

  constructor(private searchEngine: SearchEngineService) { }

  ngOnInit(): void {
  }

  findAccountInfo() {
    this.searchEngine.updateUsername(this.username);
    this.searchEngine.userDetails(this.username).subscribe(details => {
      this.accountDetails = details;
    });
    this.searchEngine.repoDetails().subscribe(repos => {
      this.accountRepos = repos;
    });
  }
}
