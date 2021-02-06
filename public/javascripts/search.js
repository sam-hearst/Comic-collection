// window.addEventListener("load", (event) => {
//   console.log("hello from javascript!");

//   const myFunction = () => {
//     let input, filter, ul, li, a, i, txtValue;

//     input = document.getElementById("myInput");
//     // console.log(input);

//     filter = input.value.toUpperCase();
//     console.log(filter);

//     ul = document.getElementById("myUL");
//     console.log(ul);

//     li = ul.getElementsByTagName("LI");
//     console.log(li);

//     // this doesnt work
//     // a = getElementsByTagName("a");
//     // console.log(a);
//     // var x = document.getElementsByTagName("*");
//     // console.log(x);

//     for (i = 0; i < li.length; i++) {
//       a = li[i].getElementsByTagName("a")[0];
//       txtValue = a.textContent || a.innerText;
//       console.log(a.textContent);
//       console.log(a.innerText);

//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         li[i].style.display = "";
//       } else {
//         li[i].style.display = "none";
//       }
//     }
//     // myFunction();
//   };

//   const btn = document.querySelector(".search-bar__submit");
//   btn.addEventListener("click", (e) => {
//     myFunction();
//     e.preventDefault();
//   });
// });

const comicList = document.getElementById("comicsList");

const searchBar = document.getElementById("searchBar");

let comics = [];

// filter search listening with keyup case insensitive
searchBar.addEventListener("keyup", (e) => {
  // console.log(e.target.value);
  const searchString = e.target.value.toLowerCase();
  const filteredComics = comics.comics.filter((comic) => {
    console.log(comic.title);
    return (
      comic.title.toLowerCase().includes(searchString) ||
      comic.description.toLowerCase().includes(searchString) ||
      comic.author.toLowerCase().includes(searchString) ||
      comic.publisher.toLowerCase().includes(searchString) ||
      comic.price.includes(searchString)
    );

    // displayComics(filteredComics);
  });

  console.log(filteredComics);
});

// this makes a request and get all the comics json
const loadComics = async () => {
  try {
    const res = await fetch("/api/titles");
    comics = await res.json();
    // displayComics(comics);
    // console.log(comics);
  } catch (err) {
    console.error(err);
  }
};

// If you prefer to render html dynamically
// it could be done this way!

// const displayComics = (comics) => {
//   const htmlString = comics.comics
//     .map((comic) => {
//       return `
//   <li class="comics">
//       <h2>${comic.title}</h2>
//       <p>publisher:${comic.publisher}</p>
//       <img src="${comic.imageUrl}"></img>
//       </li>

//   `;
//     })
//     .join("");
//   comicList.innerHTML = htmlString;
// };

loadComics();
