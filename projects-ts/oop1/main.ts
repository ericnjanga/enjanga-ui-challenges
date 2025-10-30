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
  }

  dismiss() {
    this.#visible = false;
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
const withAutoDismiss = <T extends Notification>(notification: T, ms: number): T => {
  // preserve original show()
  const originalShow = notification.show.bind(notification);

  // Override current show()
  notification.show = () => {
    originalShow();

    setTimeout(() => {
      notification.dismiss();
    }, ms);
  };

  return notification;
};

const withLogging = <T extends Notification>(notification: T): T => {

  // Preserve original lifecycle methods
  const originalShow = notification.show.bind(notification);
  const originalDismiss = notification.dismiss.bind(notification);
  const originalRender = notification.render.bind(notification);

  // Overriding current lifecycle methods ...
  notification.show = () => {
    console.log(`Showing ... ${notification.type}`);
    originalShow();
  };
 
  notification.dismiss = () => {
    console.log(`Dismissing ... ${notification.type}`);
    originalDismiss();
  };
 
  notification.render = () => {
    console.log(`Rendering ... ${notification.type}`);
    originalRender();
  };
  
  // Return enhanced objects
  return notification;
};


const modal1 = withAutoDismiss(
  new ModalNotification('this will be dismissed soon', 'dismissable'),
  5000
);
const modal2 = withLogging(modal1);

modal1.show();
modal1.render();
