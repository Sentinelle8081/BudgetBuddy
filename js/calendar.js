import { openModal, closeModal } from "./modals.js";

document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");

  // Definiamo selectedDate come variabile globale
  var selectedDate = null;

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    dateClick: function (info) {
      // Salva la data selezionata
      selectedDate = info.dateStr;

      // Mostra la prima finestra modale solo quando viene cliccata una data
      openModal("initialModal");
    },
  });

  calendar.render();

  // Gestisci il click del bottone "Conferma" nella prima finestra modale
  document
    .getElementById("selectTypeButton")
    .addEventListener("click", function () {
      var entryType = document.querySelector('input[name="entryType"]:checked');

      if (entryType) {
        // Chiude la finestra modale iniziale
        closeModal("initialModal");

        // Mostra la seconda finestra modale per inserire i dettagli
        openModal("detailsModal");
      } else {
        alert("Seleziona una voce da inserire!");
      }
    });
  // JavaScript per gestire l'apertura della seconda finestra modale e il metodo di pagamento
  document
    .getElementById("selectTypeButton")
    .addEventListener("click", function () {
      var entryType = document.querySelector('input[name="entryType"]:checked');

      if (entryType) {
        document.getElementById("initialModal").style.display = "none";

        // Mostra la sezione dei metodi di pagamento se la scelta è "spesa"
        if (entryType.value === "spesa") {
          document.getElementById("paymentMethods").style.display = "block";
        } else {
          document.getElementById("paymentMethods").style.display = "none";
        }

        // Mostra la seconda finestra modale
        document.getElementById("detailsModal").style.display = "flex";
      } else {
        alert("Seleziona una voce da inserire!");
      }
    });

  // Gestione del salvataggio della voce
  document
    .getElementById("entryForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      var amount = document.getElementById("amount").value;
      var paymentMethod = document.querySelector(
        'input[name="paymentMethod"]:checked'
      ).value;
      var note = document.getElementById("note").value;

      // Log per verificare i dati inseriti
      console.log("Data:", selectedDate);
      console.log("Importo:", amount);
      console.log("Metodo di pagamento:", paymentMethod);
      console.log("Note:", note);

      // Chiudi la finestra modale dei dettagli
      closeModal("detailsModal");

      // Resetta i campi del form
      document.getElementById("entryForm").reset();
    });

  // Aggiungi gli event listener per i pulsanti di chiusura (X)
  document.querySelectorAll(".close").forEach(function (closeButton) {
    closeButton.addEventListener("click", function () {
      var modalId = this.closest(".modal").id;
      closeModal(modalId);
    });
  });
});
