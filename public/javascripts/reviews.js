const btn = document.querySelector(".review-submit");
const deleteButtons = [...document.getElementsByClassName('review--delete')];


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
    console.log(dataInfo, userInfo);
  const { id: reviewId, description } = dataInfo;
  const {firstName, lastName } = userInfo;


  const reviewContainer = document.querySelector('.reviews__container');
  const newReview = document.createElement('div');
  newReview.classList.add('review')
  newReview.innerHTML = ` <div class="review__tools"><button class="reviewTool review--delete" id=r${reviewId}>delete review</button><button class="reviewTool review--edit">edit review</button></div><div class="review__info"><h2 class="review__info__name">${firstName} ${lastName}</h2></div><div class="review__description">${description}</div>`
  reviewContainer.appendChild(newReview)
  const newDeleteButton = document.getElementById(`r${reviewId}`);
  newDeleteButton.addEventListener('click', deleteHandler);

  return data;
  // for (let description of json) {
  //   const p = document.createElement("p");
  //   p.innerHTML = `${description.description}`;
  //   div.appendChild(p);
  // }
});
//handler function for handling delete routes 
const deleteHandler = async(e) => {
  e.preventDefault();
  const reviewId = e.target.id.slice(1);
  console.log(reviewId)
  const res = await fetch(`/api/reviews/${reviewId}`, 
    { method: 'DELETE', 
      'Content-Type': 'application/json'
    })
  const data = await res.json();
  console.log(data)
    const reviewToDelete = document.getElementById(`r${reviewId}`);
  if (data.status === 200) {
    reviewToDelete.parentNode.parentNode.innerHTML= '';
  } else {
    const customError = document.createElement('p')
    customError.innerHTML = 'Something happened, please try again!'
    reviewToDelete.appendChild(customError);
  }

}

//for (let i = 0; i < deleteButtons.length; i++) {
  //deleteButtons[i].addEventListener('click', deleteHandler);
//}
deleteButtons.forEach(button => {
  button.addEventListener('click', deleteHandler);
})


