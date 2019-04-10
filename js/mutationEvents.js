const App = document.getElementById('app')

const Mutable = new MutationObserver((mutable) => {
  console.log(mutable)
})

const MutableConfig = {attributes: true, childList: true, characterData: false};

Mutable.observe(App, MutableConfig);