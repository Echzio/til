(() => {
  class ColorRotate {
    constructor(colors) {
      this.colors = colors
    }
    setColors = (state = 0) => {
      if (state < this.colors.length) {
        document.body.className = this.colors[state]
        state++;
      } else {
        state = 0;
        document.body.className = this.colors[state]
        state++;
      }
      setTimeout(() => {
        this.setColors(state);
      }, 5000);
    }
  }
  const Colors = ['yellow', '#000', 'green', 'blue', 'purple', 'red', 'pink']
  const Color = new ColorRotate(Colors)
  Color.setColors()
})()