import { cities } from "/cities.js";

const event = new CustomEvent("input", {
  bubbles: true,
});

document
  .getElementById("he")
  .addEventListener("input", throttle(searchAlgorithm, 1000));

document.getElementById("he").dispatchEvent(event);

function searchAlgorithm(e) {
  document.getElementById("out").innerHTML = "";
  cities
    .filter((item) => {
      return item.name.toLowerCase().includes(e.target.value.toLowerCase());
    })
    .slice(0, 100)
    .forEach((item) => {
      const p = document.createElement("p");
      p.innerText = item.name;
      document.getElementById("out").appendChild(p);
    });
}

function throttle(f, t) {
  console.log("throttle ok");
  let isThrottled = false;
  let savedArgs;
  let savedThis;

  function wrapper() {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }
    console.log("wrapper ok");
    f.apply(this, arguments);
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, t);
  }

  return wrapper;
}
