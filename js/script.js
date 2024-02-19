const burger = document.getElementById('burger')
const link_list = document.getElementById('link_list')
const nav = document.getElementById('nav')
const grid = document.getElementById('grid_wrapper')


toggleBool = true;
function toggleMenu() {
  link_list.classList.toggle('links_visible')
  burger.classList.toggle('burger_in_x_form')
  if(toggleBool) {
    nav.style.width = "82px";
    toggleBool = false;
  } else {
    nav.style.width = "200px";
    toggleBool = true;
  }
}

toggleMenu()

burger.addEventListener('click', toggleMenu)