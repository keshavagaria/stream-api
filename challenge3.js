
function calculateTip(bill)
{
    var tip;
    var amount;
    if(bill<50)
        {
            tip=(20/100)*bill;
            amount=tip+bill;
            
            //return tip;
        }
    else if(bill>=50&&bill<200)
        {
             tip=(15/100)*bill;
            //return tip;
        }
    else{
        tip=(10/100)*bill;
        //return tip;
    }
    return tip;
}

var tip1=calculateTip(124);
var tip2=calculateTip(48);
var tip3=calculateTip(268);

var amount1=tip1+124;
var amount2=tip2+48;
var amount3=tip3+268;

var tips=[tip1,tip2,tip3];
var amounts=[amount1,amount2,amount3];
console.log(tips);
console.log(amounts);