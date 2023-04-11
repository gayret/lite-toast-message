/**
 * This module exports a function that creates a toast message object with
 * methods for displaying success, error, warning, and info messages.
 * @module message
 */

import "./index.css";

/**
 * Creates a toast message object.
 * @returns {Object} - An object containing methods for displaying different types of toast messages.
 */
function message() {
  const container = document.createElement("div");
  container.classList.add("toast-container");
  document.body.appendChild(container);

  /**
   * Displays a toast message with the given type, message, and title.
   * @param {string} type - The type of toast to display (success, error, warning, or info).
   * @param {string} message - The message to display in the toast.
   * @param {string} [title] - An optional title to display in the toast header.
   * @param {number} [duration] - The duration in milliseconds to display the toast.
   */
  function show(type, message, title, duration) {
    const toast = document.createElement("div");
    toast.classList.add("toast", `toast-${type}`, "hide");
    toast.innerHTML = `
      <div class="toast-header">
        <span class="toast-title">${title !== undefined ? title : ""}</span>
      </div>
      <div class="toast-body">
        ${message}
      </div>
    `;
    container.appendChild(toast);
    toast.style.top = `calc(50% - ${toast.offsetHeight / 2}px)`;
    toast.style.left = `calc(50% - ${toast.offsetWidth / 2}px)`;
    toast.classList.remove("hide");
    setTimeout(
      () => {
        toast.classList.add("hide");
        setTimeout(() => {
          toast.remove();
        }, 500);
      },
      duration !== undefined ? duration : 3000
    );
  }

  return {
    /**
     * Displays a success toast message with the given message and title.
     * @param {string} message - The message to display in the toast.
     * @param {string} [title] - An optional title to display in the toast header.
     * @param {number} [duration] - The duration in milliseconds to display the toast.
     */
    success(message, title, duration) {
      show("success", message, title, duration);
    },
    /**
     * Displays an error toast message with the given message and title.
     * @param {string} message - The message to display in the toast.
     * @param {string} [title] - An optional title to display in the toast header.
     * @param {number} [duration] - The duration in milliseconds to display the toast.
     */
    error(message, title, duration) {
      show("error", message, title, duration);
    },
    /**
     * Displays a warning toast message with the given message and title.
     * @param {string} message - The message to display in the toast.
     * @param {string} [title] - An optional title to display in the toast header.
     * @param {number} [duration] - The duration in milliseconds to display the toast.
     */
    warning(message, title, duration) {
      show("warning", message, title, duration);
    },
    /**
     * Displays an info toast message with the given message and title.
     * @param {string} message - The message to display in the toast.
     * @param {string} [title] - An optional title to display in the toast header.
     * @param {number} [duration] - The duration in milliseconds to display the toast.
     */
    info(message, title, duration) {
      show("info", message, title, duration);
    },
  };
}

const { success, error, warning, info } = message();

export { success, error, warning, info };
