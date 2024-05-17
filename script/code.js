const returnValue = document.getElementById("return");
const calcBtn = document.querySelector("[data-calc]");

calcBtn.addEventListener("click", function BMI() {
  let kilo = document.querySelector("[kilo]").value;
  let meter = document.querySelector("[meter]").value;

  let BMIcalc = kilo / (meter * meter);
  returnValue.innerText = "Your BMI is " + BMIcalc.toFixed(2);
});
