package com.mobileprogramming;


class Test {

	
	void display(StringLengthLambda l)
	{
		System.out.println(l.getLength("Hello World from Java"));
	}

}
public class TypeInference {
public static void main(String[] args) {
	Test t=new Test();
	
/*	StringLengthLambda myLamdba=new StringLengthLambda() {
		
		public int getLength(String s) {
			return s.length();
		}
	};*/
	StringLengthLambda myLambda=  s -> s.length();
	System.out.println(myLambda.getLength("HiHi"));
	//t.display(myLambda);
	t.display(s->s.length());
}
}
