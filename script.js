const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalOverlay = document.getElementById("modalOverlay");
const form = document.getElementById("userForm");
const statusMessage = document.getElementById("statusMessage");

const SCRIPT_URL = "PASTE_YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";

/* ---------- Modal Logic ---------- */

openModalBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("hidden");
});

closeModalBtn.addEventListener("click", () => {
  modalOverlay.classList.add("hidden");
});

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.add("hidden");
  }
});

/* ---------- Form Submission ---------- */

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const confirmed = confirm("Please confirm this information is correct.");
  if (!confirmed) return;

  statusMessage.textContent = "Submitting...";

  const formData = new FormData(form);

  try {
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      body: formData
    });

    if (!response.ok) {
      throw new Error("Submission failed");
    }

    form.reset();
    statusMessage.textContent = "Thank you! Your information has been submitted.";

  } catch (error) {
    console.error(error);
    statusMessage.textContent =
      "There was an error submitting the form. Please try again.";
  }
});