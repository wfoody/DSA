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