//! 1. Declare an empty array using JS literal notation to store 
//! student names in future. 

// let studentNames = [];


//! 2. Declare an empty array using JS object notation to store 
//! student names in future. 


// let studentNames = new Array();



//! 3. Declare and initialize a strings array.


// let stringArray = ["apple", "banana", "mango"];


// 4.  Declare and initialize a numbers array. 




// let numbersArray = [1, 2, 3, 4, 5];

// let booleanArray = [true, false, true, false, false];




// 6. Declare and initialize a mixed array. 

// let mixedArray = ["Hello", 42, true, null, false];



// 7. Declare and Initialize an array and store available 
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed 
// qualifications in your browser like: 



// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
// for(i=0; i<qualifications.length; i++){
//     console.log(`${i+1}) ${qualifications[i]}`);    
// }






// 8. Write a program to store 3 student names in an array.Take 
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students like:  



// var studentNames = ["Ali", "Sara", "Ahmed"];
// var studentScores = [450, 390, 470];

// var totalMarks = 500;

// for (var i = 0; i < studentNames.length; i++) {
//     let percentage = (studentScores[i] / totalMarks) * 100;
//     console.log(`Score of ${studentNames[i]} is ${studentScores[i]}. Percentage: ${percentage}%`);
// }









// 9. Initialize an array with color names. Display the array 
// elements in your browser. 
// a. Ask the user what color he/she wants to add to the 
// beginning & add that color to the beginning of the array. 
// Display the updated array in your browser. 
// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser. 
// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser. 
// d. Delete the first color in the array. Display the updated 
// array in your browser. 
// e. Delete the last color in the array. Display the updated 
// array in your browser. 
// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser. 
// g. Ask the user at which index he/she wants to delete 
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined 
// position/index. . Display the updated array in your 
// browser. 








// var colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
// document.getElementById("colorArray").innerText = `Initial Colors: ${colors.join(", ")}`;

// // a. Ask the user what color to add to the beginning
// var addToBeginning = prompt("Enter a color to add to the beginning of the array:");
// colors.unshift(addToBeginning);
// document.getElementById("colorArray").innerText = `After adding ${addToBeginning} to the beginning: ${colors.join(", ")}`;

// // b. Ask the user what color to add to the end
// var addToEnd = prompt("Enter a color to add to the end of the array:");
// colors.push(addToEnd);
// document.getElementById("colorArray").innerText = `After adding ${addToEnd} to the end: ${colors.join(", ")}`;

// // c. Add two more colors to the beginning of the array
// colors.unshift("Orange", "Pink");
// document.getElementById("colorArray").innerText = `After adding two more colors to the beginning: ${colors.join(", ")}`;

// // d. Delete the first color in the array
// var removedFirst = colors.shift();
// document.getElementById("colorArray").innerText = `After removing the first color (${removedFirst}): ${colors.join(", ")}`;

// // e. Delete the last color in the array
// var removedLast = colors.pop();
// document.getElementById("colorArray").innerText = `After removing the last color (${removedLast}): ${colors.join(", ")}`;

// // f. Ask the user at which index to add a color & color name
// var addIndex = parseInt(prompt("Enter the index at which you want to add a color:"));
// var addColor = prompt("Enter the color name you want to add:");
// colors.splice(addIndex, 0, addColor);
// document.getElementById("colorArray").innerText = `After adding ${addColor} at index ${addIndex}: ${colors.join(", ")}`;

// // g. Ask the user at which index to delete color(s) & how many colors to delete
// var deleteIndex = parseInt(prompt("Enter the index from which you want to delete color(s):"));
// var deleteCount = parseInt(prompt("Enter the number of colors you want to delete:"));
// colors.splice(deleteIndex, deleteCount);
// document.getElementById("colorArray").innerText = `After deleting ${deleteCount} color(s) from index ${deleteIndex}: ${colors.join(", ")}`;





// 10. Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort 
// method. 





// var scores = [88, 73, 95, 68, 92, 85, 77, 90];
//     console.log(`score of student:  ${scores}`)
   
//         scores.sort(function(a, b) {
//             return a - b;
//         });
 
//        console.log( `Sorted Scores: ${scores.join(", ")}`);





// 11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities array.




// var cities=["karachi","lahore","Islamabad","Quetta","Peshawar"]

// console.log(`Cities List \n ${cities}`)

// var selectedCities=cities.splice(2,2);

// console.log(`selcted cities are \n ${selectedCities}`);







// 12.  Write a program to create a single string from the 
// below mentioned array: 
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; 
// (Use array’s join method)




// var arr = ["This","is","my","cat"]; 

// console.log(`Array \n ${arr}`);

// var combine_array=arr.join(" ");

// console.log(`String \n ${combine_array}`)






// 13. Create a new array. Store values one by one in such a way 
// that you can access the values in the order in which they 
// were stored. (FIFO-First In First Out) 


// var array=["Keyboard","Mouse","printer","Monitor"]
// console.log(`Devices: \n ${array}`);

// for(var i=0; i<array.length;i++){
//     console.log(`Out: \n ${array[i]}`)
// }




// 14. Create a new array. Store values one by one in such a way 
// that you can access the values in reverse order. (Last In
// First Out) 



// var array=["Keyboard","Mouse","printer","Monitor"]
// console.log(`Devices: \n ${array}`);

// for(var i=array.length-1; i>=0;i--){
//     console.log(`Out: \n ${array[i]}`)
// }





// 15. Write a program to store phone manufacturers (Apple, 
//     Samsung, Motorola, Nokia, Sony & Haier) in an array. 
//     Display the following dropdown/select menu in your 
//     browser using document.write() method: 








// let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];


// document.write("<select>");

// for (let i = 0; i < manufacturers.length; i++) {
//     document.write(`<option value="${manufacturers[i]}">${manufacturers[i]}</option>`);
// }

// document.write("</select>");



