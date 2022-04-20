import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewEncapsulation } from '@angular/core';

export interface USERS {
  users: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HomePage {
  public uusers: USERS;
  public col: any;
  public rows: any;

  constructor(
    private httpClient: HttpClient
  ) {
    this.col = [
      { name: 'Name' },
      { name: 'Username' },
      { name: 'email' }
    ];

    this.httpClient.get<USERS>('../../assets/users.json')
      .subscribe((response) => {
        console.log(response)
        this.rows = response.users;
      });
  }
}
