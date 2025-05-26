document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.menu-button');
  const panel = document.querySelector('.menu-panel');
  const current = location.pathname.split('/').pop();
  const links = panel.querySelectorAll('a');

  btn.addEventListener('click', () => {
    if (panel.classList.contains('active')) {
      panel.classList.remove('active');
    } else {
      panel.classList.add('active');
    }
  });

  document.addEventListener('click', e => {
    if (!panel.contains(e.target) && !btn.contains(e.target)) {
      panel.classList.remove('active');
    }
  });

  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    if (link.getAttribute('href') === current) {
      link.classList.add('active-page');
    } else {
      link.classList.remove('active-page');
    }
  }
});