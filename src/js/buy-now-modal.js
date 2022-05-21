  const closeButton = document.querySelector('.form__button--close');
  const orderButton = document.querySelector('.form__button--open');
  const openButton = document.querySelector('[data-modal-buy-now-open]');
  const openButtonMobMenu = document.querySelector('[data-modal-buy-now-open-mob-menu]');
  const backdrop = document.querySelector('.backdrop-buy-now');
  const modal = document.querySelector('.modal-buy-now');
  const titleAnimation = document.querySelector('.form__title');
  const label1Animation = document.querySelector('.form__field--name');
  const label2Animation = document.querySelector('.form__field--tel');
  const label3Animation = document.querySelector('.form__field--mail');
  const maxWidth = document.body.clientWidth;
  


openButton.addEventListener('click', () => {
  backdrop.classList.remove('backdrop-buy-now--is-hidden');
  titleAnimation.classList.add('animate__animated', 'animate__bounceInDown');
  label1Animation.classList.add('animate__animated', 'animate__bounceInLeft');
  label2Animation.classList.add('animate__animated', 'animate__bounceInRight');
  label3Animation.classList.add('animate__animated', 'animate__bounceInLeft');
  document.body.setAttribute('style', `max-width: ${maxWidth}px; overflow: hidden;`);
});

openButtonMobMenu.addEventListener('click', () => {
  backdrop.classList.remove('backdrop-buy-now--is-hidden');
  titleAnimation.classList.add('animate__animated', 'animate__bounceInDown');
  label1Animation.classList.add('animate__animated', 'animate__bounceInLeft');
  label2Animation.classList.add('animate__animated', 'animate__bounceInRight');
  label3Animation.classList.add('animate__animated', 'animate__bounceInLeft');
  document.body.setAttribute('style', `max-width: ${maxWidth}px; overflow: hidden;`);
});

closeButton.addEventListener('click', () => {
  backdrop.classList.add('backdrop-buy-now--is-hidden');
  titleAnimation.classList.remove('animate__animated', 'animate__bounceInDown');
  label1Animation.classList.remove('animate__animated', 'animate__bounceInLeft');
  label2Animation.classList.remove('animate__animated', 'animate__bounceInRight');
  label3Animation.classList.remove('animate__animated', 'animate__bounceInLeft');
  document.body.removeAttribute('style', `max-width: ${maxWidth}px; overflow: hidden;`);
});

orderButton.addEventListener('click', () => {
  location.href=location.href;
  backdrop.classList.add('backdrop-buy-now--is-hidden');
  document.body.removeAttribute('style', `max-width: ${maxWidth}px; overflow: hidden;`);
});

backdrop.addEventListener('click', function (e) {
  if (!e.target.closest('.modal-buy-now')) {
    backdrop.classList.add('backdrop-buy-now--is-hidden');
    titleAnimation.classList.remove('animate__animated', 'animate__bounceInDown');
    label1Animation.classList.remove('animate__animated', 'animate__bounceInLeft');
    label2Animation.classList.remove('animate__animated', 'animate__bounceInRight');
    label3Animation.classList.remove('animate__animated', 'animate__bounceInLeft');
    document.body.removeAttribute('style', `max-width: ${maxWidth}px; overflow: hidden;`);
    }
  });  