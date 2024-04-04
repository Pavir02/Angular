let obs = Rx.Observable
            .interval(1000); 

//interval publishes a number which increments by 1 to it's output stream every second.
//The time we pass as the parameter to interval in milliseconds is the time interval it
//takes to publish every number

//So in rxjs, operators act on an observable and return another observable
//with the operator applied. So we can chain operators together creating an
//observable chain.


/*
Ex:
let obs = Rx.Observable
            .interval(1000)
            .operator2()
            .operator3()
            .operator4();


Each of these operators will be acting to the data the previous operator
emits on it's stream, the next operator subscribes to that stream,
performs some processing emits something onto another stream, then the next operator 
subscribes to that stream and so on.

observables are cold by default, they won't push any values by itself.
They become hot and start pushing value to it's stream only when somebody subscribes to it
                    |.
                    |.
                    |.
                    |6
                    |5
                    |4
                    |3
                    |2
                    |1
      interval      |0
Rx ---------------->|


subscribe function also lets us pass a callback function, so that we can react
when anything is pushed onto the final stream in the observable chain
*/

obs.subscribe( value => console.log(`Subscriber: ${value}`));

//The above observable keeps on printing the numbers forever
//To print only first three, we can use the take operator
//We pass to the take operator, the no. of items we want to take from it's 
//input stream, and pushes only 3 items to it's output stream

let obs2 = Rx.Observable
    .interval(1000)
    .take(3);

obs2.subscribe(value => console.log(`Subscriber2: ${value}`));


/*
                    |.
                    |.
                    |.
                    | 6
                    | 5
                    | 4
                    | 3
                    | 2                      |2
                    | 1                      |1
        interval    | 0         take(3)      |0
Rx----------------->|------------------------>              

*/



let obs3 = Rx.Observable
    .interval(1000)
    .take(3)
    .map(v=> Date.now())

obs3.subscribe(value => console.log(`Subscriber3: ${value}`));



/*
                    |.
                    |.
                    |.
                    | 6
                    | 5
                    | 4
                    | 3
                    | 2                      |2                          |...236
                    | 1                      |1                          |...235
    interval(1000)  | 0         take(3)      |0     map(v=> Date.now())  |...234
Rx----------------->|------------------------> -------------------------->              

*/