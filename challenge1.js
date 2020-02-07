var jMass=50.5;
var jHeight=1.2;

var mMass=115;
var mHeight=2;

var jBMI=jMass/(jHeight*jHeight);
var mBMI=mMass/(mHeight*mHeight);

var compare= jBMI > mBMI;


console.log(jBMI);
console.log(mBMI);
console.log('Is John\'s BMI is greate than Mark ' +compare)