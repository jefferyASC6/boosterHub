// From the json data we will create the articles on the webpage
/* 
url
urlToImage
title
author
description
*/


// Powered by NewsAPI

console.table(data); // display data on the console

// Articles div
const articles = document.querySelector(".articles");

const createArticle = (newsArticle) => {
    // article div to contain contents of the article
    const article = document.createElement("div");
    article.className = "article";

    // make the article into a link
    const articleLink = document.createElement("a");
    articleLink.setAttribute("href", newsArticle.url);
    articleLink.setAttribute("target", "_blank");

    // img of the article
    const img = document.createElement("img");
    img.src = newsArticle.urlToImage;
    img.style.width = "200px";
    img.style.height = "200px;"

    // title of the article
    const title = document.createElement("h1");
    title.innerText = newsArticle.title;

    // author of the article
    const author = document.createElement("h2");
    author.innerText = newsArticle.author;

    // description of the article
    const description = document.createElement("p");
    description.innerText = newsArticle.description;

    // appending contents ot article div
    articleLink.appendChild(img);
    articleLink.appendChild(title);
    articleLink.appendChild(author);
    articleLink.appendChild(description);


    article.appendChild(articleLink);

    // appending article div to articles div
    articles.appendChild(article);
}

data.forEach(createArticle);