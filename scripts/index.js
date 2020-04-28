const mainContainer = document.querySelector(".container");
const btnDoggo = document.querySelector(".button-doggo");

// Event Handler for "Generate Doggo Button"
btnDoggo.onclick = function generateDogImg() {
  var doggoImage = document.createElement("IMG");
  // fetch the image with postman

  var URL = "https://dog.ceo/api/breeds/image/random";
  $.get(URL, function (obj) {
    doggoImage.src = obj["message"];
    doggoImage.alt = "Random Dog Image";
    doggoImage.className = "random-dog-img";
  });
  // assign the image to doggoImage

  mainContainer.appendChild(doggoImage);
};
