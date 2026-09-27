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
  // Set contact email subject from ?topic=
  var subjects = { donation: 'Making a donation', partnership: 'Partnership', equipment: 'Donating equipment' };
  var topic = new URLSearchParams(window.location.search).get('topic');
  var emailBtn = document.getElementById('email-button');
  if (emailBtn && subjects[topic]) emailBtn.href += '?subject=' + encodeURIComponent(subjects[topic]);
})();
