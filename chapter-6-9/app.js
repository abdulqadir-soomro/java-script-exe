// 1. Write a program to take a number in a variable, do the 
// required arithmetic to display the following result in your 
// browser: 


// var a=10;
// document.getElementById('first').textContent="The value of a is:"+a;


// document.getElementById('second').textContent="The value of ++a is: "+(++a);
// document.getElementById('first_now').textContent="Now the value of a is:"+a;


// document.getElementById('third').textContent="The value of a++ is: "+(a++);
// document.getElementById('second_now').textContent="Now the value of a is:"+a;

// document.getElementById('forth').textContent="The value of --a is: "+(--a);
// document.getElementById('third_now').textContent="Now the value of a is:"+a;

// document.getElementById('five').textContent="The value of a-- is: "+(a--);
// document.getElementById('fourth_now').textContent="Now the value of a is:"+a;





// 2. What will be the output in variables a, b & result after 
// execution of the following script: 
// var a = 2, b = 1; 
// var result = --a - --b + ++b + b--; 
// Explain the output at each stage: --a;--a - --b; --a - --b + ++b; --a - --b + ++b +

// var a=2;
// var b=1;
// var result=(--a)- (--b )+ (++b) + (b--);
// console.log(result);

// --a=1;
// --a- --b=(1-0)=1;





// 3. Write a program that takes input a name from user & 
// greet the user. 

// var user_name=prompt("Please Enter your name","John");
// alert("Welcom dear "+user_name);




// 5. Write a program to take input a number from user & 
// display it’s multiplication table on your browser. If user 
// does not enter a new number, multiplication table of 5 
// should be displayed by default.


// var num=+prompt("Please enter a number");

// if(num==null||num===0){
    
//     var num2=5;
//     document.getElementById('table').textContent="Table of "+num2;

//     var result = "";
//     for(var i=1; i<=10;i++){
//       result += num2 + " * " + i + " = " + (num2 * i) + "<br>"; 
//      //  console.log(num1+"*"+i+"=" +i*num1)
//     }

//     document.getElementById('table_row').innerHTML = result;

// }


// else{
//     document.getElementById('table').textContent="Table of "+num;
//     var result = "";
//     for(var i=1; i<=10;i++){
//         result += num + " * " + i + " = " + (num * i) + "<br>"; 
//         //  console.log(num1+"*"+i+"=" +i*num1)
//     }
    
//     document.getElementById('table_row').innerHTML = result;

// }










// 6. Take 
// a) Take three subjects name from user and store them in 3 different variables. 
// b) Total marks for each subject is 100, store it in another variable. 
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables. 
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)





var subject_1=prompt("Please enter subject one Name","English");
var subject_2=prompt("Please enter subject one Name","Math");
var subject_3=prompt("Please enter subject one Name","Urdu");

var mark=100;

var obtained_sub1=+prompt("please enter "+subject_1+" marks you got")
var obtained_sub2=+prompt("please enter "+subject_2+" marks you got")
var obtained_sub3=+prompt("please enter "+subject_3+" marks you got")

var total_marks=mark+mark+mark;
var total_obtain_mark=obtained_sub1+obtained_sub2+obtained_sub3;


var percentage1=obtained_sub1/mark*100;
var percentage2=obtained_sub2/mark*100;
var percentage3=obtained_sub3/mark*100;

var total_percentage=total_obtain_mark/total_marks*100;

// document.getElementById('row1').textContent="Subject    Total Marks   Obtained Marks     Percentage";
// document.getElementById('row2').textContent=subject_1+mark+obtained_sub1+percentage1+"%";


let table = document.getElementById("marksTable");
        table.innerHTML = `
                    <tr>
                <td>${subject_1}</td>
                <td>${obtained_sub1}</td>
                <td>${mark}</td>
                <td>${percentage1}%</td>
                
            </tr>
            <tr>
                <td>${subject_2}</td>
                <td>${obtained_sub2}</td>
                <td>${mark}</td>
                <td>${percentage2}%</td>
            </tr>
            <tr>
                <td>${subject_3}</td>
                <td>${obtained_sub3}</td>
                <td>${mark}</td>
                <td>${percentage3}%</td>

            </tr>

             <tr>
                <td></td>
                <td>${total_obtain_mark}</td>
                <td>${total_marks}</td>
                <td>${total_percentage}%</td>

            </tr>

        `;

        
