// 1. this function will claculate the Number. it will multiply by 3 then add 10 then divide by 2 then minus 5 from the given input. it will take a positive number as input.

function mindGame(number){
    if ((typeof number === 'number') && (number>0)){
        const num = ((((number*3)+10)/2)-5);
        return num
    }
    else{
        console.log('enter a positive number.');
    }
}


const l = mindGame(5);
console.log(l);
