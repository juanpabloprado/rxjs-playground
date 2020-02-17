import { of, from, throwError } from "rxjs";
import { createSubscriber } from "./lib/util";
import { map } from "rxjs/operators";

of(["this is an array", "hey"]).subscribe(createSubscriber("of"))

const arr = [1, 2, 3, 4, 5]
from(arr).pipe(map(i => i * 5)).subscribe(createSubscriber("from"))

throwError(new Error("HEY")).subscribe(createSubscriber("error"))