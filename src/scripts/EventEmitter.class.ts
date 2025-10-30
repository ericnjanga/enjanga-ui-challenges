import type { EventType, ListenerType, ArgsType } from "./types";

class EventEmitter {

  events: {
    [key: string]: (ListenerType)[]
  };


  constructor() {
    this.events = {};
  }


  on(event: EventType, listener: ListenerType) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  off(event: EventType, listener: ListenerType) {
    if (!this.events[event]) return;

    this.events[event] = this.events[event].filter(l => l !== listener);
  }

  once(event: EventType, listener: ListenerType) {
    const wrapper = (...args: ArgsType) => {
      listener(...args);
      this.off(event, wrapper);
    };

    this.on(event, wrapper);
  }

  emit(event: EventType, ...args: ArgsType) {
    if (!this.events[event]) return;
    this.events[event].forEach(listener => listener(...args));
  }

  // Trobleshooting
  listenersCount(event: EventType) { 
    return this.events[event]?.length ?? 0;
  }

  eventNames() {
    return Object.keys(this.events).join(', ');
  }
}
