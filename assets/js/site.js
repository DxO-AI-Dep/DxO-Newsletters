document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.site-header__menu');
  const nav = document.querySelector('#site-nav');
  if (!menuButton || !nav) return;

  const collapseMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    nav.dataset.collapsed = 'true';
    nav.setAttribute('hidden', '');
  };

  const expandMenu = () => {
    menuButton.setAttribute('aria-expanded', 'true');
    nav.dataset.collapsed = 'false';
    nav.removeAttribute('hidden');
  };

  const enableDesktopNav = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    nav.dataset.collapsed = 'false';
    nav.removeAttribute('hidden');
  };

  const syncState = () => {
    if (window.innerWidth > 720) {
      enableDesktopNav();
    } else if (menuButton.getAttribute('aria-expanded') === 'true') {
      expandMenu();
    } else {
      collapseMenu();
    }
  };

  syncState();

  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    if (expanded) {
      collapseMenu();
    } else {
      expandMenu();
    }
  });

  window.addEventListener('resize', syncState);
});
