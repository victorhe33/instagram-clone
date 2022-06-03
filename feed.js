// CODE HERE
const fetchPromise = fetch("https://us-central1-codesmith-curriculum-server.cloudfunctions.net/app/images");

//when promise comes back, parse with json(), check if each url is valid, and then generate images on site.
fetchPromise.then(response => {
  return response.json();
}).then(images => {
  images.forEach(url => generate(url));
});

//QUERY SELECTOR /ID
const imageContainer = document.getElementById("imageContainer");

//set a unique ID which will be incremented to give all containers unique IDs
let uniqueId = 1;

//create image/container with unique ID. if image doesnt load, onerror will call a function to hide container.
function generate(url) {  
  const img = document.createElement("img");
  img.setAttribute('src', `${url}`);
  img.setAttribute('alt', "image");
  img.setAttribute('id', `${uniqueId}`);
  img.setAttribute('onerror', `removeImage(${uniqueId})`);
  imageContainer.appendChild(img);
  uniqueId++;
}

function removeImage(identifier) {
  const targetElement = document.getElementById(`${identifier}`);
  targetElement.style.display = 'none';
}
