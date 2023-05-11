import axios from 'axios';

let frutas = await axios.get("https://tplb77svk0.execute-api.us-east-2.amazonaws.com/default/frutas")

console.log(frutas.data.frutas);
/* try {
    let frutas = await axios.get("https://tplb77svk0.execute-api.us-east-2.amazonaws.com/default/frutas")
    console.log(frutas)
} catch( error ){
    console.log(error);
} */

