// js/calendar.js
import { expensesData } from "../js/expensesData.js";

export function generateCalendar(daysContainer, showSummary) {
  daysContainer.innerHTML = ""; // pulisce i giorni precedenti

  for (let day = 1; day <= 30; day++) {
    const dayElement = document.createElement("div");
    dayElement.classList.add("day");
    dayElement.textContent = day;

    dayElement.addEventListener("click", () => showSummary(day));
    daysContainer.appendChild(dayElement);
  }
}

export function getExpensesForDay(day) {
  const dateKey = `2024-11-${String(day).padStart(2, "0")}`;
  return expensesData[dateKey] || [];
}
