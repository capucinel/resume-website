import { Component, OnInit } from '@angular/core';
import { homeInfos } from '../../assets/data/home.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
data = homeInfos;

  constructor() { }

  ngOnInit() {
  }

}
