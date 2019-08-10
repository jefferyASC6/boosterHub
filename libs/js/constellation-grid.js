// Form
const form = document.querySelector(".constellation-grid-form");

const moveToLocalStorage = () => {
    const name = document.querySelector(".contact-name-input input");
    const email = document.querySelector(".email-input input");
    const phoneNum = document.querySelector(".phone-num-input input");
    
    jsonData = {
        NAME: name.value,
        EMAIL: email.value,
        PHONENUM: phoneNum.value
    };

    localStorage.setItem(`${name.value}`, JSON.stringify(jsonData));
}


const createContact = (evnt) => {
    evnt.preventDefault();
    moveToLocalStorage();
}


form.addEventListener("submit", createContact);