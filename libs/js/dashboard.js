const database = firebase.database().ref();
const body = document.querySelector("body");

const createPost = (rowData) => {
    const row = rowData.val();
    const h1 = document.createElement("h1");
    h1.innerText = row.TITLE;
    body.appendChild(h1)
}



// Creates post from data in firebase
database.on("child_added", createPost)