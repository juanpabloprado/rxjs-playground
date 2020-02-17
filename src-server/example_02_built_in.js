import { of, from } from "rxjs";
import { createSubscriber } from "./lib/util";

of(["this is an array", "hey"]).subscribe(createSubscriber("of"))

from([23, 10, 4]).subscribe(createSubscriber("from"))