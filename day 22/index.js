const aPromise = current => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (current)
                resolve();
            else
                reject();

        }, 3000);
    }
    )
}

aPromise(false).then(() => {
    console.log("Promise run successfully.");
}).catch(() => {
    console.log("Something went wrong.");
})

aPromise(true).then(res => {
    return res + ". ha ha ha."
}).then(setTimeout(res => {
    return res + " ho ho ho"
}, 1000)).then(res => {
    setTimeout(() => {
        console.log(res);
    }, 2000)
})

console.log("Hello, World!");