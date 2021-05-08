// Banner de cookies

const btnAcceptCookies = document.getElementById('acceptCookies');
const adviceCookies = document.getElementById('cookiesAdvice');
const backdropCookies = document.getElementById('backdropCookies');

if (!localStorage.getItem('accepted-cookies')) {
  adviceCookies.classList.add('active');
  backdropCookies.classList.add('active');
}

btnAcceptCookies.addEventListener('click', () => {
  adviceCookies.classList.remove('active');
  backdropCookies.classList.remove('active');
  localStorage.setItem('accepted-cookies', true);
});