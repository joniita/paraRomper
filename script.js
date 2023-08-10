

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

