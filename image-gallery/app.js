const apiKey = "awl44Zpf006esorGvZfU4rxvPn7zQiydo-4URBkk6LE";
const loadMoreButton = document.querySelector(".content__button");
const searchInput = document.querySelector(".header__search_input");
const clearInput = document.querySelector(".clear-icon");
const imagesWrapper = document.querySelector(".content__images");
const lightBox = document.querySelector(".lightbox");
const closeButton = document.querySelector(".close__button");

searchInput.focus();

searchInput.addEventListener("input", () => {
  if (searchInput.value.trim() !== "") {
    clearInput.style.display = "block";
  } else {
    clearInput.style.display = "none";
  }
});

clearInput.addEventListener("click", () => {
  searchInput.value = "";
  clearInput.style.display = "none";
  searchInput.focus();
});

const perPage = 30;
let currentPage = 1;
let searchTerm = null;

const downloadImages = (imgURL) => {
  fetch(imgURL)
    .then((res) =>
      res.blob().then((file) => {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(file);
        a.download = new Date().getTime();
        a.click();
      })
    )
    .catch(() => alert("Failed to download image!"));
};

const showLightbox = (name, img) => {
  const lightbox = document.querySelector(".lightbox");
  const lightboxImage = lightbox.querySelector(".lightbox__img");
  const photographerName = lightbox.querySelector(
    ".photographer__name_lightbox"
  );

  lightboxImage.src = img;
  photographerName.innerText = name;
  lightbox.classList.add("show");
  document.body.style.overflow = "hidden";
};

const closeLightbox = () => {
  const lightbox = document.querySelector(".lightbox");
  lightbox.classList.remove("show");
  document.body.style.overflow = "auto";
};

const generateHTML = (images) => {
  imagesWrapper.innerHTML += images
    .map(
      (img) =>
        `<li class="content__image_card" onclick="showLightbox('${img.user.name}', '${img.urls.regular}')">
        <img class="content__image" src="${img.urls.regular}" />
        <div class="details">
          <div class="photographer">
            <img class="camera__icon_black" src="./icons/camera__icon_white.png" />
            <span class="photographer__name">${img.user.name}</span>
          </div>
          <button class="download" onclick="downloadImages('${img.urls.regular}')">
            <img class="download__icon" src="./icons/download.png" />
          </button>
        </div>
      </li>`
    )
    .join("");
};

const getImages = (apiURL) => {
  loadMoreButton.innerText = "Loading...";
  loadMoreButton.classList.add("disabled");
  fetch(apiURL, {
    headers: { Authorization: `Client-ID ${apiKey}` },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.results) {
        generateHTML(data.results);
      } else {
        generateHTML(data);
      }
      loadMoreButton.innerText = "Load More";
      loadMoreButton.classList.remove("disabled");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const loadMoreImages = () => {
  currentPage++;
  let apiURL = `https://api.unsplash.com/photos/?client_id=${apiKey}&per_page=${perPage}&page=${currentPage}`;
  getImages(apiURL);
};

const loadSearchImages = (e) => {
  if (e.key === "Enter") {
    currentPage = 1;
    searchTerm = e.target.value;
    imagesWrapper.innerHTML = "";
    getImages(
      `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${apiKey}&per_page=${perPage}&page=${currentPage}`
    );
  }
};

getImages(
  `https://api.unsplash.com/photos/?client_id=${apiKey}&per_page=${perPage}&page=${currentPage}`
);

loadMoreButton.addEventListener("click", loadMoreImages);
searchInput.addEventListener("keyup", loadSearchImages);
closeButton.addEventListener("click", closeLightbox);
