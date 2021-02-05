const wantToReadButton = document.querySelector(".testButton");
const readButton = document.querySelector(".testButton2");

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

wantToReadButton.addEventListener('click', async (e) => {
    const collection = e.target.value.split(' ').join('-');
    const comicId = e.target.id 
    console.log('collection: ', collection);
    console.log('comicId: ', comicId)

    const newCollections = await updateCollections(comicId, collection);

    // change the side bar inner HTML

})
readButton.addEventListener('click', async (e) => {
    const collection = e.target.value.split(' ').join('-');
    const comicId = e.target.id 
    console.log('collection: ', collection);
    console.log('comicId: ', comicId)

    const newCollections = await updateCollections(comicId, collection);

    // change the side bar inner HTML

})
