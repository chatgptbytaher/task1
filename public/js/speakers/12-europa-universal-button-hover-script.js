
(function () {
  function addEuropaButtonHover() {
    document.querySelectorAll('.button_primary:not(.cta_button)').forEach(function (button) {
      if (button.querySelector('.button_text_wrapper, .europa-button-label')) return;
      // Only wrap plain-text controls; preserve all existing animated template markup.
      if (button.children.length) return;
      var label = (button.textContent || '').trim();
      if (!label) return;
      button.textContent = '';
      var wrap = document.createElement('span');
      wrap.className = 'europa-button-label';
      var first = document.createElement('span');
      first.textContent = label;
      var second = document.createElement('span');
      second.textContent = label;
      second.setAttribute('aria-hidden', 'true');
      wrap.appendChild(first);
      wrap.appendChild(second);
      button.appendChild(wrap);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addEuropaButtonHover);
  else addEuropaButtonHover();
})();
