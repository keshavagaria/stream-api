package com.mobileprogramming;

public class Greeter {

	public void greet(Greeting greeting)
	{
		greeting.perform();
	}
	
	public static void main(String[] args) {
		Greeter greeter=new Greeter();
		Test test=new Test();            //NORMAL APPROACH
		Greeting anonymous=new Greeting() {       //ANONYMOUS CLASS APPROACH
			      
			    public void perform() {
				System.out.println("hello from anonymous");
				}
		};
		Greeting myLambda=()-> System.out.println("Hello World!");      //LAMBDA APPROACH   		
		anonymous.perform();
		test.perform();
		myLambda.perform();
		
		
		greeter.greet(myLambda);
		greeter.greet(anonymous);
		greeter.greet(test);
	
	
}
	
}