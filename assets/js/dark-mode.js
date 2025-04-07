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

  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    html.classList.add('dark');
  } else if (savedTheme === 'light') {
    html.classList.remove('dark');
  } else {
    // 저장된 테마가 없으면 브라우저 다크모드 감지
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
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