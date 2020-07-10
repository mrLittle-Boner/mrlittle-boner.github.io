
// CALL
// APPLY
// BIND
// const hello = () => console.log('Henlow', this);
// function hello() {
//     console.log('Henlow', this.name);
// };
// const person = {
//     age: 25,
//     sex: "noSex",
//     name: 'Poopa',
//     greet() {
//         console.log('Privet ' + this.name)
//     },
//     sayHu: hello,
//     sayWhat: hello.bind(),
//     logInfo(cock, balls) {
//         console.group(`Group name object: ${this.name}`)
//         console.log(`Name is: ${this.name}`);
//         console.log(`Age is : ${this.age}`);
//         console.log(`Cock is ${cock}`);
//         console.log(`Balls is ${balls}`);
//         console.groupEnd();
//     }
// };
// const jopa = {
//     // name: 'da',
//     // age: 7,
// };
// const loopa = {
//     name: 'Loopa',
//     age: 99
// };
// if (false) {
//     // logs data from another object by set context with BIND(object) Need to invoke
//     person.logInfo.bind(loopa, 'nice', 'beautiful')();
//     //Invoke function instantly in loopa context
//     person.logInfo.call(loopa, 'nice', 'beautiful');
//     //Invoke logInfo with object context NEED TO SET 2 parameters 2nd is ARRAY
//     person.logInfo.apply(loopa, ['nice', 'beautiful']);
// };
// let arr = [1, 2, 2, 3, 4, 5, 6];
// // const mult = (arr, num) => arr.map( i => i * num);
// Array.prototype.multBy = function (n) {
//     return this.map(i => i * n);
// };
// CLOSURE
// function foo() {
//     let counter = 0;
//     console.log(counter);
//     return function (cond) {
//         console.log(counter);
//         return cond == 'plus' ? counter += 1 : counter -= 1;
//     }
// }
// const fooPlus = foo();
// const logCounter = (cond) => {
//     let counter = 5;
//     console.log(counter);
//     if (cond === 'up') {
//         console.log(counter);
//         return () => counter += 1;
//     } else {
//         console.log(counter);
//         return () => counter -= 1;
//     }
// }
// const countUp = logCounter();
// const countDown = logCounter();
// console.log('Start receiving data');
// setTimeout(() => {
//     console.log('in async with 2sec waiting');
//     // const dataPa = {
//     //     poopa: 'one',
//     //     loopa: 'two',
//     //     bughalteriya: 'three'
//     // };
//     setTimeout(() => {
//         dataPa.pereputali = 'zalupa';
//         console.log(dataPa);
//     },2000);
// }, 2000);
// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('in async with 2sec waiting');
//         const dataPa = {
//             poopa: 'one',
//             loopa: 'two',
//             bughalteriya: 'three'
//         };
//         resolve(dataPa);
//     }, 2000);
// });
// promiseOne.then(d => {
//     console.log('Promise one resolved good', d);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             d.pereputali = 'zalupa';
//             reject('Warning Data Corruption');
//         }, 2000);
//     });
//     })
// .then(d => {
//         console.log('data received, promise two resolved', d);
//         d.doopa = true;
//         return d;
//     })
// .then(d => {
//         console.log('Data with doopa', d);
//     })
// .catch(err => console.log('Error: ', err));
// const zaderzhka = ms => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), ms)
//     })
// };
// // zaderzhka(2000).then(() => console.log('dolbayob s zaderzhkoy'));
// const anotherUser = {
//     name: 'Peela',
//     status: 'Online'
// };
// const user = Object.create({
//     calculated() {
//         console.log('Calculated, Bitch!');
//     }
// },{
//     name: {
//         value: 'Keela',
//         enumerable: true,   // allow iterate for loops
//         writable: true,     // allow change values of keys
//         configurable: true  // allow delete key
//     },
//     status: {
//         value: 'VIP',
//     },
//     age: {
//         get() {
//             //Getter neeed to return somthing
//             // return this.age;
//         },
//         set(value) {
//             anotherUser.age = value;
//             console.log(anotherUser);
//         }
//     }
// });
// user.name = 'Momo';
// for(let k in user) {
//     if(user.hasOwnProperty(k)) {
//         console.log(k,user[k]);
//     }
// }
// const arr = [1,2,3,4,5,6];
// for (var i = 0; i < arr.length; i++) {
//     (j => {
//         setTimeout(() => {
//             console.log(`Array item ${j} = ${arr[j]}`);
//         },2000);
//     })(i);
// }
// class User {
//     static type = 'Cheladi';
//     constructor(options) {
//         this.name = options.name,
//             this.status = options.status,
//             this.posts = options.posts,
//             this.email = options.email
//     };
//     isOnline() {
//         if (this.status === 'online') {
//             console.log('Uset logged in and Online');
//         } else {
//             console.log('User Offline');
//         }
//     }
// };
// class Polzovatel extends User {
//     static type = 'Poopa';
//     constructor(options) {
//         super(options);
//         this.secondName = options.secondName;
//     };
//     isOnline() {
//         super.isOnline();
//         console.log(`${this.name} ${this.secondName} is Online`);
//     };
//     get showMail(){
//         return this.email;
//     };
//     set setMail(mail){
//         this.email = `${this.name}${mail}`;
//     };
// }
// const loopauser = new Polzovatel({
//     name: 'loopa',
//     secondName: 'Loh',
//     status: 'online',
//     posts: 5,
//     email: false
// });
// const userOne = new User({
//     name: 'Doopa',
//     status: 'online',
//     posts: 4 ,
//     email: true
// });
// const userTwo = new User({
//     name: 'Doopa',
//     status: 'offline',
//     posts: 4 ,
//     email: true
// });
// class Component {
//     constructor(selector) {
//         this.$el = document.querySelector(selector)
//     }
//     hide() {
//         this.$el.style.display = 'none'
//     }
//     show() {
//         this.$el.style.display = 'block'
//     }
// }
// class Box extends Component {
//     constructor(options){
//         super(options.selector)
//         this.$el.style.width = options.size + 'px'
//         this.$el.style.height = options.size + 'px'
//         this.$el.style.backgroundColor = options.color
//     }
// }
// const box1 = new Box ({
//     selector: '#box1',
//     size: 100,
//     color: 'red'
// });
// const url = 'https://jsonplaceholder.typicode.com/todos/1';
// const delay = ms => {
//     return new Promise(resolve => setTimeout(() => resolve(), ms));
// };
// function getData() {
//     console.log('Starting fetch data from server...');
//     return delay(2000)
//         .then(() => fetch(url))
//         .then(da => da.json());
// }
// getData().then(data => console.log(data));
// async function fetdat() {
//     console.log('Starting fetch data from server...');
//     try{
//         await delay(2000);
//         const p = await fetch(url);
//         return console.log(await p.json());
//     } catch (e) {
//         console.error(e);
//     } finally {
//         console.log('Gotovo barin!');
//     }
// }
// fetdat();

// class Dog {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class Animal {
    
// }

// Animal.prototype = {
//     constructor:Animal,
//     eat(){}
// }

