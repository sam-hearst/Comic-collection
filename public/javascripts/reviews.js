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
    },
    body: JSON.stringify({ description: input.value }),
  });
  let data = await res.json();
   const { review: dataInfo, user: userInfo } = data;
  const { id: reviewId, description } = dataInfo;
  const {firstName, lastName } = userInfo;


  const reviewContainer = document.querySelector('.reviews__container');
  const newReview = document.createElement('div');
  newReview.classList.add('review')
  newReview.innerHTML = ` <div class="review__tools">
                            <button class="reviewTool review--delete" id=rd${reviewId}><i class="fa fa-trash-o" style="font-size:28px;color:red"></i></button>
                            <button class="reviewTool review--edit" id="re${reviewId}">edit</button>
                          </div>
                          <div class="review__info">
                            <h2 class="review__info__name">${firstName} ${lastName}</h2> </div>
                          <div class="review__description">
                            <p class=description__text>${description}</p>
                          </div>`
  reviewContainer.appendChild(newReview)
  const newDeleteButton = document.getElementById(`rd${reviewId}`);
  newDeleteButton.addEventListener('click', deleteHandler);
  const newEditButton = document.getElementById(`re${reviewId}`);
  newEditButton.addEventListener('click', editHandler);


  return data;

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

  const reviewId = e.target.id.slice(2);
  const reviewContainer = document.querySelector('#rd' + reviewId).parentNode.parentNode;
  const reviewTools = reviewContainer.children[0];
  const descriptionContainer = reviewContainer.children[2];


  //const reviewContainer = document.querySelector('.review__description');
  //const reviewTools = document.querySelector('.review__tools');
  const description = descriptionContainer.children[0].innerHTML;

  reviewTools.classList.add('hidden');
  descriptionContainer.classList.add('hidden');
  const formContainer = document.createElement('div');
  formContainer.innerHTML = `
  <textarea id="et${reviewId}"name="description" >${description}</textarea>
  <button id="es${reviewId}">Save Changes </button>
  <button id="ec${reviewId}" class="editForm--cancel">Delete Changes</button>
  `
  reviewContainer.appendChild(formContainer);

  document.querySelector('#ec' + reviewId).addEventListener('click', cancelEditHandler)
  document.querySelector('#es' + reviewId).addEventListener('click', submitEditHandler)


}

const submitEditHandler = async (e) => {
  e.preventDefault();

  const reviewId = e.target.id.slice(2);

  const reviewContainer = document.querySelector('#rd' + reviewId).parentNode.parentNode;
  const reviewForm = reviewContainer.children[3];
  const reviewTools = reviewContainer.children[0];
  const descriptionContainer = reviewContainer.children[2];
  const newDescription = reviewForm.children[0].value;

  const res = await fetch(`/api/reviews/${reviewId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ description: newDescription })
    }
  )
  const data = await res.json();
  if (data.status === 200) {

    reviewTools.classList.remove('hidden');

    descriptionContainer.innerHTML = `
    <p class="description__text"> ${newDescription}</p>
    `;
    descriptionContainer.classList.remove('hidden');

    reviewForm.remove();


  } else if(data.status == 500) {
    console.log(`didn't work`)
  } else {
    console.log('dangit')
  }


}

const cancelEditHandler = e => {
  e.preventDefault();
  const reviewId = e.target.id.slice(2);

  const reviewContainer = document.querySelector('#rd' + reviewId).parentNode.parentNode;
  const reviewForm = reviewContainer.children[3];
  const reviewTools = reviewContainer.children[0];
  const descriptionContainer = reviewContainer.children[2];
  const description = descriptionContainer.children[0].innerHTML;

  reviewTools.classList.remove('hidden');
  descriptionContainer.classList.remove('hidden');

  reviewForm.remove();

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
