/**
 * Creates a toast message object.
 * @returns An object containing methods for displaying different types of toast messages.
 */
declare function message(): {
  /**
   * Displays a success toast message with the given message and title.
   * @param message - The message to display in the toast.
   * @param title - An optional title to display in the toast header.
   * @param duration - The duration in milliseconds to display the toast.
   */
  success(message: string, title?: string, duration?: number): void;
  /**
   * Displays an error toast message with the given message and title.
   * @param message - The message to display in the toast.
   * @param title - An optional title to display in the toast header.
   * @param duration - The duration in milliseconds to display the toast.
   */
  error(message: string, title?: string, duration?: number): void;
  /**
   * Displays a warning toast message with the given message and title.
   * @param message - The message to display in the toast.
   * @param title - An optional title to display in the toast header.
   * @param duration - The duration in milliseconds to display the toast.
   */
  warning(message: string, title?: string, duration?: number): void;
  /**
   * Displays an info toast message with the given message and title.
   * @param message - The message to display in the toast.
   * @param title - An optional title to display in the toast header.
   * @param duration - The duration in milliseconds to display the toast.
   */
  info(message: string, title?: string, duration?: number): void;
};

const { success, error, warning, info } = message();
export { success, error, warning, info };