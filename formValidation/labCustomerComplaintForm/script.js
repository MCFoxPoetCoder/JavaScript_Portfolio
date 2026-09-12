const nameInput = document.getElementById("full-name");
const emailInput = document.getElementById("email");
const orderNumInput = document.getElementById("order-no");
const productCodeInput = document.getElementById("product-code");
const quantityInput = document.getElementById("quantity");
const complaintReasonsField = document.getElementById("complaints-group");
const complaintReasons = document.querySelectorAll('input[name="complaint"]');
const complaintDescription = document.getElementById("complaint-description");
const desiredSolutionField = document.getElementById("solutions-group");
const desiredSolution = document.querySelectorAll('input[name="solutions"]');
const solutionDescription = document.getElementById("solution-description");

const submitBtn = document.getElementById("submit-btn");
const complaintForm = document.getElementById("form");


const areas = [
  nameInput, emailInput, orderNumInput, productCodeInput, quantityInput,  complaintDescription,  solutionDescription
]

console.log(`complaintReasons: ${complaintDescription.id}`);

function validateForm () {
  const validated = {
    "full-name": false, 
    "email": false,
    "order-no": false,
    "product-code": false,
    "quantity": false,
    "complaints-group": false,
    "complaint-description": false,
    "solutions-group": false,
    "solution-description": false
  };

  const emailRegex = /\w+@\w+\.\w+/i;
  const orderNumRegex = /2024\d{6}/;
  const productCodeRegex = /[a-zA-Z]{2}\d{2}-[a-zA-Z]{1}\d{3}-[a-zA-Z]{2}\d{1}/;
  const quantNum = Number(quantityInput.value)
  const isComplaintOtherChecked = document.getElementById("other-complaint").checked;
  const isSolutionOtherChecked = document.getElementById("other-solution").checked;

  if (nameInput.value.trim("") !== "") {
    validated["full-name"] = true;
  }
  if (emailRegex.test(emailInput.value)) {
    validated["email"] = true;
  }
  if (orderNumRegex.test(orderNumInput.value)) {
    validated["order-no"] = true;
  }
  if (productCodeRegex.test(productCodeInput.value)) {
    validated["product-code"] = true;
  }
  if (Number.isInteger(quantNum) && quantNum > 0) {
    validated["quantity"] = true;
  }
  if (Array.from(complaintReasons).some(reason => reason.checked === true)) {
    validated["complaints-group"] = true;
  }
  if (isComplaintOtherChecked === true && complaintDescription.value.length >= 20) {
    validated["complaint-description"] = true;
  } else if (isComplaintOtherChecked === false) {
    validated["complaint-description"] = true;
  }
  if (Array.from(desiredSolution).some(solution => solution.checked === true)) {
    validated["solutions-group"] = true;
  }
  if (isSolutionOtherChecked === true && solutionDescription.value.length >= 20) {
    validated["solution-description"] = true;
  } else if (isSolutionOtherChecked === false) {
    validated["solution-description"] = true;
  }

  return validated;
}

function isValid (validated) {
  let valid = true;

  for (const key in validated) {
    console.log(validated[key])
    if (validated[key] === false) {
      
      valid = false;
    }
  }
  
  return valid
}

function showValidity (input) {
  const validated = validateForm();
  if (validated[input.id] === true) {
    input.style.borderColor = "green";
  } else {
    input.style.borderColor = "red";
  }
}

function showComplaintValidity () {
  const validated = validateForm();
    const input = complaintReasonsField;
    if (validated[input.id] === true) {
    input.style.borderColor = "green";
  } else {
    input.style.borderColor = "red";
  }
}

function showSolutionValidity () {
  const validated = validateForm();
  const input = desiredSolutionField;
    if (validated[input.id] === true) {
    input.style.borderColor = "green";
  } else {
    input.style.borderColor = "red";
  }
}

areas.forEach(area => area.addEventListener("change", (e) => {
  showValidity(e.target)
}))

complaintReasons.forEach(checkbox => 
  checkbox.addEventListener("change", showComplaintValidity)
)

desiredSolution.forEach(checkbox => 
  checkbox.addEventListener("change", showSolutionValidity)
)

complaintForm.addEventListener("submit", () => {
  isValid(validateForm());
  areas.forEach(area => showValidity(area));
  showComplaintValidity();
  showSolutionValidity();
})