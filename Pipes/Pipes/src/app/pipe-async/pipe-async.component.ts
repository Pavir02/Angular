import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval, map, take} from 'rxjs';


@Component({
  selector: 'app-pipe-async',
  template: `
   <div class="card card-block">
      <h4 class="card-title">AsyncPipe</h4>
      <div class="card-text">
        <p>{{promise | async}} </p>
        <!-- <p>{{promiseData}} </p> -->
        <p>{{observable | async}} </p>
        <!-- <p>{{observableData}} </p> -->
      </div>
    </div>
  `
})
export class PipeAsyncComponent implements OnInit, OnDestroy {
  // promiseData!: string;
  promise! : Promise<string>;
  // observableData !: number;
  // subscription!: Subscription ;
  observable! : Observable<number>;

  constructor() {
    // this.getPromise().then(v => this.promiseData = v);
    this.promise = this.getPromise();

    //this.subscribeObservable();
    this.observable = this.getObservable();
  }
 

  getPromise(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Promise complete!"), 3000);
    });
  }
  
  // subscribeObservable()
  // {
  //   this.subscription = this.getObservable().subscribe(v => this.observableData = v );    
  // }

  getObservable() : Observable<number>{
    return interval(1000).pipe(
              take(10),
              map((v: number) =>v*v)
          );    
  }

  //Earlier syntax not supported in rxjs 6+
  // getObservable(): Observable<number> {
  //   return Observable
  //         .interval(1000)
  //         .take(10)
  //         .map((v: number) => v * v);    
  // }

  ngOnInit(): void {
  }
  
  ngOnDestroy(): void {
    //this.subscription.unsubscribe();
  }
}
