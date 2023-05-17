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

function Question(qid, answer) {
	this.qid = qid;
	this.answer = answer;
}

Question.prototype.checkAnswer = function (answer) {
	return this.answer === answer;
}

function Student(studentId) {
	this.studentId = studentId;
	this.answers = [];
}

Student.prototype.addAnswer = function (question) {
	this.answers.push(question);
}

function Quiz(questions, students) {
	this.questions = new Map();
	questions.forEach(q => this.questions.set(q.qid, q.answer));
	this.students = students;
}

Quiz.prototype.scoreStudentBySid = function (studentId) {
	const student = this.students.filter(s => s.studentId === studentId)[0];

	return student.answers.reduce((sum, currentQuestion) => {
		if (currentQuestion.checkAnswer(this.questions.get(currentQuestion.qid))) {
			sum = sum + 1;
		}
		return sum;
	}, 0);
}

Quiz.prototype.getAverageScore = function () {
	return this.students.reduce((accmulator, student, index, array) => {
		return accmulator + this.scoreStudentBySid(student.studentId) / array.length;
	}, 0);
}

const questions = [new Question(1, 'b'), new Question(2, 'a'), new Question(3, 'b ')];

const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));

const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));

const students = [student1, student2];

const quiz = new Quiz(questions, students);

let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10);

let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11);

let average = quiz.getAverageScore();
console.log(average);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Answer Q2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Question2 {
	constructor(questionId, answer) {
		this.questionId = questionId;
		this.answer = answer;
	}
	checkAnswer(correctAnswer) {
		return this.answer === correctAnswer;
	}
}
class Student2 {
	constructor(studentId, answers = []) {
		this.studentId = studentId;
		this.answers = answers;
	}
	addAnswer(question) {
		this.answers.push(question);
	}
}
class Quiz2 {
	constructor(questionsArray = [], students = []) {
		this.questions = new Map();
		//TODO: add line to convert questionArray to Map questions

		questionsArray.forEach(question => this.questions.set(question.questionId, question.answer));
		this.students = students;
	}
	scoreStudent(studentId) {
		//TODO: compute student score based on answers
		let student = this.students.filter(student => student.studentId === studentId)[0];
		return student.answers.reduce((sum, currentQuestion) => {
			let questionId = currentQuestion.questionId;
			//find quesiton id
			let correctAnswer = this.questions.get(questionId);
			//get correctAnswer from Map
			let result = currentQuestion.checkAnswer(correctAnswer);
			//compare cu rrentQuestion answer with correctAnswer
			if (result) {
				sum = sum + 1;
			}
			// if(currentQuestion.checkAnswer(this.questions.get(currentQuestion. questionId))){
			// sum=sum+1;
			// }
			return sum;
		}, 0);
	}
	getAverageScore() {
		return this.students.reduce((average, currentStudent, index, array) => average + this.scoreStudent(currentStudent.studentId) / array.length, 0);
	}
}
const questionsArraywithCorrectAnswers = [new Question2(1, 'a'), new Question2(2, 'b'), new Question2(3, 'd')];

let student5 = new Student2(1001, [new Question2(1, 'b'), new Question2(2, 'b'), new Question2(3, 'b')]);

let student4 = new Student2(1002);
student4.addAnswer(new Question2(1, 'a'));
student4.addAnswer(new Question2(2, 'b'));
student4.addAnswer(new Question2(3, 'd'));

const students3 = [student5, student4];

let quizObj = new Quiz2(questionsArraywithCorrectAnswers, students3);
console.log(quizObj.scoreStudent(1001));
console.log(quizObj.scoreStudent(1002));
console.log(quizObj.getAverageScore());
