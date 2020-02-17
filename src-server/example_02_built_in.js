import { of } from "rxjs";
import { createSubscriber } from "./lib/util";

of("HELLO, WORLD", 42, "whoa")
    .subscribe(createSubscriber("of"))