document.addEventListener('DOMContentLoaded', () => {
  const easterEggCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 's', 'o', 'n'];
  let easterEggIndex = 0;
  let isAnimating = false;

  window.addEventListener('keydown', (event) => {
    if (event.key === easterEggCode[easterEggIndex]) {
      easterEggIndex++;
      if (easterEggIndex === easterEggCode.length) {
        if (!isAnimating) {
          startStarRain();
        }
        easterEggIndex = 0;
      }
    } else {
      easterEggIndex = 0;
    }
  });

  function startStarRain() {
    if (isAnimating) return;
    isAnimating = true;
    let count = 0;
    const maxStars = 100;

    const interval = setInterval(() => {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + 'vw';
      star.style.animationDuration = (Math.random() * 2 + 3) + 's';
      star.innerText = '❄️';
      document.body.appendChild(star);

      setTimeout(() => {
        star.remove();
      }, 5000);

      count++;
      if (count >= maxStars) {
        clearInterval(interval);
        setTimeout(() => {
          isAnimating = false;
        }, 5000);
      }
    }, 50);
  }
});
