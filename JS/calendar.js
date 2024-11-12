// js/calendar.js
import { expensesData } from "../datas/expensesData.js";

export function generateCalendar(daysContainer, showSummary) {
  daysContainer.innerHTML = ""; // Cancella i giorni precedenti

  // Genera 30 giorni per il mese corrente come esempio
  for (let day = 1; day <= 30; day++) {
    const dayElement = document.createElement("div");
    dayElement.classList.add("day");
    dayElement.textContent = day;

    // Aggiunge l'evento di click per mostrare il riepilogo
    dayElement.addEventListener("click", () => showSummary(day));
    daysContainer.appendChild(dayElement);
  }
}

export function getExpensesForDay(day) {
  const dateKey = `2024-11-${String(day).padStart(2, "0")}`;
  return expensesData[dateKey] || [];
}
