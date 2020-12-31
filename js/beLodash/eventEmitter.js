function eventEmitter() {
  let events = {};

  return {
    watch: (name, fn) => {
      events = {
        ...events,
        [name]: [...(events[name] || []), fn],
      };

      return () => {
        events = {
          ...events,
          [name]: events[name].filter(
            (item) => item.toString() !== fn.toString()
          ),
        };
      };
    },
    call: (name, ...payload) => {
      events[name].forEach((fn) => {
        fn.apply(null, payload);
      });
    },
  };
}

const emit = eventEmitter();

emit.watch("callMyName", (name, age) => {
  console.log(
    `call my name.....${name}.......and age.....${age}`
  );
});

emit.call("callMyName", "Alexander", "10");
