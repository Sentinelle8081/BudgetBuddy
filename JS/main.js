// js/main.js
import { generateCalendar, getExpensesForDay } from "./calendar.js";

const currentMonth = document.getElementById("currentMonth");
const daysContainer = document.getElementById("daysContainer");
const summary = document.getElementById("summary");
const expensesList = document.getElementById("expensesList");
const closeSummary = document.getElementById("closeSummary");

// Funzione per mostrare il riepilogo delle spese per un giorno specifico
function showSummary(day) {
  expensesList.innerHTML = ""; // pulisce i dati precedenti
  const expenses = getExpensesForDay(day);

  if (expenses.length === 0) {
    expensesList.innerHTML = "<li>Nessuna spesa registrata</li>";
  } else {
    expenses.forEach((expense) => {
      const li = document.createElement("li");
      li.textContent = `${expense.descrizione} (${expense.tipo}): ${expense.importo}`;
      expensesList.appendChild(li);
    });
  }

  summary.classList.remove("hidden");
}

// Chiudi riepilogo
closeSummary.addEventListener("click", () => {
  summary.classList.add("hidden");
});

// Inizializza il calendario
generateCalendar(daysContainer, showSummary);
