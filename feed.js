// CODE HERE
const fetchPromise = fetch("https://us-central1-codesmith-curriculum-server.cloudfunctions.net/app/images");
// console.log(fetchPromise);

//storage array for all our image URLS
// let urlArray = [];

//Fetch via promise from website, push all urls fetched into URL array.
fetchPromise.then(response => {
  return response.json();
}).then(images => {
  const URL = images.forEach(url => generate(url));
});

// console.log(urlArray);

//QUERY SELECTOR /ID
const imageContainer = document.getElementById("imageContainer");


function generate(url) {  
  // console.log("hey");
  const img = document.createElement("img");
  img.setAttribute('src', `${url}`);
  imageContainer.appendChild(img);
}

// console.log(imageContainer);

// const newDiv = document.createElement("div")
// const heya = const div = document.createElement("div");
// newDiv.appendChild(heya)
// imageContainer.appendChild("hey")

// imageContainer.textContent = "yoyoyo";