<h1 align="center">Comic Collection</h1>

<p align="center">See our site hosted on Digital Ocean using Dokku. 
<br><a href="https://comic-collection.dornk.top">Comic Collection</a></br></p>
&nbsp

## About

---

Comic Collection is a Goodreads inspired site for comics. Users can view and search
for comics from our database by name, price, author, publisher or description. Signing up allows users to create collections of comics, track comic read statuses, and review comics.



<p>&nbsp;</p>

![Home Page](./readme-assets/home-page.png)

## Technologies used

---

- PostgreSQL
- Sequelize
- npm
- Express.js
- Pug.js
- JavaScript
- All styling was done with raw CSS, no frameworks were used.
<p>&nbsp;</p>

## Development Environment

---

- The database should be generated and seeded with the sequelize commands:
- `npx dotenv sequelize-cli db:create`
- `npx dotenv sequelize-cli db:migrate`
- `npx dotenv sequelize-cli db:seed:all`
- The project can be run locally through the command line with `npm start`
<p>&nbsp;</p>

## Wiki Documentation

---

- [User Stories](https://github.com/sam-hearst/Comic-collection/wiki/User-Stories)
- [Front End Routes](https://github.com/sam-hearst/Comic-collection/wiki/Frontend-Routes)
- [Database Schema](https://drawsql.app/3headmonkeynyc/diagrams/comic-shelf-db-final-v1-0#)
- [Feature List](https://github.com/sam-hearst/Comic-collection/wiki/Feature-List)
<p>&nbsp;</p>

## Key Technical Features

---


### AJAX for the reviews
A key feature that shows our team's technical abilities is using AJAX on the reviews portion of our site.  A user
is able to navigate to a comic and add a review for that comic.  Without refreshing, the review shows up on the page and the user then has the ability to edit and remove that review after having created it.  We accomplished this by using api routes. When the user clicks "submit review" a fetch call is made to an api which updates our database with the review and then sends back a JSON review object.  The JSON object is parsed and the information for the review is then added to the document as shown in the image below.

<p align="center">
  <img src="./readme-assets/reviews-clip.gif" />
</p>




### Custom backgrounds for specific comics



Creating the search bar logic querying for all the database information was one of toughest implementations.
<p>&nbsp;</p>

## Obstacles

---


### Database Schema
Since this was our first project, we had limited experience developing a full
database schema from the ground up. As we moved through the project, there were
times when we discovered features would be easier to implement with changes to
our database schema. We were able to work through this with some minor database
updates and using eager loading with sequelize queries.

<p>&nbsp;</p>

### User Reviews

This was our first project creating a dynamic user interface from scratch. Using AJAX to add user reviews was our first AJAX implementation and required a lot of research in the documentation.

<p>&nbsp;</p>

### Styling

Styling the the website pages using raw CSS was another obstacle we had. There are hundred of lines of code just for the CSS styling. We use mixins Pug templates in order to reuse most of the code for the styling and the html/pug. This save us probably hundred of lines code as well.

<p>&nbsp;</p>

## Code Samples

---

Event listener code for the search bar. 

```javascript
searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  if (!searchString.length || searchString.length < 3) {
  } else {
    const filteredComics = comics.comics.filter((comic) => {
      console.log(comic.title);
      return (
        comic.title.toLowerCase().includes(searchString) ||
        comic.description.toLowerCase().includes(searchString) ||
        comic.author.toLowerCase().includes(searchString) ||
        comic.publisher.toLowerCase().includes(searchString) ||
        comic.price.includes(searchString)
      );
    });
    displayComics(filteredComics);
  }
});
```

Sample code used in our front-end event handling to update collection tables when a 
user adds a comic to their collection.
```javascript
const updateCollections = async (comicId, route) => {
    const response = await fetch(`/api/collections/${route}/comics/${comicId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            collection: "Want to Read"
        })
    });
    const data = await response.json()
    return data;
}
```


This is our code for editing reviews.  After having edited a review, the user then clicks submit and the new review is posted at the bottom.
```javascript
const editHandler = async (e) => {

  const reviewId = e.target.id.slice(2);
  const reviewContainer = document.querySelector('#rd' + reviewId).parentNode.parentNode;
  const reviewTools = reviewContainer.children[0];
  const descriptionContainer = reviewContainer.children[2];

  const description = descriptionContainer.children[0].innerHTML;

  reviewTools.classList.add('hidden');
  descriptionContainer.classList.add('hidden');
  const formContainer = document.createElement('div');
  formContainer.innerHTML = `
  <textarea id="et${reviewId}"name="description" >${description}</textarea>
  <button id="es${reviewId}">Save Changes </button>
  <button id="ec${reviewId}" class="editForm--cancel">Delete Changes</button>
  `
  reviewContainer.appendChild(formContainer);

  document.querySelector('#ec' + reviewId).addEventListener('click', cancelEditHandler)
  document.querySelector('#es' + reviewId).addEventListener('click', submitEditHandler)
}
```



<p>&nbsp;</p>

## Future Improvements

---

This project was a sprint. Some features we would like to include in the future
are:

- Improve the search autocomplete feature across the database and the suggestions logic.
- Updating the database to include genres of comics to allow more refined
  browsing.
- Updating the database to include a table of collection names to simplify
  queries and make code easier to read.
- Generating comic book recommendations for users based on past searches and
  selections.
- Overall styling of the all the pages on the website.
- Add more users features likes friends, followers, following, chat and notifications.
