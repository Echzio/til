function once(func) {
  let once = false;
  return function () {
    if (!once) {
      func.call(this, arguments)
      once = true;
    }
  }
}


const funcCall = once(() => {
  console.log('called')
})

funcCall()
funcCall()
funcCall()
funcCall()
funcCall()
funcCall()