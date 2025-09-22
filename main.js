const menuToggle = document.querySelector('.menu-toggle');
const leftPanel = document.querySelector('.left-panel');
const headlineContainer = document.querySelector('.headline-container');

function toggleMenu() {
  menuToggle.classList.toggle('open');
  leftPanel.classList.toggle('show');

  if (leftPanel.classList.contains('show')) {
    headlineContainer.classList.add('rotate');
  } else {
    headlineContainer.classList.remove('rotate');
  }
}

menuToggle.addEventListener('click', toggleMenu);

window.addEventListener('load', () => {
  menuToggle.classList.add('open');
  leftPanel.classList.add('show');
  headlineContainer.classList.add('rotate');
});
