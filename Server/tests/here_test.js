let Here = require('../components/here')
let here = new Here()

// here.getRoute([52.485617,13.3636133], [52.4986868,13.3728273]).then(r => {
//     console.log(r)
//     console.log(r.route)
// })

here.autocomplete('Lebe').then(r => {
    console.log(r)
})