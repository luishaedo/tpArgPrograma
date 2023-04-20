function getDogApi() {
  fetch("https://api.thedogapi.com/v1/breeds")
    .then((response) => response.json())
    .then((data) => {
      const breedsContainer = document.getElementById("breeds-container");
      data.forEach((breed) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.style.flex = "1 1 18rem";
        card.style.flexDirection = "column";
        card.style.margin = "10px";
        card.style.transition = "transform 0.3s ease";

        const image = document.createElement("img");
        image.classList.add("card-img-top");
        image.src = breed.image.url;
        image.alt = breed.name;
        image.style.objectFit = "cover";
        image.style.height = "250px";
        card.appendChild(image);

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        cardBody.style.flex = "1 1 auto";

        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.textContent = breed.name;
        cardBody.appendChild(title);

        const text = document.createElement("p");
        text.classList.add("card-text");
        text.textContent = breed.temperament;
        cardBody.appendChild(text);

        card.addEventListener("mouseover", function () {
          card.style.transform = "translateY(-5px)";
        });

        card.addEventListener("mouseout", function () {
          card.style.transform = "translateY(0)";
        });

        const link = document.createElement("a");
        link.classList.add("btn", "btn-primary");
        link.href = breed.link;
        link.textContent = "Sugerinos nuevos temperamentos";

        link.addEventListener("click", function () {
          const urlFormulario = "Form.html";
          window.open(urlFormulario);
        });

        cardBody.appendChild(link);

        card.appendChild(cardBody);
        breedsContainer.appendChild(card);
      });
    })
    .catch((error) => console.error(error));
}

function searchBreeds() {
  const input = document.getElementById("search-input").value.toLowerCase();
  const cards = document.getElementsByClassName("card");
  for (let i = 0; i < cards.length; i++) {
    const title = cards[i]
      .getElementsByClassName("card-title")[0]
      .textContent.toLowerCase();
    if (title.includes(input)) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
}
