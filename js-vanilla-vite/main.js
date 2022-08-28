// have to know before move forward to react

// Nullish Coalescing Operator

// const age = 0;

// document.body.innerText = `Your age is: ${age ?? "age not informed"}`;

const user = {
  name: "Donald",
  age: 50,
  address: {
    street: "quac quac Road",
    number: 22,
  },
};
document.body.innerHTML = "name" in user; //true
document.body.innerHTML = Object.keys(user); // name,age,address
document.body.innerHTML = Object.values(user); //Donald,50,[object Object]
document.body.innerHTML = JSON.stringify(Object.values(user));
document.body.innerHTML = JSON.stringify(Object.entries(user));

//Destruction

//const address = user.address;    OR
//const { address } = user;
const { address, age: alter, nickname = "Duck Donald" } = user;

document.body.innerText = JSON.stringify({ address, alter, nickname });

function showAge({ age }) {
  return age;
}
document.body.innerText = showAge(user);
