// Light/dark toggle. The initial theme (light unless the visitor switched to
// dark) is set by an inline script in the page <head> so there is no flash of
// the wrong theme; this handles clicks and remembers the choice.
(function () {
  var root = document.documentElement;
  var button = document.getElementById('theme-toggle');

  if (button) {
    button.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }
})();
