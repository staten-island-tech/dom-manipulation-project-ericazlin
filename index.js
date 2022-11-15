// defining DOMSelectors
const DOMSelectors = {
   box: document.getElementById("box"),
   calculate: document.getElementById("btnCalc"),
   clear: document.getElementById("btnClear"),
   title: document.getElementById("title"),
   ageYear: document.getElementById("ageYear"),
   button: document.querySelector(".btn"),
}

function ageCalc(year) {
   const currentYear = 2022;
   let input = year;
   return age = currentYear - input
}

function ageClear(){
   DOMSelectors.ageYear.value = ""
}

DOMSelectors.calculate.addEventListener("click", function () {
   let age = ageCalc(DOMSelectors.ageYear.value);
   DOMSelectors.box.insertAdjacentHTML("beforeend", `<p>You are ${age} years old!</p>`)
})

DOMSelectors.clear.addEventListener("click", function () {
   ageClear();
})

