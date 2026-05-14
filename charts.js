/* ═══════════════════════════════════════════
   Bachata: From Humble Roots to Tall Walls
   charts.js
═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {

  // ── MAP VIEWER ──────────────────────────────
  const slides = document.querySelectorAll('.map-slide');
  const dots   = document.querySelectorAll('.map-dot');
  const prevBtn = document.getElementById('mapPrev');
  const nextBtn = document.getElementById('mapNext');
  let current = 0;

  function goToSlide(n) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = n;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === slides.length - 1;
  }

  prevBtn.addEventListener('click', () => goToSlide(current - 1));
  nextBtn.addEventListener('click', () => goToSlide(current + 1));
  dots.forEach(dot => dot.addEventListener('click', () => goToSlide(+dot.dataset.index)));

  prevBtn.disabled = true;

});
