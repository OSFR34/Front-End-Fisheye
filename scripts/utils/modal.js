// foncton pour affichage et la fermeture de la modal
function displayModal() {
    const modal = document.getElementById("background_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("background_modal");
    modal.style.display = "none";
}

// DOM Elements
const modalBg = document.querySelector("#background_modal");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelector(".close")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalBg.style.display = "block";
}

//close modal event
closeModalBtn.addEventListener("click", closeModal)

//close modal form
function closeModal() {
  modalBg.style.display = "none";
  // document.querySelector('form').reset(); //permet la fermeture de la modal.
}