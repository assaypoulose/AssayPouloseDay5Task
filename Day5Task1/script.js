//1. Print odd numbers in an array

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const odds = [];

arr.forEach(number => {
  if (number % 2 !== 0) {
    odds.push(number);
  }
});

console.log(odds); 

//Output: [ 1, 3, 5, 7, 9 ]


//2. convert all the strings to title caps in a string array


function titleCase(str) {
  return str
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
}
console.log(titleCase("my name is assay poulose"));

//Output: My Name Is Assay Poulose

//3. sum of all numbers in an array

let arr = [12, 3, 4, 15];
function sum(arr) {  
  let sum = 0;
  for (let i = 0; i < arr.length; i++)  
            sum += arr[i];  
    
        return sum;  
    }  
   
   console.log("Sum of given array is " + sum(arr));


  //Output: Sum of given array is 34

  //4. 


