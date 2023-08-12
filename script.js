// Consulto si el LocalStoraje esta disponible en el navegador
if (typeof (Storage) !== "undefined") {
    console.log("Storage disponible");
} else {
    console.log("Storage no disponible");
}

// Creo una constante con un objeto para guardar el valor de la sesion.login en booleano
const sesion = { login: false };

//Extraigo dos botones del DOM para recrear los botones de "Iniciar sesion" y "Cerrar sesion"
const botonSalir = document.getElementById("botonSalir");
const botonEntrar = document.getElementById("botonEntrar");

//agrego escuchadores de eventos evitando que recargue la pagina, cambiando el valor de sesion.login, guardando los cambios en Local Storage, y redirecciono la pagina
botonEntrar.addEventListener("click", function (event) {
    event.preventDefault();
    sesion.login = true;
    // guardo el valor de la sesion en el Local Storage convirtiendolo en texto antes
    localStorage.setItem("sesionIniciada", JSON.stringify(sesion));
    window.location.href = "index.html"
});

botonSalir.addEventListener("click", function (event) {
    event.preventDefault();
    sesion.login = false;
    localStorage.setItem("sesionIniciada", JSON.stringify(sesion));
    window.location.href = "index.html"
});

// recupero la informacion del Local Storage convirtiendolo en un objeto
let sesionGuardada = JSON.parse(localStorage.getItem("sesionIniciada"));

//console.log(sesionGuardada.login);


//verifico el estado de la sesion
if (sesionGuardada.login === true) {
    console.log("sesion iniciada");
} else {
    console.log("necesitas iniciar sesion");
}







// URL de la api con su endpoint
 const URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";

 // Funcion para recorrer un objeto y generar una plantilla HTML agregando valores del objeto
 function showData(dataArray) {
     dataArray.map(i => {
         //console.log(i);
         console.log(`El auto es un ${i.name} y vale: ${i.currency} ${i.cost}`);
     })
 }

 // Fetch
 fetch(URL)
     .then(response => response.json())
     .then(data => showData(data.products));

