package com.mobileprogramming;

public class RunnableDemo {
public static void main(String[] args) {
	Thread t1=new Thread(new Runnable() {
		
		@Override
		public void run() {
			System.out.println("Runnable from Thread 1");
			
		}
	});
	
	t1.run();
	
	Thread t2=new Thread(()-> System.out.println("Runnable from Thread 2"));
	t2.run();
}
}
