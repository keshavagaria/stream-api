package com.mobileprogramming;

public class Greeter {
	public void greet(Greeting greeting)
	{
		greeting.perform();
	}
	
	public static void main(String[] args) {
		Greeter greeter=new Greeter();
		Test test=new Test();		
		greeter.greet(test);
	}
}
