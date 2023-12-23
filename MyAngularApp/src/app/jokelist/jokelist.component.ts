import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
 
@Component({
  selector: 'joke',
  template:  ` 
  <div class="card card-block">
    <h4 class="card-title"> {{ joke.setup }}</h4>
    <p class= "card-text" [hidden] = "joke.hide" > {{ joke.PunchLine }} </p>
    <button class= "btn btn-primary" (click)="joke.toggle()" > Tell Me! </button>
  </div>  
  `
})
export class JokeComponent{
  @Input('joke') joke!:Joke;   
}


@Component({
  selector: 'joke-list',
  template: `
  <joke-form (jokeCreated)="addJoke($event)"> </joke-form>
  <joke *ngFor="let j of jokes" [joke]="j"></joke>
  ` 
})
export class JokelistComponent implements OnInit {
  jokes!: Joke[];
  //jokes!: Array<Joke>;
  constructor() {
    this.jokes = [
                 new Joke("What did the cheese say when it looked in the mirror?", " Hello-me"),
                 new Joke("What kind of cheese do you use to disguise a small horse?", " Mask-a-pony"),
                 new Joke("A kid threw a lump of cheddar at me", "I though that's not very mature"),
                ];
   }

   addJoke(joke:Joke)
   {
    this.jokes.unshift(joke);
   }
  ngOnInit(): void {
  }
}

@Component({
  selector:"joke-form",
  template:
  `
    <div class="card card-block"> 
    <h4 class="card-title">Create Joke</h4>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Enter the Setup" #setup>
    </div>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Enter the PunchLine" #punchline>
    </div>
    <button type="button" class="btn btn-primary" (click)="createJoke(setup.value, punchline.value)" > Create   
    </button>
  </div>
  `
})
export class JokeFormComponent
{
  @Output()jokeCreated = new EventEmitter<Joke>();

  createJoke(setup: string, punchline: string)
  {
    this.jokeCreated.emit(new Joke(setup, punchline));
  }
}

class Joke
{
  setup!:string;
  PunchLine!:string;
  hide: boolean = true;

  constructor(setup:string, PunchLine: string)
  {
    this.setup = setup;
    this.PunchLine = PunchLine;
  }
  toggle():void
  {
    this.hide = !this.hide
  }
}
