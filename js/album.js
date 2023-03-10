const userId = localStorage.getItem("userId");
const albumRow = document.querySelector(".album-row");
const page = userId;
const limit = 10;

function renderUsers({ title, id }) {
  return `
  <div class="cardd">
   <div class="card">
     <div class="card-body">
       <h5 class="card-title">${title}}</h5>
       <a onclick="saveAlbumId(${id})" class="mt-2 w-100 btn btn-primary"  href="photos.html">Go to photos</a>
     </div>
   </div>
 </div>
  `;
}
async function getUsers() {
    albumRow.innerHTML = "..loading";

    let res = await fetch(
        `https://jsonplaceholder.typicode.com/albums?_limit=${limit}&_page=${page}`
        )
        .then((response) => response.json())
        .then((json) => json);
        albumRow.innerHTML = "";
  res.forEach((user) => {
    albumRow.innerHTML += renderUsers(user);
  });
}
getUsers();
function saveAlbumId(id) {
  localStorage.setItem("albumId", id);
}
