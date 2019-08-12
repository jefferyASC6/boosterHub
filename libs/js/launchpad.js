// Set up firebase
const database = firebase.database().ref();

// Database functions
function resetForm() {
    const title = document.querySelector("#title-input input");
    const date = document.querySelector("#date-input input");
    const name = document.querySelector("#name-input input");
    const email = document.querySelector("#email-input input");
    const post = document.querySelector("#post-input input");
    
    title.value = "";
    date.value = "";
    name.value = "";
    post.value = "";
    email.value = "";
}

function createDataObj() {
    let dataObj = {};
    const title = document.querySelector("#title-input input");
    const date = document.querySelector("#date-input input");
    const name = document.querySelector("#name-input input");
    const email = document.querySelector("#email-input input");
    const post = document.querySelector("#post-input input");
    dataObj.TITLE = title.value;
    dataObj.DATE = date.value;
    dataObj.NAME = name.value;
    dataObj.EMAIL = email.value
    dataObj.POST = post.value;
    return dataObj;
}


const submitToDatabase = evnt => {
    evnt.preventDefault();
    
    const postInfo = createDataObj();

    if (Object.keys(postInfo).length === 5) {
        resetForm();
    }

    database.push(postInfo);
    
}



// Sending data to database
const launchPadForm = document.querySelector(".launchpad-form");

launchPadForm.addEventListener("submit", submitToDatabase);