const promise = new Promise((resolve, reject) => {
    console.log("IN PROMISE");
    resolve("hey");
});

promise.then(console.log);