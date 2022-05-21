const pinkCard = document.querySelector('.products__item.accent--pink');
const pinkButton = document.querySelector('.products__item.accent--pink .products__btn');
pinkCard.setAttribute('style', `transition: transform 500ms ease;`);

const caramelCard = document.querySelector('.products__item.accent--caramel');
const caramelButton = document.querySelector('.products__item.accent--caramel .products__btn');
caramelCard.setAttribute('style', `transition: transform 350ms ease;`);

const greenCard = document.querySelector('.products__item.accent--green');
const greenButton = document.querySelector('.products__item.accent--green .products__btn');
greenCard.setAttribute('style', `transition: transform 350ms ease;`);

pinkButton.addEventListener('click', () => {
  pinkCard.classList.toggle('products__item-pink');
});

caramelButton.addEventListener('click', () => {
  caramelCard.classList.toggle('products__item-caramel');
});

greenCard.addEventListener('click', () => {
  greenCard.classList.toggle('products__item-green');
});
