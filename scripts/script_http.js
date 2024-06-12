const url = "https://jsonplaceholder.typicode.com/posts";

const getPostsBtn = document.querySelector(".post_button");

getPostsBtn.addEventListener("click", () => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
});
