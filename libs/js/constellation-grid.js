// Form
const form = document.querySelector(".constellation-grid-form");
const table = document.querySelector("tbody");
const name = document.querySelector(".contact-name-input input");
const email = document.querySelector(".email-input input");
const phoneNum = document.querySelector(".phone-num-input input");

let itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")): [];

localStorage.setItem("items", JSON.stringify(itemsArray));

const data = JSON.parse(localStorage.getItem("items"));

const moveToLocalStorage = () => {
    
    const jsonData = {
        NAME: name.value,
        EMAIL: email.value,
        PHONENUM: phoneNum.value
    };

    itemsArray.push(jsonData);
    localStorage.setItem("items", JSON.stringify(itemsArray));
}

const insertRows = (data) => {
    const newRow = table.insertRow(table.length);

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);

    cell1.innerHTML = data.NAME;
    cell2.innerHTML = data.EMAIL;
    cell3.innerHTML = data.PHONENUM;
    cell4.innerHTML = '<a>Edit</a> <a onclick="onDelete(this)">Delete</a>';
}

const resetForm = () => {
    const name = document.querySelector(".contact-name-input input");
    const email = document.querySelector(".email-input input");
    const phoneNum = document.querySelector(".phone-num-input input");
    name.value = "";
    email.value = "";
    phoneNum.value = "";
}


const createContact = (evnt) => {
    evnt.preventDefault();
    moveToLocalStorage();
    resetForm();
}

const onDelete = (td) => {
    const row = td.parentElement.parentElement;
    if (confirm("Are you sure you want to delete this contact")) {
        for (let item of itemsArray) {
            if (item.NAME === row.cells[0].innerHTML) {
                itemsArray.splice(itemsArray.indexOf(item),1)
            } 
        }
        localStorage.setItem("items", JSON.stringify(itemsArray));
        document.querySelector("tbody").deleteRow(row.index);
    }
}

form.addEventListener("submit", createContact);


data.forEach(item => {
    insertRows(item);
});