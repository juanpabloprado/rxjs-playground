import { interval, timer } from "rxjs";
import { take } from "rxjs/operators";
import { createSubscriber } from "./lib/util";

interval(500)
    .pipe(take(5))
    .subscribe(createSubscriber("interval"));

timer(5000)
    .subscribe(createSubscriber("timer"))