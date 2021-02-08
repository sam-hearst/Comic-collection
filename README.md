<h1 align="center">Comic-Collection</h1>

<p align="center">See our site hosted on heroku
<br><a href="https://comic-collections.herokuapp.com/">Comic-Collection</a></br></p>
&nbsp

## About

___

Comic-Collection is a clone of Goodreads but for comics. Users can view and search
for comics from our database. Signing up allows users to create collections of
comics and track their read status.

<p>&nbsp;</p>

![Home Page](./readme-assets/home-page.png)

## Technologies used

___

  - PostgreSQL
  - Sequelize
  - npm
  - Express.js
  - Pug.js
  - All styling was done with raw CSS, no frameworks were used.
  <p>&nbsp;</p>

## Development Environment

___

The project can be run locally through the command line with `npm start`
<p>&nbsp;</p>

## Wiki Documentation
___
  - [User Stories](https://github.com/sam-hearst/Comic-collection/wiki/User-Stories)
  - [Front End Routes](https://github.com/sam-hearst/Comic-collection/wiki/Frontend-Routes)
  - [Database Schema](https://drawsql.app/3headmonkeynyc/diagrams/comic-shelf-db-final-v1-0#)
  - [Feature List](https://github.com/sam-hearst/Comic-collection/wiki/Feature-List)
<p>&nbsp;</p>

## Key Technical Features

___

Discussion of two features that show off the team's technical abilities

### AJAX for the reviews
A key feature that shows our team's technical abilities is using AJAX on the reviews portion of our site.  A user is able to navigate to a comic and add a review for that comic.  Without refreshing, the review shows up on the page and the user then has the ability to edit and remove that review after having created it.  We accomplished this by using api routes. When the user clicks "submit review" a fetch call is made to an api which updates our database with the review and then sends back a JSON review object.  The JSON object is parsed and the information for the review is then added to the document as shown in the image below.


![Reviews](./readme-assets/reviews.png)




### Custom backgrounds for specific comics



<p>&nbsp;</p>

## Obstacles

___

Discussion of both challenges faced and the way the team solved them

### Database Schema
Since this was our first project, we had limited experience developing a full
database schema from the ground up. As we moved through the project, there were
times when we discovered features would be easier to implement with changes to
our database schema.
<p>&nbsp;</p>

### User Reviews
Using AJAX to add user reviews. .......

<p>&nbsp;</p>

## Code Samples

___

Code snippets to highlight the best code

<p>&nbsp;</p>

## Future Improvements

___

This project was a sprint. Some features we would like to include in the future
are:

  - Searching across more tags than just titles including publishers and genres.
  - Updating the database to include genres of comics to allow more refined
  browsing.
  - Updating the database to include a table of collection names to simplify
  queries and make code easier to read.
  - Generating comic book recommendations for users based on past searches and
  selections.
