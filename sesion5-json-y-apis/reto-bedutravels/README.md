# Sesión 5: JSON y APIs

## ALCANCE 17: Creando archivos JSON

- Crearemos un archivo `mexico.json` el cual agregaremos nuestro objeto `toursMEX` que se encontraban ubicados en el archivo de `index.js`.

```javascript

|- dist
|  |- ...
|  |- mexico.json
|
|- src
|  |- js
|  |   |- models
|  |   |   |- Search.js
|  |   |   |- Tour.js
|  |   |
|  |   |- views
|  |   |   |- searchView.js
|  |   |   |- tourView.js
|  |   |   |- base.js
|  |   |
|  |   |- index.js
|  |   |- config.js
|  |
|  |- css
|  |  |- index.css
| 
|- index.html
|- package.json
|- .gitignore
|- .babelrc
|- webpack.config.js

```

Recordar que, al ser un JSON, la forma de escribirlo es muy diferente a un objeto normal.

Cada propiedad es necesario que tenga comillas para que pueda funcionar.

A continuación te comparto el archivo de `mexico.json` para que lo anexes y lo observes.

Probablemente el que hiciste sea muy similiar. Lo que te toca hacer es adaptarlo o usar este mismo.

```javascript

[
  {
    "id": "001",
    "slug": "mexico",
    "nombreTour": "Chiapas Hermoso",
    "operador": "Viajeros x el mundo",
    "tipoDeTour": "Tour en Grupo",
    "descripcion": "Vive la naturaleza y disfruta de la aventura en la selva de Chiapas.",
    "img": "https://i.imgur.com/dp6ZqwA.jpg",
    "pais": "México",
    "zonaLlegada": "Chiapas",
    "zonaSalida": "Ciudad de México",
    "escalas": ["Ciudad de México", "Chiapas"],
    "acomodacionIncluida": true,
    "transporteIncluido": true,
    "edadMinima": 21,
    "requisitos": {
      "seguroDeViaje": true
    },
    "duracionTour": 5,
    "opiniones": null,
    "calificacion": null,
    "precioUSD": 1181,
    "fechasDisponibles": {
      "2019": [
          {
            "id": "2019-chiapas-001",
            "fechaInicio": "21 de Junio",
            "fechaFin": "26 de Junio",
            "asientosDisponibles": 15,
            "asientosReservados": 4,
            "precioRealUSD": 1181
          },
          {
            "id": "2019-chiapas-002",
            "fechaInicio": "3 de Julio",
            "fechaFin": "8 de Julio",
            "asientosDisponibles": 15,
            "asientosReservados": 6,
            "precioRealUSD": 1181
          },
          {
            "id": "2019-chiapas-003",
            "fechaInicio": "9 de Julio",
            "fechaFin": "14 de Julio",
            "asientosDisponibles": 15,
            "asientosReservados": 1,
            "precioRealUSD": 1181
        }
      ]
    } 
  },
  {
    "id": "002",
    "slug": "mexico",
    "nombreTour": "Guanajuato por siempre",
    "operador": "Viajeros x el mundo",
    "tipoDeTour": "Tour con acompañante",
    "descripcion": "Enamórate de Guanajuato. Atrévete a conocer las callejoneadas y la música de esta hermosa ciudad.",
    "img": "https://i.imgur.com/CJ2kd4g.jpg",
    "pais": "México",
    "zonaLlegada": "Guanajuato",
    "zonaSalida": "Ciudad de México",
    "escalas": ["Ciudad de México", "Guanajuato"],
    "acomodacionIncluida": true,
    "transporteIncluido": true,
    "edadMinima": 21,
    "requisitos": {
      "seguroDeViaje": true
    },
    "duracionTour": 5,
    "opiniones": null,
    "calificacion": null,
    "precioUSD": 1181,
    "fechasDisponibles": {
      "2019": [
          {
            "id": "2019-guanajuato-001",
            "fechaInicio": "21 de Junio",
            "fechaFin": "26 de Junio",
            "asientosDisponibles": 15,
            "asientosReservados": 4,
            "precioRealUSD": 1181
          },
          {
            "id": "2019-guanajuato-002",
            "fechaInicio": "3 de Julio",
            "fechaFin": "8 de Julio",
            "asientosDisponibles": 15,
            "asientosReservados": 6,
            "precioRealUSD": 1181
          },
          {
            "id": "2019-guanajuato-003",
            "fechaInicio": "9 de Julio",
            "fechaFin": "14 de Julio",
            "asientosDisponibles": 15,
            "asientosReservados": 1,
            "precioRealUSD": 1181
        }
      ]
    } 
  },
  {
    "id": "003",
    "slug": "mexico",
    "nombreTour": "Yucatán y naturaleza",
    "operador": "Viajeros x el mundo",
    "tipoDeTour": "Tour en Grupo",
    "descripcion": "Impresiónate por sus costas llenas de cultura maya y grandes templos.",
    "img": "https://i.imgur.com/tW6kq1x.jpg",
    "pais": "México",
    "zonaLlegada": "Yucatán",
    "zonaSalida": "Ciudad de México",
    "escalas": ["Ciudad de México", "Yucatán"],
    "acomodacionIncluida": true,
    "transporteIncluido": true,
    "edadMinima": 21,
    "requisitos": {
      "seguroDeViaje": true
    },
    "duracionTour": 5,
    "opiniones": null,
    "calificacion": null,
    "precioUSD": 1181,
    "fechasDisponibles": {
      "2019": [
          {
            "id": "2019-yucatan-001",
            "fechaInicio": "21 de Junio",
            "fechaFin": "26 de Junio",
            "asientosDisponibles": 15,
            "asientosReservados": 4,
            "precioRealUSD": 1181
          },
          {
            "id": "2019-yucatan-002",
            "fechaInicio": "3 de Julio",
            "fechaFin": "8 de Julio",
            "asientosDisponibles": 15,
            "asientosReservados": 6,
            "precioRealUSD": 1181
          },
          {
            "id": "2019-yucatan-003",
            "fechaInicio": "9 de Julio",
            "fechaFin": "14 de Julio",
            "asientosDisponibles": 15,
            "asientosReservados": 1,
            "precioRealUSD": 1181
        }
      ]
    } 
  },
  {
    "id": "004",
    "slug": "mexico",
    "nombreTour": "Puebla",
    "operador": "Viajeros x el mundo",
    "tipoDeTour": "Tour en Grupo",
    "descripcion": "Maravíllate con el esplendor de los elegantes edificios coloniales de Puebla, disfruta del delicioso sabor del Mole y el chile en nogada.",
    "img": "https://i.imgur.com/JqdQact.jpg",
    "pais": "México",
    "zonaLlegada": "Puebla",
    "zonaSalida": "Ciudad de México",
    "escalas": ["Ciudad de México", "Puebla"],
    "acomodacionIncluida": true,
    "transporteIncluido": true,
    "edadMinima": 21,
    "requisitos": {
      "seguroDeViaje": true
    },
    "duracionTour": 5,
    "opiniones": null,
    "calificacion": null,
    "precioUSD": 1181,
    "fechasDisponibles": {
      "2019": [
          {
            "id": "2019-puebla-001",
            "fechaInicio": "21 de Junio",
            "fechaFin": "26 de Junio",
            "asientosDisponibles": 15,
            "asientosReservados": 4,
            "precioRealUSD": 1181
          },
          {
            "id": "2019-puebla-002",
            "fechaInicio": "3 de Julio",
            "fechaFin": "8 de Julio",
            "asientosDisponibles": 15,
            "asientosReservados": 6,
            "precioRealUSD": 1181
          },
          {
            "id": "2019-puebla-003",
            "fechaInicio": "9 de Julio",
            "fechaFin": "14 de Julio",
            "asientosDisponibles": 15,
            "asientosReservados": 1,
            "precioRealUSD": 1181
        }
      ]
    } 
  },
  {
    "id": "005",
    "slug": "mexico",
    "nombreTour": "Puerto Vallarta",
    "operador": "Viajeros x el mundo",
    "tipoDeTour": "Tour en Grupo",
    "descripcion": "Popular destino multicultural con playas, historia y variada gastronomía.",
    "img": "https://i.imgur.com/BmG6afo.jpg",
    "pais": "México",
    "zonaLlegada": "Puerto Vallarta",
    "zonaSalida": "Ciudad de México",
    "escalas": ["Ciudad de México", "Puerto Vallarta"],
    "acomodacionIncluida": true,
    "transporteIncluido": true,
    "edadMinima": 21,
    "requisitos": {
      "seguroDeViaje": true
    },
    "duracionTour": 5,
    "opiniones": null,
    "calificacion": null,
    "precioUSD": 1181,
    "fechasDisponibles": {
      "2019": [
          {
            "id": "2019-puertovallarta-001",
            "fechaInicio": "21 de Junio",
            "fechaFin": "26 de Junio",
            "asientosDisponibles": 15,
            "asientosReservados": 4,
            "precioRealUSD": 1181
          },
          {
            "id": "2019-puertovallarta-002",
            "fechaInicio": "3 de Julio",
            "fechaFin": "8 de Julio",
            "asientosDisponibles": 15,
            "asientosReservados": 6,
            "precioRealUSD": 1181
          },
          {
            "id": "2019-puertovallarta-003",
            "fechaInicio": "9 de Julio",
            "fechaFin": "14 de Julio",
            "asientosDisponibles": 15,
            "asientosReservados": 1,
            "precioRealUSD": 1181
        }
      ]
    } 
  },
  {
    "id": "006",
    "slug": "mexico",
    "nombreTour": "Veracruz",
    "operador": "Viajeros x el mundo",
    "tipoDeTour": "Visita los lugares turísticos de Veracruz y disfrute del carnaval y del calor jarocho. ",
    "descripcion": "Lindo viaje a Chiapas",
    "img": "https://i.imgur.com/oxCJVyG.jpg",
    "pais": "México",
    "zonaLlegada": "Veracruz",
    "zonaSalida": "Ciudad de México",
    "escalas": ["Ciudad de México", "Veracruz"],
    "acomodacionIncluida": true,
    "transporteIncluido": true,
    "edadMinima": 21,
    "requisitos": {
      "seguroDeViaje": true
    },
    "duracionTour": 5,
    "opiniones": null,
    "calificacion": null,
    "precioUSD": 1181,
    "fechasDisponibles": {
      "2019": [
          {
            "id": "2019-cancun-001",
            "fechaInicio": "21 de Junio",
            "fechaFin": "26 de Junio",
            "asientosDisponibles": 15,
            "asientosReservados": 4,
            "precioRealUSD": 1181
          },
          {
            "id": "2019-cancun-002",
            "fechaInicio": "3 de Julio",
            "fechaFin": "8 de Julio",
            "asientosDisponibles": 15,
            "asientosReservados": 6,
            "precioRealUSD": 1181
          },
          {
            "id": "2019-cancun-003",
            "fechaInicio": "9 de Julio",
            "fechaFin": "14 de Julio",
            "asientosDisponibles": 15,
            "asientosReservados": 1,
            "precioRealUSD": 1181
        }
      ]
    } 
  },
  {
    "id": "007",
    "slug": "mexico",
    "nombreTour": "Cancún",
    "operador": "Viajeros x el mundo",
    "tipoDeTour": "Tour en Grupo",
    "descripcion": "Cancún se encuentra ubicada en Quintana Roo, México, y las claras aguas del Caribe la rodean. Lo caracterizan playas, cuya arena de coral es fina y blanca.",
    "img": "https://i.imgur.com/IEI3AyX.jpg",
    "pais": "México",
    "zonaLlegada": "Cancún",
    "zonaSalida": "Ciudad de México",
    "escalas": ["Ciudad de México", "Cancún"],
    "acomodacionIncluida": true,
    "transporteIncluido": true,
    "edadMinima": 21,
    "requisitos": {
      "seguroDeViaje": true
    },
    "duracionTour": 5,
    "opiniones": null,
    "calificacion": null, 
    "precioUSD": 1181,
    "fechasDisponibles": {
      "2019": [
          {
            "id": "2019-cancun-001",
            "fechaInicio": "21 de Junio",
            "fechaFin": "26 de Junio",
            "asientosDisponibles": 15,
            "asientosReservados": 4,
            "precioRealUSD": 1181
          },
          {
            "id": "2019-cancun-002",
            "fechaInicio": "3 de Julio",
            "fechaFin": "8 de Julio",
            "asientosDisponibles": 15,
            "asientosReservados": 6,
            "precioRealUSD": 1181
          },
          {
            "id": "2019-cancun-003",
            "fechaInicio": "9 de Julio",
            "fechaFin": "14 de Julio",
            "asientosDisponibles": 15,
            "asientosReservados": 1,
            "precioRealUSD": 1181
        }
      ]
    } 
  }
]



```

Observarás 7 tours. Cada tour está referenciado con sus propiedades y valores.

También haz notar que comienza como un arreglo de objetos, porque esto hace posible que puedas utilizar métodos como .map para recorrerlo y posteriormente renderizarlo en el HTML.


## ALCANCE 18: Consumo de archivos JSON

Para que podamos consumir el archivo JSON en nuestro proyecto, es necesario indicar en qué parte sucede.

Si observas tu archivo `Search.js`, encontrarás diferentes líneas que ejercerán llamadas asíncronas hacia al archivo para extraer los datos.

También notarás que la manera en cómo elaboramos la búsqueda parte de la construcción de una clase (objeto).

```javascript

// Importamos la librería de AXIOS, que te permite utilizar un "fetch" de datos directo a la URL que tú pidas
import axios from 'axios'

import { key } from '../config'

export default class Search {
    constructor(query){
        this.query = query
    }

    async getResults(){
        const pais = this.query.toLowerCase()
        try{
            const res = await axios(`./data/${pais}.json`)
            this.result = res.data
        } catch (error){
            console.log("Intenta nuevamente")
        }
    }
}

```


## ALCANCE 19: "State" y renderización de resultados

- En tu `index.js` encontrarás una línea que se llama `state`

```javascript


import Search from "./models/Search";
import Tour from "./models/Tour";
import * as searchView from "./views/searchView";
...

const state = {};

const controlSearch = async () => {
  const query = searchView.getInput()

  if (query) {
    state.search = new Search(query);

    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);

    try {
        await state.search.getResults();
        clearLoader();
        searchView.renderResults(state.search.result);
    } catch(err){
        alert(err)
        clearLoader();
    }  
  }
};

...

```

Observemos cómo está construido y que **sólo si encuentra un query, es decir, una búsqueda,** entonces instanciará el objeto "Search" y lo renderizará en el área correspondiente dentro de tu `index.html`.



## ALCANCE 20: Guardando nuestros datos en "state"

Cada vez que coloquemos un dato en el input y ejecutemos un "submit", lo que sucederá es que habrá un movimiento en el área de eventos de nuestro controlador `index.js`

```javascript

elements.searchForm.addEventListener("submit", e => {
  e.preventDefault();
  controlSearch();
});

elements.searchResPages.addEventListener("click", e => {
  const btn = e.target.closest(".btn-inline");
  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.clearResults();
    searchView.renderResults(state.search.result, goToPage);
  }
});

```

En este momento, puedes observar que en el primer evento, al darle submit, ejecuta `controlSearch`, el cual es referida a nuestro controlador.

En `controlSearch`, el state se encargará de guardar los datos referidos de la búsqueda que se haya efectuado. En la línea `state.search = new Search(query)` sucede esto.

Lo que nos dice esto es que el resultado lo pongamos en un objeto diferente al que trajimos para que sea fácilmente manipulable.

```javascript

 if (query) {
   // Aquí guardamos la búsqueda realizada en el state.
    state.search = new Search(query);

    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);

    try {
        await state.search.getResults();
        clearLoader();
        searchView.renderResults(state.search.result);
    } catch(err){
        alert(err)
        clearLoader();
    }  
  }


```
