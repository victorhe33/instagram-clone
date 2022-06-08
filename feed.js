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

//set a unique ID which will be incgremented to give all containers unique IDs
let uniqueId = 1;

//create image/container with unique ID. if image doesnt load, onerror will call a function to hide container.
function generate(url) {
  //image insert
  const img = document.createElement("img");
  img.setAttribute('src', `${url}`);
  img.setAttribute('class', "image-insert");
  img.setAttribute('id', `${uniqueId}`);
  img.setAttribute('onerror', `removeImage(${uniqueId})`);
  imageContainer.appendChild(img);

  //card insert
  
  uniqueId++;
}

function removeImage(identifier) {
  const targetElement = document.getElementById(`${identifier}`);
  targetElement.style.display = 'none';
}


//AWAIT / ERROR HANDLER ALTERNATIVE METHOD OF HANDLING ERRORED IMAGES
// const imgResponse = await fetch("https://us-central1-codesmith-curriculum-server.cloudfunctions.net/app/images");
// const imgUrls = await imgResponse.json();

// const imageContainer = document.getElementById('imageContainer');

// imgUrls.forEach(url => {
//   const img = document.createElement('img');
//   img.setAttribute('src', url);
//   img.setAttribute('alt', 'image');
//   // img.setAttribute('onerror', "this.style.display = 'hidden';");
//   // or...
//   img.addEventListener('error', event => {
//     event.target.style.display = 'none';
//   });
//   imageContainer.appendChild(img);
// }); 