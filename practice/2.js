
// arr = [1, 2, 4, 8, 16] target = 6
function averagePair(arr, target) {

    // loop through once 
    for (let i = 0; i < arr.length; i++) { // n
        for (let j = 0; j < 10; j++) { // n
            // console.log(arr[i] + arr[j])
            if ((arr[i] + arr[j]) / 2 == target) {
                return true
            }
        }
    }
    return false
}

// refactored

function averagePairBetter(arr, target) {
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

console.log(averagePairBetter([1, 2, 4, 8, 16], 5.5));


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
    return [highest, lowest]


}

console.log(highAndLow('1 2 3 4 13'))


// 

function twoSum() {

    let arr = [1, 2, 3, 4, 5, 6];
    let target = 11;
    let result = [];

    i = arr[0];
    j = arr.length - 1;

    while (i < j) {
        let sum = arr[i] + arr[j]
        if (sum === target) {
            result = [arr[i], arr[j]];
            // break;
            return result;
        } else if (sum > target) {
            j--;
        } else {
            i++;
        }
    }
    return 'No sums';
}

console.log(twoSum());

// 


function reverse(x) {

    let str = x.toString().split('');
    let newArray = []
    // console.log(str)

    for (let i = str.length -1; i >= 0; i--) {
        newArray.push(str[i]);
    }
    let backwards = newArray.join('');

    return backwards;


}

console.log(reverse(1234));

// 

function fizzBuzz(int) {

    if (int % 3 === 0 && int % 5 === 0) {
        console.log('Fizz Buzz');
    } else if (int % 3 === 0) {
        console.log('Fizz')
    } else if (int % 5 === 0) {
        console.log('Buzz')
    }
}

fizzBuzz(15);

// 

function stars() {

}