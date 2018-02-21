let Here = require('../components/here')
let here = new Here()

// here.getRoute([52.485617,13.3636133], [52.4986868,13.3728273]).then(r => {
//     console.log(r)
//     console.log(r.route)
//     console.log(r.route[0].publicTransportLine)
// })

// here.autocomplete('Lebe').then(r => {
//     let promises = []
//     //enrich with coordinates
//     r.suggestions.forEach(suggestion => {
//         promises.push(here.enrichWithGeoCode(suggestion))
//     })
//
//     return Promise.all(promises)
// }).then(r => {
//     console.log(r)
//     // console.log(r.suggestions[0].address)
// })

// here.geocode('Deutschland, 10829, Berlin, Leberstraße')
//     .then(r => console.log(r.View[0].Result[0].Location.DisplayPosition))
//
// here.geocode('U Turmstr.').then(r => {
//     console.log('location object:', r.View[0].Result)
//     // r.View[0].Result.filter(r => )
//     // console.log('geocodes:', r.View[0].Result[0].Location.)
// })

json = {"waypoint":[{"linkId":"-1199392882","mappedPosition":{"latitude":52.4856184,"longitude":13.3634762},"originalPosition":{"latitude":52.485617,"longitude":13.3636132},"type":"stopOver","spot":0.266129,"sideOfStreet":"left","mappedRoadName":"Naumannstraße","label":"Naumannstraße","shapeIndex":0},{"linkId":"+1147357998","mappedPosition":{"latitude":52.4986937,"longitude":13.3729928},"originalPosition":{"latitude":52.4986868,"longitude":13.3728273},"type":"stopOver","spot":0.4081633,"sideOfStreet":"left","mappedRoadName":"","label":"","shapeIndex":66}],"mode":{"type":"fastest","transportModes":["publicTransport"],"trafficMode":"disabled","feature":[]},"leg":[{"start":{"linkId":"-1199392882","mappedPosition":{"latitude":52.4856184,"longitude":13.3634762},"originalPosition":{"latitude":52.485617,"longitude":13.3636132},"type":"stopOver","spot":0.266129,"sideOfStreet":"left","mappedRoadName":"Naumannstraße","label":"Naumannstraße","shapeIndex":0},"end":{"linkId":"+1147357998","mappedPosition":{"latitude":52.4986937,"longitude":13.3729928},"originalPosition":{"latitude":52.4986868,"longitude":13.3728273},"type":"stopOver","spot":0.4081633,"sideOfStreet":"left","mappedRoadName":"","label":"","shapeIndex":66},"length":3417,"travelTime":1076,"maneuver":[{"position":{"latitude":52.4856184,"longitude":13.3634762},"instruction":"Head <span class=\"heading\">south</span> on <span class=\"street\">Naumannstraße</span>. <span class=\"distance-description\">Go for <span class=\"length\">33 m</span>.</span>","travelTime":42,"length":33,"id":"M1","_type":"PrivateTransportManeuverType"},{"position":{"latitude":52.4853265,"longitude":13.3633661},"instruction":"Turn <span class=\"direction\">left</span> onto <span class=\"next-street\">Kolonnenstraße</span>. <span class=\"distance-description\">Go for <span class=\"length\">18 m</span>.</span>","travelTime":22,"length":18,"id":"M2","_type":"PrivateTransportManeuverType"},{"position":{"latitude":52.4852085,"longitude":13.3635485},"instruction":"Turn <span class=\"direction\">left</span> onto <span class=\"next-street\">Kolonnenstraße</span>. <span class=\"distance-description\">Go for <span class=\"length\">94 m</span>.</span>","travelTime":94,"length":94,"id":"M3","_type":"PrivateTransportManeuverType"},{"position":{"latitude":52.485112,"longitude":13.3647716},"instruction":"Go to the stop <span class=\"station\">Hohenfriedbergstr.</span> and take the <span class=\"transit\">bus</span> <span class=\"line\">N42</span> toward <span class=\"destination\">U Fehrbelliner Platz</span>. <span class=\"distance-description\">Follow for <span class=\"stops\">2 stops</span>.</span>","travelTime":135,"length":576,"id":"M4","stopName":"Hohenfriedbergstr.","_type":"PublicTransportManeuverType"},{"position":{"latitude":52.48685,"longitude":13.3571434},"instruction":"Get off at <span class=\"station\">Kaiser-Wilhelm-Platz</span>.","travelTime":0,"length":0,"id":"M5","stopName":"Kaiser-Wilhelm-Platz","_type":"PublicTransportManeuverType"},{"position":{"latitude":52.48685,"longitude":13.3571434},"instruction":"Take the <span class=\"transit\">bus</span> <span class=\"line\">187</span> toward <span class=\"destination\">U Turmstr. [Bus Turmstr.]</span>. <span class=\"distance-description\">Follow for <span class=\"stops\">3 stops</span>.</span>","travelTime":225,"length":1291,"id":"M6","stopName":"Kaiser-Wilhelm-Platz","_type":"PublicTransportManeuverType"},{"position":{"latitude":52.497654,"longitude":13.3624542},"instruction":"Get off at <span class=\"station\">U Bülowstr.</span>.","travelTime":0,"length":0,"id":"M7","stopName":"U Bülowstr.","nextRoadName":"Bülowstraße","_type":"PublicTransportManeuverType"},{"position":{"latitude":52.497654,"longitude":13.3624542},"instruction":"Walk to <span class=\"station\">U Bülowstr.</span>.","travelTime":8,"length":8,"id":"M8","_type":"PrivateTransportManeuverType"},{"position":{"latitude":52.4977183,"longitude":13.3624649},"instruction":"Take the <span class=\"transit\">rail</span> <span class=\"line\">U2</span> toward <span class=\"destination\">S+U Pankow</span>. <span class=\"distance-description\">Follow for <span class=\"stops\">1 station</span>.</span>","travelTime":175,"length":1022,"id":"M9","stopName":"U Bülowstr.","_type":"PublicTransportManeuverType"},{"position":{"latitude":52.4995852,"longitude":13.3742881},"instruction":"Get off at <span class=\"station\">U Gleisdreieck</span>.","travelTime":0,"length":0,"id":"M10","stopName":"U Gleisdreieck","nextRoadName":"Bogen","_type":"PublicTransportManeuverType"},{"position":{"latitude":52.4995852,"longitude":13.3742881},"instruction":"Head <span class=\"heading\">west</span> on <span class=\"street\">Bogen</span>. <span class=\"distance-description\">Go for <span class=\"length\">259 m</span>.</span>","travelTime":259,"length":259,"id":"M11","_type":"PrivateTransportManeuverType"},{"position":{"latitude":52.497654,"longitude":13.3731186},"instruction":"Turn <span class=\"direction\">right</span>. <span class=\"distance-description\">Go for <span class=\"length\">116 m</span>.</span>","travelTime":116,"length":116,"id":"M12","_type":"PrivateTransportManeuverType"},{"position":{"latitude":52.4986937,"longitude":13.3729928},"instruction":"Arrive at your destination on the left.","travelTime":0,"length":0,"id":"M13","_type":"PrivateTransportManeuverType"}]}],"publicTransportLine":[{"lineName":"N42","companyName":"","destination":"U Fehrbelliner Platz","type":"busPublic","id":"L1"},{"lineName":"187","companyName":"","destination":"U Turmstr. [Bus Turmstr.]","type":"busPublic","id":"L2"},{"lineName":"U2","lineForeground":"#DA421E","lineBackground":"#DA421E","companyName":"","destination":"S+U Pankow","type":"railMetro","id":"L3"}],"summary":{"distance":3417,"baseTime":1076,"flags":["noThroughRoad","builtUpArea"],"text":"The trip takes <span class=\"length\">3.4 km</span> and <span class=\"time\">18 mins</span>.","travelTime":1076,"departure":"1970-01-01T00:00:00Z","_type":"PublicTransportRouteSummaryType"}}

maneuvers = json.leg[0].maneuver
    .filter(m => m._type === 'PublicTransportManeuverType')
    .filter((_, i) => i % 2 == 0)

out = maneuvers.map((e, i) => ({
    ...e,
    ...json.publicTransportLine[i],
}))

console.log(out)