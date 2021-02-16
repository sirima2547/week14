//let year = 2489;
let year = prompt("WE ARE GENERATION : คุณอยู่รุ่นไหน")
if(year<=2489)
{
    alert(year + " = You are generation Buiders");
    console.log(year + " = You are generation Buiders");
    document.getElementById("hContent").innerHTML=year +  "= You are generation Buiders";
}
 else if(year>=2490 && year<=2507){
    alert(year + " = You are generation Baby boomers");
    console.log(year + " = You are generation Baby boomers");
    document.getElementById("hContent").innerHTML=year +  "= You are generation Baby boomers";
}
else if(year>=2508 && year<=2524){
    alert(year + " = You are Gen X");
    console.log(year + " = You are Gen X");
    document.getElementById("hContent").innerHTML=year +  "= You are Gen X";
}
else if(year>=2525 && year<=2538){
    alert(year + " = You are Gen Y");
    console.log(year + " = You are Gen Y");
    document.getElementById("hContent").innerHTML=year +  "= You are Gen Y";
}
else if(year>=2539 && year<=2552 ){
    alert(year + " = You are Gen z");
    console.log(year + " = You are Gen z");
    document.getElementById("hContent").innerHTML= year +  "= You are Gen z";
}
else if(year>=2553  ){
    alert(year + " = You are Gen Alpha ");
    console.log(year + " = You are Gen Alpha ");
    document.getElementById("hContent").innerHTML= year +  "= You are Gen Alpha ";
}
console.log(year);
document.getElementById("hContent").innerHTML = year;