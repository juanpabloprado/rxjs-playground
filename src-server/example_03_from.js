import fs from "fs"
import { bindNodeCallback, from } from "rxjs";
import { createSubscriber } from "./lib/util";
import { mergeMap, map } from "rxjs/operators";

const readdir$ = bindNodeCallback(fs.readdir);

readdir$("./src-server")
    .pipe(mergeMap(files => from(files)))
    .pipe(map(file => `MANIPULATED ${file}`))
    .subscribe(createSubscriber("readdir"))

const getItem = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("HELLO");
        }, 1000);
    });
};

from(getItem()).subscribe(createSubscriber("promise"));