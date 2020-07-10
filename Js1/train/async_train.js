// const getData = path => {

//     // const urlRequest = 'https://jsonplaceholder.typicode.com/todos/';

//     return new Promise((resolve, reject) => {
//         const newXhr = new XMLHttpRequest();

//         newXhr.addEventListener('readystatechange', () => {
//             // if (newXhr.readyState === 4) {
//             //     if (newXhr.status === 200) {
//             //         // const data = JSON.parse(newXhr.responseText)
//             //         callback(undefined, JSON.parse(newXhr.responseText))
//             //     } else {
//             //         callback("Error /  Access Dinied , try another request", undefined)
//             //     }
//             // }

//             newXhr.readyState === 4 ?
//                 newXhr.status === 200
//                     ? resolve(JSON.parse(newXhr.responseText))
//                     : reject("Error /  Access Dinied , try another request")
//                 : false
//         })

//         newXhr.open('GET', path);
//         newXhr.send();
//     })

// };

// getData('todos.json')
//     .then(data => {
//         console.log('Reciving data from todos:', data);
//         return getData('todos2.json');
//     }).then(data => {
//         console.log('Recining data from todos2:', data);
//         return getData('todos3.json')
//     }).then(data => {
//         console.log('Recining data from todos3:', data);
//     }).catch(err => console.log(err));


// getData('todos.json', (err, data) => {
//     console.log(data);
//     getData('todos2.json', (err, data) => {
//         console.log(data);
//         getData('todos3.json', (err, data) => {
//             console.log(data);
//         });
//     });
// });


// getData('todos2.json', (err, data) => {
//     console.log(data);
//     getData('todos3.json', (err, data) => {
//     console.log(data);
//     });    
// });

// const getSomeData = () => {

//     return new Promise((resolve,reject)=>{
//         //fetching data

//         // resolve('recived data');
//         reject('Error in proчсмmise');
//     })
// };

// getSomeData().then(data => console.log(data));
// getSomeData().then(data => console.log(data)).catch(err => console.log(err))
// fetch('todos.json').then( response => {return response.json()}).then(data => console.log(data))



// const getData = async () => {
    
//     const recived1 = await fetch('tosdos.json');
//     if(recived1.status !== 200) {
//         throw new Error('Warning , Data has not been recivied');
//     } else {
//         const data1 = await recived1.json();
//         return data1 
//     }
// }
    
    

// getData().then(data => console.log(data)).catch(err => console.log(err))

const getTodos = async () => {
    const base = 'https://jsonplaceholder.typicode.com/todos/2';

    const data = await fetch(base);
    const response = await data.json();

    return response;
}

getTodos().then( data => console.log(data)).catch(err => console.log(err));