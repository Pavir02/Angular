import { Component, 
  EventEmitter, 
  Input, 
  OnInit, 
  AfterViewInit,
  Output,
  ViewEncapsulation,
  ViewChild, 
  ViewChildren,
  QueryList,
  ElementRef,
  ContentChildren,
  ContentChild,
  AfterContentInit,
  Directive,
  Renderer2,
  HostListener,
  HostBinding} from '@angular/core';
 
@Directive({
  selector:"[ccCardHover]"
})
export class CardHoverDirective
{
  //we can use this config object in the below query selector, to make it re-usable.
  //Also, the reason we use config object, is that we can add further config parameters 
  @Input('ccCardHover') config = {
    // querySelector: '.card-text'   
    //instead of hard-coding like above, we can declare it as general string and configure 
    //it directly on the host element
    querySelector: 'string'  
  }

  constructor(private el: ElementRef, private renderer: Renderer2) 
  { 
    //el.nativeElement.style.backgroundColor = 'gray'; 
    //The above syntax assumes that our application will always be running in the environment of a browwser
    //i.e always be running with DOM. But angular supports to run in multiple different envts - 
    // including server-side, node etc.

    //To support in all the environments, we can use below syntax. i.e platform independent way via
    //Renderer2
    //renderer.setStyle(el.nativeElement, 'backgroundColor', 'gray');
  }
  


  @HostListener('mouseover') onMouseOver()
  {
    //let punchlineEl = this.el.nativeElement.querySelector('.card-text');

    //pass the class of the punchline element into the queryselector using the config object 
    //instead of sending hard-coded name like above
    let punchlineEl = this.el.nativeElement.querySelector(this.config.querySelector);
    this.renderer.setStyle(punchlineEl, 'display', 'block');
    this.isHovering = true;
  }

  @HostListener('mouseout') onMouseOut() {
    //pass the class of the punchline element into the queryselector
    let punchlineEl = this.el.nativeElement.querySelector(this.config.querySelector);
    this.renderer.setStyle(punchlineEl, 'display', 'none');
    this.isHovering = false;
  }

  //As well as listening to output events from the host element using HostListener decorator,
  //a directive can also bind to input properties on the host element with HostBinding decorator

  //using the HostBinding decorator, a directive can link the internal properties of the directive to
  //input properties of the host element

  //So, if the internal property on the directive changes, the input property on the host element will
  //also change.
  //We pass the name of the property on the host element that we want to change/bind to, as the parameter
  //to HostBinding()
  //ex: Here, we are changing the card-outline-primary, it sets this class if isHovering is true
  @HostBinding('class.card-outline-primary') private isHovering: boolean = false;
}


@Component({
  selector: 'joke',
  template:  ` 

  <!-- We can add our own configurable object like below where we are using 'p' tag as the queryselector -->
  
  <!-- <div class="card card-block" ccCardHover [config]="{querySelector:'p'}"> -->

   <!-- Instead of having a seperate config input like above, we can input directly into our directive name itself [ccCardHover]
		by passing the direcive name 'ccCardHover' as alias to the input decorator of config. -->
    
  <!-- So, now we can use and configure our directive in one statement. -->
    <div class="card card-block" [ccCardHover]="{querySelector:'p'}">
    <h4 class="card-title"> 
       <!-- content projected from jokelist component -->
       <ng-content select=".setup"></ng-content>  <!-- {{ joke.setup }} -->
    </h4>
    <!-- <p class= "card-text" [hidden] = "joke.hide" >  -->     
    <!-- <p class="card-text" *ngIf = "!joke.hide"> -->
    <p class="card-text" [style.display] = "'none'">      
     <!-- content projected from jokelist component-->
      <ng-content select=".punchline"></ng-content>    <!--  joke.PunchLine -->
    </p>
    <!-- <button class= "btn btn-primary" (click)="joke.toggle()"> Tell Me! </button> -->
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
  <h4 #header> View Jokes</h4>
  <joke *ngFor="let j of jokes" [joke]="j">
  <!-- content projection -->  
    <span class="setup"> {{j.setup}}? </span>
    <p class="punchline"> {{ j.PunchLine }}  </p>    
  </joke>
  
  <h4> Content Jokes</h4>
  <!-- projected from the parent component -->
  <ng-content></ng-content> 
  `  
})
export class JokelistComponent implements OnInit, AfterViewInit, AfterContentInit {
  
  // -------- ViewChild / ViewChildren : the children that are present in it's template view.
  // we can add reference to / bind the view child using a property jokelistViewChild like below whose type is JokeComponent.
  // We prepend this property with the decorator @ViewChild which tells angular how to find this child component (viewchild or contentchild)

  // The first parameter we pass to this decorator says the type of the component we want to search for, if it finds more than one
  // it gives us the first one it finds.
  @ViewChild(JokeComponent) jokelistViewChild: JokeComponent | undefined;

  //If we have mutiple view childs, we can use @ViewChildren like below
  @ViewChildren(JokeComponent) jokelistViewChildren!: QueryList<JokeComponent>;
  // This matches all the JokeComponents it can find in the view of this component and stores them in a QueryList called jokelistViewChildren
  // QueryList is just a type of list in angular, if we want to interact with our list as array, we can use toarray function

// One practical application of viewchild decorator is to get access to the template local variables in our component.
// We can pass the name of the template local variable as the first parameter to the viewchild decorator and store the 
// reference of this variable on our component

// The parameter "header" is the template local variable of h4 in our template
// This gives the reference of our element h4 wich can be accessed in ngAfterViewInit function
  @ViewChild("header")  headerEl!: ElementRef;


  // -------- ContentChild / ContentChildren of a given component are the elements that are projected into the component
  // form it's parent component. To get reference to this child, we can use either ContentChild or ContentChildren decorator.
  // It's similar to ViewChild and ViewChildren, ContentChild return one child and ContentChildren will return QueryList.

  @ContentChild(JokeComponent)  jokelistContentChild!: JokeComponent;
  @ContentChildren(JokeComponent) jokelistContentChildren !: QueryList<JokeComponent>;

  jokes!: Joke[];
  //jokes!: Array<Joke>;
 
  
  constructor() {
    this.jokes = [
                 new Joke("What did the cheese say when it looked in the mirror?", " Hello-me"),
                 new Joke("What kind of cheese do you use to disguise a small horse?", " Mask-a-pony")                 
                ];

    // This prints undefined, because in the constructor the children will not be rendered yet.
    console.log(this.jokelistViewChild); 
    // We render in a tree down approach, when the parent component is getting constructed, the children are not yet created
    // We can however hook into lifecycle of the component at the point the view children have been created - ngAfterViewInit hook
   }


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // this prints the view child, coz the view children will be initilaized and rendered after this event
    console.log("ngAfterViewInit - ViewChild");
    console.log(this.jokelistViewChild); 

    //So, if we want to interact with viewchild reference in our component, we need to do it in ngAfterViewInit() function
    console.log("ngAfterViewInit - ViewChildren");

    let jokeComponents = this.jokelistViewChildren.toArray();
      console.log(jokeComponents);
      //Here we can see only two joke components printed on the console though there are three printed in our view,
      //because, only two of the jokes are view children, the other joke is the content child
      
    console.log("ngAfterViewInit - headerEl is " + this.headerEl.nativeElement.innerText);
    //We can change the content of the element as well
    //this.headerEl.nativeElement gives access to the raw dom element
    this.headerEl.nativeElement.textContent = "Best Joke Machine!";
    console.log(this.headerEl.nativeElement.innerText);
  }

  ngAfterContentInit(): void {
    // This prints the content child, coz the content children will be initilaized and rendered after this event/lifecycle hook has run
    console.log("ngAfterContentInit - Content Child");
    console.log( this.jokelistContentChild);
  }


  addJoke(joke:Joke)
   {
    this.jokes.unshift(joke);
   }
  
}

@Component({
  selector:"joke-form",
  templateUrl: 'jokeform.component.html',
  styleUrls: ['jokeform.component.css' ],
  // encapsulation : ViewEncapsulation.Emulated
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
