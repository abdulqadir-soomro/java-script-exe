var userDay=prompt("Please enter date of birth: from 1-31");
var userMonth=prompt("Please enter Month of birth: \n from: 1-12; or Jan or january ");
var userYear=prompt("Please Enter year of birth");
var userMonthLowercase=userMonth.toLocaleLowerCase();
// document.write(`${userMonthLowercase}`)

var inputChange;



if(userMonthLowercase==="1"||userMonthLowercase==="01"||userMonthLowercase==="jan"||userMonthLowercase==="january"){
    inputChange=0;
}

else if(userMonthLowercase==="2"||userMonthLowercase==="02"||userMonthLowercase=== "feb"|| userMonthLowercase==="february"){
    inputChange=1;
}

else if(userMonthLowercase==="3"||userMonthLowercase==="03"||userMonthLowercase==="mar"||userMonthLowercase==="march"){
    inputChange=2
}

else if(userMonthLowercase==="4"||userMonthLowercase==="04"||userMonthLowercase==="apr"||userMonthLowercase==="april"){
    inputChange=3
}
else if(userMonthLowercase==="5"||userMonthLowercase==="05"||userMonthLowercase==="may"){
    inputChange=4
}

else if(userMonthLowercase==="6"||userMonthLowercase==="06"||userMonthLowercase==="jun"||userMonthLowercase==="june"){
    inputChange=5
}
else if(userMonthLowercase==="7"||userMonthLowercase==="07"||userMonthLowercase==="jul"||userMonthLowercase==="july"){
    inputChange=6
}

else if(userMonthLowercase==="8"||userMonthLowercase==="08"||userMonthLowercase==="aug"||userMonthLowercase==="august"){
    inputChange=7
}

else if(userMonthLowercase==="9"||userMonthLowercase==="09"||userMonthLowercase==="sep"||userMonthLowercase==="september"){
    inputChange=8
}

else if(userMonthLowercase==="10"||userMonthLowercase==="oct"||userMonthLowercase==="october"){
    inputChange=9
}

else if(userMonthLowercase==="11"||userMonthLowercase==="nov"||userMonthLowercase==="november"){
    inputChange=10
}

else if(userMonthLowercase==="12"|| userMonthLowercase==="dec"|| userMonthLowercase==="december"){
    inputChange=11
}
else{
    alert("invalid date")
}

var today=new Date();


var birthdate= new Date(userYear,inputChange,userDay)


var yearofbirth=today.getFullYear()-birthdate.getFullYear();

var monthofbirth=today.getMonth()-birthdate.getMonth();

var dateofbirth=today.getDate()-birthdate.getDate();



if (monthofbirth < 0 || (monthofbirth === 0 && dateofbirth< 0)) {
    yearofbirth--;
}



if (dateofbirth < 0) {
    dateofbirth += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); 
    monthofbirth--;
}

if (monthofbirth < 0) {
    monthofbirth += 12;
}



document.write(`Your birthday Date is ${birthdate.getDate()} / ${birthdate.getMonth()+1}/ ${birthdate.getFullYear()} </br>`)
document.write(` Your Age is: </br>  Years: ${yearofbirth} </br> `)
document.write(`Month:  ${monthofbirth} </br>`)
document.write(`Days: ${dateofbirth}`)







