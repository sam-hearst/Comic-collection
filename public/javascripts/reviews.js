const btn = document.querySelector(".review-submit");
const input = document.getElementById("user-review");
let data;
const updateReviews = async (comicId) => {
  const res = await fetch(`/api/new-review/${comicId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ description: input.value }),
  });

  data = await res.json(); //parses into json
  console.log(data);
  return data;
};

btn.addEventListener("click", async (e) => {
  e.preventDefault();
  const comicId = e.target.id;
  const newReviews = await updateReviews(comicId);

  for (let review in data) {
    console.log(review);
    // const p = document.createElement("p");
    // p.innerHTML = `${description.description}`;
    // div.appendChild(p);
  }
});
