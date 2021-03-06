
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

// Add a comic to a collection and update the button classes
// NEED TO MIX IN THE COLLECTIONS SCRIPT THAT UPDATES THE DB SO THEY ARE IN SYNC
document
    .querySelector('.shelf-content')
    .addEventListener('click', async (e) => {
        const button = e.target
        // if the target is already active -> remove the active class
        if(button.classList.contains('collectionButton--active')) {
            button.classList.remove('collectionButton--active')
        } else { 

            //first need to check if it is a default shelf
            const readStatus = ['Want to Read', 'Read', 'Currently Reading'];
            const defaultCollections = document.getElementsByClassName('defaultCollection');
            if (readStatus.includes(button.value)) {
                for (let i = 0; i < defaultCollections.length; i++) {
                    if (defaultCollections[i].classList.contains('collectionButton--active')) {
                        defaultCollections[i].classList.remove('collectionButton--active')
                    }
                }
            }
            // add the active class to the button
            button.classList.add('collectionButton--active')
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
const createButton = document.querySelector('.custom-submit');
createButton.addEventListener('click', async (e) => {
    e.preventDefault();
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