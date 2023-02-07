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

