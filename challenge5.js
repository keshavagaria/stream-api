var john={
    bill:[124,48,268,180,42],
    tip:[],
    amount:[],
   calculateTip:function()
    {
        for(var i=0;i<this.bill.length;i++)
            {
                if(this.bill[i]<50)
                    {
                        this.tip[i]=(20/100)*this.bill[i];
                        
                       
                    }
                else if(this.bill[i]>=50&&this.bill[i]<200)
                    {
                        this.tip[i]=(15/100)*this.bill[i];
                        
                    }
                else{
                     this.tip[i]=(10/100)*this.bill[i];
                    
                }
                
                this.amount[i]=this.tip[i]+this.bill[i];
            }
      
    }
    
    
};

john.calculateTip();

console.log(john.tip);
console.log(john.amount);


var mark={
    bill:[77,375,110,45],
    tip:[],
    amount:[],
   calculateTip:function()
    {
        for(var i=0;i<this.bill.length;i++)
            {
                if(this.bill[i]<100)
                    {
                        this.tip[i]=(20/100)*this.bill[i];
                        
                       
                    }
                else if(this.bill[i]>=100&&this.bill[i]<300)
                    {
                        this.tip[i]=(10/100)*this.bill[i];
                        
                    }
                else{
                     this.tip[i]=(25/100)*this.bill[i];
                    
                }
                
                this.amount[i]=this.tip[i]+this.bill[i];
            }
      
    }
    
};

function calculateAverage(tips)
{
    var sum=0;
    var average=0;
    for(var i=0;i<tips.length;i++)
        {
            sum=sum+tips[i];
        }
    average=sum/tips.length;
    console.log(average);
    return average;
}


mark.calculateTip();
mark.average=calculateAverage(mark.tip);
john.average=calculateAverage(john.tip);

console.log(mark,john);

if(mark.average>john.average)
    {
        console.log('Mark\'s family paid more with average as '+mark.average);
    }
else{
    console.log('John\'s family paid more with average as '+john.average);
}
