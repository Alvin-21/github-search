import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchEngineService {

  private username!: string;
  private apiKey = environment.apikey;

  constructor(private http: HttpClient) { }

  userDetails(username: string) {
    return this.http.get("https://api.github.com/users/" + username + "?access_token=" + this.apiKey);
  }

  updateAccount(username: string) {
    this.username = username;
  }

  repoDetails(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos" + "?access_token=" + this.apiKey);
  }
}
