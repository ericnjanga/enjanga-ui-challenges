// Base class
type NotificationType = 'info' | 'toast';

class Notification {

  #message: string;
  #visible: boolean;
  type: NotificationType;

  constructor(message: string, type: NotificationType = "info") {
    if (new.target === Notification) {
      throw new Error("Cannot instantiate abstract class Notification directly");
    }
    this.#message = message;
    this.type = type;
    this.#visible = false;
  }

  show() {
    this.#visible = true;
    console.log(`Showing: ${this.message}`);
  }

  dismiss() {
    this.#visible = false;
    console.log("Notification dismissed");
  }

  set message(newMessage: string) {
    this.#message = newMessage;
  }

  get message() {
    return this.#message;
  }

  set visible(val: boolean) {
    this.#visible = val;
  }

  get visible() {
    return this.#visible;
  }

  render() {
    throw new Error("render() must be implemented by subclass");
  }
}

// Example subclass
class ToastNotification extends Notification {

  duration: number;

  constructor(message: string, duration: number = 3000) {
    super(message, "toast");
    this.duration = duration;
  }

  render() {
    return `<div class="toast">${this.message}</div>`;
  }
}
