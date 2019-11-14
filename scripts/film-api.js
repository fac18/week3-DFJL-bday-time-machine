(function() {
  const xhr = new XMLHttpRequest();
  const birthday = document.querySelector(".input-date");
  const url = "https://api.themoviedb.org/3/discover/movie?";
  const api_key = "9ec25de3852c136e9679b83b4d5f1ad2";
  const year = 2019;

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const filmObjs = JSON.parse(xhr.responseText).results;
      let topFilms = [];
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
      console.log("topFilms: ", topFilms);
      // filmOutput.innerHTML = xhr.responseText;
      topFilms.forEach((x, i) => {
        console.log(topFilms[0].title);
        //create div for each object
        // create image title, date and overview elements, for each div
        var newDiv = document.createElement("div");
        document.getElementById("film-output").appendChild(newDiv);
        newDiv.className = "film number [i]";
        console.log([i].image);
        // const filmImage = document.querySelector("#film-image");
        const filmTitle = document.createTextNode("");
        filmTitle.textContent = topFilms[i].title;
        const filmDate = document.createTextNode("");
        filmDate.textContent = topFilms[i].release_date;
        const filmOverview = document.createTextNode("");
        filmOverview.textContent = topFilms[i].overview;

        newDiv.appendChild(filmTitle);
        newDiv.appendChild(filmDate);
        newDiv.appendChild(filmOverview);

        //
        //

        console.log(topFilms);
      });
    }
  };
  xhr.open(
    "GET",
    "https://api.themoviedb.org/3/discover/movie?primary_release_year.lte=2019&api_key=9ec25de3852c136e9679b83b4d5f1ad2&sort_by=popularity.desc",
    true
  );
  xhr.send();
})();
