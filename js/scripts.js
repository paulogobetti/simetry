// Switch Button
function darkMode() {
  const darkModeBody = document.body;
  darkModeBody.classList.toggle("dark-mode");
}

// Toggle Menu Button
const toggleMenu = document.querySelector('.nav-btn');
const openMenu = false;
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
