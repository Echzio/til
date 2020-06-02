class Observer {
  constructor(array) {
    this.source = array;
    this.result = this.source;
  }

  subscribe(callback) {
    this.result.forEach(item => {
      callback(item)
    })
  }

  mapped(callback) {
    this.result = this.result.map(callback)
    return this
  }

  filter(callback) {
    this.result = this.result.filter(callback)
    return this
  }
}

const observable = new Observer([1, 2, 3, 4, 5, 6])

observable
  .filter(item => item % 2 == 0)
  .mapped(item => item * 2)
  .subscribe(item => console.log(item))
