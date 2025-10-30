import { fetchUser } from '../../src/scripts/utils';

type argsType = UserType;
type eventType = string;
type listenerType = (args: argsType) => void;


class EventEmitter {
  events: {
    [key: string]: ((args: argsType) => void)[]
  }

  constructor() {
    this.events = {};
  }

  // Ensure the event is registered before attach a listener to it
  on(event: eventType, listener: listenerType) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(listener);
  }

  // Only dettach the listener if the event is registered
  off(event: eventType, listener: listenerType) {
    if (!this.events[event]) return; 
    this.events[event] = this.events[event].filter(l => l !== listener);
  }

  // Attach a listener that fires only once 
  once(event: eventType, listener: listenerType) {
    const wrapper = (args: argsType) => {
      listener(args);
      this.off(event, wrapper);
    };
    this.on(event, wrapper);
  }

  // Only if event is registered, triggers the event by firing all related listeners
  emit(event: eventType, args: argsType) {
    if (!this.events[event]) return;  
    for(let listener of this.events[event]) {
      listener(args);
    }
  }


  // Troubleshooting
  listenersCount(event: eventType): number {
    return this.events[event]?.length ?? 0;
  }

  eventNames(): string[] {
    return Object.keys(this.events);
  }
}




const theEndpoint = 'https://randomuser.me/api/';

type UserResponseType = {
  results: {
    name: UserNameType;
    gender: UserGenderType;
  }[]
};
type UserType = {
  name: UserNameType;
  gender: UserGenderType;
};
type UserNameType = {
  title: string;
  first: string;
  last: string;
};
type UserGenderType = string;


const getUser = (data: UserResponseType): UserType => {
  const tempData = data.results[0];

  return {
    name: {
      title: tempData?.name?.title ?? '',
      first: tempData?.name?.first ?? '',
      last: tempData?.name?.last ?? ''
    },
    gender: tempData?.gender ?? '<no gender>'
  };
};


const fetcher = async(endpoint: string): Promise<UserType> => {
  let data;
  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error(`HTTP Error: Status:${response.status}`);
    }

    data = await response.json();
  } catch (error) {
    console.error(`${error instanceof Error ? error.message : String(error)}`);
  }
  return getUser(data);
};


const displayUser = (user: UserType) => {  
  const userContent = document.createElement('span')
  userContent.setAttribute('id', 'placeholder-new-user');
  userContent.setAttribute('class', 'fw-bold');
  userContent.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;
  document.getElementById('placeholder-new-user')?.replaceWith(userContent);
};


const alertUserName = (user: UserType) => { 
  alert( `New User: ${user.name.title} ${user.name.first} ${user.name.last}`); 
};



const watcher = new EventEmitter();


// Emit event
document.getElementById('btn-fetch')?.addEventListener('click', () => { 
  (async() => {
    const user = await fetcher(theEndpoint);
    watcher.emit('user:fetched', user); 
  })();

});

// Attach listener to event
document.getElementById('btn-subscribe')?.addEventListener('click', () => {
  watcher.on('user:fetched', displayUser);
})

// Attach listener once to event
document.getElementById('btn-subscribe-once')?.addEventListener('click', () => {
  watcher.once('user:fetched', alertUserName);
})

// Detach listener to event
document.getElementById('btn-unsubscribe')?.addEventListener('click', () => {
  watcher.off('user:fetched', displayUser); 
})