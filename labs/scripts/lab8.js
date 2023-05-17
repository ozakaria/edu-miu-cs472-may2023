/*
 * Created By: Osama A. Abdelhamid
 * Creation Date: 05 May, 2023
 * Student ID: 615881
 * Contact: osamaahmed.abdelhamid@miu.edu
 */

"use strict";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Answer Q1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const student = {
	firstName: '',
	lastName: '',
	grades: [],
	inputNewGrade: function (newGrade) {
		this.grades.push(newGrade);
	},
	computeAverageGrade() {
		return this.grades.reduce((sum, current, index, array) => sum + current / array.length, 0);
	}
}

const student1 = Object.create(student);
student1.firstName = 'Osama';
student1.lastName = 'Ahmed';
student1.inputNewGrade(88);
student1.inputNewGrade(98);
student1.inputNewGrade(86);
student1.inputNewGrade(80);

const student2 = Object.create(student);
student2.firstName = 'Zakaria';
student2.lastName = 'Abdelhamid';
student2.inputNewGrade(85);
student2.inputNewGrade(95);
student2.inputNewGrade(85);
student2.inputNewGrade(70);

const students = [student1, student2];

const result = students.reduce((average, stu, index, array) => average + stu.computeAverageGrade() / array.length, 0);

console.log(result);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Answer Q2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Student(firstName, lastName, grades = []) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.grades = grades;
}

Student.prototype.inputNewGrade = function (newGrade) {
	this.grades.push(newGrade);
}

Student.prototype.computeAverageGrade = function () {
	return this.grades.reduce((sum, current, index, array) => sum + current / array.length, 0);
}

const stu1 = new Student('Osama', 'Ahmed');
stu1.inputNewGrade(88);
stu1.inputNewGrade(98);
stu1.inputNewGrade(86);
stu1.inputNewGrade(80);

const stu2 = new Student('Zakaria', 'Abdelhamid');
stu2.inputNewGrade(85);
stu2.inputNewGrade(95);
stu2.inputNewGrade(85);
stu2.inputNewGrade(70);

const students2 = [stu1, stu2];

const result2 = students2.reduce((average, stu, index, array) => average + stu.computeAverageGrade() / array.length, 0);

console.log(result2);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Answer Q3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Array.prototype.newSort = function () {
	return this.sort((a, b) => a - b);
}
console.log([7, 5, 2, 4, 3, 9].newSort());
