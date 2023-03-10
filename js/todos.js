
const userId = localStorage.getItem("userId");
const todosRow = document.querySelector(".todos-row");
const page = userId;
const limit = 10;

function renderUsers({ title, completed}) {
  return `
  <div class="card mb-3">
    <div class="card-body d-flex justify-content-between align-items-center">
     <h5 class="card-title m-0">${title}</h5>
  
     <p class="btn btn-primary m-0 ${completed ? "bg-success border-success" : "bg-danger border-danger" }">${completed ? "Completed" : "Not completed"}</p>
    </div>
  </div>
  `;
}
async function getUsers() {
  todosRow.innerHTML = "..loading";

  let res = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`
    )
    .then((response) => response.json())
    .then((json) => json);
    todosRow.innerHTML = "";
    res.forEach((user) => {
    todosRow.innerHTML += renderUsers(user);
  });
}
getUsers();
