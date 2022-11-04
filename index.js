const DOMSelectors = {
    button: document.getElementById("btn"),
    box: document.getElementById("container-box"),
    input: document.querySelector(`#input`),
  };
  
  DOMSelectors.box.insertAdjacentHTML(
    "beforebegin",
    `We can add text into an HTML file by writing it in JS!`
  );
  
  DOMSelectors.button.addEventListener("click", function () {
    let input = DOMSelectors.input.value; 
  
    console.log(input);
  
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `
          <p class = 'extra-text'>${input}</p>
      `
    );
  });
  
  DOMSelectors.button.insertAdjacentHTML(
    "afterend",
    `<p>you can have multiple HTML elements in the same DOMSelector!<p>
    <img src="https://i.imgur.com/zQ5ds03.jpeg" class="cat-poster"></img>`
  );
  
  