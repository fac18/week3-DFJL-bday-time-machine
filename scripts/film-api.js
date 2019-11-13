(function() {
  const xhr = new XMLHttpRequest();
  const birthday = document.querySelector(".input-date");
  const url = "https://api.themoviedb.org/3/discover/movie?";
  const api_key = "9ec25de3852c136e9679b83b4d5f1ad2";
  const year = 2019;

  const filmOutput = document.querySelector(".film-output");
  const filmImage = document.querySelector(".film-image");
  const filmTitle = document.querySelector(".film-title");
  const filmDate = document.querySelector(".film-date");
  const filmOverview = document.querySelector(".film-overview");
 

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const filmObjs = JSON.parse(xhr.responseText).results;
      let topFilms = [];
        filmObjs.forEach((x, i) => {
          if (i<3) {
            let film = {
              id: x.id,
              image: x.poster_path,
              title: x.title,
              release_date: x.release_date,
              overview: x.overview
            }
          topFilms.push(film))};
          filmOutput.innerHTML = xhr.responseText;
          filmImage.src = topFilms.film.image;
          filmTitle.textContent = topFilms.film.title;
          filmDate.textContent = topFilms.film.release_date;
          filmOverview.textContent = topFilms.film.overview;

          console.log(topFilms);
        }
  };
xhr.open("GET", "https://api.themoviedb.org/3/discover/movie?primary_release_year.lte=2019&api_key=9ec25de3852c136e9679b83b4d5f1ad2&sort_by=popularity.desc", true);
xhr.send();

})();