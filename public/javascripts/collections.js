//add stuff here
// const { getUserId } = require('../../auth')
const baseRoute = 'http://localhost:8080'
const wantToReadButton = document.querySelector(".testButton")

const updateCollections = async (route) => {

    const response = await fetch(`/users/${userId}/collections/${route}`, {
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
    e.preventDefault();
    const collection = e.target.value.split(' ').join('-');
    const route = e.target.value;
    const userId = e.target.name;
    const comicId = e.target.id 
    console.log('collection: ', collection);
    console.log('name: ', route)
    // console.log('userId: ', userId)
    console.log('comicId: ', comicId)

    const newCollections = await updateCollections(route);

    // change the side bar inner HTML

})