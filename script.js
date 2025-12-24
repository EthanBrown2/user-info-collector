// ================================
// Configuration
// ================================
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyVClOxUo_GtOwJJrBg-tl9QQxqTVqvulx7fbgXpzMb8J_Lh2jIYAs7LsBMyLWiHR5-/exec";

// ================================
// DOM Elements
// ================================
const form = document.getElementById("userForm");

// ================================
// Form Submission Handler
// ================================
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Collect form values
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const gender = document.getElementById("gender").value;
  const birthday = document.getElementById("birthday").value;
  const consent = document.getElementById("consent").checked;

  // Basic validation
  if (!consent) {
    alert("You must agree to the consent statement before submitting.");
    return;
  }

  // Confirm submission
  const confirmed = confirm(
    "Please confirm that the information you entered is correct."
  );

  if (!confirmed) {
    return;
  }

  // ================================
  // Submit to Google Apps Script
  // ================================
  fetch(SCRIPT_URL, {
    method: "POST",
    body: new URLSearchParams({
      firstName: firstName,
      lastName: lastName,
      email: email,
      gender: gender,
      birthday: birthday
    })
  })
    .then(response => response.text())
    .then(() => {
      alert("Thank you! Your information has been submitted successfully.");
      form.reset();
    })
    .catch(error => {
      console.error("Submission error:", error);
      alert("There was an error submitting the form. Please try again.");
    });
});