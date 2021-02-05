//add stuff here
const baseRoute = 'localhost:8080'
const wantToReadButton = document.querySelector(".testButton")
wantToReadButton.addEventListener('click', () => {
    fetch(`${baseRoute}/users/${userId}/collections/wantToRead`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            status: "Want to Read"
        })
    });
})