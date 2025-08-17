const fakeRequest = (url) => {
    new Promise((resolve, reject) => {
        const rand = Math.random()
        setTimeout(() => {
            if (rand < 0.7) {
                resolve('Your fake data here');
            }
            reject('Request Error');
        }, 1000);
    })
}

fakeRequest('/dogs/1')
    .then(() => {
        console.log("done with request")
    })