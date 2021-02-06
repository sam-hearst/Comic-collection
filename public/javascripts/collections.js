
// query the database and update the collection table for the specific comic and user
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

const collections = document.querySelector(".shelf-content")

collections.addEventListener('click', async (e) => {
    if (e.target.type === "button") {
        const collection = e.target.value.split(' ').join('-');
        const comicId = e.target.id
    
        const response = await updateCollections(comicId, collection);
        const data = response.json();
        // change the side bar inner HTML here

    }

})
