
//function to find the active collections (those that the comic is added to)
//   and append the 'collectionButton--active' class to each classList
async function highlightActiveCollections() {
    //find the comic id from the url
    const url = window.location.href.split('/')
    const comicId = url[url.length - 1]

    // fetch the list of collections for the given comic and user
    const response = await fetch(`/api/comics/${comicId}`)
    const collectionList = await response.json()

    // Edit the DOM here to alter classes for the buttons
    const collectionButtons = document.getElementsByClassName('collectionButton')
    // console.log('collectionButtons: ', collectionButtons)
    for (let i = 0; i < collectionButtons.length; i++) {
        let button = collectionButtons[i];
        if (collectionList.includes(button.value)) {
            button.classList.add('collectionButton--active')
        }
    }
}

// append the class to active buttons on page load
document.addEventListener('DOMContentLoaded', highlightActiveCollections)


// this is a helper function for CRUD operations in AJAX
function isAddRoute() {
    const defaultCollections = document.getElementsByClassName('defaultCollection');

    for (let i = 0; i < defaultCollections.length; i++) {
        if (defaultCollections[i].classList.contains('collectionButton--active')) {
            return false
        }
    }

    return true
}


// Trying to split up the read status buttons with those of the collections so this is solely
// selecting buttons within read status

document
    .querySelector('.read-statuses')
    .addEventListener('click', async (e) => {
        const button = e.target
        // if the target is already active -> remove the active class
        // because target was already action, you know its a delete route
        // once you remove the class it has to hit a removeComic function
        if (button.classList.contains('collectionButton--active')) {
            button.classList.remove("collectionButton--active");
            const collection = e.target.value.split(' ').join('-');
            const comicId = e.target.id

            // removeComic function
            async function deleteComicFromReadCollection(comicId, collection) {
                console.log("hitting delete comic from collection route", comicId, collection);
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

            // now I have to check if the comic is displayed within the collection in the sidebar,
            // if it is, have to remove a tag and img tag and if it isn't then I don't have to do anything
            // check to see if the comic is in the image container for the right collection --> if it is then remove it,
            // if it isnt then you dont have to do anything.

            const comic = await deleteComicFromReadCollection(comicId, collection);
            const rightCollection = collection.toLowerCase();
            const imgContainers = document.getElementsByClassName("sidebar__img-container");

            for (let i = 0; i < imgContainers.length; i++) {
                let imgContainer = imgContainers[i];
                if (imgContainer.id === rightCollection) {
                    const children = imgContainer.children

                    for (let j = 1; j < children.length; j++) {
                        let child = children[j];
                        const hrefArr = child.href.split('/');
                        console.log(hrefArr[hrefArr.length - 1]);
                        if (hrefArr[hrefArr.length - 1] === comicId) {
                            child.innerHTML = '';
                            child.remove();
                        }
                    }
                } // this logic sees if the comic is in sidebar, and if it is then deletes it
            }






        } else if (isAddRoute()) { // if all class lists dont contain the active class, then it must be
            // an add route!!
            // this is where I add an ajax call for add route

            const collection = e.target.value.split(' ').join('-');
            const comicId = e.target.id
            button.classList.add("collectionButton--active");  // add active class to button

            // add comic to collection function

            async function addComicToReadCollection(comicId, collection) {
                console.log("hitting add comic from collection route", comicId, collection);
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
                    console.log(data);
                    return data.comic
                }
            }

            const comic = await addComicToReadCollection(comicId, collection);
            // change the side bar inner HTML here
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
                } // this logic appends the image to sidebar and limits it to three!
            }

        } else { // this now has to be an update route!!
            let prevCollectionName;

            // I have to remove the active class on the current button, and add it to the new button
            // and then also get the update route to work so that it updates the collection for the comic
            const defaultCollections = document.getElementsByClassName('defaultCollection'); // get buttons

            for (let i = 0; i < defaultCollections.length; i++) {
                if (defaultCollections[i].classList.contains('collectionButton--active')) {
                    defaultCollections[i].classList.remove('collectionButton--active') // remove active from button it was on before
                    prevCollectionName = defaultCollections[i].value; // getting this cause need it to update on backend
                }
            }

            button.classList.add("collectionButton--active"); // add class to clicked button

            const newCollection = e.target.value.split(' ').join('-');
            const comicId = e.target.id


            const updateComicInCollections = async (comicId, newCollection) => {
                console.log("hitting update route!!")
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
            const modifiedNewCollection = e.target.value.split(' ').join('-').toLowerCase();
            const modifiedOldCollection = prevCollectionName.split(' ').join('-').toLowerCase();


            // have to find the img in previous collection and if its there, then remove it, if
            // it isn't there then do nothing
            // then have to see if img containers for newCollection is < 3 and if it is, then make new child
            // in that collection

            console.log(modifiedNewCollection);
            console.log(modifiedOldCollection);
            console.log(comicId);


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
                } // this logic appends the image to sidebar and limits it to three!
            }
        }
    })




// Add a comic to a collection and update the button classes
// NEED TO MIX IN THE COLLECTIONS SCRIPT THAT UPDATES THE DB SO THEY ARE IN SYNC
// document
//     .querySelector('.shelf-content')
//     .addEventListener('click', async (e) => {
//         const button = e.target
//         // if the target is already active -> remove the active class
//         if (button.classList.contains('collectionButton--active')) {
//             button.classList.remove('collectionButton--active')
//         } else {

//             //first need to check if it is a default shelf
//             const readStatus = ['Want to Read', 'Read', 'Currently Reading'];
//             const defaultCollections = document.getElementsByClassName('defaultCollection');
//             if (readStatus.includes(button.value)) {
// for (let i = 0; i < defaultCollections.length; i++) {
//     if (defaultCollections[i].classList.contains('collectionButton--active')) {
//         defaultCollections[i].classList.remove('collectionButton--active')
//     }
// }
//             }
//             // add the active class to the button
//             button.classList.add('collectionButton--active')
//         }
//     })

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
const createButton = document.querySelector('.custom-submit');
createButton.addEventListener('click', async (e) => {
    e.preventDefault();
    console.log('hitting the create custom collection listener')
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
    } else {
        responseMessage.innerHTML = error;
        responseMessage.classList.add('error')
    }

})
