
const userId = localStorage.getItem("userId");
const postsRow = document.querySelector(".posts-row");
const page = userId;
const limit = 10;

function renderUsers({ title, body, id }) {
  return `
  <div class="card mb-3">
    <div class="card-body">
     <h5 class="card-title">${title}</h5>
     <p class="card-text">${body}</p>
     <a href="comments.html" onclick="savePostId(${id})" class="btn btn-primary">Go comments</a>
    </div>
  </div>
  `;
}
async function getUsers() {
  postsRow.innerHTML = "..loading";

  let res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
    )
    .then((response) => response.json())
    .then((json) => json);
    postsRow.innerHTML = "";
  res.forEach((user) => {
    postsRow.innerHTML += renderUsers(user);
  });
}
getUsers();
function savePostId(id) {
  localStorage.setItem("postId", id);
}
