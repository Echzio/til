document.addEventListener('DOMContentLoaded', () => {
  const [second, minute, hour] = ['second', 'minute', 'hour'].map(item => document.querySelector(`.arrow_${item}`));
  let timer = null;

  timer = (function ticker() {
    return setTimeout(() => {
      tick(second, minute, hour);
      timer = ticker();
    }, 500)
  })()


  tick(second, minute, hour);


  window.addEventListener('unload', () => {
    clearTimeout(timer);
  })
})

function tick(second, minute, hour) {
  const date = new Date();
  const seconds = date.getSeconds() / 60;
  const minutes = (date.getMinutes() + seconds) / 60;
  const hours = (date.getHours() + minutes) / 12;

  second.style.setProperty('--rotation', `${seconds * 360}deg`);
  minute.style.setProperty('--rotation', `${minutes * 360}deg`);
  hour.style.setProperty('--rotation', `${hours * 360}deg`);
}