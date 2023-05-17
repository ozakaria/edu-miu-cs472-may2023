/*
 * Created By: Osama A. Abdelhamid
 * Creation Date: 09 May, 2023
 * Student ID: 615881
 * Contact: osamaahmed.abdelhamid@miu.edu
 */

"use strict";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Answers Q1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function askPassword(ok, fail) {
	let password = prompt("Password?", '');
	if (password === "rockstar") {
		ok();
	} else {
		fail();
	}
}

let user = {
	name: 'John',
	loginOk: function () {
		console.log(`${this.name} logged in`);
	},
	loginFail: function () {
		console.log(`${this.name} failed to log in`);
	}
};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
askPassword(() => user.loginOk.call(user), () => user.loginFail.call(user));
askPassword(() => user.loginOk.apply(user), () => user.loginFail.apply(user));
askPassword(() => user.loginOk(), () => user.loginFail());

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Answers Q2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let group = {
	title: "Our Group",
	students: ["John", "Pete", "Alice"],
	showList: function () {
		this.students.forEach(function (student) {
			console.log(this.title + ": " + student);
		}.bind(this));
	}
};
group.showList();
