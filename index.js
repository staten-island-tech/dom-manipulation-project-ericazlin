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
   albums: document.getElementById("albums"),
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

DOMSelectors.create.addEventListener("click", function () {
   let name = DOMSelectors.albumName.value;
   let artist = DOMSelectors.artistName.value;
   let title = DOMSelectors.titleTrack.value;
   let year = DOMSelectors.releaseYear.value;
   let image = DOMSelectors.imageLink.value;

   DOMSelectors.box.insertAdjacentHTML("afterend", `
   <div id="albums">    
   </div>
   `)

   albums.insertAdjacentHTML("beforeend",
   `<img src="${image}" alt=""> 
   <h1>${name} - ${artist}<h1>
   <h1>${title} - ${year}<h1> 
   `
   )

})

DOMSelectors.clear.addEventListener("click", function () {
   inputClear();
   albums.remove();
})

