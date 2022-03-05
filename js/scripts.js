function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

const menuButton = document.querySelector('.nav-btn');
let menuOpen = false;
menuButton.addEventListener('click', () => {

  if(!menuOpen) {
    menuButton.classList.add('open');
    menuOpen = true;
  }

  else {
    menuButton.classList.remove('open');
    menuOpen = false;
  }

});
 