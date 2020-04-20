var birthYear = Number(prompt("what is your birthyear ?"));
var birthMonth = Number(prompt("waht is your birthmonth ?"));
var birthDay = Number(prompt("What is your Birthday ?"));
var futureYear = Number(prompt("Chosse an year in the future ! "));
var futureMonth = Number(prompt("Choose a month in the future year !"));
var futureDay = Number(prompt("Choose a day of a month !"));

yd = (futureYear - birthYear);
md = (futureMonth - birthMonth);
month = 12 - md;
dd = (futureDay - birthDay);
day = 30 - dd;

if (dd >= 0 && md >= 0)
    document.write("You will be " + yd + " years and " + md + " months and " + dd + " days old in year " + futureYear + " in month " + futureMonth + " in day" + futureDay);
else if (dd < 0 && md > 0)
    document.write("You will be " + yd + " years and " + --md + " months and " + day + " days old in year " + futureYear + " in month " + futureMonth + " in day" + futureDay);
else if (dd >= 0 && md < 0)
    document.write("You will be " + --yd + " years and " + month + " months and " + dd + " days old in year " + futureYear + " in month " + futureMonth + " in day" + futureDay);
else (dd =< 0 && md < 0)
    document.write("You will be " + --yd + " years and " + month + " months and " + day + " days old in year " + futureYear + " in month " + futureMonth + " in day" + futureDay);


    
// the second if dd should be (monthdays - dd)
// the third if md should be (12 - md)
// the else md & dd should be (12 - md) & (monthdays - dd)
// here must be the months = numbers
// limmit for month < 13 & limit for 32 > days > 0 & exceptions e.g. not greather than 29 days
/*
1: "January",
2: "February",
3: "March",
4: "April",
5: "May",
6: "June",
7: "July",
8: "August",
9: "September",
10: "October",
11: "November",
12: "December",
*/

/*
if (birthMonth =< 0)
    alert ("please type a valid number !")
else if (birthMonth > 12)
    alert("please type a valid number !")
else
    true

if (birthDay =< 0)
    alert ("please type a valid number !")
else if (birthMonth > 29,30,31)
    alert("please type a valid number !")
else
    true

if (futureYear > birthYear)
    alert("please type avalid year !")
*/


m 0, d 0
m 0, d -
m -,d 0
d- ,m-

function ageCalculator(birthYear, birthMonth, futureYear, futureMonth){
    
    var yd = (futureYear - birthYear);
    var md = (futureMonth - birthMonth);
    if (md < 0) {
        return --yd;
    } else {
        return yd;
    }
};
document.write(ageCalculator(1980, 3, 2020, 4));