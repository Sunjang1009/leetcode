//check if this is prime number

function prime(num){
    for (let i = 2; i  < Math.sqrt(num) ; i ++){
        if (num % i === 0) return false
    }
    return true;
}

console.log(prime(7));
console.log(prime(12));
console.log(prime(17));

//N Linear time typical for loop - go thru all loop

function checkEven(num){
    return num % 2 === 0 ? true : false
}

//1 (constant time)

//print every prime number up until given number

function printEvenyPrime(num){
    for (let i = 2 ; i <= num ;  i ++){
        if(prime(i)) console.log(i)
    }
}

var stringMatching = function(words) {
    let output = []
    for ( let i = 0 ; i < words.length ; i ++){
        for ( let j = 0 ; j < words.length ; j ++){
            if (i !== j && words[j].includes(words[i]) && !output.includes(words[i])){
                output.push(words[i])
            }
        }
    }
    return output;
};



// Input: words = ["mass","as","hero","superhero"]
// Output: ["as","hero"]

// console.log(stringMatching(["leetcoder","leetcode","od","hamlet","am"]))
//2626
var reduce = function(nums, fn, init) {
    let val = init;
    for ( let i=0; i < nums.length ; i ++){
        val = fn(val, nums[i]);

    }
    return val;
};

