import data from "./frutas.json" assert {type: 'json'};
import fs from "fs";

for (let fruta of data.frutas){
    console.log(fruta.nombre);
    console.log(fruta.peso);
    console.log(fruta.cantidad);
}



const verdurasJSON = `{
    "verduras":[
        {
            "nombre":"tomate",
            "peso":"20gr",
            "cantidad":30
        },
        {
            "nombre":"lechuga",
            "peso":"40gr",
            "cantidad":40
        },
        {
            "nombre":"rucula",
            "peso":"45gr",
            "cantidad":10
        },
        {
            "nombre":"cebolla",
            "peso":"10gr",
            "cantidad":20
        },
        {
            "nombre":"repollo",
            "peso":"40gr",
            "cantidad":3
        }
    ]
}`;

let dataVerdura = JSON.parse(verdurasJSON);

console.log(dataVerdura)
console.log(JSON.stringify(dataVerdura));

fs.writeFileSync("verduras.json", JSON.stringify(dataVerdura))

let archivoVerduras = fs.readFileSync("./verduras.json");

let verduritasjson = JSON.parse(archivoVerduras.toString())

console.log(verduritasjson.verduras[0].nombre);