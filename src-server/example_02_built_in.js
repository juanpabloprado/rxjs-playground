import { of, from, throwError, empty, defer } from "rxjs";
import { createSubscriber } from "./lib/util";

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