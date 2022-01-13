
let  array = [];

let end = 'stop';


for(let i = 0; i < Infinity; i++){
    let comm = prompt('Введите команду:');
    if( comm == end) break;
    let str = comm.split(", ")
    if (str[0] == "add") {
        array.push(str[1])
    }
    if (str[0] == "del") {
        for (let key in array) {
        array[key] == str[1] ? array.splice(key,1) : '';
    }
             
       }
    console.log(array);
}

