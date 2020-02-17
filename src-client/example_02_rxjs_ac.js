import $ from "jquery";
// import the fromEvent operator
import { fromEvent } from 'rxjs';
import { map, distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';

const $title = $("#title");
const $results = $("#results");

fromEvent($title, "keyup")
    .pipe(map(e => e.target.value))
    .pipe(distinctUntilChanged())
    .pipe(debounceTime(500))
    .pipe(switchMap(getItems))
    .subscribe(items => {
        $results.empty();
        $results.append(items.map(r => $(`<li />`).text(r)));
    });

// -----------------
// Library
function getItems(title) {
    console.log(`Querying ${title}`);
    return new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve([title, "Item 2", `Another ${Math.random()}`]);
        }, 500 + (Math.random() * 2000));
    });
}