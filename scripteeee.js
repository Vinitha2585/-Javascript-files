// //create
// let arr=[];
// const input=document.getElementById('int');


// function add(){
//    arr.push(input.value)
//    console.log(arr);
// //    input.value = "";

// dispalyvalue();
// }


// //read
// function dispalyvalue(){
// const li=document.getElementById('list');
// list.innerHTML="";

// arr.forEach((value, index) => {
//         const li = document.createElement('li');
//         li.innerText = value;
//         list.appendChild(li);
//     });
// }

// //create
// let colors = ["Red", "Blue", "Green"]
// colors.push("yellow");
// console.log(colors);

// //read

// colors.forEach((value)=>{
//     console.log(value);
// });

// //update

// colors[1]="black"
// console.log(colors);

// //delete

// colors.splice(0,1);
// console.log(colors);


// //create
// let marks = [45, 78, 32, 90, 65];
// marks.push(85,55);
// console.log(marks);

// //Read
// marks.forEach((value)=>{
//    console.log(value);
// });

// //update
// marks[2]=50;
// console.log(marks);

// //delete
// marks.splice(0,1);
// console.log(marks);

// let total = 0;

// marks.forEach((value) => {
//     total = total + value;
// });

// console.log(total);


// let employees = [
//     { name: "Arun", salary: 20000 },
//     { name: "Priya", salary: 30000 },
//     { name: "Kumar", salary: 25000 }
// ];

// //create
// employees.push({ name: "Kumar", salary: 25000 });
// console.log(employees);

// //read
// employees.forEach((value)=>{
//     console.log(value)
// });

// //update
// employees[0].salary=25000;
// console.log(employees);

// //delete
// employees.slice(0,3);
// console.log(employees);



//create



// let arr = [];
// let isEdit = null;

// const name = document.getElementById('name');
// const mark = document.getElementById('marks');
// const list = document.getElementById('list');

// // CREATE
// function addStudent() {
//     if (name.value === '') {
//         alert("Please Enter Name!");
//         return;
//     }

//     if (mark.value === '') {
//         alert("Please Enter Mark!");
//         return;
//     }

//     if (isEdit !== null) {
//         arr[isEdit] = {
//             name: name.value,
//             mark: mark.value
//         };

//         isEdit = null;
//     } else {
//         arr.push({
//             name: name.value,
//             mark: mark.value
//         });
//     }

//     name.value = '';
//     mark.value = '';

//     freebutton();
// }

// // READ
// function freebutton() {
//     list.innerHTML = '';

//     arr.forEach((value, index) => {
//         const create = document.createElement('li');

//         create.innerHTML = `
//             ${value.name} - ${value.mark}
//             <button onclick="handlequery(${index})">EDIT</button>
//             <button onclick="deletequery(${index})">DELETE</button>
//         `;

//         list.appendChild(create);
//     });
// }

// // UPDATE
// function handlequery(index) {
//     name.value = arr[index].name;
//     mark.value = arr[index].mark;

//     isEdit = index;
// }

// // DELETE
// function deletequery(index) {
//     arr.splice(index, 1);
//     freebutton();
// }

let arr = [];
let isEdit = null;

// form data 
const form = document.querySelector('.form');

function handleSubmit() {

    const userName = document.getElementById('userName').value;
    const emailId = document.getElementById('emailId').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    if (userName === '') {
    alert("Enter the name");
    return;
}

if (emailId === '') {
    alert("Enter the email");
    return;
}

if (phone === '') {
    alert("Enter the phone number");
    return;
}

if (address === '') {
    alert("Enter the address");
    return;
}
    let user = {
        userName: userName,
        emailId: emailId,
        phoneNumber: phone,
        address: address
    };

    // console.log(user);

    if (isEdit === null) {
        //push
        arr.push(user);
    } else {
        //edit
        arr[isEdit] = user;
        isEdit = null;
    }
    handleView();
    handleClear();
};



// A =[1,2,3,4,5,6];
// A = [{},{},{},{}]
// value = ?
//index = ?

function handleView() {
    let tbody = document.getElementById('tbody');
    tbody.innerHTML = '';
    arr.forEach((value, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML =
            `
<td>${value.userName}</td>
<td>${value.emailId}</td>
<td>${value.phoneNumber}</td>
<td>${value.address}</td>
<td><button onclick="handleEdit(${index})">Edit</button></td>
<td><button onclick="handleDelete(${index})">Delete</button></td>
        `;
        tbody.appendChild(tr);
    })
};


function handleEdit(index) {
    console.log(index); // 0
    console.log(arr[index]); //{}
    document.getElementById('userName').value = arr[index].userName;
    document.getElementById('emailId').value = arr[index].emailId;
    document.getElementById('phone').value = arr[index].phoneNumber;
    document.getElementById('address').value = arr[index].address;

    isEdit = index;
}


function handleClear() {
    document.getElementById('userName').value = '';
    document.getElementById('emailId').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('address').value = '';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleSubmit();
})

function handleDelete(index) {
    arr = arr.filter((value, i) => i !== index);
    handleView();
}