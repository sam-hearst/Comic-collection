// Delete a collection
const deleteCollectionBtns = [...document.getElementsByClassName('collection--delete')]

const deleteCollection = async (e) => {
    const collectionName = e.target.id.split('-')[1];
    console.log('collectionName: ', collectionName)
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
        // delete the collection container
        const deletedCollection = document.getElementById(`scroll-${collectionName}`);
        deletedCollection.remove();
        // delete the collection name in the top list of names
        const deletedName = document.getElementById(`list-${collectionName}`)
        deletedName.remove();
    }
}

deleteCollectionBtns.forEach(btn => {
    btn.addEventListener('click', deleteCollection);
})

// Edit a collection title
const editCollectionBtns = [...document.getElementsByClassName('collection--edit')]

const cancelEditCollection = async (e) => {
    e.preventDefault();
    const thisForm = e.target.parentNode.parentNode;
    thisForm.remove();
    const collName = e.target.id.split('-')[1]
    const editId = `headerEdit-${collName}`
    const editButton = document.getElementById(editId)
    editButton.removeAttribute("disabled")
}

const submitEditCollection = async (e) => {

}


const editCollection = async (e) => {
    const clickedButton = e.target
    const currentName = clickedButton.id.split('-')[1]
    const headerDiv = clickedButton.parentNode.parentNode.parentNode
    if (!clickedButton.hasAttribute("disabled")) {
        clickedButton.setAttribute("disabled", "");
        const editContainer = document.createElement('form');
        editContainer.setAttribute("class", "edit__collection-form")
        editContainer.innerHTML = `
            <label for="editCollName">Update Collection Name</label>
            <input name="editCollName" required />
            <div>
                <button id="collEdit-${currentName}" class="editColl--save">Save Changes </button>
                <button id="collCancel-${currentName}" class="editColl--cancel">Cancel Changes</button>
            </div>
        `
        headerDiv.appendChild(editContainer)

        document.getElementById(`collCancel-${currentName}`).addEventListener('click', cancelEditCollection);
        document.getElementById(`collEdit-${currentName}`).addEventListener('click', submitEditCollection);
    }
}

editCollectionBtns.forEach(btn => {
    btn.addEventListener('click', editCollection)
})

// events to scroll each collection into view
const collectionNames = [...document.getElementsByClassName('collection__list-name')]
collectionNames.forEach(name => {
    name.addEventListener('click', () => {
        document.getElementById(`scroll-${name.innerHTML}`).scrollIntoView({
            behavior: "smooth"
        })
    })
})
