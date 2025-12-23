const form = document.getElementById("user-form");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const formData = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    gender: document.getElementById("gender").value,
    birthday: document.getElementById("birthday").value
  };

  const confirmationMessage =
    `Please confirm the following information:\n\n` +
    `First Name: ${formData.firstName}\n` +
    `Last Name: ${formData.lastName}\n` +
    `Email: ${formData.email}\n` +
    `Gender: ${formData.gender}\n` +
    `Date of Birth: ${formData.birthday}`;

  const confirmed = window.confirm(confirmationMessage);

  if (!confirmed) return;

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbyVClOxUo_GtOwJJrBg-tl9QQxqTVqvulx7fbgXpzMb8J_Lh2jIYAs7LsBMyLWiHR5-/exec", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error("Submission failed");
    }

    form.innerHTML = `
    <h2>Thank You!</h2>
    <p>Your information has been successfully submitted.</p>
  `;
  } catch (error) {
    alert("There was an error submittion the form. Please try again.");
    console.error(error);
  }  
});