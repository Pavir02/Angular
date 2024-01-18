import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-example',
  templateUrl: './ng-for-example.component.html',
  styleUrls: ['./ng-for-example.component.css']
})
export class NgForExampleComponent implements OnInit {

  people:any[]= [
    {
      "name" : "Joe Root",
      "age" : 35,
      "country" : "US"
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

  @Component({
    selector: 'app-ng-for-grouped-example',
    template: `
    <h4>NgFor(Grouped)</h4>
    <ul>
        <li *ngFor="let group of peopleByCountry">
                {{group.Country}}
              <ul>
                  <li *ngFor="let person of group.people">
                        {{person.name}}
                  </li>
              </ul>
        </li>
    </ul>
    `,
    styleUrls: ['./ng-for-example.component.css']
  })
  export class NgForGroupedExampleComponent 
  {
    peopleByCountry: any[] = [
    {
      "Country": "UK",
      "people": [
        {"name": "Dean Jones"},
        {"name": "Steve Smith" },
      ]     
    },    
    {
      "Country": "SA",
      "people": [
        { "name": "Graeme Smith" },
        { "name": "Kyle  Mayers" },
      ]
    }
  ];
  constructor() { }
  }


