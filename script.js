const searchField = document.getElementById("search-field");
const imageContainer = document.getElementById("image-container");
const image = document.createElement("img");

const findImage = () => {
	image.id = "img";
	image.src = searchField.value;
	imageContainer.appendChild(image);
};
