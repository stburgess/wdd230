const darkButton = document.querySelector('#darkBtn');
const main = document.querySelector('main');

darkButton.addEventListener('click', () => {
  main.classList.toggle('dark');
});