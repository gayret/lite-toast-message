/**
 * This module exports a function that creates a toast message object with 
 * methods for displaying success, error, warning, and info messages.
 * @module message
 */

import './index.css';

/**
 * Creates a toast message object.
 * @returns {Object} - An object containing methods for displaying different types of toast messages.
 */
function message() {
  const container = document.createElement('div');
  container.classList.add('toast-container');
  document.body.appendChild(container);

  /**
   * Displays a toast message with the given type, message, and title.
   * @param {string} type - The type of toast to display (success, error, warning, or info).
   * @param {string} message - The message to display in the toast.
   * @param {string} [title] - An optional title to display in the toast header.
   */
  function show(type, message, title) {
    const toast = document.createElement('div');
    toast.classList.add('toast', `toast-${type}`, 'hide');
    toast.innerHTML = `
      <div class="toast-header">
        <span class="toast-title">${title !== undefined ? title : ''}</span>
      </div>
      <div class="toast-body">
        ${message}
      </div>
    `;
    container.appendChild(toast);
    toast.style.top = `calc(50% - ${toast.offsetHeight / 2}px)`;
    toast.style.left = `calc(50% - ${toast.offsetWidth / 2}px)`;
    setTimeout(() => {
      toast.classList.remove('hide');
      toast.classList.add('show');
    }, 100);
    setTimeout(() => {
      container.removeChild(toast);
    }, 3000);
  }

  return {
    /**
     * Displays a success toast message with the given message and title.
     * @param {string} message - The message to display in the toast.
     * @param {string} [title] - An optional title to display in the toast header.
     */
    success: function (message, title) {
      show('success', message, title);
    },
    /**
     * Displays an error toast message with the given message and title.
     * @param {string} message - The message to display in the toast.
     * @param {string} [title] - An optional title to display in the toast header.
     */
    error: function (message, title) {
      show('error', message, title);
    },
    /**
     * Displays a warning toast message with the given message and title.
     * @param {string} message - The message to display in the toast.
     * @param {string} [title] - An optional title to display in the toast header.
     */
    warning: function (message, title) {
      show('warning', message, title);
    },
    /**
     * Displays an info toast message with the given message and title.
     * @param {string} message - The message to display in the toast.
     * @param {string} [title] - An optional title to display in the toast header.
     */
    info: function (message, title) {
      show('info', message, title);
    },
  };
}

const toastMessage = message();

module.exports = toastMessage;
