// DOM variables I need for CRUD operations
const form = document.querySelector(".constellation-grid-form");
const table = document.querySelector("tbody");

// Input fields
const name = document.querySelector(".contact-name-input input");
const email = document.querySelector(".email-input input");
const phoneNum = document.querySelector(".phone-num-input input");

// Setting up local storage 
let itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")): []; // data we store

localStorage.setItem("items", JSON.stringify(itemsArray)); // Stores data in the ls

const data = JSON.parse(localStorage.getItem("items")); // Retrieves the data we need from the ls


////////
let selectedRow = null;
////////

// Creates an object representing each contact and stores it in ls
const moveToLocalStorage = () => {
    
    const jsonData = {
        NAME: name.value,
        EMAIL: email.value,
        PHONENUM: phoneNum.value
    };

    itemsArray.push(jsonData);
    localStorage.setItem("items", JSON.stringify(itemsArray));
}

// Inserts a new row everytime a new contact is created and stores the contact info
const insertRows = (data) => {
    const newRow = table.insertRow(table.length);

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);

    cell1.innerHTML = data.NAME;
    cell2.innerHTML = data.EMAIL;
    cell3.innerHTML = data.PHONENUM;
    cell4.innerHTML = '<a onclick="onEdit(this)">Edit</a> <a onclick="onDelete(this)">Delete</a>';
}

// Resets the form after submit
const resetForm = () => {
    const name = document.querySelector(".contact-name-input input");
    const email = document.querySelector(".email-input input");
    const phoneNum = document.querySelector(".phone-num-input input");
    name.value = "";
    email.value = "";
    phoneNum.value = "";
}

// Callback function to event listener
const createContact = () => {
    if (selectedRow === null) {
        moveToLocalStorage();
    } else {
        updateContact(selectedRow);
    }
    resetForm();
}

// Callback function to the eventlistener for the delete button
const onDelete = (td) => {
    const row = td.parentElement.parentElement;
    if (confirm("Are you sure you want to delete this contact")) {
        for (let item of itemsArray) {
            if (item.PHONENUM === row.cells[2].innerHTML) {
                itemsArray.splice(itemsArray.indexOf(item),1)
            } 
        }
        localStorage.setItem("items", JSON.stringify(itemsArray));
        document.querySelector("tbody").deleteRow(row.index);
    }
}

// Callback function to the eventlistener for the edit button
const onEdit = (td) => {
    selectedRow = td.parentElement.parentElement;
    name.value = selectedRow.cells[0].innerHTML;
    email.value = selectedRow.cells[1].innerHTML
    phoneNum.value = selectedRow.cells[2].innerHTML;
}

const updateContact = (row) => {
    for (let item of itemsArray) {
        if (item.PHONENUM === row.cells[2].innerHTML) {
            itemsArray.splice(itemsArray.indexOf(item),1);
        }
    }
    
    const jsonData = {
        NAME: name.value,
        EMAIL: email.value,
        PHONENUM: phoneNum.value
    };

    itemsArray.push(jsonData);

    localStorage.setItem("items", JSON.stringify(itemsArray));
}



// Adding event listener to the form 
form.addEventListener("submit", createContact);

// Puts the contact info onto the table

data.forEach(item => {
    insertRows(item);
});