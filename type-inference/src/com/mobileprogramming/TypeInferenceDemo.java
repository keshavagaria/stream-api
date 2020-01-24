package com.mobileprogramming;

public class TypeInferenceDemo {

	public static void main(String args[]){
		StringLengthLambda length= s -> s.length();
		System.out.println(length.getLength("Vishu"));
		printLambda(s -> s.length());
	}
	
	public static void printLambda(StringLengthLambda slb)
	{
				System.out.println(slb.getLength("kas;kd;kasdasldausduada"));
	}
	
	interface StringLengthLambda{
		int getLength(String s);
	}
}
