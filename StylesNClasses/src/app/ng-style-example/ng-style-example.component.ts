import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-example',
  templateUrl: './ng-style-example.component.html',
  styleUrls: ['./ng-style-example.component.css']
})
export class NgStyleExampleComponent implements OnInit {

  people: any[] = [
    {
      "name": "Joe Root",
      "age": 35,
      "country": "US"
    },
    {
      "name": "James Smith",
      "age": 32,
      "country": "UK"
    },
    {
      "name": "Day Meyers",
      "age": 21,
      "country": "CAN"
    },
    {
      "name": "Chris Gayle",
      "age": 41,
      "country": "WI"
    }
  ]; 

  getColor(country:string)
  {
    switch(country)
    {
      case 'UK' : return 'turquoise';
      case 'US' : return 'violet' ;
      default : return 'gray';
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
