let axios = require("axios");

const host = "http://localhost:3000";
const remoteHost = "https://nexlevel-server.herokuapp.com";
const remoteGlitch = "https://inquisitive-witness.glitch.me";
const path = "/routing/mockdynamic";

const lat = {
  min: 13.30782,
  max: 13.456875
};
const latBase = 307820;
const latDiff = 150000;
const long = {
  min: 52.485143,
  max: 52.541209
};
const longBase = 485143;
const longDiff = 60000;

let MultivariateNormal = require("multivariate-normal").default;
const meanVector = [[ 52.53444233,  13.50441863],
    [ 52.47266661,  13.38355267],
    [ 52.47990096,  13.56537612],
    [ 52.53525998,  13.32920952],
    [ 52.52059069,  13.442389  ]]

const covarianceMatrix = [[[ 0.00297764,  0.00057332],
    [ 0.00057332,  0.00171908]],

    [[ 0.0007809 ,  0.00044683],
        [ 0.00044683,  0.00117616]],

    [[ 0.00029638,  0.00043767],
        [ 0.00043767,  0.00127501]],

    [[ 0.00110491,  0.00121153],
        [ 0.00121153,  0.00355132]],

    [[ 0.00063009, -0.00011077],
        [-0.00011077,  0.00091973]]];

const weights = [ 0.09415236,  0.21658325,  0.09421823,  0.35455751,  0.24048865]
const dist = meanVector.map((mean, i) => MultivariateNormal(mean, covarianceMatrix[i]))


function genCoord() {
    let chooseNormal = Math.random()
    let i = 0
    weights.forEach((v,j) => {
        chooseNormal -= v
        if (chooseNormal < 0) {
            i = j
        }
    })
    let coords = dist[i].sample()
    return "[" + coords.toString() + "]";
}


function getNextCoordinate() {
  const latNachkomma = latBase + Math.floor(Math.random() * latDiff);
  const longNachkomma = longBase + Math.floor(Math.random() * longDiff);

  //ToDo: get max and min coordinates for berlin and randomize
  coords = [
    parseFloat("52." + longNachkomma.toString()),
    parseFloat("13." + latNachkomma.toString())
  ];
  return "[" + coords.toString() + "]";
  // return {
  //     //ToDo: is this the right oder?
  //     longitude: parseFloat("13." + latNachkomma.toString()),
  //     latitude: parseFloat("52." + longNachkomma.toString())
  // }
}

function promisedTimeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

async function run() {
  const numOfRequest = 40;
  const delayInMs = 600;

  let promises = [];
  for (let i = 0; i < numOfRequest; i++) {
    promises.push(
      axios.get(remoteGlitch + path, {
        params: {
          // origin: genCoord(),
          // destination: genCoord(),
          origin: getNextCoordinate(),
          destination: getNextCoordinate(),
        }
      })
    );

    await promisedTimeout(delayInMs);
  }

  Promise.all(promises)
    .then(() =>
      console.log(
        "Sent " + numOfRequest + " requests to " + remoteGlitch + path
      )
    )
    .catch(console.log);
}

run();
