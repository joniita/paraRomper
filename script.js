// Consulto si el LocalStoraje esta disponible en el navegador
if (typeof(Storage) !== "undefined") {
    console.log("Storage disponible");
} else {
    console.log("Storage no disponible");
}

// Creo una constante con un objeto para guardar el valor de la sesion.login en booleano
const sesion = {login: true};

// guardo el valor de la sesion en el Local Storage convirtiendolo en texto antes
localStorage.setItem("sesionIniciada", JSON.stringify(sesion))








// Fetch
const URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";

function showData(dataArray) {
    dataArray.map(i => {
        //console.log(i);
        console.log(`El auto es un ${i.name} y vale: ${i.currency} ${i.cost}`);
    })
}

fetch(URL)
    .then(response => response.json())
    .then(data => showData(data.products));

