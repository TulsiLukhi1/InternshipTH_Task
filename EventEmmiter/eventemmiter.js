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

    //check if event present or not if not
    //create new event and initialize with empty array

    this.events[eventName] = this.events[eventName] || [];
    // console.log(eventName);

    //now push list callback(listener) to that particular event array
    this.events[eventName].push(callback);

    return {
      unsubscribe: () => {
        //get the index of event from particular event array
        const index = this.events[eventName].indexOf(callback);
        this.events[eventName].splice(index, 1);
        return undefined;
      },
    };
  }

  emit(eventName, args = []) {
    console.log("args", args);
    console.log(typeof args);
    var result = [];
    //first check that eventName exists in events
    if (this.events[eventName]) {
      //if it exists we interate array and in sequentially execute listeners
      this.events[eventName].forEach((listener) => {
        const value = listener(...args);

        result.push(value);
      });
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
