let axios = require('axios')

function Here () {
    const url = "https://route.api.here.com/"

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

    function getCIT(path, params) {
        Object.assign(params, apiKey)
        const url = "http://autocomplete.geocoder.cit.api.here.com/"

        return axios.get(url + path, {
            params: params
        })
    }

    function getUrl(url, params) {
        Object.assign(params, apiKey)

        return axios.get(url, {
            params: params,
        })
    }

    this.getRoute = function (origin, destination) {

        return get("routing/7.2/calculateroute.json", {
            //ToDo: verify parameters
                waypoint0: 'geo!' + origin.toString(),
                waypoint1: 'geo!' + destination.toString(),
                mode: "fastest;publicTransport;traffic:disabled"
            })
            .then(response => {
                return response.data.response
            })
            .catch(error => {
                console.log(error);
            });
    }

    this.autocomplete = function (substr) {
        // http://autocomplete.geocoder.cit.api.here.com/
        return getUrl("http://autocomplete.geocoder.cit.api.here.com/6.2/suggest.json", {
            query: substr,
            prox: '52.4986868,13.3728273',
        }).then(r => r.data).catch(e => console.log(e))
    }

    this.geocode = locationString => {
        const url = "https://geocoder.api.here.com/6.2/geocode.json"
        const params = {
            searchtext: locationString,
        }
        return getUrl(url, params).then(r => r.data.Response).catch(e => console.log(e))
    }

    return this
}

module.exports = Here