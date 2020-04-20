var birthYear = Number(prompt("what is your birthyear ?"));
var birthMonth = Number(prompt("waht is your birthmonth ?"));
var birthDay = Number(prompt("What is your Birthday ?"));
var futureYear = Number(prompt("Chosse an year in the future ! "));
var futureMonth = Number(prompt("Choose a month in the future year !"));
var futureDay = Number (prompt("Choose a day of a month !"));
var yd = (futureYear - birthYear);
var md = (futureMonth - birthMonth);
var month = (12 + md);
var dd = (futureDay - birthDay);
var day = (30 + dd);


if (dd >= 0 && md >= 0) {
    document.write("You will be " + yd + " years and " + md + " months and " + dd + " days old in year " + futureYear + " in month " + futureMonth + " in day " + futureDay);
}
else if (dd < 0 && md > 0) {
    document.write("You will be " + yd + " years and " + --md + " months and " + day + " days old in year " + futureYear + " in month " + futureMonth + " in day " + futureDay);
}
else if (dd < 0 && md == 0) {
    document.write("You will be " + --yd + " years and " + --month + " months and " + day + " days old in year " + futureYear + " in month " + futureMonth + " in day " + futureDay);
}
else if (dd >= 0 && md < 0) {
    document.write("You will be " + --yd + " years and " + month + " months and " + dd + " days old in year " + futureYear + " in month " + futureMonth + " in day " + futureDay);
}
else if (dd < 0 && md < 0) {
    document.write("You will be " + --yd + " years and " + --month + " months and " + day + " days old in year " + futureYear + " in month " + futureMonth + " in day " + futureDay);
}
else {
    document.write("your info is not valid, please type valid info");
}
