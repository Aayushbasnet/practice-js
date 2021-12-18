//store data in local storage
localStorage.setItem('name', 'aayush');
localStorage.setItem('age', 21);



//get data from local storage
const name1 = localStorage.getItem('name');
const age = localStorage.getItem('age');
console.log(name1, age);



//update data
localStorage.setItem('name', 'sanjeeta');
localStorage.setItem('age', 22);
const name2 = localStorage.getItem('name');
const age1 = localStorage.getItem('age');
console.log(name2, age1);