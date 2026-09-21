const button = document.getElementById('language');
let language = 'en';
button.addEventListener('click', () => {
  language = language === 'en' ? 'zh' : 'en';
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-en][data-zh]').forEach(node => { node.textContent = node.dataset[language]; });
  button.textContent = language === 'en' ? '中文' : 'EN';
  button.setAttribute('aria-label', language === 'en' ? 'Switch to Chinese' : '切换为英文');
  document.title = language === 'en' ? 'Kai Liu | 刘凯 — Embodied Perception' : '刘凯 | Kai Liu — 具身智能感知';
});
