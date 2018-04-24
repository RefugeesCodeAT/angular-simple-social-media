import { Component, OnInit } from '@angular/core';

import { DatashareService } from '../../services/datashare.service';

@Component({
  selector: 'app-postindetails',
  templateUrl: './postindetails.component.html',
  styleUrls: ['./postindetails.component.css']
})
export class PostindetailsComponent implements OnInit {

  constructor(private ds: DatashareService) { }

  ngOnInit() {
  }

}
