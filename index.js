// defining DOMSelectors
const DOMSelectors = {
   box: document.getElementById("box"),
   create: document.getElementById("btnCreate"),
   clear: document.getElementById("btnClear"),
   title: document.getElementById("title"),
   releaseYear: document.getElementById("releaseYear"),
   titleTrack: document.getElementById("titleTrack"),
   artistName: document.getElementById("artistName"),
   imageLink: document.getElementById("imageLink"),
   albumName: document.querySelector("#albumName"),
   button: document.querySelector(".btn"),
   albums: document.querySelector("#albumsCollection"),
}

const inputFields = [
   inputYear = document.getElementById("releaseYear"),
   inputTrack = document.getElementById("titleTrack"),
   inputArtist = document.getElementById("artistName"),
   inputImage = document.getElementById("imageLink"),
   inputName = document.querySelector("#albumName"),
]

function inputClear() {
   inputFields.forEach(input => {
      input.value = ""
   });
}

let buttonPress = 0

DOMSelectors.create.addEventListener("click", function () {
   let name = DOMSelectors.albumName.value;
   let artist = DOMSelectors.artistName.value;
   let title = DOMSelectors.titleTrack.value;
   let year = DOMSelectors.releaseYear.value;
   let image = DOMSelectors.imageLink.value;

   /* buttonPress++
   albumVersion = `albums${buttonPress}`
 */
   
   DOMSelectors.albums.insertAdjacentHTML("beforeend",
   `
   <div id="albums">  
   <img src="${image}" alt=""> 
   <h3>${name} - ${artist}<h3>
   <h4>${title} - ${year}<h4>
   </div>
   `
   )

   inputClear();
})

DOMSelectors.clear.addEventListener("click", function () {
   DOMSelectors.albums.innerHTML = '';
})

