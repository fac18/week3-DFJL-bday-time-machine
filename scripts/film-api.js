// export let topFilms = [];
(function() {
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
    }
  };
  xhr.open(
    "GET",
    "https://api.themoviedb.org/3/discover/movie?primary_release_year.lte=2019&api_key=9ec25de3852c136e9679b83b4d5f1ad2&sort_by=popularity.desc",
    true
  );
  xhr.send();

  const filmsSection = document.querySelector(".films");
  console.log(topFilms);

  // const createFilmsFunction = function(filmArray) {
  for (let i = 0; i < topFilms.length; i++) {
    console.log(topFilms);
    console.log("forEach running");
    console.log(topFilms[i].title);
    //create div for each object
    // create image title, date and overview elements, for each div
    let filmOutput = document.createElement("div").classList.add(`films__${i}`);
    //
    // console.log("image", filmObject[i].image);
    // // const filmImage = document.createElement
    // const filmTitle = document
    //   .createElement("h3")
    //   .classList.add("films__title");
    // filmTitle.textContent = filmObject[i].title;
    // const filmDate = document.createElement("p").classList.add("films__date");
    // filmDate.textContent = filmObject[i].release_date;
    // const filmOverview = document
    //   .createElement("p")
    //   .classList.add("films__overview");
    // filmOverview.textContent = filmObject[i].overview;

    filmsSection.appendChild(filmOutput);
  }
  // };

  // createFilmsFunction(topFilms);
})();
