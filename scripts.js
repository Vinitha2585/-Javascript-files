
let arr = [];
let isEdit = null;

const input = document.getElementById('input');
const list = document.getElementById('list');

// Create
function addValue() {

    if (input.value === "") {
        return;
    }

    if (isEdit !== null) {
        console.log('true');
        arr[isEdit] = input.value;
        isEdit = null;
    }
    else {
        console.log('false');
        arr.push(input.value);
    }

    input.value = "";
    displayvalue();
}

// Read
function displayvalue() {
    list.innerHTML = "";

    arr.forEach((value, index) => {
        const li = document.createElement('li');

        li.innerHTML = `
            ${value}
            <button onclick="handlequery(${index})">Update</button>
            <button onclick="handledelete(${index})">Delete</button>
        `;

        list.appendChild(li);
    });
}

// Update
function handlequery(index) {
    input.value = arr[index];
    isEdit = index;
}

// Delete
function handledelete(index) {
    arr.splice(index, 1);
    displayvalue();
}

