function menu() {
  var hamburger = document.querySelector('.hamburger'),
      menu      = document.querySelector('.menu');
  
  hamburger.classList.toggle('hamburger-open');
  menu.classList.toggle('menu-open');
  
  return;
}