let postId = localStorage.getItem("postId");
console.log(postId);
let commenstRow = document.querySelector(".comments-row");
function renderUsers({ name, body, email}) {
  return `
  <div class="card border-info text-bg-light mb-3">
  <div class="card-body pb-0">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">
      ${body}
    </p>
    <div class="d-flex">
      <p>Email:</p>
      <a href="mailto: ${email}" class="card-link ms-2">${email}</a>
    </div>
  </div>
</div>
    `;
}
async function getUsers() {
  commenstRow.innerHTML = "..loading";
  let res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    )
    .then((response) => response.json())
    .then((json) => json);
    commenstRow.innerHTML = "";
    res.forEach((user) => {
      commenstRow.innerHTML += renderUsers(user);
    });
}
getUsers();
