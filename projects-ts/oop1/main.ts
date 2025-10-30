// Base class
type NotificationType = 'info' | 'toast' | 'modal' | 'banner';

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



/*
1. Extend the system
    - Implement ModalNotification and BannerNotification, each with a unique render().
    - ModalNotification should have an open() and close().
    - BannerNotification should stretch full-width and include a “dismiss” button in its render output.
*/
class ModalNotification extends Notification {

  title: string;

  constructor(message: string, title: string) { 
    super(message, 'modal');
    this.title = title;
  }

  open() {
    this.show();
  }

  close() {
    this.dismiss();
  }

  render() {
    return this.visible ? `
      <div class="modal">
        <div>
          ${this.title}
        </div>
        <div>
          ${this.message}
        </div>
      </div>
    ` : '';
  }
}

class BannerNotification extends Notification {

  constructor(message: string) { 
    super(message, 'banner');
  }

  open() {
    this.show();
  }

  close() {
    this.dismiss();
  }

  render() {
    return this.visible ? `
      <div class="banner">
        <p>${this.message}</p>
        <button>x</button>
      </div>
    ` : '';
  }
}



/*
2. Polymorphism in Action
    - Put all notifications in an array and call .render() on each — you should get different outputs without knowing the exact class.
*/
const notificationList = [
  new BannerNotification('Modal message'), 
  new ModalNotification('Modal message', 'Modal title')
];

for (let notif of notificationList) {
  notif.show();
  console.log(notif.render());
}

/*
3. Composition with Mixins
    - Write a withAutoDismiss(notification, ms) mixin that auto-dismisses after ms.
    - Write a withLogging(notification) mixin that logs lifecycle events (show, dismiss).
*/

