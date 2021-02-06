const btn = document.querySelector(".review-submit");


btn.addEventListener("click", async (e) => {
  e.preventDefault();
  const input = document.getElementById('user-review');


  const comicId = e.target.id;

  const res = await fetch(`/api/new-review/${comicId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ description: input.value }),
  });

  let data = await res.json();   //parses into json
   const { review: dataInfo, user: userInfo } = data;
    console.log(dataInfo, userInfo);
  const { description } = dataInfo;
  const {firstName, lastName } = userInfo;


  const reviewContainer = document.querySelector('.reviews__container');
  const newReview = document.createElement('div');
  newReview.classList.add('review')
  newReview.innerHTML = ` <div class="review__tools"><button class="reviewTool review--delete">delete review</button><button class="reviewTool review--edit">edit review</button></div><div class="review__info"><h2 class="review__info__name">${firstName} ${lastName}</h2></div><div class="review__description">${description}</div>`
  reviewContainer.appendChild(newReview)

  return data;
  // for (let description of json) {
  //   const p = document.createElement("p");
  //   p.innerHTML = `${description.description}`;
  //   div.appendChild(p);
  // }
});
