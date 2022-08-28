// have to know before move forward to react

// Nullish Coalescing Operator------------------------------>

// const age = 0;

// document.body.innerText = `Your age is: ${age ?? "age not informed"}`;

// const user = {
//   name: "Donald",
//   age: 50,
//   address: {
//     street: "quac quac Road",
//     number: 22,
//   },
// };
// document.body.innerHTML = "name" in user; //true
// document.body.innerHTML = Object.keys(user); // name,age,address
// document.body.innerHTML = Object.values(user); //Donald,50,[object Object]
// document.body.innerHTML = JSON.stringify(Object.values(user));
// document.body.innerHTML = JSON.stringify(Object.entries(user));

// //Destruction------------------------------>

// //const address = user.address;    OR
// //const { address } = user;
// const { address, age: alter, nickname = "Duck Donald" } = user;

// document.body.innerText = JSON.stringify({ address, alter, nickname });

// function showAge({ age }) {
//   return age;
// }
// document.body.innerText = showAge(user);

//rest operator------------------------------>

// const { name, ...rest } = user;
// document.body.innerText = name;
// document.body.innerText = JSON.stringify(rest);

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const [first, , third, ...rest] = array;

// document.body.innerText = JSON.stringify({ first, third, rest });

//Short Syntax------------------------------>

// const name = "Marley";
// const age = 67;

// const user = {
//   name,
//   age,
// };

//document.body.innerText = JSON.stringify(user);

// Optional Chaining ---------------------------------->

// const user = {
//   name: "Donald",
//   age: 50,
//   address: {
//     street: "quac quac Road",
//     number: 22,
//   },
// fullAddress() {
//   return "full address";
// },
// };
// document.body.innerText =
//   user.address?.street.fullAddress?.() ?? "not informed";

// const key = "name";

// document.body.innerText = user[key];

// array methods

/**
 *map,
 filter,
 every*,
 some*,
 find*,
 findIndex*,
 reduce
 */

// Template Literals = `.....${}`.......................>
