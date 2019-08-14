const database = firebase.database().ref();
const posts = document.querySelector(".posts")

const createPost = (rowData) => {
    const row = rowData.val();
    const post = document.createElement("div");
    post.className = "post";
    const title = document.createElement("h1");
    title.innerText = row.TITLE;
    const name = document.createElement("h2");
    name.innerText = row.NAME;
    const email = document.createElement("h2");
    email.innerText = row.EMAIL;
    const date = document.createElement("h3");
    date.innerText = row.DATE;
    const email = document.createElement("p");
    email.innerText = row.EMAIL
    const postContent = document.createElement("p");
    postContent.innerText = row.POST;
    post.appendChild(title);
    post.appendChild(name);
    post.appendChild(email);
    post.appendChild(date);
    post.appendChild(postContent);
    post.appendChild(email);
    posts.appendChild(post);
}



// Creates post from data in firebase
database.on("child_added", createPost)