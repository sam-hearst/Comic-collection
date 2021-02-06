document.addEventListener('DOMContentLoaded', async () => {

    // need to find the comicId by parsing the url
    const url = window.location.href.split('/')
    // console.log(url)
    const comicId = url[url.length - 1]
    // console.log('comicId: ', comicId)


    
    const response = await fetch(`/api/comics/${comicId}`)
    const collectionList = await response.json()
    //console.log('collList: ', collectionList)

    // Edit the DOM here to alter classes for the buttons
    
    
})
