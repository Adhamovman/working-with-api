let usersRow = document.querySelector(".users-row");

function renderUsers({ name, username, email, phone, website, id }) {
  return `<div class="col-md-6 col-lg-4 mb-3">
   <div class="card">
     <div class="card-body">
       <h5 class="card-title">${name}</h5>
       <h6 class="card-subtitle mb-2 text-muted">${username}</h6>
      <div class="d-flex flex-column py-2 mb-2 ">
      <div class="d-flex"> <p class="m-0 me-1">Email:</p> <a href="#" class="ms-0 card-link">
       ${email}
       </a></div>
       <div class="d-flex"> <p class="m-0 me-1">Website:</p> <a href="#" class="ms-0 card-link">
       ${website}
       </a> </div>
       <div class="d-flex"> <p class="m-0 me-1">Phone:</p> <a href="#" class="ms-0 card-link">
       ${phone}
       </a></div>
        </div>
       <div class="d-flex justify-content-between">
        <a onclick="saveId(${id})" style="color:white" class="btn btn-info" href="posts.html">Go posts</a>
        <a onclick="saveId(${id})" style="color:white" class="btn btn btn-info" href="todos.html">Go todos</a>
       </div>
       <a onclick="saveId(${id})" class="mt-2 w-100 btn btn-primary"  href="album.html">Go to album</a>
     </div>
   </div>
 </div>`;
}
async function getUsers() {
  usersRow.innerHTML = "..loading";

  let res = await fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => json);
  usersRow.innerHTML = "";
  res.forEach((user) => {
    usersRow.innerHTML += renderUsers(user);
  });
}
getUsers();

function saveId(id) {
    localStorage.setItem("userId", id);
}