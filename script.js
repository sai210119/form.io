const steps = document.querySelectorAll(".form-step");
const nextBtns = document.querySelectorAll(".next-btn");
const prevBtns = document.querySelectorAll(".prev-btn");
const form = document.getElementById("multiStepForm");

let currentStep = 0;

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle("active", i === index);
  });
}

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (validateStep(currentStep)) {
      currentStep++;
      showStep(currentStep);
    }
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentStep--;
    showStep(currentStep);
  });
});

form.addEventListener("submit", (e) => {
  if (!validateStep(currentStep)) {
    e.preventDefault();
  } else {
    alert("Form submitted successfully!");
  }
});

function validateStep(stepIndex) {
  const currentInputs = steps[stepIndex].querySelectorAll("input, select, textarea");
  for (let input of currentInputs) {
    if (!input.checkValidity()) {
      input.reportValidity();
      return false;
    }
  }
  return true;
}
