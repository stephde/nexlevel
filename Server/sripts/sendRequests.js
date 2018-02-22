let axios = require('axios')

const host = 'http://localhost:3000'
const remoteHost = 'https://nexlevel-server.herokuapp.com'
const path = '/routing/request'

const lat = {
    min: 13.307820,
    max: 13.456875
}
const latBase = 307820
const latDiff = 150000
const long = {
    min: 52.485143,
    max: 52.541209
}
const longBase = 485143
const longDiff = 60000


function getNextCoordinate() {

    const latNachkomma = latBase + Math.floor((Math.random() * latDiff))
    const longNachkomma = longBase + Math.floor((Math.random() * longDiff))

    //ToDo: get max and min coordinates for berlin and randomize
    return {
        //ToDo: is this the right oder?
        longitude: parseFloat("13." + latNachkomma.toString()),
        latitude: parseFloat("52." + longNachkomma.toString())
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
        promises.push(axios.post(remoteHost + path, {
            params: {
                origin: getNextCoordinate(),
                destination: getNextCoordinate()
            }
        }))

        await promisedTimeout(delayInMs)
    }

    Promise.all(promises)
        .then(() => console.log("Sent " + numOfRequest + " requests to " + remoteHost + path))
        .catch(console.log)
}

run()