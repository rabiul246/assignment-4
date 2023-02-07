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

