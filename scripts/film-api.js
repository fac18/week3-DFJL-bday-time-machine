// export let topFilms = [];

let topFilms = [];

const xhr = new XMLHttpRequest();
const birthday = document.querySelector(".input-date");
const url = "https://api.themoviedb.org/3/discover/movie?";
const api_key = "9ec25de3852c136e9679b83b4d5f1ad2";
const year = 2019;
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    const filmObjs = JSON.parse(xhr.responseText).results;
    filmObjs.forEach((x, i) => {
      if (i < 3) {
        let film = {
          id: x.id,
          image: x.poster_path,
          title: x.title,
          release_date: x.release_date,
          overview: x.overview
        };
        topFilms.push(film);
      }
    });
    createFilmsNode(topFilms);
  }
};
xhr.open(
  "GET",
  "https://api.themoviedb.org/3/discover/movie?primary_release_year.lte=2019&api_key=9ec25de3852c136e9679b83b4d5f1ad2&sort_by=popularity.desc",
  true
);
xhr.send();

const filmsSection = document.querySelector(".films");

const createFilmsNode = function(filmArray) {
  for (let i = 0; i < 3; i++) {
    //create div for each object
    let filmOutput = document.createElement("div");
    // .classList.add(`films__${i}`);

    // create image title, date and overview elements, for each div
    let filmImage = document.createElement("img");
    // .classList.add("films__image");
    filmImage.src = "https://image.tmdb.org/t/p/w500/" + filmArray[i].image;
    console.log(filmImage);
    const filmTitle = document.createElement("h3");
    // .classList.add("films__title");

    filmTitle.textContent = filmArray[i].title;

    const filmDate = document.createElement("p");
    // .classList.add("films__date");
    filmDate.textContent = filmArray[i].release_date;

    const filmOverview = document.createElement("p");
    // .classList.add("films__overview");
    filmOverview.textContent = filmArray[i].overview;

    // Append child elements to filmoutput
    filmOutput.appendChild(filmImage);
    filmOutput.appendChild(filmTitle);
    filmOutput.appendChild(filmDate);
    filmOutput.appendChild(filmOverview);

    filmsSection.appendChild(filmOutput);
  }
};

// createFilmsFunction(topFilms);
