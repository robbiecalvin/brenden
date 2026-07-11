// js/storage.js

const STORAGE_KEY = "brenden_app_data_v1";

// Load initial data from JSON (first run)
export async function initializeAppData() {
  const existing = localStorage.getItem(STORAGE_KEY);

  if (existing) {
    return JSON.parse(existing);
  }

  // First-time load
  const response = await fetch("./data/master-timeline.json");
  const data = await response.json();

  // Initialize task states
  const initialized = initializeTaskStates(data);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(initialized));

  return initialized;
}


// Ensure all tasks have default states
function initializeTaskStates(data) {
  data.phases.forEach(phase => {
    phase.tasks.forEach(task => {
      if (!task.status) task.status = "pending";
    });
  });
  return data;
}


// Get full app data
export function getAppData() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : null;
}


// Save full app data
export function saveAppData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}


// Update a task status
export function updateTaskStatus(taskId, newStatus) {
  const data = getAppData();

  data.phases.forEach(phase => {
    phase.tasks.forEach(task => {
      if (task.id === taskId) {
        task.status = newStatus;
      }
    });
  });

  // Recalculate locks after update
  updateLocks(data);

  saveAppData(data);
}


// Check dependencies and lock/unlock tasks
function updateLocks(data) {
  data.phases.forEach(phase => {
    phase.tasks.forEach(task => {

      if (!task.depends_on) return;

      const dependenciesMet = task.depends_on.every(depId => {
        return findTaskById(data, depId)?.status === "complete";
      });

      if (dependenciesMet && task.status === "locked") {
        task.status = "pending";
      }

    });

    // Phase unlock logic
    if (phase.unlock_conditions) {
      const unlocked = phase.unlock_conditions.every(cond => {
        return findTaskById(data, cond)?.status === "complete";
      });

      phase.locked = !unlocked;
    }
  });
}


// Find a task anywhere in the structure
export function findTaskById(data, taskId) {
  for (let phase of data.phases) {
    for (let task of phase.tasks) {
      if (task.id === taskId) return task;
    }
  }
  return null;
}


// Get next actionable task
export function getNextTask(data) {
  for (let phase of data.phases) {
    if (phase.locked) continue;

    for (let task of phase.tasks) {
      if (task.status === "pending") {
        return task;
      }
    }
  }
  return null;
}


// Get progress percentage
export function getProgress(data) {
  let total = 0;
  let complete = 0;

  data.phases.forEach(phase => {
    phase.tasks.forEach(task => {
      total++;
      if (task.status === "complete") complete++;
    });
  });

  return Math.round((complete / total) * 100);
}


// Reset everything (for testing or panic button)
export function resetApp() {
  localStorage.removeItem(STORAGE_KEY);
}