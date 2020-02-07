var mark={
    fullName:'Mark Smith',
    mass:90,
    height:2,
    calculateBMI:function()
    {
        this.bmi=this.mass/(this.height*this.height);
        return this.bmi;
    }
}

var john={
    fullName:'John Abrahim',
    mass:100,
    height:2,
    calculateBMI:function()
    {
        this.bmi=this.mass/(this.height*this.height);
        return this.bmi;
    }
}

/*console.log(mark);
console.log(john);

mark.calculateBMI();
john.calculateBMI();

console.log(mark.bmi);
console.log(john.bmi);*/



if(mark.calculateBMI()>john.calculateBMI())
    {
        console.log('Body Mass Index is Higher for '+mark.fullName+' with BMI as '+mark.bmi);
    }
else if(john.calculateBMI()>mark.calculateBMI())
    {
        console.log('Body Mass Index is Higher for '+john.fullName+ 'with BMI as '+john.bmi);
    }
else{
    console.log('Body Mass Index of '+mark.fullName+' and '+john.fullName+' are same with BMI\'s as '+mark.bmi+ ' and '+john.bmi);
}