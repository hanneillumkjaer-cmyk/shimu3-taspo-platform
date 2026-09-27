// Mobile menu
(function () {
  var btn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
  }
  // Current year in footer
  document.querySelectorAll('.yr').forEach(function (el) { el.textContent = new Date().getFullYear(); });
  // Pre-select contact topic from ?topic=
  var topic = new URLSearchParams(window.location.search).get('topic');
  var select = document.getElementById('topic');
  if (topic && select && select.querySelector('option[value="' + topic + '"]')) select.value = topic;
})();
