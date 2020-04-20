var billAmount = Number(prompt("what is your bill amount in CHF ? "));
var tipsPercentage = Number (prompt("what is the Tips percantage ?"));
tipsInCHF = (billAmount * tipsPercentage / 100);
var total = (tipsInCHF + billAmount);
roundedTotal = total.toFixed(1);
alert ("The tips for " + billAmount + " CHF "+ " is " + tipsInCHF +" CHF, "+ "and you need to pay " + roundedTotal + " CHF !");
