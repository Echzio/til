(() => {
  const ReadyWindow = () => {
    const Colors = ['yellow', 'green', 'blue', 'purple', 'red'];
    const Body = document.body;
    let state = 0;
    const ChangeColors = () => {
      setTimeout(() => {
        Body.classList.remove(Colors[state - 1]);
        SetColors();
        ChangeColors();
      }, 5000);
    }
    const SetColors = () => {
      if (state < 5) {
        Body.classList.add(Colors[state]);
        state++;
      } else {
        state = 0;
        Body.classList.add(Colors[state]);
        state++;
      }
    }

    SetColors();
    ChangeColors();
  }

  window.addEventListener('load', ReadyWindow);
})()