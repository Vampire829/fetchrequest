



//Задание номер1 
// const USERSURL = "https://jsonplaceholder.typicode.com/users";
// fetch(USERSURL)
//       .then((response)=> response.json())
//       .then((users)=> users.map((item)=>{
//              console.log(item.id,item.username)
//         }
//       ))
//       .catch((erorr)=>console.log(erorr))

// Задание номер2
// const USERSURL = "https://jsonplaceholder.typicode.com/users";
//     fetch(USERSURL)
//     .then((response)=> response.json())
//     .then((user)=> user.map(item => console.log(item.email)))
//      .catch(erorr=>console.erorr('erorr'))

// Задание номер 3

// const USERSURL = "https://jsonplaceholder.typicode.com/users";
//     fetch(USERSURL)
//     .then((response)=> response.json())
//     .then((user)=> {const reverse = user.filter(item => item.id === 9)
//     console.log(reverse)
//     })
//      .catch(erorr=>console.erorr('erorr'))


// const USERSURL = "https://jsonplaceholder.typicode.com/users";
    // fetch(USERSURL)
    //     .then(response=> response.json())
    //     .then(user=> user.map((i)=>{
    //         if(i.website.length[-1]=== 'm'){
    //             console.log(i)
    //         }
    //     }))
    //     .catch((erorr)=>{console.log('erorr')})
// const USERSURL = "https://jsonplaceholder.typicode.com/users";

//     fetch(USERSURL)
//   .then(response => response.json())
//   .then(users => {
//     const filteredUsers = users.filter(user => user.website.includes('com'));
//     console.log(filteredUsers);
//   })
//   .catch(error => console.log(error));

// Задание номер9
// const USERSURL = "https://jsonplaceholder.typicode.com/users";
// fetch(USERSURL)
//      .then(response=> response.json())
//      .then((user)=>{
//         const nameLength = user.filter(nam =>nam.name.length > 12);
//         console.log(nameLength)
//      })

// Задание номер 10
// const USERSURL = "https://jsonplaceholder.typicode.com/users";
// fetch(USERSURL)
//       .then(response => response.json())
//       .then((userName)=>{
//         const UserLower = userName.map(nameLower => nameLower.name.toLowerCase())
//         console.log(UserLower)
//       })
