$(document).ready(function () {
  // Inizializza il modale di Materialize
  $(".modal").modal();

  // Inizializza FullCalendar
  $("#calendar").fullCalendar({
    header: {
      left: "prev,next today",
      center: "title",
      right: "month,agendaWeek,agendaDay",
    },
    events: [
      {
        title: "Spesa alimentari",
        start: "2024-11-01",
        description: "Spesa settimanale per la famiglia",
        tipo: "Contante",
      },
      {
        title: "Pagamento affitto",
        start: "2024-11-05",
        description: "Affitto mensile",
        tipo: "Conto 1",
      },
    ],
    eventClick: function (event, jsEvent, view) {
      // Quando un evento viene cliccato, mostra il modale con i dettagli
      document.getElementById("expense-description").textContent =
        event.description;
      document.getElementById("expense-type").textContent = event.tipo;

      // Apri il modale
      const modal = document.getElementById("expense-modal");
      const modalInstance = M.Modal.getInstance(modal);
      modalInstance.open();
    },
  });
});
