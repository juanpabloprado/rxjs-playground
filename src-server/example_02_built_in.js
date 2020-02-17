import { of } from "rxjs";
import { createSubscriber } from "./lib/util";

of("HELLO, WORLD")
    .subscribe(createSubscriber("of"))