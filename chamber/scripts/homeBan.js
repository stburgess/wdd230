const homeBanner = document.querySelector('.home-banner');
const homeBanBt = document.querySelector('#home-banner-bt');
const day = new Date().getDay;

if (day < 1 || day > 3) {
  homeBanner.classList.add('hide');
}

homeBanBt.addEventListener('click', () => {
  homeBanner.classList.add('hide');
});