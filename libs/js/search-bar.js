// Get search bar 
const searchBar = document.querySelector('#search-bar');

// Add event listener
searchBar.addEventListener("keyup", filterName);

function filterName() {
    // Get value of input
    const searchBarValue = document.querySelector('#search-bar').value.toUpperCase();
    
    // Get posts
    const posts = document.querySelector(".posts");

    // Get post from posts
    const post = posts.querySelectorAll(".post");

    // Loop through each post
    for (let i = 0; i < post.length; i++) {
        const tag = post[i].getElementsByClassName('tags')[0];

        if (tag.innerHTML.toUpperCase().indexOf(searchBarValue) > -1) {
            post[i].style.display = "";
        } else {
            post[i].style.display = "none";
        }
    }
}