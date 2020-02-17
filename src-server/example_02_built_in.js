import { of, from, throwError, empty, defer, NEVER, range, interval, timer } from "rxjs";
import { createSubscriber } from "./lib/util";
import { take } from "rxjs/operators";

interval(500)
    .pipe(take(5))
    .subscribe(createSubscriber("interval"));

timer(1000, 500)
    .pipe(take(3))
    .subscribe(createSubscriber("timer"));
    
of(["this is an array", "hey"]).subscribe(createSubscriber("of"))

from([new Error("HEY")]).subscribe(createSubscriber("from"))

throwError(214435).subscribe(createSubscriber("error"))

empty().subscribe(createSubscriber("empty"))

let sideEffect = 0;
const defer$ = defer(() => {
    sideEffect++;
    return of(sideEffect);
});

defer$.subscribe(createSubscriber("defer$.one"));
defer$.subscribe(createSubscriber("defer$.two"));
defer$.subscribe(createSubscriber("defer$.three"));

NEVER.subscribe(createSubscriber("never"));

range(10, 30).subscribe(createSubscriber("range"));