import { Observable } from "rxjs"
import { createSubscriber } from "./lib/util";

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

const take$ = (sourceObservable$, amount) => {
    return new Observable(observer => {
        let count = 0;
        const subscription = sourceObservable$.subscribe({
            next: item => {
                observer.next(item);
                if(++count >= amount)
                    observer.complete();
            },
            error: error => observer.error(error),
            complete: () => observer.complete
        });

        return () => subscription.unsubscribe();
    })
}

const everySecond$ = createInterval$(1000);
const firstFiveSeconds$ = take$(everySecond$, 5);
const subscription = firstFiveSeconds$.subscribe(createSubscriber("one"));
