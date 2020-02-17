import fs from "fs"
import { bindNodeCallback } from "rxjs";

fs.readdir("./src-server", (err, items) => {
    if (err) console.error(err);
    else console.log(items);
});

const readdir$ = bindNodeCallback(fs.readdir);

console.log(typeof readdir$);