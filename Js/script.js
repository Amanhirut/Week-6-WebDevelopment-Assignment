// Part 1: Event Handling
const clickBtn = document.getElementById("clickBtn");
const message = document.getElementById("message");

clickBtn.addEventListener("click", () => {
  message.textContent = "You clicked the button!";
});

// Part 2: Interactive Elements

// Dark mode toggle
const toggleMode = document.getElementById("toggleMode");
toggleMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
const counterDisplay = document.getElementById("counter");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

increaseBtn.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});
decreaseBtn.addEventListener("click", ()=>{
    count--;
    counterDisplay.textContent = count;
})

resetBtn.addEventListener("click", () => {
  count = 0;
  counterDisplay.textContent = count;
});

// Collapsible FAQ
const faqQuestion = document.querySelector(".faq-question");
const faqAnswer = document.querySelector(".faq-answer");
faqAnswer.style.display = "none"; // hide initially

faqQuestion.addEventListener("click", () => {
  if (faqAnswer.style.display === "none") {
    faqAnswer.style.display = "block";
  } else {
    faqAnswer.style.display = "none";
  }
});


// Part 3: Form Validation
// ==========================
const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formSuccess = document.getElementById("formSuccess");

// Helper functions
function validateName(name) {
  return name.trim().length >= 2;
}

function validateEmail(email) {
  // Simple email regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(password) {
  // At least 6 characters
  return password.length >= 6;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  // Validate name
  if (!validateName(nameInput.value)) {
    nameError.textContent = "Name must be at least 2 characters.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Validate email
  if (!validateEmail(emailInput.value)) {
    emailError.textContent = "Please enter a valid email.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Validate password
  if (!validatePassword(passwordInput.value)) {
    passwordError.textContent = "Password must be at least 6 characters.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  // If all fields are valid
  if (isValid) {
    formSuccess.textContent = "✅ Form submitted successfully!";
    form.reset();
  } else {
    formSuccess.textContent = "";
  }
});
