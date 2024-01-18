import { Component, OnInit } from '@angular/core';

// We use the NgNonBindable directive when we want to tell angular not to compile
// or bind a particular section of our page.
// The most common example is when we want to write some angular code on our page
//Ex: if we want to render the moustache syntax on our page . Ex: {{}}

@Component({
  selector: 'app-ng-non-bindable-example',
  templateUrl: './ng-non-bindable-example.component.html',
  styleUrls: ['./ng-non-bindable-example.component.css']
})
export class NgNonBindableExampleComponent implements OnInit {

  name :any;
  constructor() { }

  ngOnInit(): void {
  }

}
