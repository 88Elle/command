
let arr = [];

let end = "stop";

for(let i = 0; i < Infinity; i++){
    let comm = prompt(" Введите команду: ");
    let str = comm.split(", ");
     if (str[0] == "add") {
        arr.push(str[1]);
    }else if (str[0] == "del") {
        for (let key in arr) {
        arr[key] == str[1] ? arr.splice(key,1) : '';
        
    }
}else if( comm == end) break;
     console.log(arr); 
    }
       
    

