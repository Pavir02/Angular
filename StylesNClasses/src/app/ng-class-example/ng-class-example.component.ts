import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-example',
  templateUrl: './ng-class-example.component.html',
  styleUrls: ['./ng-class-example.component.css']
})
export class NgClassExampleComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
