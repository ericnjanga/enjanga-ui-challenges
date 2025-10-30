🚀 Exercise: Build a Flexible Notification System
-------
(JavaScript Object Programming: https://chatgpt.com/c/68d7f4ca-17b4-8324-8542-877aa557a461)


# Scenario
You’re working on a design system that powers multiple apps. You need a notification system (think Toasts, Alerts, Snackbars). Different products will extend it differently.
You’ll implement:

1. A base Notification class (abstract-like behavior, even though JS doesn’t have true abstract classes).
2. Specialized classes:
    - ToastNotification
    - ModalNotification
    - BannerNotification
3. Polymorphism: Each type must implement its own render() method.
4. Encapsulation: Notifications should manage their own state (message, type, duration).
5. Inheritance: Shared logic (like dismiss(), updateMessage()) must live in the parent.
6. Composition: Add behaviors (e.g., withAutoDismiss, withLogging) using mixins instead of deep inheritance.
7. Factory pattern: A NotificationFactory that creates notifications based on a config.
8. Usage in a UI context: Simulate rendering by returning HTML strings (no React required for now, but you could later refactor into React components).




🎯 Tasks

[✅] Extend the system
    - Implement ModalNotification and BannerNotification, each with a unique render().
    - ModalNotification should have an open() and close().
    - BannerNotification should stretch full-width and include a “dismiss” button in its render output.

[✅] Polymorphism in Action
    - Put all notifications in an array and call .render() on each — you should get different outputs without knowing the exact class.

[✅] Composition with Mixins
    - Write a withAutoDismiss(notification, ms) mixin that auto-dismisses after ms.
    - Write a withLogging(notification) mixin that logs lifecycle events (show, dismiss).

4. Factory
    - Implement NotificationFactory.create({ type, message, ...options }).
    - Example:
    const notif = NotificationFactory.create({
      type: "toast",
      message: "Data saved",
      duration: 2000
    });


5. Stretch Goal (Senior-level)
    - Refactor into React (or another UI framework).
    - Show how composition > inheritance by implementing HOCs or hooks instead of subclassing everything.

Example Usage
const toast = new ToastNotification("Hello World!", 2000);
toast.show();
console.log(toast.render());

const banner = new BannerNotification("System update available");
banner.show();
console.log(banner.render());

const autoDismissToast = withAutoDismiss(new ToastNotification("Will vanish", 1000), 1000);
autoDismissToast.show();