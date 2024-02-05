class EventEmitter {
  constructor() {
    //maintain array with event nae and all listeners which have subscribed to the event
    this.events = {};
  }

  subscribe(eventName, callback) {
    //here our callback is listener

    if (typeof callback !== "function") {
      throw new Error("Listener must be a function!");
    }

   
    // Check if event present or not
    if (Object.keys(this.events).indexOf(eventName) === -1) {
      // Create new event and initialize with empty array
      this.events[eventName] = [];
    }

    //now push list callback(listener) to that particular event array
    this.events[eventName].push(callback);

    return {
      unsubscribe: () => {
        //get the index of event from particular event array
        const index = this.events[eventName].indexOf(callback);
        this.events[eventName].splice(index, 1);
      },
    };
  }

  async emit(eventName, args = []) {
    var result = [];

    // First check that eventName exists in events
    if (this.events[eventName]) {
        // If it exists, iterate over the array and sequentially execute listeners
        for (const listener of this.events[eventName]) {
            // Check if the listener is asynchronous (returns a promise)
            if (listener.constructor.name === 'AsyncFunction' || listener instanceof Promise) {
                const value = await listener(...args);
                result.push(value);
            } else {
                const value = listener(...args);
                result.push(value);
            }
        }
    }

    return result;
}

 
}

const emitter = new EventEmitter();

//**************** example 1 *******************//

const ex1_res1 = emitter.emit("firstEvnet");
console.log("result", ex1_res1); //shoult print []

emitter.subscribe("firstEvent", function cb1() {
  return 5;
});

emitter.subscribe("firstEvent", function cb2() {
  return 6;
});

const ex1_res2 = emitter.emit("firstEvent");

console.log("result2", ex1_res2);
