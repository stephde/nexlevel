let axios = require('axios')

const host = 'http://localhost:3000'
const path = '/routing/request'

function getNextCoordinate() {
    return {
        //ToDo: is this the right oder?
        latitude: 13.3636133,
        longitude: 52.485617
    }
}

function promisedTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    })
}

async function run() {
    const numOfRequest = 5
    const delayInMs = 100

    let promises = []
    for (let i = 0; i < numOfRequest; i++) {
        promises.push(axios.post(host + path, {
            params: {
                origin: getNextCoordinate(),
                destination: getNextCoordinate()
            }
        }))

        await promisedTimeout(delayInMs)
    }

    Promise.all(promises)
        .then(() => console.log("Sent " + numOfRequest + " requests to " + host + path))
        .catch(console.log)
}

run()