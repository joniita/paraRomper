// Consulto si el LocalStoraje esta disponible en el navegador
if (typeof(Storage) !== "undefined") {
    console.log("Storage disponible");
} else {
    console.log("Storage no disponible");
}

// Creo una constante con un objeto para guardar el valor de la sesion.login en booleano
const sesion = {login: false};

// guardo el valor de la sesion en el Local Storage convirtiendolo en texto antes
localStorage.setItem("sesionIniciada", JSON.stringify(sesion))

// recupero la informacion del Local Storage convirtiendolo en un objeto
let sesionGuardada = JSON.parse(localStorage.getItem("sesionIniciada"));

console.log(sesionGuardada.login);


// Compruebo si la sesion esta iniciada o no
if (sesionGuardada.login === true) {
    console.log("sesion iniciada");
} else {
    console.log("necesitas iniciar sesion");
}






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

