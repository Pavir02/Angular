import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyAngularApp';
  joke = new Joke("A kid threw a lump of cheddar at me", "I thought that's not very mature");
}


class Joke {
  setup!: string;
  PunchLine!: string;
  hide: boolean = true;

  constructor(setup: string, PunchLine: string) {
    this.setup = setup;
    this.PunchLine = PunchLine;
  }
  toggle(): void {
    this.hide = !this.hide
  }
}
