let Here = require('../components/here')
let here = new Here()

// here.getRoute([52.485617,13.3636133], [52.4986868,13.3728273]).then(r => {
//     console.log(r)
//     console.log(r.route)
//     console.log(r.route[0].publicTransportLine)
// })

// here.autocomplete('Lebe').then(r => {
//     console.log(r)
// })

here.geocode('U Turmstr. [Bus Turmstr.]').then(r => console.log(r))

here.geocode('U Turmstr.').then(r => {
    console.log('location object:', r.View[0].Result)
    // r.View[0].Result.filter(r => )
    // console.log('geocodes:', r.View[0].Result[0].Location.)
})