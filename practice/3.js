

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
    // return 'nope'
}

console.log(twoSum());