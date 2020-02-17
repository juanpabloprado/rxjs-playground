import { of, from, throwError } from "rxjs";
import { createSubscriber } from "./lib/util";
import { map } from "rxjs/operators";

of(["this is an array", "hey"]).subscribe(createSubscriber("of"))


from([new Error("HEY")]).subscribe(createSubscriber("from"))

throwError(214435).subscribe(createSubscriber("error"))