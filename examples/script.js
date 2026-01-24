// Простая интерактивность для .box
document.addEventListener('DOMContentLoaded', function () {
  const box = document.querySelector('.box');
  const text = box.querySelector('.text');
  const originalText = text.textContent;

  if (!box) return;

  // Функция переключения состояния
  function toggleBox() {
    const isActive = box.classList.toggle('active');
    box.setAttribute('aria-pressed', String(isActive));
    if (isActive) {
      text.textContent = 'Активно! Нажмите ещё раз, чтобы вернуть';
    } else {
      text.textContent = originalText;
    }
  }

  // Клик 
  box.addEventListener('click', toggleBox);

  // Доступность: Enter / Space
  box.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); // чтобы страница не скроллировалась при Space
      toggleBox();
    }
  });
});
