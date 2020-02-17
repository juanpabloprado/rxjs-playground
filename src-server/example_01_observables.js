import { Observable } from "rxjs"

const createSubscriber = tag => {
    return {
        next: item => console.log(`${tag}.next ${item}`),
        error: error => console.log(`${tag}.error ${error.stack || error}`),
        complete: () => console.log(`${tag}.complete`)
    };
}

const createInterval$ = time => {
    return new Observable(observer => {
        let i = 0;
        setInterval(() => {
            observer.next(i++);
        }, time)
    });
}

const everySecond$ = createInterval$(1000);
everySecond$.subscribe(createSubscriber("one"))