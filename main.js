const menuToggle = document.querySelector('.menu-toggle');
const leftPanel = document.querySelector('.left-panel');
const headlineContainer = document.querySelector('.headline-container');
const overlay = document.querySelector('.page-transition-overlay');

function toggleMenu() {
  menuToggle.classList.toggle('open');
  leftPanel.classList.toggle('show');
  
  if (leftPanel.classList.contains('show')) {
    if (headlineContainer) {
      headlineContainer.classList.add('rotate');
    }
  } else {
    if (headlineContainer) {
      headlineContainer.classList.remove('rotate');
    }
  }
}

menuToggle.addEventListener('click', toggleMenu);

window.addEventListener('load', () => {
  const isFromNavigation = sessionStorage.getItem('fromNavigation');

  if (isFromNavigation) {
    sessionStorage.removeItem('fromNavigation');
    leftPanel.classList.add('page-load-start');

    setTimeout(() => {
      leftPanel.classList.add('page-load-transition');
      leftPanel.classList.remove('page-load-start');
      leftPanel.classList.add('show');
      menuToggle.classList.add('open');

      if (headlineContainer) {
        headlineContainer.classList.add('rotate');
      }

      setTimeout(() => {
        overlay.classList.add('fade-out');
        setTimeout(() => {
          menuToggle.classList.remove('open');
          leftPanel.classList.remove('show');
          if (headlineContainer) {
            headlineContainer.classList.remove('rotate');
          }
        }, 500);
      }, 200);
    }, 50);
  } else {
    overlay.classList.add('fade-out');
  }
});


const menuLinks = document.querySelectorAll('.left-panel nav a');
menuLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    sessionStorage.setItem('fromNavigation', 'true');
    leftPanel.classList.add('expand');
    setTimeout(() => {
      window.location.href = link.href;
    }, 500);
  });
});