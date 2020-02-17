import fs from "fs"
import { bindNodeCallback, from } from "rxjs";
import { createSubscriber } from "./lib/util";
import { mergeMap, map } from "rxjs/operators";

const readdir$ = bindNodeCallback(fs.readdir);

readdir$("./src-server")
    .pipe(mergeMap(files => from(files)))
    .pipe(map(file => `MANIPULATED ${file}`))
    .subscribe(createSubscriber("readdir"))