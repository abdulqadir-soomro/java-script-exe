// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

// var firstNumber = 3;
// var secondNumber = 5;
// var sum = firstNumber + secondNumber;
// document.getElementById("sumid").textContent =
//   "Sum of " + firstNumber + " and " + secondNumber + " is " + sum;

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

// var substract=secondNumber-firstNumber;
// document.getElementById('subs').textContent="Subtarction of "+secondNumber+" and "+firstNumber +" is "+substract;

// var division=firstNumber/secondNumber;
// document.getElementById('divion').textContent="divion of "+firstNumber+" and "+secondNumber +" is "+division;

// var multi=firstNumber*secondNumber;
// document.getElementById('multiplication').textContent="multiplication of "+firstNumber+" and "+secondNumber +" is "+multi;








// 3. Do the following using JS Mathematic Expressions 
// a. Declare a variable. 
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”. 
// c. Initialize the variable with some number. 
// d. Show the value of variable in your browser like “Initial value: 5”. 
// e. Increment the variable. 
// f. Show the value of variable in your browser like “Value after increment is: 6”. 
// g. Add 7 to the variable. 
// h. Show the value of variable in your browser like “Valueafter addition is: 13”. 
// i. Decrement the variable. 
// j. Show the value of variable in your browser like “Value after decrement is: 12”. 
// k. Show the remainder after dividing the variable’s value by 3.  
// l. Output : “The remainder is : 0”. 


// var num;
// document.getElementById('b').textContent="Value after variable declaration is: "+num;

// num=5;
// document.getElementById('d').textContent="Initial value: "+num;

// num++;
// document.getElementById('f').textContent="Value after increment is: "+num;


// num= num+7;
// document.getElementById('h').textContent="Value after addition is: "+num;

// num--;
// document.getElementById('j').textContent="Value after decrement is: "+num;

// var remainder=num%3;
// document.getElementById('l').textContent="The remainder is : "+remainder;







// 4. Cost of one movie ticket is 600 PKR. Write a script to store 
// ticket price in a variable & calculate the cost of buying 5 tickets to a movie. 
// Example output:

// var ticket_fee=600;
// var total_ticket=5;
// var total=ticket_fee*total_ticket
// document.getElementById('movie').textContent="Total cost to buy "+total_ticket+" tickets to a movie is "+total+"PKR";





// 5. Write a script to display multiplication table of any 
// number in your browser. E.g

// var num1=4;
// document.getElementById('table').textContent="Table of "+num1;



// var result = "";
// for(var i=1; i<=10;i++){


//     result += num1 + " * " + i + " = " + (num1 * i) + "<br>"; 
//     //  console.log(num1+"*"+i+"=" +i*num1)
// }

// document.getElementById('table_row').innerHTML = result;




// 6. The Temperature Converter: It’s hot out! Let’s make a 
// converter based on the steps here. 
// a.  Store a Celsius temperature into a variable. 
// b. Convert it to Fahrenheit & output “NNoC is NNoF”. 
// c. Now store a Fahrenheit temperature into a variable. 
// d. Convert it to Celsius & output “NNoF is NNoC”. 



// var Celsius=25;
// var Fahrenheit;
// Fahrenheit=(Celsius*(9/5))+32;
// // console.log(Fahrenheit)

// document.getElementById('temp').textContent=Celsius+"  oC is "+Fahrenheit+"oF";



// var far=77;
// var cel=(far-32)*5/9;
// document.getElementById('temp2').textContent=far+"  oF is  "+cel+"oC";


// 7.  Write a program to implement checkout process of a 
// shopping cart system for an e-commerce website. Store 
// the following in variables 
// a. Price of item 1 
// b. Price of item 2 
// c. Ordered quantity of item 1 
// d. Ordered Quantity of item 2 
// e. Shipping charges 
// Compute the total cost & show the receipt in your browser.

// document.getElementById('storeName').textContent="Shopinig Cart";

// var price_item1=650;
// var price_item2=100;

// var item1_quantity=3
// var item2_quanytity=7;

// var ship_charge=100;
// document.getElementById('item1').textContent="Price of item1 is "+price_item1+"$";
// document.getElementById('quantity1').textContent="Total Quantity of Item1 is "+item1_quantity;



// document.getElementById('item2').textContent="Price of item2 is "+price_item2+"$";
// document.getElementById('quantity2').textContent="Total Quantity of Item2 is "+item2_quanytity;



// document.getElementById('ship_cha').textContent="Shipping Charge is  "+ship_charge+"$";



// var result=(price_item1*item1_quantity)+(price_item2*item2_quanytity)+(ship_charge);
// document.getElementById('total').textContent="Total cost of your order is  "+result+"$";


// document.getElementById('marksheet').textContent="Marks Sheet";
// var toatl_marks=980;
// var obtained_marks=804;
// var persentage_marks= (obtained_marks/toatl_marks)*100;
// document.getElementById('total_marks').textContent="Total marks: "+toatl_marks;
// document.getElementById('obtn_marks').textContent="obtained marks:"+obtained_marks;
// document.getElementById('perc').textContent="percentage: "+persentage_marks+"%";






// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
// script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression. 
// (Exchange rates : 1 US Dollar = 278.75 Pakistani Rupee 
// and 1 Saudi Riyal = 74.29Pakistani Rupee)


// var dollar=10;
// var riyal=25;

// document.getElementById('exchange').textContent="Currency in PKR";
// var total_currency=(dollar*278.75)+(riyal*74.29);
// document.getElementById('total_price').textContent="Total Currency in PKR"+total_currency;





// 10. Write a program to initialize a variable with some 
// number and do arithmetic in following sequence: 
// a. Add 5 
// b. Multiply by 10 
// c. Divide the result by 2 
// Perform all calculations in a single expression 



// var num00=  ((8+5)*10)/2;
// document.getElementById('arithmatic').textContent="solution of this expresion is: "+num00;






// 11. The Age Calculator: Forgot how old someone is? 
// Calculate it! 
// a. Store the current year in a variable. 
// b. Store their birth year in a variable. 
// c. Calculate their 2 possible ages based on the stored values. 
// Output them to the screen like so: “They are either NN or NN years old”.


// var current_year=2024;
// var birth_year=2002
// var age$is=current_year-birth_year;

// document.getElementById('calculator').textContent=" The Age Calculator:(in years)";

// document.getElementById('cu_year').textContent="Current Year is: "+current_year;
// document.getElementById('b_year').textContent="Birth Year: "+birth_year;
// document.getElementById('calculate').textContent="Your Age is: "+age$is;








// 12. The Geometrizer: Calculate properties of a circle. 
// a. Store a radius into a variable. 
// b. Calculate the circumference based on the radius, and 
// output “The circumference is NN”. 
// (Hint : Circumference of a circle = 2 π r , π = 3.142) 
// Calculate the area based on the radius, and output “The 
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142) 

// var radius=20;
// var pi_value=3.142;
// let circumference=2*pi_value*radius;
// let area= (pi_value*(radius**2));
// document.getElementById('radius').textContent="Radius of circle is: "+radius;
// document.getElementById('circum').textContent="The circumference is: "+circumference;
// document.getElementById('area').textContent="The area is: "+area;







// 13. The Lifetime Supply Calculator: Ever wonder how 
// much a “lifetime supply” of your favorite snack is? 
// Wonder no more. 
// a. Store your favorite snack into a variable 
// b. Store your current age into a variable. 
// c. Store a maximum age into a variable. 
// d. Store an estimated amount per day (as a number). 
// e. Calculate how many would you eat total for the rest of your life. 
// Output the result to the screen like so: “You will need 
// NNNN to last you until the ripe old age of NN”.





// var favt_snake="Chocolate chip";
// var cu_age=15;
// var max_age=65;
// var amt_day=3;

// var tot_snack=(max_age-cu_age)*amt_day


// document.getElementById('lifetime').textContent="The Lifetime Supply Calculator: ";

// document.getElementById('fav_chip').textContent="Favourate snack"+favt_snake;
// document.getElementById('cuurent_age').textContent="Current Age:"+cu_age;
// document.getElementById('max_age').textContent="Estimated Maximum Age:"+max_age;
// document.getElementById('per_day').textContent="Amount of snacks per day:"+amt_day;
// document.getElementById('to_snack').textContent="You will need "+tot_snack+" "+favt_snake+"to last you until the ripe old age of "+max_age;


