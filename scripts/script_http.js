const url = "https://jsonplaceholder.typicode.com/posts";

const getPostsBtn = document.querySelector(".post_button");

getPostsBtn.addEventListener("click", () => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        const p = document.createElement("p");
        document.body.append(p);
        p.textContent = data[i].title;
      }
      console.log(data);
    })

    .catch((error) => {
      console.log(error);
    });
});

const photoUrl = "https://jsonplaceholder.typicode.com/photos";
const photoButton = document.querySelector(".photos_button");

photoButton.addEventListener("click", () => {
  fetch(photoUrl)
    .then((response) => {
      return response.json();
    })
    .then((photoArray) => {
      for (let i = 0; i < photoArray.length; i++) {
        const image = document.createElement("img");
        document.body.append(image);
        image.setAttribute("src", photoArray[i].thumbnailUrl);
      }
      console.log(photoArray);
    });
});

const sendPostBtn = document.querySelector(".send_form");
const postUrl = "https://jsonplaceholder.typicode.com/posts";
const user = {
  name: "Alice",
  age: 26,
  isAdmin: true,
};

sendPostBtn.addEventListener("click", () => {
  fetch(postUrl, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
});

const userUrl =
  "https://jsonplaceholder.typicode.com/users?username=Bret&email=Sincere@april.biz";

const getUserBtn = document.querySelector(".get_user");

getUserBtn.addEventListener("click", () => {
  fetch(userUrl)
    .then((response) => {
      return response.json();
    })
    .then((user) => {
      console.log(user[0].company.name);
    });
});
