let axios = require('axios')

function Here () {
    const url = "https://route.api.here.com/"
    //ToDo: add actual api credentials
    const apiKey = {
        api_key: 'DEMO_KEY',
        app_id: 'nexlevel-server',
        app_code: 'secret'
    }

    function get(path, params) {

        Object.assign(params, apiKey)

        return axios.get(url + path, {
            params: params
        })
    }

    this.getRoute = function (origin, destination) {

        return get("routing/7.2/calculateroute.json", {
            //ToDo: verify parameters
                waypoint0: 'geo!' + origin.toString(),
                waypoint1: 'geo!' + destination.toString(),
                mode: "fastest;car;traffic:disabled"
            })
            .then(response => {
                console.log(response.data.url);
                console.log(response.data.explanation);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return this
}

module.exports = Here