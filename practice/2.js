
// arr = [1, 2, 4, 8, 16] target = 6
function averagePair(arr, target) {

    // loop through once 
    for (let i = 0; i < arr.length; i++) { // n
        for (let j = 0; j < 10; j++) { // n
            // console.log(arr[i] + arr[j])
            if ((arr[i] + arr[j]) / 2 == target ) {
                return true
            }
        }
    }
    return false
}

// refactored

function averagePair(arr, target) {
    // arr = [1, 2, 4, 8, 16] target = 5.5
    //              j  i
    let i = 0;
    let j = arr.length - 1;
    while (i <= j) {
        let avg = (arr[i] + arr[j]) / 2;
        if (avg == target) {
            return true;
        } else if (avg > target) {
            j--;
        } else { // avg < target
            i++;
        }
    } 
    return false;
    
    // 

}
// "hello" "hello world"
// "sing" "sting"

console.log(averagePair([1, 2, 4, 8, 16], 5.5))


// 

function highAndLow(str) {


    numbersArray = str.split(' ');
    newArray = [];

    numbersArray.forEach((number) => {
        newArray.push(parseInt(number))
    })


    console.log(newArray)


    let highest = newArray[0];
    let lowest = newArray[0];
   

    for (i = 0; i < str.length; i++) {
        
        if (newArray[i] > highest) {
            highest = newArray[i]
        } else if (newArray[i] < lowest) {
            lowest = newArray[i]
        }
    }
    return `${highest} ${lowest}`

    
}

console.log(highAndLow('1 2 3 4 13'))


