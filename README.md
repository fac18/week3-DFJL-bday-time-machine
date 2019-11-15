# BDAY TIME MACHINE

---

## Installation guidelines

__Step 1:__ 
Clone the repo: `https://github.com/fac18/week3-DFJL-bday-time-machine.git`

__Step 2:__
Create new API keys for each service:

* [Musixmatch](https://developer.musixmatch.com/documentation)
* [The Movie DB](https://www.themoviedb.org/documentation/api)

---

__Step 3:__
Refer to config.template file which has the following contents: 

```javascript=
let config = {
  MY_MUSIC_KEY: "your-musixmatch-key",
  MY_FILM_KEY: "your-moviedb-key"
};
```
__Step 4:__
Add your API keys for Musixmatch and The Movie DB to the appropriate fields.

---

__Step 5:__ 
Rename and save the file as 'config.js' - the site should now be able to access the APIs with your keys when you hit submit!

![yes](https://media.giphy.com/media/3rUbeDiLFMtAOIBErf/giphy.gif)

---

## Process

We started off looking at the list of recommended APIs and discussed ideas on which ones would be suitable to reflect the personalities of our team.  

We quickly agreed on an 80s BACK TO THE FUTURE THEME which would incorporate the Movie DB API and Musixmatch API to let you go back in time to the year of your birth! What was the world like?

---

We sketched out a template of what the one page site would look like: 
![Photo of our wire frame](https://i.imgur.com/AdB4HX6.jpg)

---

Followed by a list of tasks that we would commit as issues: 
![Image of our initial issues](https://i.imgur.com/ZMuTHmM.jpg)

---

As well as a timeline to keep us organised for the next two days: 
![Image of our project schedule](https://i.imgur.com/6MAu30Y.jpg)

---

We agreed agreed on how we would structure all of the files. We mobbed the most basic of basic html files and then created our seperate api JS files before going on to work.

---

## CORS

![](https://i.imgur.com/oCRNX21.jpg)

One problem we had with *Musixmatch* was that our XHR was blocked by their server's _CORS policy_.

Specifically, our _preflight request_ didn't pass their control check:

`No 'Access-Control-Allow-Origin' header is present on the requested resource`

---

### Solutions

1. The [Chrome extension](https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc) solution (actually, [this one](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf) worked better)

2. The [CORS Anywhere](https://cors-anywhere.herokuapp.com/) proxy API (mediating server) solution

3. Contact Musixmatch and ask them to whitelist our origin (http://127.0.0.1:3000/)

4. Some unknown solution that genuinely solves the problem!


---

## Asynchronicity (and some file structuring)

---

We had two API files and we decided that first we would be able to do all of the dom manipulation in one. So we starter creating our elements from our array of objects in dom.js

---

We wanted to make our xhr function as clean as possible and so were creating our nodes and elements outside of the function but still in the api.js file

![](https://i.imgur.com/mw5pUho.png)

---

We really struggled working out what was going wrong because we were able to run the function to create our elements, the api output was being console.log()d but we could not _create_ elements for the output.

---
Console displays an empty looking array:
![](https://i.imgur.com/4WogJRx.png)
The console later updates the array, once the xhr request had been completed.
![](https://i.imgur.com/WrjOb1i.png)

Solved it by calling the function inside of the xhr.onload function

---

## Hiding your API keys

### SECURE YOUR STUFF!

Once it becomes public, anyone can use it, and possibly abuse it!


We didnt realise this until we had already pushed our work onto Github...

---

### Don't worry though!
Apparently we can still remove our API keys from previously pushed commits by a way of purging from our repository's history!

*Stretch goal* - consult github help! https://help.github.com/articles/remove-sensitive-data/

---

## Responding to issues

---

### Refactoring/abstraction

In our `music-api.js` file we were producing our nodes in a very verbose fashion (thanks to @tonylomax for raising this).

```javascript=
const musicTitle = document.createElement("h3");
musicTitle.classList.add("music__title");
musicTitle.textContent = x.title;

const musicAlbum = document.createElement("p");
musicAlbum.classList.add("music__album");
musicAlbum.textContent = x.album;

const musicArtist = document.createElement("p");
musicArtist.classList.add("music__artist");
musicArtist.textContent = x.artist;
```

---

We would then assign them one by one.

```javascript=
musicOutput.appendChild(musicTitle);
musicOutput.appendChild(musicArtist);
musicOutput.appendChild(musicAlbum);
```

---

By writing a function to handle node production...

```javascript=
const makeMusicNode = function(el, object, key) {
  let node = document.createElement(el);
  node.classList.add(`music__${key}`);
  node.textContent = object[key];
  return node;
};
```

we could make and assign nodes in one line each!

```javascript=
musicOutput.appendChild(makeMusicNode("h3", x, "title"));
musicOutput.appendChild(makeMusicNode("p", x, "album"));
musicOutput.appendChild(makeMusicNode("p", x, "artist"));
```

---

## Stop Go Continue

![stop go continue](https://github.com/fac18/week3-DFJL-bday-time-machine/blob/master/Image%20from%20iOS.jpg)
