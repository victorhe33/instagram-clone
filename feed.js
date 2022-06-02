// CODE HERE
const fetchPromise = fetch("https://us-central1-codesmith-curriculum-server.cloudfunctions.net/app/images");

//when promise comes back, parse with json(), check if each url is valid, and then generate images on site.
// fetchPromise.then(response => {
//   return response.json();
// }).then(images => {
//   images.forEach(url => generate(url));
// });

fetchPromise.then(response => {
  return response.json();
}).then(images => {
  images.forEach(url => {
    fetch(url, { method: 'HEAD', credentials: "same-origin", mode: "no-cors"})
      .then(res => {
        if (res.ok) {
          console.log('Image exists.');
          generate(url);
        } else {
          console.log('Image does not exist.');
        }
      }).catch(err => console.log('Error:', err));
  });
});


// fetch('https://via.placeholder.com/150', { method: 'GET', credentials: "same-origin" })
//   .then(res => {
//     if (res.ok) {
//       console.log('Image exists.');
//     } else {
//       console.log('Image does not exist.');
//     }
//   }).catch(err => console.log('Error:', err));

//QUERY SELECTOR /ID
const imageContainer = document.getElementById("imageContainer");

function generate(url) {  
  const img = document.createElement("img");
  img.setAttribute('src', `${url}`);
  img.setAttribute('alt', "image");
  imageContainer.appendChild(img);
}
