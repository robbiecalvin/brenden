// js/app.js

import {
  initializeAppData,
  getAppData,
  getNextTask,
  getProgress
} from "./storage.js";

import { renderDashboard } from "./dashboard.js";

document.addEventListener("DOMContentLoaded", async () => {
  await initializeApp();

  setupNavigation();
});


async function initializeApp() {
  const data = await initializeAppData();

  renderApp(data);
}


function renderApp(data) {
  const currentPage = getCurrentPage();

  if (currentPage === "dashboard") {
    renderDashboard(data);
  }
}


// Simple page detection
function getCurrentPage() {
  const path = window.location.pathname;

  if (path.includes("dashboard")) return "dashboard";

  return "dashboard";
}


// Bottom nav handler (basic for now)
function setupNavigation() {
  const buttons = document.querySelectorAll("[data-nav]");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.nav;

      window.location.href = `/pages/${target}.html`;
    });
  });
}