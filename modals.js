// Funzione per aprire una modale
export function openModal(modalId) {
  document.getElementById(modalId).classList.add("modal-show");
}

// Funzione per chiudere una modale
export function closeModal(modalId) {
  document.getElementById(modalId).classList.remove("modal-show");
}
