const App = document.getElementById('app')

const Mutable = new MutationObserver((mutables) => {
  for (let mutable of mutables) {
    console.log(mutable)
  }
})

const MutableConfig = {attributes: true, childList: true, characterData: false};

Mutable.observe(App, MutableConfig);