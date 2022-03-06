function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

const toggleMenu = document.querySelector('.nav-btn');
let openMenu = false;
toggleMenu.addEventListener('click', () => {

  if(!openMenu) {
    toggleMenu.classList.add('open');
    openMenu = true;
  }

  else {
    toggleMenu.classList.remove('open');
    openMenu = false;
  }

});
