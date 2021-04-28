const comicList = document.getElementById("comicsList");
console.log(comicList);
const searchBar = document.getElementById("searchBar");

let comics = [];
let counter = 0;
// filter search listening with keyup case insensitive
searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();

  counter = searchString.length;
  console.log(counter);
  if (!searchString.length || searchString.length < 3) {
    comicList.innerHTML = "";
  } else {
    const filteredComics = comics.comics.filter((comic) => {
      // console.log(comic.title);
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

// this makes a request and get all the comics json
const loadComics = async () => {
  try {
    const res = await fetch("/api/titles");
    comics = await res.json();
    // displayComics(comics);
  } catch (err) {
    console.error(err);
  }
};

// If you prefer to render html dynamically
// it could be done this way!

const displayComics = (comics) => {
  console.log(comics);

  const htmlString = comics
    .map((comic) => {
      return `
  <div class="dropdown__search-bar>
        <li class="search__dropdown-bar" id="comicsSearch">
            <a id=searchText href="/comics/${comic.id}"> ${comic.title}</a>
         </li>
  </div>
  `;
    })
    .join("");
  comicList.innerHTML = htmlString;
};

loadComics();
