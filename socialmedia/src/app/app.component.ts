import { Component } from '@angular/core';

import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  postsResponse: any;
  constructor(private httpService: HttpService) {

  }
  getAllPosts() {
    this.httpService.makeRequest('posts', 'Get').subscribe(
      (res: any) => {
        this.postsResponse = res;
      },
      (error: any) => {
        console.log(error);
    });
  }
}
