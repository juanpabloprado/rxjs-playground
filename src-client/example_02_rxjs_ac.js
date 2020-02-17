import $ from "jquery";
// import the fromEvent operator
import { fromEvent } from 'rxjs';
import { map, distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';

const $title = $("#title");
const $results = $("#results");

const keyUps$ = fromEvent($title, "keyup");
const queries$ = keyUps$
    .pipe(map(e => e.target.value))
    .pipe(distinctUntilChanged())
    .pipe(debounceTime(250))
    .pipe(switchMap(getItems)); // flatMapLatest

queries$.subscribe(items => {
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
        }, 500 + (Math.random() * 5000));
    });
}