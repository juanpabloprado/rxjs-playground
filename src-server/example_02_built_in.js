import { of, from } from "rxjs";
import { createSubscriber } from "./lib/util";

of(["this is an array", "hey"]).subscribe(createSubscriber("of"))

from([1, 32, 42, "HEY"]).subscribe(createSubscriber("from"))
