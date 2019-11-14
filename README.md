BDAY TIME MACHINE!

## Installation guidelines

__Step 1:__ 
Create new API keys at:

Musixmatch - https://developer.musixmatch.com/documentation

The Movie DB - https://www.themoviedb.org/documentation/api

__Step 2:__
Refer to config.template file which has the following contents: 

```// add your api keys and rename this file 'config.js' to make me work!
let config = {
  MY_MUSIC_KEY: "your-musixmatch-key",
  MY_FILM_KEY: "your-moviedb-key"
};
```
__Step 3:__
Add your API keys for Musixmatch and The Movie DB fields.

__Step 4:__ 
Save file and rename as 'config.js' and the site should now be able to access APIs with your keys when you hit submit!


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

1. The [Chrome extension](https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc) solution

2. The [CORS Anywhere proxy](https://cors-anywhere.herokuapp.com/) solution

3. Contact Musixmatch and ask them to whitelist our origin...

3. Some unknown solution that genuinely solves the problem!


---

## Asynchronicity

---

We had two API files and we decided that first we would be able to do all of the dom manipulation in one. So we starter creating our elements from our array of objects in dom.js

We not-so-soon realised that we couldn't do this because:
1. one pair worked on bringing in the information from the submit button while the other wanted to take the take the information from the xhr (from the api files) and push that back into the html
2. So we went back to working in the api files again

Issues:
1. You cannot add a class to an element that doesn't exist
2. the xhr request actually takes time! 
3. Google dev tools update live and this can make you wonder what you were doing wrong

---

![Help me](https://media.giphy.com/media/FqAwoNjVneJxK/giphy.gif)

---

We couldn't

## Hide your API keys! 

SECURE YOUR STUFF

Your API key is your identifier
