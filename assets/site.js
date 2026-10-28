// Forms have no backend: validate, then show the Wix-style confirmation.
document.querySelectorAll('.js-form').forEach(function (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.classList.add('sent');
    form.reset();
  });
});

// Testimonial slideshow (Session page).
document.querySelectorAll('.slideshow').forEach(function (show) {
  var slides = show.querySelectorAll('.slide');
  var dots = show.querySelectorAll('.dot');
  var i = 0;
  var timer;
  function go(n) {
    i = (n + slides.length) % slides.length;
    slides.forEach(function (s, k) { s.classList.toggle('on', k === i); });
    dots.forEach(function (d, k) { d.classList.toggle('on', k === i); });
    clearInterval(timer);
    timer = setInterval(function () { go(i + 1); }, 5000);
  }
  show.querySelector('.prev').addEventListener('click', function () { go(i - 1); });
  show.querySelector('.next').addEventListener('click', function () { go(i + 1); });
  dots.forEach(function (d, k) { d.addEventListener('click', function () { go(k); }); });
  go(0);
});
