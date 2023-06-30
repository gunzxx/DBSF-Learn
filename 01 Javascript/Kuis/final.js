// 1
// let x;
// x = 7;
// x = 'JS is great';
// console.log(x);


// 2
// const oneTwoThree = [1, 2, 3];
// const sevenEightNine = [7, 8, 9];

// const result = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];

// console.log(result);

// 3
// const capital = {
//     "Jakarta": "Indonesia",
//     "London": "England",
//     "Tokyo": "Japan"
// }
// capital["New Delhi"] = "Indonesia";

// console.log(capital["Indonesia"]);


// 4
// const sayHello = function(){}

// 5
// function multiply(num) {
//     total = num * num;
// }

// const result = multiply(3);

// console.log(result);


// 6
// class Car { }
// const car = new Car();
// console.log(typeof Car);


// 7
// try {
//     const arr = [1, 2, 3, 4];
//     for (let i = 0; i <= 4; i++) {
//         console.log(arr[i]);
//     }
// } catch (e) {
//     console.log("Out of bounds");
// }


// 8
// let myString = "";

// try {
//     myString += "a";
//     throw Error();
// } catch (e) {
//     myString += "b";
// } finally {
//     myString += "c";
//     throw Error();
//     myString += "d";
// }

// console.log(myString);


// 9
// class MyCustomError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "MyError";
//     }
// }

// try {
//     throw new MyCustomError("This is an error");
// } catch (e) {
//     console.log(e.message);
// }