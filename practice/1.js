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
                result[char] ++
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
                result[char] ++
            } else {
                result[char] = 1
            }
        }
    }
    return result
}

console.log(charCount('hello whats up'))