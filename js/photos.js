const albumId = localStorage.getItem("albumId");
const photosRow = document.querySelector(".photos-row");
const limit = 10;
let page = albumId;

function renderUsers({ title, url }) {
  return `
  <div class="cardd">
  <div class="card">
  <img src=${url} class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${title}</p>
  </div>
</div> </div>
`;
}
async function getUsers() {
  photosRow.innerHTML = "..loading";
  let res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_page=${page}`
  )
    .then((response) => response.json())
    .then((json) => json);
  photosRow.innerHTML = "";
  res.forEach((user) => {
    photosRow.innerHTML += renderUsers(user);
  });
}
getUsers();

let pagination = document.querySelector(".pagination");

function getPagination() {
  let pagination_numbers = "";
  Array(10)
    .fill(1)
    .forEach((item, index) => {
      pagination_numbers += `<li class="page-item ${
        page == index + 1 ? "active" : ""
      }" onclick="getPage(${index + 1})">
        <span class="page-link">
          ${index + 1}
        </span>
      </li>`;
    });

  pagination.innerHTML = `
    <li onclick="getPage('-')" class="page-item ${
      page == 1 ? "disabled" : ""
    }"><button class="page-link cursor-pointer" href="#">Previous</button></li>
    ${pagination_numbers}
    <li onclick="getPage('+')" class="page-item cursor-pointer ${
      page == 10 ? "disabled" : ""
    }"><button class="page-link cursor-pointer" href="#">Next</button></li>
  `;
}

getPagination();

function getPage(p) {
  if (p == "+") {
    page++;
  } else if (p == "-") {
    page--;
  } else {
    page = p;
  }
  getUsers();
  getPagination();
  if (page >= 1 && page <= 10) {
    getUsers();
    getPagination();
  }
}
