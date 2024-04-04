import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-builtins',
  templateUrl: './pipe-builtins.component.html',
  styleUrls: ['./pipe-builtins.component.css']
})
export class PipeBuiltinsComponent implements OnInit {


  dateVal : Date = new Date();
  jsonVal: Object = {moo: 'foo',  goo: {too: 'new'}};
  constructor() { }

  ngOnInit(): void {
  }

}
