import { Observable } from 'rxjs';

const simple$ = new Observable(observer => {
    console.log("Generating observable");
    setTimeout(() => {
        observer.next("An item!");
        setTimeout(() => {
            observer.next("Another item!");
            observer.complete();
        }, 1000);
    }, 1000);
});

const error$ = new Observable(observer => {
    observer.error(new Error("STUFF"));
});

error$.subscribe(
    item => console.log(`one.next ${item}`),
    error => console.log(`one.error ${error.stack}`),
    () => console.log("one.complete")
);

setTimeout(() => {
    simple$.subscribe({
        next: item => console.log(`two.next ${item}`),
        error: error => console.log(`two.error ${error}`),
        complete: () => console.log("two.complete")
    })
}, 3000);