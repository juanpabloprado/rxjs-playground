import { of, from, throwError, empty } from "rxjs";
import { createSubscriber } from "./lib/util";

of(["this is an array", "hey"]).subscribe(createSubscriber("of"))

from([new Error("HEY")]).subscribe(createSubscriber("from"))

throwError(214435).subscribe(createSubscriber("error"))

empty().subscribe(createSubscriber("empty"))