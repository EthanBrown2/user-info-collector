const form = document.getElementById("user-form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Stop page refresh

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const gender = document.getElementById("gender").value;
  const birthday = document.getElementById("birthday").value;

  const confirmationMessage =
    `Please confirm the following information:\n\n` +
    `First Name: ${firstName}\n` +
    `Last Name: ${lastName}\n` +
    `Email: ${email}\n` +
    `Gender: ${gender}\n` +
    `Date of Birth: ${birthday}`;

  const confirmed = window.confirm(confirmationMessage);

  if (!confirmed) {
    return; // User canceled
  }

  form.innerHTML = `
    <h2>Thank You!</h2>
    <p>Your information has been successfully submitted.</p>
  `;
});