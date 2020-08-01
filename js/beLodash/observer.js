// // class observer

// class Observer {
//   constructor(array) {
//     this.source = array;
//     this.result = this.source;
//   }

//   #watchers = [];

//   add(value) {
//     this.result = this.result + value
//     this._watcher()
//     return this
//   }

//   subscribe(callback) {
//     this.#watchers.push({ [callback.toString()]: callback })

//     return () => {
//       this.#watchers = this.#watchers.filter(item => {
//         const [key] = Object.keys(item);
//         return key !== callback.toString()
//       })
//     }
//   }

//   mapped(callback) {
//     this.result = this.result.map(callback)
//     return this
//   }

//   filter(callback) {
//     this.result = this.result.filter(callback)
//     return this
//   }

//   _watcher() {
//     this.#watchers.forEach(item => {
//       const [func] = Object.values(item);
//       func(this.result);
//     })
//   }
// }

// const observable = new Observer(1)

// const unsubscribe = observable.subscribe(value => {
//   console.log(value)
// })

// // unsubscribe()

// observable
//   .add(5)
//   .add(7)

// // ....

// observable.add(7)

// function observer

function observable(payload) {
  let observe = payload;
  let watchers = [];

  function watch() {
    watchers.forEach(item => {
      const [func] = Object.values(item)
      func(observe)
    })
  }

  return {
    subscribe(subscribeFunc) {
      watchers.push({ [subscribeFunc.toString()]: subscribeFunc })

      return () => {
        watchers = watchers.filter(item => {
          const [key] = Object.keys(item);
          return key !== subscribeFunc.toString()
        })
      }
    },
    map(mapFunc) {
      observe = observe.map(mapFunc)
      watch()
      return this
    },
    filter(filterFunc) {
      observe = observe.filter(filterFunc)
      watch()
      return this
    },
  }
}

const observer = observable([1, 2, 3, 4, 5])

const unsubscribe = observer.subscribe(item => {
  console.log(item)
})

unsubscribe()

observer
  .map(item => item * 5)
  .filter(item => item % 2 === 0)
  .map(item => item + 10)

