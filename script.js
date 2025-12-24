// ================================
// Configuration
// ================================
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyVClOxUo_GtOwJJrBg-tl9QQxqTVqvulx7fbgXpzMb8J_Lh2jIYAs7LsBMyLWiHR5-/exec";

// ================================
// Wait for DOM to Load
// ================================
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("userForm");

  if (!form) {
    console.error("Form with id='userForm' not found.");
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const gender = document.getElementById("gender").value;
    const birthday = document.getElementById("birthday").value;
    const consent = document.getElementById("consent").checked;

    if (!consent) {
      alert("You must agree to the consent statement before submitting.");
      return;
    }

    const confirmed = confirm(
      "Please confirm that the information you entered is correct."
    );

    if (!confirmed) {
      return;
    }

    fetch(SCRIPT_URL, {
      method: "POST",
      body: new URLSearchParams({
        firstName,
        lastName,
        email,
        gender,
        birthday
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
});