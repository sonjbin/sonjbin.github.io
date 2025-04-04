document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('dark-mode-toggle');
  const modeIcon = document.getElementById('mode-icon');
  const html = document.documentElement;

  function updateIcon() {
    if (html.classList.contains('dark')) {
      modeIcon.textContent = '☀️';
    } else {
      modeIcon.textContent = '🌙';
    }
  }

  if (localStorage.getItem('theme') === 'dark') {
    html.classList.add('dark');
  }
  updateIcon();

  toggleButton.addEventListener('click', () => {
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    updateIcon();
  });
}); 