const readmoreButton = document.querySelector('.btn-about');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.readmore__modal');

const maxWidth = document.body.clientWidth;

readmoreButton.addEventListener('click', () => {
  overlay.classList.remove('overlay--off');
  document.body.setAttribute('style', `max-width: ${maxWidth}px; overflow: hidden;`);
});
overlay.addEventListener('click', () => {
  overlay.classList.add('overlay--off');
  document.body.removeAttribute('style');
});
