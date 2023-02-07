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

