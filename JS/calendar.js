// calendar.js

$(document).ready(function () {
  // Inizializza il calendario
  $("#calendar").fullCalendar({
    dayClick: function (date, jsEvent, view) {
      // Mostra il modale
      const modal = document.getElementById("expense-modal");
      const modalInstance = M.Modal.getInstance(modal);
      modalInstance.open();

      // Imposta la data selezionata nel campo data
      document.getElementById("expense-date").value = date.format();

      // Reset del form
      document.getElementById("expense-form").reset();
      document.getElementById("payment-type-section").classList.add("hidden");
    },
  });

  // Mostra il campo di pagamento solo se si seleziona "Spesa"
  document
    .getElementById("expense-type")
    .addEventListener("change", function () {
      if (this.value === "spesa") {
        document
          .getElementById("payment-type-section")
          .classList.remove("hidden");
      } else {
        document.getElementById("payment-type-section").classList.add("hidden");
      }
    });
});

// Array per memorizzare le spese
const expenses = [];

// Funzione per salvare una spesa
function saveExpense() {
  const title = document.getElementById("expense-title").value;
  const description = document.getElementById("expense-description").value;
  const date = document.getElementById("expense-date").value;
  const type = document.getElementById("expense-type").value;
  let paymentType = null;

  if (type === "spesa") {
    paymentType = document.getElementById("payment-type").value;
  }

  const newExpense = {
    title: title,
    start: date,
    description: description,
    tipo: type === "spesa" ? paymentType : "Programma Futuro",
  };

  // Aggiungi l'evento al calendario
  $("#calendar").fullCalendar("renderEvent", newExpense);

  // Aggiungi la spesa all'array
  expenses.push(newExpense);

  // Chiudi il modale
  const modal = document.getElementById("expense-modal");
  const modalInstance = M.Modal.getInstance(modal);
  modalInstance.close();
}
