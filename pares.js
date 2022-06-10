function substituirPares(array) {

    for (let i=0; i< array.lenght; i++)  {
        if (array [i]===0) {
            console.log("o numero já é zero");
        } else if( array[i]%2 ===0) {
            console.log(`substituindo ${array[i]} por 0`);
            array[i] = 0;
        }
    }

return array;
}

let arr= [5 , 8 , 23, 12 , 2, 11 , 20, 7];
console.log(substituirPares(arr));
