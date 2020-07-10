// const ul = document.querySelector('.people');

// let html = ``;

// const people = ['poopa','loopa', 'voopsen', 'poopsen', 'Valotka'];

// people.forEach( person =>
//     html += `<li>${person}</li>`
// );

// console.log(html);

// ul.innerHTML = html;

// const Volotka = {
//     name: 'Valotka dlya seksu',
//     age: 18,
//     email: 'volotkakrutoypacan@mail.org',
//     location: 'Moscowskaya Oblast',
//     blogs:[
//         {title:'Volotka Molodec' , likes:33},
//         {title:'Volotka krosafchik', likes: 55}
//     ],
//     logIn(){
//         console.log('Volotka Online');
//     },
//     logOut(){
//         console.log('Volotka Offline');
//     },
//     volotakBlogs(){
//         console.log("This is volotka's blogs:");
//         this.blogs.forEach(e =>
//              console.log(e.title, e.likes)
//             );
//     }
// }

// const para = document.querySelectorAll('p');

// para.forEach(e =>{
//     if(e.textContent.includes('success')){
//         e.classList.add('success');}
//     if(e.textContent.includes('error')){
//     e.classList.add('error');
//     }
// });

// const todo = document.querySelector('.todos');


// console.log(todo);

// const fire = document.querySelector('button');

// fire.addEventListener("click", () => {
//     const li = document.createElement('li');
//     li.textContent = 'New li in todos list';
//     todo.prepend(li);
//     console.log('DO IT AGAIN MOTHERFUCKER!');
// });

// // const list = document.querySelectorAll('li');

// // list.forEach(a =>a.addEventListener('click', (e) => {
// //     e.stopPropagation();
// //     console.log('You shoot at li');
// // }));

// todo.addEventListener('click', e => {
//     // console.log(e.target);
//     if(e.target.tagName === 'LI'){
//         e.target.remove();
//     }
// })

// // document.querySelector('body').addEventListener('click' , e => 
// //     console.log(e.target));
// // ;

// const copied = document.querySelector('.copy');

// copied.addEventListener('copy', e => console.log('You copies me bro'));

// const box = document.querySelector('.box');

// box.addEventListener('mousemove', e => 
//     box.textContent = `
//     offsetX - ${e.offsetX}
//     offsetY - ${e.offsetY}
//     `
//     // console.log(e.offsetX, e.offsetY)
// );

// const clock = document.querySelector('.date_object');

// const step = () => {

//     const now = new Date();
//     const h = now.getHours();
//     const m = now.getMinutes();
//     const s = now.getSeconds();

//     const html = `
//     <span>${h}</span> :
//     <span>${m}</span> :
//     <span>${s}</span>
//     `;

//     clock.innerHTML = html;

// };

// setInterval(step, 1000);


// localStorage.setItem('Poopa', 'Loopa')
// localStorage.setItem('Zarplata', 'perreputali')