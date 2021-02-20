

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

const removeDuplicates = () => {
    
    let nums = [0,0,1,1,1,2,2,3,3,4]
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i)
        } 
    }
     return [nums.length, nums]
};

console.log(removeDuplicates())

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

    let i = 0;
    let j = arr.length - 1;
    let mid = Math.floor((i + j) / 2);

    console.log(i, mid, j);

}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15)