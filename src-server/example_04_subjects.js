import { Subject, interval } from "rxjs";
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

const currentUser$ = new Subject();
const isLoggedIn$ = currentUser$.pipe(map(u => u.isLoggedIn));

isLoggedIn$.subscribe(createSubscriber("isLoggedIn"));

currentUser$.next({ isLoggedIn: false });
setTimeout(() => {
    currentUser$.next({ isLoggedIn: true, name: "juan" });
}, 2000)