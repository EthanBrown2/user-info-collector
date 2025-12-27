document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("userForm");

  form.addEventListener("submit", (e) => {
    const consent = document.getElementById("consent").checked;

    if (!consent) {
      e.preventDefault();
      alert("You must agree to the consent statement.");
      return;
    }

    const confirmed = confirm(
      "Please confirm that the information you entered is correct."
    );

    if (!confirmed) {
      e.preventDefault();
      return;
    }

    // Allow form to submit normally
    setTimeout(() => {
      alert("Thank you! Your information has been submitted.");
      form.reset();
    }, 300);
  });
});