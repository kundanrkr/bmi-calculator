const form = document.querySelector("form");

// const height = parseInt(document.querySelector("#height").value);
//this usecase will give empty value
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const conclusion = document.querySelector("#conclusion");

  if (
    (height === "" || height <= 0 || isNaN(height)) &&
    (weight === "" || weight <= 0 || isNaN(weight))
  ) {
    // results.innerHTML = `Please Enter a valid numeric value of Height and Weight`;
    alert(`Please Enter a valid numeric value of Height and Weight`);
  } else if (height === "" || height <= 0 || isNaN(height)) {
    // results.innerHTML = `Please Enter a valid numeric value of Height`;
    alert(`Please Enter a valid numeric value of Height`);
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    // results.innerHTML = `Please Enter a valid numeric value of Weight`;
    alert(`Please Enter a valid numeric value of Weight`);
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<p>Your BMI is </p><div id="bmi-out">${bmi}</div>`;
    if (bmi < 18.6) {
      conclusion.innerHTML = `Your BMI is <span>${bmi}</span>, indicating your weight is in the <span>Underweight</span> category for adults of your height.`;
    } else if (bmi >= 18.6 && bmi < 25) {
      conclusion.innerHTML = `Your BMI is <span>${bmi}</span>, indicating your weight is in the <span>Normal Weight</span> category for adults of your height.`;
    } else if (bmi >= 25 && bmi < 30) {
      conclusion.innerHTML = `Your BMI is <span>${bmi}</span>, indicating your weight is in the <span>Over Weight</span> category for adults of your height.`;
    } else {
      conclusion.innerHTML = `Your BMI is <span>${bmi}</span>, indicating your weight is in the <span>Obese</span> category for adults of your height.`;
    }
  }
});
