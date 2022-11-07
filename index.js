const DOMSelectors = {
    button: document.getElementById("btn"),
    box: document.getElementById("container-box"),
    input: document.querySelector(`#input`),
  };
  
  DOMSelectors.box.insertAdjacentHTML(
    "beforebegin",
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
  );
  
  