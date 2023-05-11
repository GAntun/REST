async function getFrutas() {
    let response = await fetch("https://tplb77svk0.execute-api.us-east-2.amazonaws.com/default/frutas");
    let frutas = await response.json();
    let putotabla = document.getElementById("putotabla");

    console.log(frutas);
    for (let fruta of frutas.frutas){    
        putotabla.innerHTML += `<tr><td>${fruta.nombre}</td>  <td>${fruta.peso}</td>  <td>${fruta.cantidad}</td></tr>`
    }
    
}
let container = document.getElementById("tuvieja");
container.innerHTML += `<table id="putotabla"><tr><th>Nombre</th><th>Peso</th><th>Cantidad</th></tr>`
getFrutas(container)
container.innerHTML += `</table>`

