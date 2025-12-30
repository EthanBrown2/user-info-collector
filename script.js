const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalOverlay = document.getElementById("modalOverlay");

openModalBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("hidden");
});

closeModalBtn.addEventListener("click", () => {
  modalOverlay.classList.add("hidden");
});

// Optional: close modal when clicking outside the card
modalOverlay.addEventListener("click", (event) => {
  if (event.target === modalOverlay) {
    modalOverlay.classList.add("hidden");
  }
});