const el = document.querySelector('.content');

const signal = 'red';

switch(signal) {
  case "red":
    console.log('stop');
    el.innerHTML = ('stop');
    el.classList.add('stop');
    break;
  case "yellow":
    console.log('alert');
    el.innerHTML = ('alert');
    el.classList.add('alert');
    break;
  case "blue":
  case "green":
    console.log('go!');
    el.innerHTML = ('go!');
    break;
  default:
    console.log('Wait...');
    el.innerHTML = ('Wait...');
}

