import { Subject, interval, BehaviorSubject } from "rxjs";
import { createSubscriber } from "./lib/util";
import { take, map } from "rxjs/operators";

// const simple$ = new Subject();

// simple$.subscribe(createSubscriber("simple$"));

// simple$.next("Hello")
// simple$.next("WORLD")
// simple$.complete();

// const interval$ = interval(1000).pipe(take(5));
// const intervalSubject$ = new Subject();
// interval$.subscribe(intervalSubject$);

// intervalSubject$.subscribe(createSubscriber("sub1"));
// intervalSubject$.subscribe(createSubscriber("sub2"));
// intervalSubject$.subscribe(createSubscriber("sub3"));

// setTimeout(() => {
//     intervalSubject$.subscribe(createSubscriber("Look at me!"));
// }, 3000)

const currentUser$ = new BehaviorSubject({ isLoggedIn: false });
const isLoggedIn$ = currentUser$.pipe(map(u => u.isLoggedIn));

currentUser$.next({ isLoggedIn: false });
isLoggedIn$.subscribe(createSubscriber("isLoggedIn"));

setTimeout(() => {
    currentUser$.next({ isLoggedIn: true, name: "juan" });
}, 3000)

setTimeout(() => {
    isLoggedIn$.subscribe(createSubscriber("delayed"));
}, 1500);