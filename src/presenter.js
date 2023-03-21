import SecuenciaFizzBuzz from "./secuenciaFizzbuzz";

const first = document.querySelector("#primer-numero");
const form = document.querySelector("#fizzbuzz-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);

  div.innerHTML = "<p>" + SecuenciaFizzBuzz(firstNumber) + "</p>";
});
