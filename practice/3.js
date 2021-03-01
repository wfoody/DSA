

function twoSum() {

    let arr = [1, 2, 3, 4, 5, 6];
    let target = 12;
    let result = [];

    let i = arr[0];
    let j = arr.length - 1;

    while (i < j) {
        let sum = arr[i] + arr[j];
        if (sum === target) {
            result = [arr[i], arr[j]];
            return result;
        } else if (sum > target) {
            j--;
        } else {
            i++;
        }
    }
    return 'None found'
}

console.log(twoSum());

// finding median 



const findMedian = (arr) => {

    let med = arr.length / 2


    if (arr.length === 0) {
        return 0;
    } else if (med % 2 === 0) {
        return ((arr[med] + arr[med - 1]) / 2);
    } else {
        return arr[med - 0.5];
    }
}

console.log(findMedian([9, 60, 90]))


// 


const combineSorted = () => {

    let arr1 = [1, 3, 5, 7];
    let arr2 = [2, 4, 6, 8];
    let arr3 = [];

    let i = arr1[0];
    let j = arr2[0];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            arr3.push(arr1[i]);
            arr3.push(arr2[j]);
        } else {
            arr3.push(arr2[j]);
            arr3.push(arr1[i]);
        }
        i++;
        j++;
    }

    return arr3;
}

console.log(combineSorted())

// 
// integer palindrome
// 19 backwards is  91 9 * 10 + 1
// 219 backwards is 912 91 * 10 + 2
// 5219 backwards   9125 912 * 10 + 5

// num = 5219
// backwardsNum = num % 10 // 9
// remainNum = num / 10 // 521
// while (remainNum != 0) {
//  lastDigit = remainNum % 10 // 1, 2, 5
//  backwardsNum = backwardsNum * 10 + lastDigit // 91, 912, 9125
//  remainNum = floor(remainNum / 10) // 52, 5, 0
// }
// return num == backwardsNum
// 
// 
// floor(219 / 10) -> 21

const checkPalindrome = () => {

    let palInt = 11;
    let palArray = palInt.toString().split('');

    let i = palArray[0];
    let j = palArray[palArray.length - 1];

    while (i != j) {

        if (palArray[i] === palArray[j]) {
            i++;
            j--;
        } else {
            return false;
        }
    }
    return true;
}

console.log(checkPalindrome())

// 


// 

// const removeDuplicates = () => {

//     let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === nums[i + 1]) {
//             nums.splice(i)
//         }
//     }
//     return [nums.length, nums]
// };

// console.log(removeDuplicates())

// 

// list of people, birth and death years -
//  method for year with most people alive, 1900-1999 (inclusive)

// [{birth: 50, death: 75}, {birth: 23, death: 84}, etc.]
// [5, 9, 20, 11, 4, ...]
// if you have an array with the people alive that year (index is year, value is # people alive) then you can just
// find the max value in the array and return its corresponding index
// Problem: build that array

// indexes: years          0 1 2 3 4
// values: # people alive  1 1 1 2 1


const mostPeopleAlive = (peopleArray) => {

    let yearArray = new Array(100); // assume you have an array with 100 indexes in it

    for (i = 0; i < peopleArray.length; i++) { // runtime: O(n), n is the number of people alive
        let person = peopleArray[i]; // O(1) person.birth | person.death
        for (j = person.birth; j <= person.death; j++) { // O(m), m is the range of years possible (100)
            yearArray[j]++; // O(1)
        }
    };

    let maxValue = 0;
    let maxYear = 0;

    for (i = 0; i < yearArray.length; i++) { // O(m)
        if (yearArray[i] > maxValue) {
            maxValue = yearArray[i];
            maxYear = i;
        }
    }

    return maxYear;

};

// binary search

const binarySearch = (arr, num) => {

    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end) / 2);

    while (start <= end) {
        if (num === arr[mid]) {
            return mid;
        } else if (num > arr[mid]) {
            start = mid + 1;
            mid = Math.floor((start + end) / 2);
        } else { //(num < arr[mid])
            end = mid - 1;
            mid = Math.floor((start + end) / 2);
        }
    }
    return -1;
};

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15))

// Testing code - or more specifically functions/method
// Unit Tests/Test Cases
//  - A very specific test/verification of one thing your function should do. Example: does function return false when given negative number
// Code coverage
//  - Goal: Trying to test/run every line in your code
// Debugging:
//  - Debugger (part of the IDE)
//  - Print debugging (console.log): Print the important state (ex. variables) in your code. Also binary search helps
//      - Also can print if you got to a certain line of code or not
// Test Driven Development:
//  - 
// Tips:
//  - 
function testFunction(i) {
    if (i < 0) {
        // do a
    } else if (i === 0) {
        // do b
    } else { // i >0
        // do c
    }
}

testFunction(-1); // verify a
testFunction(0); // verify b 
testFunction(1); // verify c


// given two strings, determine if they are 0-1 edits away from each other

// inserting, removing, replacing char

// pale, ple

const oneAway = (str1, str2) => {
    console.log("Testing oneAway");
    let diff = Math.abs(str1.length - str2.length);

    if (str1 === str2) {
        return true;
    } else if (diff > 1) {
        return false;
    } else if (diff === 0) {
        let diffChar = 0;
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] !== str2[i]) {
                diffChar += 1
            }
        }
        return diffChar <= 1;
    } else { // (diff === 1)
        let i = 0;
        let short = null;
        let long = null;
        let strArr1 = str1.split('');
        let strArr2 = str2.split('');
        let diffCounter = 0;

        if (strArr1.length < strArr2.length) {
            short = strArr1;
            long = strArr2;
        } else {
            short = strArr2;
            long = strArr1;
        }
        console.log("entering while loop");
        while (i < short.length) {
            console.log(`i =` + i + ", short[i] = " + short[i] + ", long[i] = " + long[i]);
            if (short[i] === long[i]) {
                console.log("i++");
                i++;
            } else if (diffCounter === 0) { // 
                console.log("short before splice: " + short)
                short.splice(i, 0, long[i]); // 1: index, 2: how many indexes you are getting rid of, 3: what you are inputting
                console.log("short after splice: " + short)
                diffCounter = 1;
            } else if (diffCounter > 0) {
                return false;
            }
        }
        console.log(short, long, diffCounter)
        return (diffCounter <= 1);
    }
};
// 'abed' 'abcde'
//    e vs c
// 'abced' 'abcde' | diff = 1
//    e vs d | diff = 2 return false
console.log(oneAway('a', '  '))








// bread, breafd

// 

// reverse words and capitalize

const revAndCap = (str) => {

    let arr = str.split(' ');
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let splitWord = arr[i].split('')
        let rev = splitWord.reverse()
        newArr.push(rev.join(''));
    }

    let unCap = newArr.join(' ');
    let arrFinal = unCap.split(' ');
    let newArray = [];

    for (let i = 0; i < arrFinal.length; i++) {
        let newWord = arrFinal[i].charAt(0).toUpperCase() + arrFinal[i].slice(1);
        newArray.push(newWord);
    }

    return newArray.join(' ');

};

console.log(revAndCap('hello how are you'))



// closest to zero 

const closestToZero = (arr) => {

    let min = 100000;

    for (let i = 0; i < arr.length; i++) {
        if (Math.abs(arr[i]) < min) {
            min = arr[i]
        }
    }
    return min;
}

console.log(closestToZero([3.5, 17.6, -2.3, -4.5, 8, 2, 1, -0.5, -1]))

// 



const removeDuplicates = (nums) => {


    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums;
};

console.log(removeDuplicates([0, 0, 0, 0, 1, 1, 1, 1]))

// 



const searchInsert = (nums, target) => {

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        } else if (!nums[target]) {
            if (nums[i] >= target) {
                return i;
            } else {
                return nums.length;
            }
        }
    }

};

console.log(searchInsert([1, 2, 3], 4))

// 

if ('hi' === 'hi') {
    return true;
}