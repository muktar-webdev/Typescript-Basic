"use strict";
// --set array types --//
const numbers = [1, 2, 3, 4, 5];
numbers.push(10);
const friends = ['nishat', 'hasan', 'muktar'];
let mega = 'nishu';
for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    if (friends.length > mega.length) {
        console.log(friend);
    }
    else {
        console.log(friend);
    }
}
//--normal object --//
const person1 = {
    name: 'Nishat',
    age: 20
};
person1.name;
// --Another object with deatails TS --//
// 1--Create object structure  with type //
let player;
// 2.assing value //
player = {
    name: 'nishat',
    club: 'bercelona',
    salary: 50000,
    isPlayed: false
};
// 2. Object declare shortcut way in TS --//
// ().
let player2 = {
    name: 'nishat',
    club: 'bercelona',
    salary: 50000,
    isPlayed: false
};
// --Create a object structure with type and set object property and his value --//
let player3 = {
    name: 'nishat',
    club: 'bercelona',
    salary: 50000,
    isPlayed: false
};
// --Create a object structure with type and set object property and his value --//
let person = {
    firstName: 'Nishat',
    lastName: 'Hasan',
    fullName: 'Nishat Hasan Muktar'
};
