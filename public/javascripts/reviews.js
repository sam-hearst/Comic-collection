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

    const data = await res.json();   //parses into json
    console.log(data);
    return data;

    // for (let description of json) {
    //   const p = document.createElement("p");
    //   p.innerHTML = `${description.description}`;
    //   div.appendChild(p);
    // }
});
