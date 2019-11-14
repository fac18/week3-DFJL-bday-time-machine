const filmsSection = document.querySelector(".films");
let myFilmKey = "9ec25de3852c136e9679b83b4d5f1ad2"; // fetch key from .config file
let topFilms = []; // declare topFilms array with global scope

submitBtn.addEventListener("click", function(event) {
  event.preventDefault();

  const xhr = new XMLHttpRequest();
  let year = document.querySelector(".input-date").value;

  xhr.onload = function() {
    if (xhr.status === 200) {
      const filmObjs = JSON.parse(xhr.responseText).results;
      topFilms = []; // reset topFilms array
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
      filmsSection.innerHTML = ""; // clear films section
      injectFilms(topFilms); // populate films section
    }
  };
  xhr.open(
    "GET",
    `https://api.themoviedb.org/3/discover/movie?primary_release_year=${year}&api_key=${myFilmKey}`,
    true
  );
  xhr.send();
});

const injectFilms = filmArray => {
  filmArray.forEach((x, i) => {
    //create div for each object
    let filmOutput = document.createElement("div");
    filmOutput.classList.add(`films__${i}`);

    // create image title, date and overview elements, for each div
    let filmImage = document.createElement("img");
    filmImage.classList.add("films__image");
    filmImage.src = "https://image.tmdb.org/t/p/w400/" + x.image;
    filmImage.alt = `Poster for the film ${x.title}`;

    const filmTitle = document.createElement("h3");
    filmTitle.classList.add("films__title");
    filmTitle.textContent = x.title;

    const filmDate = document.createElement("p");
    filmDate.classList.add("films__date");
    filmDate.textContent = x.release_date;

    const filmOverview = document.createElement("p");
    filmOverview.classList.add("films__overview");
    filmOverview.textContent = x.overview;

    // Append child elements to filmoutput
    filmOutput.appendChild(filmImage);
    filmOutput.appendChild(filmTitle);
    filmOutput.appendChild(filmDate);
    filmOutput.appendChild(filmOverview);

    // Finally append whole div to film section
    filmsSection.appendChild(filmOutput);
  });
};
