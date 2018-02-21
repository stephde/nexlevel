let axios = require('axios')

function Here () {
    const url = "https://route.api.here.com/"
    //ToDo: add actual api credentials
    const apiKey = {
        app_id: process.env.HERE_APP_ID,
        app_code: process.env.HERE_APP_CODE
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
                return response.data.response
            })
            .catch(error => {
                console.log(error);
            });
    }

    return this
}

module.exports = Here