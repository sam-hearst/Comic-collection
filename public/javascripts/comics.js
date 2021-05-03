
//function to find active collections and append the 'collectionButton--active' class to each classList

async function highlightActiveCollections() {
    //find the comic id from the url
    const url = window.location.href.split('/')
    const comicId = url[url.length - 1]

    // fetch the list of collections for the given comic and user
    const response = await fetch(`/api/comics/${comicId}`)
    const collectionList = await response.json()

    // Edit the DOM here to alter classes for the buttons
    const collectionButtons = document.getElementsByClassName('collectionButton')
    for (let i = 0; i < collectionButtons.length; i++) {
        let button = collectionButtons[i];
        if (collectionList.includes(button.value)) {
            button.classList.add('collectionButton--active')
        }
    }
}

// append the class to active buttons on page load
document.addEventListener('DOMContentLoaded', highlightActiveCollections)


// this is a helper function for CRUD operations in the sidebar
function isAddRoute() {
    const defaultCollections = document.getElementsByClassName('defaultCollection');

    for (let i = 0; i < defaultCollections.length; i++) {
        if (defaultCollections[i].classList.contains('collectionButton--active')) {
            return false
        }
    }

    return true
}


// CRUD operations for sidebar --> soley default collections
// Trying to split up default and custom
// selecting buttons within read status
document
    .querySelector('.read-statuses')
    .addEventListener('click', async (e) => {
        const button = e.target

        // first if is for the delete route
        // if the button has active and is clicked then must be a delete route
        if (button.classList.contains('collectionButton--active')) {
            button.classList.remove("collectionButton--active");
            const collection = e.target.value.split(' ').join('-');
            const comicId = e.target.id

            // remove comic from collection and return comic
            async function deleteComicFromReadCollection(comicId, collection) {
                const response = await fetch(`/api/comics/${comicId}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ collection })
                })

                if (response.ok) {
                    const data = await response.json();
                    return data
                }
            }

            // now have to check if comic is display in sidebar collection
            // if it is, have to remove
            // if it isnt then do nothing

            const comic = await deleteComicFromReadCollection(comicId, collection);
            const rightCollection = collection.toLowerCase();
            const imgContainers = document.getElementsByClassName("sidebar__img-container");

            for (let i = 0; i < imgContainers.length; i++) {
                let imgContainer = imgContainers[i];
                if (imgContainer.id === rightCollection) { // iterate through collections and find right one
                    const children = imgContainer.children

                    for (let j = 1; j < children.length; j++) {
                        let child = children[j];
                        const hrefArr = child.href.split('/');
                        console.log(hrefArr[hrefArr.length - 1]);
                        if (hrefArr[hrefArr.length - 1] === comicId) { // check if comic is in collection
                            child.innerHTML = '';  // if it is then remove
                            child.remove();
                        }
                    }
                } // this logic sees if the comic is in sidebar, and if it is then deletes it
            }

        } else if (isAddRoute()) {
            // This is a create route
            // if active button isn't on any button, then must be an add/create route

            const collection = e.target.value.split(' ').join('-');
            const comicId = e.target.id
            button.classList.add("collectionButton--active");  // add active class to button

            // add comic to collection function
            async function addComicToCollection(comicId, collection) {
                const response = await fetch(`/api/comics/${comicId}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        collection,
                        isDefaultChange: true
                    })
                })

                if (response.ok) {
                    const data = await response.json();
                    return data.comic
                }
            }

            const comic = await addComicToCollection(comicId, collection);  // database upated

            // changing the side bar inner HTML below
            // This logic is for adding a comic through AJAX
            const rightCollection = e.target.value.split(' ').join('-').toLowerCase();
            const imgContainers = document.getElementsByClassName("sidebar__img-container")
            for (let i = 0; i < imgContainers.length; i++) {
                let imgContainer = imgContainers[i];
                if (imgContainer.childElementCount < 4 && imgContainer.id === rightCollection) {
                    const aTag = document.createElement('a')
                    aTag.setAttribute("href", `/comics/${comic.id}`)
                    aTag.innerHTML = `<img class="sidebar__img" src=${comic.imageUrl}>`
                    imgContainer.appendChild(aTag);
                } // this logic appends the image to sidebar and limits it to three
            }

        } else {  // this now has to be an update route
            let prevCollectionName;  // must save previous and new collection for comic

            const defaultCollections = document.getElementsByClassName('defaultCollection'); // get buttons
            for (let i = 0; i < defaultCollections.length; i++) {
                if (defaultCollections[i].classList.contains('collectionButton--active')) {
                    defaultCollections[i].classList.remove('collectionButton--active') // remove active from button it was on before
                    prevCollectionName = defaultCollections[i].value; // get previous collection name
                }
            }

            button.classList.add("collectionButton--active"); // add class to clicked button

            const newCollection = e.target.value.split(' ').join('-');
            const comicId = e.target.id


            const updateComicInCollections = async (comicId, newCollection) => {
                const response = await fetch(`/api/comics/${comicId}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        newCollection,
                        prevCollectionName,
                        isDefaultChange: true
                    })
                });

                if (response.ok) {
                    const data = await response.json()
                    return data.comic
                }
            }


            const comic = await updateComicInCollections(comicId, newCollection);
            const modifiedNewCollection = e.target.value.split(' ').join('-').toLowerCase();  // old and new collections
            const modifiedOldCollection = prevCollectionName.split(' ').join('-').toLowerCase();


            // AJAX for updating sidebar, combination of delete and add logic above
            const imgContainers = document.getElementsByClassName("sidebar__img-container")

            for (let i = 0; i < imgContainers.length; i++) {
                let imgContainer = imgContainers[i];

                if (imgContainer.id === modifiedOldCollection) {
                    const children = imgContainer.children

                    for (let j = 1; j < children.length; j++) {
                        let child = children[j];
                        const hrefArr = child.href.split('/');
                        if (hrefArr[hrefArr.length - 1] === comicId) {
                            child.innerHTML = '';
                            child.remove();
                        }
                    }
                } // this logic sees if the comic is in sidebar, and if it is then deletes it

                if (imgContainer.childElementCount < 4 && imgContainer.id === modifiedNewCollection) {
                    const aTag = document.createElement('a')
                    aTag.setAttribute("href", `/comics/${comic.id}`)
                    aTag.innerHTML = `<img class="sidebar__img" src=${comic.imageUrl}>`
                    imgContainer.appendChild(aTag);
                } // this logic appends the image to new collection if less than three comics
            }
        }
    })



// routes for the custom collections
document
    .querySelector('.custom-collection-container')
    .addEventListener('click', async (e) => {
        const button = e.target

        // first statement is the delete route
        if (button.classList.contains('collectionButton--active')) {
            button.classList.remove('collectionButton--active');

            const collection = e.target.value.split(' ').join('-');
            const comicId = e.target.id

            // remove comic from collection and return comic
            async function deleteComicFromReadCollection(comicId, collection) {
                const response = await fetch(`/api/comics/${comicId}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ collection })
                })

                if (response.ok) {
                    const data = await response.json();
                    return data
                }
            }

            const comic = await deleteComicFromReadCollection(comicId, collection);

            const rightCollection = collection.toLowerCase();
            const imgContainers = document.getElementsByClassName("sidebar__img-container");

            for (let i = 0; i < imgContainers.length; i++) {
                let imgContainer = imgContainers[i];
                if (imgContainer.id === rightCollection) { // iterate through collections and find right one
                    const children = imgContainer.children

                    for (let j = 1; j < children.length; j++) {
                        let child = children[j];
                        const hrefArr = child.href.split('/');
                        console.log(hrefArr[hrefArr.length - 1]);
                        if (hrefArr[hrefArr.length - 1] === comicId) { // check if comic is in collection
                            child.innerHTML = '';  // if it is then remove
                            child.remove();
                        }
                    }
                } // this logic sees if the comic is in sidebar, and if it is then deletes it
            }

        } else {
            button.classList.add("collectionButton--active");

            const collection = e.target.value.split(' ').join('-');
            const comicId = e.target.id;

            // add comic to collection function
            async function addComicToCollection(comicId, collection) {
                console.log("hitting add route!");
                const response = await fetch(`/api/comics/${comicId}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        collection,
                        isDefaultChange: false
                    })
                })

                if (response.ok) {
                    const data = await response.json();
                    return data.comic
                }
            }

            const comic = await addComicToCollection(comicId, collection);  // database upated

            // changing the side bar inner HTML below
            // This logic is for adding a comic through AJAX
            const rightCollection = e.target.value.split(' ').join('-').toLowerCase();
            const imgContainers = document.getElementsByClassName("sidebar__img-container")
            for (let i = 0; i < imgContainers.length; i++) {
                let imgContainer = imgContainers[i];
                if (imgContainer.childElementCount < 4 && imgContainer.id === rightCollection) {
                    const aTag = document.createElement('a')
                    aTag.setAttribute("href", `/comics/${comic.id}`)
                    aTag.innerHTML = `<img class="sidebar__img" src=${comic.imageUrl}>`
                    imgContainer.appendChild(aTag);
                } // this logic appends the image to sidebar and limits it to three
            }

        }
    })







//display the custom collections add form when the button is clicked
const addButton = document.querySelector('.addButton__text')
addButton.addEventListener('click', async (e) => {
    const addForm = document.querySelector('.customForm')
    if (addForm.classList.contains('customForm--active')) {
        addForm.classList.remove('customForm--active')
        addForm.classList.add('customForm--hidden')
    } else {
        addForm.classList.add('customForm--active')
        addForm.classList.remove('customForm--hidden')
    }
})


// Create the new collection when the 'Create' button is clicked
//     add the collection to the drop down list
//     add the comic to the collection
//     add the comic to the sidebar
const createButton = document.querySelector('.custom-submit');
createButton.addEventListener('click', async (e) => {
    e.preventDefault();
    // console.log('hitting the create custom collection listener')
    const collectionName = document.getElementById('collectionName').value;
    const url = window.location.href.split('/')
    const comicId = url[url.length - 1]

    const res = await fetch(`/api/collections/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            collectionName,
            comicId
        }),
    });
    const json = await res.json()
    const { error, message } = json;
    const responseMessage = document.querySelector('.response')
    const addForm = document.querySelector('.customForm')
    addForm.classList.remove('customForm--active')
    addForm.classList.add('customForm--hidden')

    if (message) {
        const dropdown = document.querySelector('.shelf-content');
        const newCollection = document.createElement('button');
        newCollection.classList.add('collectionButton');
        newCollection.classList.add('collectionButton--active');
        newCollection.setAttribute('type', 'button');
        newCollection.setAttribute('id', comicId);
        newCollection.setAttribute('value', collectionName);
        newCollection.innerText = collectionName;
        dropdown.appendChild(newCollection);
        responseMessage.innerHTML = ''
        responseMessage.classList.remove('error')
        responseMessage.innerHTML = message

        // grab the sidebar collections container and add the new collection as a child
        const sideCollections = document.getElementById("sidebar-coll-container")
        const sidebar__collection = document.createElement('div');
        sidebar__collection.classList.add('sidebar__collection');
        sideCollections.appendChild(sidebar__collection);

        const sideNewCollection = document.createElement('a');
        sideNewCollection.classList.add('sidebar__want-to-read');
        sideNewCollection.setAttribute('href', '/collections');
        sideNewCollection.innerText = collectionName;
        sidebar__collection.appendChild(sideNewCollection);

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('sidebar__img-container');
        imageContainer.setAttribute('id', `${collectionName.split(' ').join('-').toLowerCase()}`)
        sidebar__collection.appendChild(imageContainer);

        const sideNewComic = document.createElement('a');
        sideNewComic.setAttribute('href', `/comics/${comicId}`)
        const res = await fetch(`/api/comics/image/${comicId}`);
        const imageUrl = await res.json()
        const newComicImg = document.createElement('img');
        newComicImg.setAttribute('src', imageUrl)
        imageContainer.appendChild(sideNewComic);
        sideNewComic.appendChild(newComicImg);



    } else {
        responseMessage.innerHTML = error;
        responseMessage.classList.add('error')
    }

})
