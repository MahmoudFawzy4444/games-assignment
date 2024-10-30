"use strict";
const loaderBLock = document.getElementById("loaderBlock");
export default class Ui {
  async getGamesFromGenre(genre) {
    loaderBLock.classList.replace("d-none", "d-flex");
    let response = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${genre}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "3b3f46477fmshb1d191138e170abp158628jsnc743c9cc5bf8",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      }
    );
    loaderBLock.classList.replace("d-flex", "d-none");
    let data = await response.json();
    console.log(data);
    return data;
  }
}
