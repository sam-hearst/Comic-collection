
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

console.log('delete collection buttons: ', deleteCollectionBtns)

// function for deleting a collection
const deleteCollection = async (e) => {
    const collectionName = e.target.id;
    console.log('event target: ', e.target)
    console.log('collection name: ', collectionName)
    const res = await fetch(`/api/collections`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: collectionName })
    })
    const data = await res.json();
    console.log('here is the return from trying to delete a collection', data)
    //update the DOM here


}

deleteCollectionBtns.forEach(btn => {
    btn.addEventListener('click', deleteCollection);
})