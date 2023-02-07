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





// 2. this function will count the length of the string and return the length of the string as even or odd. it will take string as Input.

function evenOdd(string){
    let str = string.length
    if (typeof string === 'string'){
        if (str % 2 === 0){
            console.log('even');
        }
        else{
            console.log('odd')
        }
    }
    else{
        console.log('enter a string.')
    }
}





// 3. this function will claculate the diffference between input value and 7 . then it will return the result if the result is more than 7 it will return the double of the  input value. 

function isLGSeven(number){
   
    if (typeof number === 'number'){
        let num = number - 7;
        if (num > 7){
            n = number*2;
            return n;
        }
        else{
            return num;
        }
    }
    else{
        console.log('enter a number.')
    }
} 






// 4. this function will count the number of positive and negative number of an array and it will return the value as good or bad data . it will take array as input . 

function findingBadData(arr){
    if ( Array.isArray(arr)){
        count = 0;
        for(let i = 0; i < arr.length; i++){
            const n = arr[i];
            if (n < 0){
                count += 1;
            }
            else{
                continue
            }
        }
        return count;
    }
    else{
       console.log('enter an array.')
    }
}






// 5. this function will count the gem of three friend and return the answer . if it will less than 2000 then it will return the output if more then 2000 then it will minus 2000 form the output value and return the answer.  

function gemsToDiamond(f1,f2,f3){
    if( typeof f1 === 'number' && typeof f2 === 'number' && typeof f3 === 'number'){
        const gem = ((f1*21) + (f2*32) + (f3*43));
        if ( gem >= 2000){
            const total = gem - 2000;
            return total;
        }
        else{
            return gem;
        }
    }
    else{
       console.log('enter a number.')
    }
}

