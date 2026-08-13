const routeMap={
  'coaching.html':'education.html',
  'livery.html':'horse-care.html',
  'events.html':'calendar.html',
  'hire.html':'arena.html'
};
document.querySelectorAll('a[href]').forEach(link=>{
  const href=link.getAttribute('href');
  if(routeMap[href]) link.setAttribute('href',routeMap[href]);
});

const button=document.querySelector('.menu-button');
const nav=document.querySelector('.topnav');
if(button&&nav){
  button.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    button.setAttribute('aria-expanded',String(open));
  });
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
    nav.classList.remove('open');
    button.setAttribute('aria-expanded','false');
  }));
}
