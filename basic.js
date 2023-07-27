//392 isSubsequence 

var isSubsequence = function(s, t) {
    let sArr = s.split('');
    let tArr = t.split('');
    let newArray = [];
    for (let i=0; i < sArr.length; i++){
        if (tArr.includes(sArr[i])){
            newArray.push(sArr[i]);
            tArr = tArr.slice((tArr.indexOf(sArr[i]))+1);
        }   
    }
    if(newArray.join('') === s){
        return true;
    }
    return false;
};

let s = "axc"
let t = "ahbgdc"
// console.log(isSubsequence(s,t));//undefineds????


// console.log(s.split(''))

// let brr = s.split('');//a c b 
// let arr = t.split('');//a h b d c f
// let newArr = [];
// console.log(arr);
// console.log(brr);

// for (let i=0;i<brr.length;i++){
//     if(arr.includes(i)){
//         newArr.push(i);
//         arr = arr.slice(indexOf(i));
//         console.log(arr);
//     }
// }
// if(arr.includes('a')){
//     newArr.push('a');
//     // console.log(newArr);//a
//     arr = arr.slice((arr.indexOf('a'))+1);
//     console.log(arr);
// }

// let s="acb"
// let t="ahbdcf"
// let sArr = s.split('');
// let tArr = t.split('');
// let newArray = [];
// for (let i=0; i < sArr.length; i++){
//     if (tArr.includes(sArr[i])){
//         newArray.push(sArr[i]);
//         tArr = tArr.slice((tArr.indexOf(sArr[i]))+1);
//         console.log(tArr);
//     }   
// }
// // console.log(sArr);
// console.log(tArr);
//21. Merge Two Sorted Lists

// var mergeTwoLists = function(list1, list2) {
//     for (let i=0; i<list2.length ; i++){
//        for (let j=0;j<list1.length ; j++){
//         if(list2[i] >= list1[j]){
//             list1.splice(j,0,list2[i])
//             list2.splice(i,1)
//             j = j + 2
//         }
//        }
//     }
//     return list1
// };

function mergeSortedLists(lst1, lst2) {
    let merged = [];
    let i = 0;
    let j = 0;
    
    while (i < lst1.length && j < lst2.length) {
      if (lst1[i] <= lst2[j]) {
        merged.push(lst1[i]);
        i++;
      } else {
        merged.push(lst2[j]);
        j++;
      }
    }
    
    while (i < lst1.length) {
      merged.push(lst1[i]);
      i++;
    }
    
    while (j < lst2.length) {
      merged.push(lst2[j]);
      j++;
    }
    
    return merged;
  }
  
// let list1 = [1,2,4], list2 = [1,3,4]
// console.log(mergeSortedLists(list1, list2));

// var removeElement = function(nums, val) {
//     for (let i = 0; i < nums.length ; i++){
//         if(nums[i] === val){
//             nums.splice(i,1)
//         }
//     }
//     return nums
// };

// let nums = [3,2,2,3]
// let val = 3

// console.log(removeElement(nums,val));
//206. Reverse Linked List
// let reverseList = function(head) {
//     for (let i=0;i<head.length;i++){
//         for (let j=head.length-1;j>0;j--){
//             if(head[j] > head[i]){
//                 head[i] = head[j]
//                 i++
//                 j--
//             } else return head
//         }
//     }
    
// };

// let list = [1,2,3,4,5];
// console.log(reverseList(list));


function addDigits(num) {
    let numArr = String(num).split('').map(Number);
    let result = numArr.reduce((prev,cur) => prev += cur);
    // console.log(result);
    if (result < 10){
        return result
    } else {
         return addDigits(result);
    }

}


console.log(addDigits(2567));

//ex input = 38 => output = 2
//num should be seperated in one digit nums (notsure how to do this=> make it array)
//add separated nums and add (can use reduce to make sum of array)
//check result is one digit or more? (result < 10)
//one digit => return else => repeat above process
//keep continue until it has only one digit left (maybe while loop? till the one digit left).
//got not good memory and time result.
//what can I do better??

// let longestCommonPrefix = function(strs) {
//   let result = '';
//     for (let i = 0; i <strs[0].length ; i ++){
//       for (let j=1; j <strs.length ; j ++){
//         if(i >= strs[j].length || strs[0][i] !== strs[j][i]){
//           return result;
//         } 
//       }
//       result += strs[0][i];
      
//     return result;
// }
// }

//input = array of string elements
//output = a string
//loop thru elements maybe foreach? 
//compare index of elements, and all matches = push to an array
//not match = stop and return 

let arr = ["flower","flow","flight"];
let result = ''

// for (let i = 0; i < arr.length ; i ++){
//   for (let j = 0; j < arr[0].length ; j ++){
//     if (arr[0][j] === arr[i][j]){
//       console.log(arr[0][j]);
//     }
//   }
// }


// function longestCommonPrefix(strs) {
//   let prefix = "";
//   if (!strs.length) {
//     return prefix;
//   }
//   for (let i = 0; i < strs[0].length; i++) {
//     const char = strs[0][i];
//     for (let j = 1; j < strs.length; j++) {
//       if (i >= strs[j].length || char !== strs[j][i]) {
//         return prefix;
//       }
//     }
//     prefix += char;
//   }
//   return prefix;
// }
// console.log(longestCommonPrefix(["flower","flow","flight"]))
// var removeDuplicates = function(nums) {
//     let result =[];
//     result.push(nums[0]);
//     for (let i = 1; i <nums.length ; i ++){
//      if (!result.includes(nums[i])){
//       result.push(nums[i])
//      }
//     }
//     return result;
// };


// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

//strating with index [0]


function removeDuplicates(nums) {
  let i = 0; // Initialize a pointer
  
  while (i < nums.length) {
    if (nums[i] === nums[i+1]) { // If the current element is a duplicate
      nums.splice(i+1, 1); // Remove the duplicate element
    } else {
      i++; // Move the pointer
    }
  }
  
  return nums; // Return the length of the modified array
}

let nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums));

var isValid = function(s) {
    let arr = s.split('');
    for (let i=0 ; i<arr.length; i++){
      if(arr[i] === ')' || arr[i] === '}' || arr[i] === ']'){
        //mirror
        //find matched 
        //look thru starting i-1
        let j= i-1
        while (j > 0){
          if (arr[i] === ")"){
            if (arr[j] === "("){
              i++
              j--
            } else return false
          } 
          if (arr[i] === "}"){
            if (arr[j] === "{"){
              i++
              j--
            } else return false
          } 
          if (arr[i] === "]"){
            if (arr[j] === "["){
              i++
              j--
            } else return false
          }
        }

        }
      }
      return true
    };

let str = "[()]"
console.log(isValid(str));

//s = string with brackets (){}[]should be closed with same one
//change to array
//for loop thru array
//if as soon as array[i] ==== )}] , then look thru mirror
//find the matched brackets
//got runtime error

// var strStr = function(haystack, needle) {
//     if(haystack.includes(needle)){
//       return haystack.indexOf(needle)
//     } else return -1
// };

// console.log(strStr("sadbutsad","sad"));



//if needle in the haytacks
//then find the index of needle[0]

// var plusOne = function(digits) {
//   if (digits[digits.length-1] === 9){
//     if(digits.length === 1){
//       return [1,0]
//     }
//     digits[digits.length-1] = 0;
//     digits[digits.length-2] = digits[digits.length-2] + 1
    
//     return digits
//   } else {
//     digits[digits.length-1] = digits[digits.length-1] + 1
//   return digits}
// };

// console.log(plusOne([9]));
//if any elements === 10, 
var plusOne = function(digits) {
  // Start from the rightmost digit
  for (let i = digits.length - 1; i >= 0; i--) {
      // If the digit is less than 9, we can simply add 1 and return the digits array
      if (digits[i] < 9) {
          digits[i]++;
          return digits;
      }
      // If the digit is 9, we need to set it to 0 and continue the loop to add 1 to the next digit
      digits[i] = 0;
  }
  // If all digits are 9, we need to add an additional 1 to the beginning of the digits array
  digits.unshift(1);
  return digits;
};

console.log(plusOne([2,9,9]));

console.log([2,9,9].unshift(1))

//69. Sqrt(x)
var mySqrt = function(x) {
    if (x===1){
      return 1
    }
    if(x > 1){

    }
};

//enter non negative number 
//find nearest square root
//arrange if num greater than 4 and less than 9, result root number of 4
//cannot understand even chat GPT gave me a solution

// function sqrt(x) {
//   let guess = 1;
//   let precision = 0.0001;
  
//   while (Math.abs(guess * guess - x) > precision) {
//     guess = (guess + x / guess) / 2;
//   }
  
//   return guess;
// }

// console.log(sqrt(25)); // Output: 5

var climbStairs = function(n) {
    
};
//1 or 2 steps 
//how many ways to climb n?
//for example 4, 1,1,1,1 1,1,2, 2,2 hm devide 2 canbe shortest way
//then now may 1s to replace to 2.
//3 2,1 1,1,1  1,2  3 ways
//7 2,2,2,1 => (1,1)(1,1)(1,1),1 => 
function climbStairs(n) {
  const dp = [1, 1];
  
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2];
  }
  
  return dp[n];
}

// console.log("#".repeat(6));
// console.log("#".repeat(5)+' '.repeat(1));

// console.log(' '.repeat(5)+'#'.repeat(1));
// console.log(' '.repeat(4)+'#'.repeat(2));

function staircase(n) {
  let i = 1;
  while(n<0){
      console.log(' '.repeat(n-i)+'#'.repeat(i));
      i++
  }
  // Write your code her
}


var singleNumber = function(nums) {
  for (let i = 0; i < nums.length ; i ++ ){
      if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])){
          return nums[i]
      }
  }
};

nums = [2,2,1];
console.log(nums.indexOf(2));
console.log(nums.lastIndexOf(2));

const items = ["a","b","c"];
const obj = {[items]:"HELLO"};

console.log(obj)
console.log(obj[items])

