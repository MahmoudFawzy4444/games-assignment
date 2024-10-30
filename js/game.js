let details = document.getElementById("detailsContent");
let page = document.getElementById("pageContent");
console.log(details);
export default class Game {
  constructor(title, short_description, genre, platform, img) {
    this.title = title;
    this.short_description = short_description;
    this.genre = genre;
    this.platform = platform;
    this.img = img;
  }
  addGame() {
    let gameElement = document.createElement("div");
    gameElement.classList.add("col-md-3");
    gameElement.innerHTML = `
    <div class="card bg-transparent text-white h-100">
        <img
            src="${this.img}"
            alt=""
            class="pt-3 w-100"
        />
        <div class="card-body">
            <div class="header-content d-flex justify-content-between">
            <p class="p-1 rounded-1">${this.title}</p>
            <p class="free-btn px-2 rounded-2 bg-primary">free</p>
            </div>
            <p class="card-text">
            ${this.short_description}
            </p>
        </div>
        <div class="card-footer d-flex justify-content-between">
            <span>${this.genre.toUpperCase()}</span> <span>${
      this.platform
    }</span>
    </div>
        `;
    return gameElement;
  }
  showGamesDetail() {
    console.log(this);
    details.innerHTML = `
          <div class="header-title d-flex justify-content-between pt-5">
          <h2>Details Game</h2>
          <i id="closeBtn" class="text-decoration-none text-white fa-solid fa-x fs-3"></i>
        </div>
        <div class="row details-container d-flex mt-3">
          <div class="col-md-4 pt-2 ps-0">
            <img
              src=${this.img}
              alt=""
              class="object-fit-contain w-100"
            />
          </div>
          <div class="col-md-8 movie-info d-flex flex-column">
            <h2>Title: ${this.title}</h2>
            <p>Category: <span>${this.genre.toUpperCase()}</span></p>
            <p>Platform: <span>${this.platform}</span></p>
            <p>${this.short_description}
            </p>
            <button
              class="show-game btn btn-secondary w-25 bg-transparent border border-warning"
            >
              Show Game
            </button>
          </div>
        </div>
  `;
    details.classList.replace("d-none", "d-block");
    page.classList.replace("d-block", "d-none");
  }
  hideGameDetails() {
    details.classList.replace("d-block", "d-none");
    page.classList.replace("d-none", "d-block");
  }
}
