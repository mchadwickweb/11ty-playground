const navigationContainers = document.querySelectorAll('[data-nav]');

function toggleMenu(menuElement, toggle) {
  if (!menuElement) return;

  const menu = menuElement;
  const isMenuHidden = menu.hidden;
  // Toggle on
  if (isMenuHidden) {
    menu.hidden = false;
    menu.style.display = 'block';
    toggle.setAttribute('aria-expanded', 'true');
    return;
  }
  // Toggle off
  menu.hidden = true;
  menu.style.display = 'none';
  toggle.setAttribute('aria-expanded', 'false');
}

navigationContainers.forEach((container) => {
  const toggle = container.querySelector('[data-nav-toggle]');
  const menu = container.querySelector('[data-nav-menu]');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      toggleMenu(menu, toggle);
    });
  }
});
