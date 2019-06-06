const tours = require('./tours')

const usuario = {
    nick: "mikenieva",
    nombre: "Miguel",
    apellido: "Nieva"
}

const buscarToursPorPais = (toursArray, countryString) => {
    for(i=0; i<toursArray.length; i++){
        const paisEncontrado = toursArray[i].hasOwnProperty(countryString)
        if(paisEncontrado) {
            const toursPais = toursArray[i][countryString].paquetes
            return toursPais
        }
    }
    return []
}

const toursCOL = buscarToursPorPais(tours.tours, "COL")

console.log(toursCOL)
console.log(`${usuario.nombre} encontró ${toursCOL.length} tours en Colombia`)