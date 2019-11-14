// import topFilms from "./film-api.js";

// hard code example import until import problem fixed
const topFilms = [
  {
    id: 1,
    image: "poster.jpg",
    title: "Joker",
    release_date: 2019,
    overview: "A film about class war."
  }
];

const filmsSection = document.querySelector(".films");

console.log("topfilms in dom: ", topFilms);
console.log("typeof: ", typeof topFilms);

const createFilmsFunction = function(filmArray) {
  // for (let i = 0; i < filmObject.length; i++) {
  console.log(filmArray);
  console.log("forEach running");
  console.log(filmArray[0].title);
  //create div for each object
  // create image title, date and overview elements, for each div
  let filmOutput = document.createElement("div");
  // .classList.add(`films__${i}`);
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
  // }
  return "hello";
};

console.log(createFilmsFunction(topFilms));
