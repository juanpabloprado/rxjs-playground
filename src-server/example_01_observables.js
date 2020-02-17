import { Observable } from "rxjs"
import { take } from 'rxjs/operators';

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
        let interval = setInterval(() => {
            console.log(`Generating ${i}`);
            observer.next(i++);
        }, time);

        return () => { clearInterval(interval); }
    });
}

const everySecond$ = createInterval$(1000);
const subscription = everySecond$.pipe(take(3)).subscribe(createSubscriber("one"));
