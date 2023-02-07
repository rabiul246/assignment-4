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

