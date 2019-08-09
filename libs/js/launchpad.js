// Set up firebase
const database = firebase.database().ref();

// Database functions
function resetForm() {
    const title = document.querySelector("#title-input input");
    const date = document.querySelector("#date-input input");
    const name = document.querySelector("#name-input input");
    const post = document.querySelector("#post-input input");
    
    title.value = null;
    date.value = null;
    name.value = null;
    post.value = null;
}

function createDataObj() {
    let dataObj = {};
    const title = document.querySelector("#title-input input");
    const date = document.querySelector("#date-input input");
    const name = document.querySelector("#name-input input");
    const post = document.querySelector("#post-input input");
    if (title.value === "" || date.value === "" || name.value === "" || post.value === "") {
        alert("Fill out every launchpad form");
    } else {
        dataObj.TITLE = title.value;
        dataObj.DATE = date.value;
        dataObj.NAME = name.value;
        dataObj.POST = post.value;
    }
    return dataObj;
}


const submitToDatabase = evnt => {
    evnt.preventDefault();
    
    const postInfo = createDataObj();

    if (Object.keys(postInfo).length === 4) {
        resetForm();
    }

    database.push(postInfo);
    
}



// Sending data to database
const launchPadForm = document.querySelector(".launchpad-form");

launchPadForm.addEventListener("submit", submitToDatabase);