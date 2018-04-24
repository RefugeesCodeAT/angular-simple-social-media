import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-allposts',
  templateUrl: './allposts.component.html',
  styleUrls: ['./allposts.component.css']
})
export class AllpostsComponent implements OnInit {

  respond: Array<any>;
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.makeRequest("posts", "Get").subscribe( (res: any) => {
      this.respond = res;
    },
    (error: any) => {
      console.log(error);
    });
  }

}
