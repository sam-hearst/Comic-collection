
// // query the database and update the collection table for the specific comic and user
// const updateCollections = async (comicId, route) => {
//     console.log("hitting update route!!")
//     const response = await fetch(`/api/collections/${route}/comics/${comicId}`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             collection: "Want to Read"
//         })
//     });

//     if (response.ok) {
//         const data = await response.json()
//         return data.comic;
//     }
// }

// // side bar collection event
// const collections = document.querySelector(".shelf-content")
// collections.addEventListener('click', async (e) => {
//     if (e.target.type === "button") {
//         const collection = e.target.value.split(' ').join('-');
//         const comicId = e.target.id

//         const comic = await updateCollections(comicId, collection);
//         // change the side bar inner HTML here
//         // This logic is for adding a comic through AJAX
//         const rightCollection = e.target.value.split(' ').join('-').toLowerCase();
//         const imgContainers = document.getElementsByClassName("sidebar__img-container")
//         for (let i = 0; i < imgContainers.length; i++) {
//             let imgContainer = imgContainers[i];
//             if (imgContainer.childElementCount < 4 && imgContainer.id === rightCollection) {
//                 const aTag = document.createElement('a')
//                 aTag.setAttribute("href", `/comics/${comic.id}`)
//                 aTag.innerHTML = `<img class="sidebar__img" src=${comic.imageUrl}>`
//                 imgContainer.appendChild(aTag);
//             }
//         }
//     }
// })

// collections route collection events
const deleteCollectionBtns = [...document.getElementsByClassName('collection--delete')]
const editCollectionBtns = [...document.getElementsByClassName('collection--edit')]

// function for deleting a collection
const deleteCollection = async (e) => {
    const collectionName = e.target.id;
    const res = await fetch(`/api/collections`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: collectionName })
    })
    const data = await res.json();
    //update the DOM here
    if (data.status === 200) {
        const deletedCollection = document.getElementById(collectionName);
        const deletedSection = deletedCollection.parentNode.parentNode.parentNode.parentNode
        // deletedSection.innerHTML = '';
        deletedSection.remove();
    }

}

deleteCollectionBtns.forEach(btn => {
    btn.addEventListener('click', deleteCollection);
})

// events to scroll each collection into view
const collectionNames = [...document.getElementsByClassName('collection__list-name')]
collectionNames.forEach(name => {
    name.addEventListener('click', () => {
        console.log('the name in the listener: ', `scroll-${name.innerHTML}`)
        document.getElementById(`scroll-${name.innerHTML}`).scrollIntoView({
            behavior: "smooth"
        })
    })
})
// const overviewClick = () => {
//     document.getElementById('overview').scrollIntoView({
//         behavior: "smooth"
//     });
// }