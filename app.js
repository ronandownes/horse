const menu = document.querySelector('.menu');
const nav = document.querySelector('#nav');
menu?.addEventListener('click',()=>{
  const isOpen = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!isOpen));
  nav?.classList.toggle('open', !isOpen);
});
nav?.addEventListener('click',e=>{
  if(e.target.matches('a')){nav.classList.remove('open');menu?.setAttribute('aria-expanded','false');}
});
