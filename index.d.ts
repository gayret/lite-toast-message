/**
 * This module exports a function that creates 
 * a toast message object with methods for displaying success, error, warning, and info messages.
 */
declare function message(): {
    /**
     * Displays a success toast message with the given message and title.
     * @param message - The message to display in the toast.
     * @param title - An optional title to display in the toast header.
     */
    success(message: string, title?: string): void;
    /**
     * Displays an error toast message with the given message and title.
     * @param message - The message to display in the toast.
     * @param title - An optional title to display in the toast header.
     */
    error(message: string, title?: string): void;
    /**
     * Displays a warning toast message with the given message and title.
     * @param message - The message to display in the toast.
     * @param title - An optional title to display in the toast header.
     */
    warning(message: string, title?: string): void;
    /**
     * Displays an info toast message with the given message and title.
     * @param message - The message to display in the toast.
     * @param title - An optional title to display in the toast header.
     */
    info(message: string, title?: string): void;
  };
  
  export = message;
  