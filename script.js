'use strict'

let money = +prompt("Ваш бюджет на месяц?"),
	time = +prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце"),
	a2 = +prompt("Во сколько обойдется?"),
	a3 = prompt("Введите обязательную статью расходов в этом месяце"),
	a4 = +prompt("Во сколько обойдется?");

appData.expenses[a1] = a2;
appData.expenses[a3] = a4;

console.log(appData);

alert((appData.budget) / 30);







// a = 5;
// console.log(a);

// var leftBorderWidth = 1;
// let second = 2;
// const pi = 3.14;

// console.log(4/0);

// let persone = {
// 	name: "John",
// 	age: 25,
// 	isMarried: false
// };

// console.log(persone["name"]);

// let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

// console.log(arr[0]);

// // alert("Hello World!");

// // let answer = confirm("Are you here?");

// // console.log(answer);

// // let answer = +prompt("Есть ли вам 18?", "Да");

// // console.log(typeof(answer));

// // console.log("arr" + " - object");
// // console.log(4 + +" - object");

// let incr = 10,
// 	 decr = 10;

// console.log(incr++);
// console.log(decr--);

// console.log(5%2);
// console.log("2" === 2);

// let isChecked = false,
// 	 isClose = false;

// console.log(isChecked || !isClose);

