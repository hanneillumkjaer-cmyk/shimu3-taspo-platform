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

// Licences page: open certificates in an in-page viewer instead of linking
// to the raw file, and block right-click/drag on the images. This deters
// casual copying; it can't stop a screenshot (the images are watermarked).
(function () {
  var lightbox = document.getElementById('licence-lightbox');
  if (!lightbox) return;
  var body = document.getElementById('licence-lightbox-body');
  var title = document.getElementById('licence-lightbox-title');
  var closeBtn = lightbox.querySelector('.licence-lightbox-close');
  var opener = null;
  function open(card) {
    opener = card;
    title.textContent = card.getAttribute('data-licence-title') || '';
    var img = document.createElement('img');
    img.src = card.getAttribute('data-licence-src');
    img.alt = title.textContent;
    img.draggable = false;
    body.innerHTML = '';
    body.appendChild(img);
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }
  function close() {
    lightbox.hidden = true;
    body.innerHTML = '';
    document.body.style.overflow = '';
    if (opener) opener.focus();
  }
  document.querySelectorAll('[data-licence-src]').forEach(function (card) {
    card.addEventListener('click', function () { open(card); });
  });
  lightbox.querySelectorAll('[data-licence-close]').forEach(function (el) {
    el.addEventListener('click', close);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !lightbox.hidden) close();
  });
  document.addEventListener('contextmenu', function (e) {
    if (e.target.closest && e.target.closest('.licence-card, .licence-lightbox-body')) e.preventDefault();
  });
})();
