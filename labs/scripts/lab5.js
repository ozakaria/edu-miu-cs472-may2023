/*
 * Created By: Osama A. Abdelhamid
 * Creation Date: 05 May, 2023
 * Student ID: 615881
 * Contact: osamaahmed.abdelhamid@miu.edu
 */

"use strict";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1. Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then- else construct available in Javascript.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function max(num1, num2) {
	if (num1 > num2) {
		return num1;
	} else {
		return num2;
	}
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2. Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function maxOfThree(num1, num2, num3) {
	if (num1 > num2 && num1 > num3) {
		return num1;
	} else if (num2 > num1 && num2 > num3) {
		return num2;
	} else {
		return num3;
	}
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3. Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function isVowel(char) {
	var vowels = ['a', 'e', 'i', 'o', 'u'];
	if (vowels.indexOf(char.toLowerCase()) !== -1) {
		return true;
	} else {
		return false;
	}
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an input array of numbers.
//    For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
//    Note/Hint: Do these using Imperative programming approach (i.e. for...loop or while...loop)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function sum(numArray) {
	var total = 0;
	for (var i = 0; i < numArray.length; i++) {
		total += numArray[i];
	}
	return total;
}

function multiply(numArray) {
	var product = 1;
	for (var i = 0; i < numArray.length; i++) {
		product *= numArray[i];
	}
	return product;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 5. Define a function reverse() that computes the reversal of a string.
//    For example, reverse("jag testar") should return the string "ratset gaj".
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function reverse(str) {
	var reversed = '';
	for (var i = str.length - 1; i >= 0; i--) {
		reversed += str[i];
	}
	return reversed;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 6. Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function findLongestWord(words) {
	var longest = 0;
	for (var i = 0; i < words.length; i++) {
		if (words[i].length > longest) {
			longest = words[i].length;
		}
	}
	return longest;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 7. Write a function filterLongWords() that takes an array of words and an integer i and returns a new array containing only those words that were longer than i characters.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function filterLongWords(words, i) {
	var filteredWords = [];
	for (var j = 0; j < words.length; j++) {
		if (words[j].length > i) {
			filteredWords.push(words[j]);
		}
	}
	return filteredWords;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 8. Write a function named, computeSumOfSquares, that takes as input, an array of numbers and calculates and returns the sum of the squares of each number in the input array.
//    E.g. computeSumOfSquares([1,2,3]) should be computed as 1^2 + 2^2 + 3^2 = 14.
//    Note: Write your Javascript code without using Imperative programming.
//    i.e. Do NOT use any explicit looping construct; instead use functional programming style/approach.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function computeSumOfSquares(numbers) {
	return numbers.map(num => num ** 2).reduce((sum, num) => sum + num, 0);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 9. Write a function named, printOddNumbersOnly, that takes as input, an array of integral numbers and it finds and prints only the numbers which are odd.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function printOddNumbersOnly(numbers) {
	for (var i = 0; i < numbers.length; i++) {
		if (numbers[i] % 2 !== 0) {
			console.log(numbers[i]);
		}
	}
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 10. Write a function named, computeSumOfSquaresOfEvensOnly, that takes as input, an array of integral numbers and calculates and returns the sum of the squares of only the even numbers in the input array.
//     E.g. computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) should be computed as 2^2 + 4^2 = 20.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function computeSumOfSquaresOfEvensOnly(numbers) {
	var sum = 0;
	for (var i = 0; i < numbers.length; i++) {
		if (numbers[i] % 2 === 0) { // check if the number is even
			sum += numbers[i] * numbers[i]; // add the square of the even number to the sum
		}
	}
	return sum;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 11. Using the Array.reduce(...) function, re-implement your functions, sum(...) and multiply(...) (defined in Problem 4 above) without using Imperative programming.
//     i.e. Do NOT use any explicit looping construct; instead use functional programming style/approach.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function sumV2(numArray) {
	return numArray => numArray.reduce((acc, cur) => acc + cur, 0);
}

function multiplyV2(numArray) {
	return numArray => numArray.reduce((acc, cur) => acc * cur, 1);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 12. Write a function named printFibo, that takes as input, a given length, n, and any two starting numbers a and b, and it prints-out the Fibonacci sequence.
//     e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,...) of the given length, beginning with a and b.
//     (e.g.
//      printFibo(n=1, a=0, b=1), prints-out: "0", as output;
//      printFibo(n=2, a=0, b=1), prints-out: "0, 1", as output;
//      printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", as output;
//      printFibo(n=6, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5", as output;
//      printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output
//      ).
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function printFibo(n, a, b) {
	if (n < 1) {
		return;
	}

	let fibo = [a, b];
	for (let i = 2; i < n; i++) {
		fibo.push(fibo[i - 1] + fibo[i - 2]);
	}

	console.log(fibo.join(', '));
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
