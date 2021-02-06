const btn = document.querySelector(".review-submit");
const deleteButtons = [...document.getElementsByClassName('review--delete')];
const editButtons = [...document.getElementsByClassName('review--edit')];


btn.addEventListener("click", async (e) => {
  e.preventDefault();
  const input = document.getElementById('user-review');


  let comicId = e.target.id;

  const res = await fetch(`/api/new-review/${comicId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }, body: JSON.stringify({ description: input.value }), });
  let data = await res.json();   //parses into json
   const { review: dataInfo, user: userInfo } = data;
  const { id: reviewId, description } = dataInfo;
  const {firstName, lastName } = userInfo;


  const reviewContainer = document.querySelector('.reviews__container');
  const newReview = document.createElement('div');
  newReview.classList.add('review')
  newReview.innerHTML = ` <div class="review__tools"><button class="reviewTool review--delete" id=rd${reviewId}>delete review</button><button class="reviewTool review--edit" id="re${reviewId}">edit review</button></div><div class="review__info"><h2 class="review__info__name">${firstName} ${lastName}</h2></div><div class="review__description">${description}</div>`
  reviewContainer.appendChild(newReview)
  const newDeleteButton = document.getElementById(`rd${reviewId}`);
  newDeleteButton.addEventListener('click', deleteHandler);
  const newEditButton = document.getElementById(`re${reviewId}`);
  newEditButton.addEventListener('click', editHandler);

  return;
});



//handler function for handling delete routes 
const deleteHandler = async(e) => {
  const reviewId = e.target.id.slice(2);
  const res = await fetch(`/api/reviews/${reviewId}`, 
    { method: 'DELETE', 
      'Content-Type': 'application/json'
    })
  const data = await res.json();
  console.log(data)
    const reviewToDelete = document.getElementById(`rd${reviewId}`);
  if (data.status === 200) {
    reviewToDelete.parentNode.parentNode.innerHTML= '';
  } else {
    const customError = document.createElement('p')
    customError.innerHTML = 'Something happened, please try again!'
    reviewToDelete.appendChild(customError);
  }
}

//handler function for handling edit routes

const editHandler = async (e) => {
  //check if other editors are open
  const otherEditors = document.querySelector('.editForm');
  if (otherEditors) {

  }

  const reviewId = e.target.id.slice(2);
  const reviewContainer = document.querySelector('#rd' + reviewId).parentNode.parentNode;
  const reviewTools = reviewContainer.children[0];
  const descriptionContainer = reviewContainer.children[1];


  //const reviewContainer = document.querySelector('.review__description');
  //const reviewTools = document.querySelector('.review__tools');
  const description = document.querySelector('.description__text').innerHTML;
  const backupReviewTools = reviewTools.innerHTML;
  const backupDescription = reviewContainer.innerHTML;

  reviewTools.innerHTML = '';

  descriptionContainer.innerHTML = `
<form id="ef${reviewId}"class="editForm" action="">
  <textarea name="description" >${description}</textarea>
  <button type="submit">Save Changes </button>
  <button id="ec${reviewId}" class="editForm--cancel">Delete Changes</button>
</form>
  `

  document.querySelector('#ec' + reviewId).addEventListener('click', cancelEditHandler)


  const res = await fetch(`/api/reviews/${reviewId}`, 
    { method: 'PUT', 
      'Content-Type': 'application/json'
    })
}

const cancelEditHandler = e => {
  e.preventDefault();
  const reviewId = e.target.id.slice(2);

  const reviewForm = document.querySelector('#ef' + reviewId);
  const reviewContainer = reviewForm.parentNode.parentNode;
  //const reviewContainer = document.querySelector('' + e.target.id).parentNode.parentNode.parentNode;
  const reviewTools = reviewContainer.children[0];
  const descriptionContainer = reviewContainer.children[1];
  const description = reviewForm.children[0].innerHTML;
  console.log(description);

  reviewTools.innerHTML = `
    <button class="reviewTool review--delete" id="rd${reviewId}"> delete review </button>
    <button class="reviewTool review--edit" id="re${reviewId}"> edit review </button>
  `;
  descriptionContainer.innerHTML = `
  <p class="description__text"> ${description}
  `;

  //add functionality to new review tools
  //
  const newDeleteButton = document.querySelector('#rd' + reviewId);
  const newEditButton = document.querySelector('#re' + reviewId);
  newDeleteButton.addEventListener('click', deleteHandler);
  newEditButton.addEventListener('click', editHandler);



}


deleteButtons.forEach(button => {
  button.addEventListener('click', deleteHandler);
})


editButtons.forEach(button => {
  button.addEventListener('click', editHandler);
})
