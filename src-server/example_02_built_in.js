import { timer } from "rxjs";
import { take } from "rxjs/operators";
import { createSubscriber } from "./lib/util";

timer(5000, 500)
    .pipe(take(3))
    .subscribe(createSubscriber("timer"))