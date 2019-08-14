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
    const _email = document.createElement("h2");
    _email.innerText = row.EMAIL;
    const date = document.createElement("h3");
    date.innerText = row.DATE;
    const email = document.createElement("p");
    email.innerText = row.EMAIL
    const tags = document.createElement("p");
    tags.innerText = row.TAGS;
    const postContent = document.createElement("p");
    postContent.innerText = row.POST;
    post.appendChild(title);
    post.appendChild(name);
    post.appendChild(email);
    post.appendChild(date);
    post.appendChild(postContent);
    post.appendChild(email);
    post.appendChild(tags);
    posts.appendChild(post);
}



// Creates post from data in firebase
database.on("child_added", createPost)