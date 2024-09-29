// 1. Declare and initialize an empty multidimensional array. 
// (Array of arrays) 

// var array=[[],[],[]];


// 2. Declare and initialize a multidimensional array 
// representing the following matrix:  


// var new_number=[
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]]
// console.log(new_number)



// 3. Write a program to print numeric counting from 1 to 10.  

// var j=0
// for(var i=1; i<=10; i++){
//     console.log(i)

// }




// 4.  Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user.  


// var table_number=+prompt("Enter the number for which you want the multiplication table:")
//  var table_len=+prompt("Enter length multiplication table")

//  document.write(`<h2>Multiplication table of ${table_number} length ${table_len}</h2> `)


// for(i=1;i<=table_len; i++){
//     document.write(`${table_number} X ${table_len} = ${table_number*i} <br>`)
    
// }






// 5. Write a program to print items of the following array 
// using for loop: 
// fruits = [“apple”, “banana”, “mango”, “orange”, 
// “strawberry”]


// var fruits = ["apple", "banana", "mango", "orange",  "strawberry"] 

// document.write(`<h3>${fruits.join(" ")}</h3>`)


// for(var i=0; i<fruits.length; i++){
//     document.write(`<p> Element at index <b>${i}</b> is <b>${fruits[i]}</b></p>`)
// }








// 6. Generate the following series in your browser. See 
// example output. 
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k



// // a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
// for(var i=1; i<=15; i++){
//     document.write(` ${i} ,`)
// }





// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 

// for(var i=15; i>=1; i--){
//     document.write(` ${i} ,`)


// }




// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 


// var evenNumbers = [];

// for (var i = 0; i <= 20; i++) {
   
//     if (i % 2 === 0) {
//         evenNumbers.push(i);
//     }
// }

// document.write(`Even Numbers: ${evenNumbers.join(", ")}`);






// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// var odd_number = [];

// for (var i = 0; i <= 20; i++) {
   
//     if (i % 2 === 0) {
//         odd_number.push(i);
//     }
// }

// document.write(`Even Numbers: ${odd_number.join(", ")}`);







// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k



// var evenNumbers = [];

// for (var i = 1; i <= 20; i++) {
   
//     if (i % 2 === 0) {
//         evenNumbers.push(i+"k");
        
//     }
   

// }
// document.write(`Even Numbers: ${evenNumbers.join(", ")}`);











// 7. You have an array 
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// Write a program to enable “search by user input” in an 
// array. 
// After searching, prompt the user whether the given item is 
// found in the list or not. Example: 


// var array=["cake","apple pie","cookie","chips","patties" ]
//  var search_1=prompt("Welcome to ABC bakary. what do you want to order sir/ ma`am")

//     if(array.includes(search_1)){
//         document.write(`cookie is Available at index ${array.indexOf(search_1)}`)
//     }else{
//         document.write(`we are soory ${search_1} is  not Available at  our bakary`)
//     }






// 8. Write a program to identify the largest number in the 
// given array. 
// A = [24, 53, 78, 91, 12]. 
 

// var A = [24, 53, 78, 96, 12];

// let largestNumber = A[0];

// for (let i = 1; i < A.length; i++) {
//     if (A[i] > largestNumber) {
//         largestNumber = A[i];
//     }
// }

// document.write(`The largest number in the array is: ${largestNumber}`);







// 9. Write a program to identify the smallest number in the 
// given array. 
// A = [24, 53, 78, 91, 12] 




// var A = [24, 53,78, 96, 12];

// let lowestNumber = A[0];

// for (let i = 1; i < A.length; i++) {
//     if (A[i] < lowestNumber) {
//         lowestNumber = A[i];
//     }
// }

// document.write(`The smallest number in the array is: ${lowestNumber}`);







// 10. Write a program to print multiples of 5 ranging 1 to 100. 


// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         document.write(`${i}, `);
//     }
// }