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
   delete: document.getElementById("btnDelete"),
   divDelete: document.getElementById("deleteButton"),
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



/* let buttonPress = 0 */

DOMSelectors.create.addEventListener("click", function () {
   const values = {
   name: DOMSelectors.albumName.value,
   artist: DOMSelectors.artistName.value,
   title: DOMSelectors.titleTrack.value,
   year: DOMSelectors.releaseYear.value,
   image: DOMSelectors.imageLink.value,
   }
   /* buttonPress++
   albumVersion = `albums${buttonPress}`
 */
   
   DOMSelectors.albums.insertAdjacentHTML("beforeend",
   `
   <div id="albums">  
   <img src="${values.image}" alt=""> 
   <h3>${values.name} - ${values.artist}<h3>
   <h4>${values.title} - ${values.year}</h4>
   <button type="button" class="btn" id="btnDelete">Delete</button>
   </div>
   `
   )

   function deleteAlbum() {
      let deleteButton = document.querySelectorAll("#btnDelete")
      deleteButton.forEach((button) => {
        button.addEventListener("click", (event) => {
          event.target.parentElement.remove();
        });
      });
    }

   inputClear();
   deleteAlbum();
})



DOMSelectors.clear.addEventListener("click", function () {
   DOMSelectors.albums.innerHTML = '';
})

