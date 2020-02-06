package com.mobileprogramming;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.function.Predicate;

public class Demo {
public static void main(String[] args) {
		
		List<Person> people=Arrays.asList(
				new Person("Vishal", "Singh", 25),
				new Person("Rahul", "Singh", 26),
				new Person("Charles", "Dickon", 27),
				new Person("Kendra", "Spade", 28),
				new Person("Hritik", "Roshan", 29)
				);

		//Step 1: sort list by last name(Asc)
		Collections.sort(people, ( o1,  o2) -> o1.getLastName().compareTo(o2.getLastName()));
		
		//Step 2:Create a method that prints all elements in list
		System.out.println("Printing all the elements\n");
		printConditionally(people, p->true);
		
		//Step 3:Create a method that prints all people that have last name start with S
		System.out.println("\nPrinting all the elements whose last name start with S\n");
		printConditionally(people, p->p.getLastName().startsWith("S"));
		
		System.out.println("\nPrinting all the elements whose first name start with K\n");
		printConditionally(people,  p -> p.getFirstName().startsWith("K"));
}

private static void printConditionally(List<Person> people, Predicate<Person> predicate) {
	for(Person p:people)
	{
		if(predicate.test(p))
		{
			System.out.println(p);
		}
	}
	
}
}
/*	private static void printAll(List<Person> people) {
    for(Person p:people)
    { 
    	System.out.println(p);
    }
	
}*/
/*}
interface Condition{
boolean test(Person p);
}*/
