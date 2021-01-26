function addTwoNumbers(a, b) {
    console.log(a + b)
}

addTwoNumbers(11, 22)


// 


function charCount(str) {
    let result = {}
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase()
        if (/[a-z0-9]/.test(char)) {
            if (result[char] > 0) {
                result[char]++
            } else {
                result[char] = 1
            }
        }
    }
    return result
}

console.log(charCount('hello whats up'))

// need to use alphanumeric chars only - got it
// refactored below, simpler q

function charCount(str) {
    let result = {}
    for (let char of str) {
        char = char.toLowerCase()
        if (/[a-z0-9]/.test(char)) {
            if (result[char] > 0) {
                result[char]++
            } else {
                result[char] = 1
            }
        }
    }
    return result
}

console.log(charCount('hello whats up'))


// checking anagrams

function validAnagram(text1, text2) {
    if (text1.length !== text2.length) {
        return false;
    }

    const letters = {};

    for (let i = 0; i < text1.length; i++) {
        let letter = text1[i];
        letters[letter] ? letters[letter] += 1 : letters[letter] = 1;
    }

    for (let i = 0; i < text2.length; i++) {
        let letter = text2[i];
        if (!letters[letter]) {
            return false;
        } else {
            letters[letter] -= 1;
        }
    }

    return true;
}

console.log(validAnagram('amel', 'lame'))

// count unique values

function countUniqueValues(arr) {

    let i = 0
    for (let j = 1; j < arr.length; j++) {
        if (arr.length === 0) return 0
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1
}

console.log(countUniqueValues([1, 1, 1, 2, 3, 4, 5, 5, 5]))

// 


function maxSubarraySum(arr, num) {

    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum
}

console.log(maxSubarraySum([1, 2, 3, 4, 5, 6, 7], 2))


// 

// Roman to integer

function romanToInteger(str) {

    let value = {'I': 1, 'V': 5,'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000 };

    let array = str.split('')


    let total = 0
    for (i = 0; i < str.length; i++) {
        if (value[array[i]] >= value[array[i + 1]]) {
            total += value[array[i]]
        }
        else {
            total = value[array[i]] - value[array[i + 1]]
        }
    }
    return total
}

    console.log(romanToInteger('XXV'))



    // 

    function sameFrequency(num1, num2){
        // good luck. Add any arguments you deem necessary.
        if (num1.length !== num2.length) return false
        
        const numbers = []
        
        for (let i=0; i < num1.length; i++) {
            !num1[i] ? numbers.push(num1[i]) : null
        }
        
        for (let i = 0; i < num2.length; i++) {
           if (!numbers[num2[i]]) return false
        }
        
        return true
      }

    //   

    function areThereDuplicates(arr) {
        // good luck. (supply any arguments you deem necessary.)
        let seen = []
        for (i = 0; i < arr.length; i++) {
            if (!arr[i]) { 
                seen.push(arr[i])
        }else {return true}
        return false
      } }