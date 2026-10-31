(function () {
  'use strict';
  var C = window.SITE_CONFIG || {};
  var consentKey = 'danielmanfr_click_metrics';

  function phone(value) { return String(value || '').replace(/\D/g, ''); }
  function currentConsent() {
    try { return localStorage.getItem(consentKey); } catch (e) { return null; }
  }
  function updateContactLinks() {
    var wa = phone(C.whatsapp), tel = phone(C.telefone);
    document.querySelectorAll('[data-acao="whatsapp"]').forEach(function (el) {
      var msg = el.getAttribute('data-msg') || C.mensagem || '';
      if (wa) el.href = 'https://wa.me/' + wa + '?text=' + encodeURIComponent(msg);
      el.target = '_blank';
      el.rel = 'noopener noreferrer';
    });
    document.querySelectorAll('[data-acao="ligar"]').forEach(function (el) {
      if (tel) el.href = 'tel:+' + tel;
    });
  }
  function broadPage() {
    var p = location.pathname || '/';
    if (p === '/') return '/';
    if (p.indexOf('/servicos/') === 0) return '/servicos/';
    if (p.indexOf('/sobre/') === 0 || p.indexOf('/perguntas-frequentes/') === 0 || p.indexOf('/politica-de-privacidade/') === 0) return '/institucional/';
    return '/outras-paginas/';
  }
  function record(acao, local) {
    if (currentConsent() !== 'yes' || !C.endpoint) return;
    /* Minimização: não transmitir texto da mensagem, assunto específico, URL completa, referrer, UTMs, gclid, idioma, tela ou sessão. */
    var d = {
      site: C.site || 'danielmanfr',
      nicho: C.nicho || '',
      acao: acao || '',
      local: local || '',
      pagina: broadPage()
    };
    var query = Object.keys(d).map(function (k) { return k + '=' + encodeURIComponent(d[k]); }).join('&');
    var url = C.endpoint + '?' + query;
    try {
      fetch(url, { method: 'GET', mode: 'no-cors', keepalive: true }).catch(function () {
        try { var image = new Image(); image.src = url; } catch (e) {}
      });
    } catch (e) {
      try { var image = new Image(); image.src = url; } catch (e2) {}
    }
  }
  function consentUI() {
    var banner = document.getElementById('consent-banner');
    if (!banner) return;
    if (currentConsent() === null) banner.hidden = false;
    banner.querySelectorAll('[data-consent]').forEach(function (button) {
      button.addEventListener('click', function () {
        try { localStorage.setItem(consentKey, button.getAttribute('data-consent')); } catch (e) {}
        banner.hidden = true;
      });
    });
  }
  function menuUI() {
    var toggle = document.querySelector('.menu-toggle');
    var menu = document.getElementById('main-menu');
    if (!toggle || !menu) return;
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.querySelector('.sr-only').textContent = open ? 'Abrir menu' : 'Fechar menu';
      menu.classList.toggle('is-open', !open);
    });
  }
  function quickUI() {
    var select = document.getElementById('quick-topic');
    var anchor = document.getElementById('quick-whatsapp');
    if (!select || !anchor) return;
    var messages = {
      geral: C.mensagem,
      cobertura: 'Olá. Gostaria de conversar sobre uma questão de cobertura do plano de saúde. Não enviarei dados médicos nesta primeira mensagem.',
      tratamento: 'Olá. Gostaria de conversar sobre uma questão relacionada a tratamento ou medicamento e plano de saúde. Não enviarei dados médicos nesta primeira mensagem.',
      contrato: 'Olá. Gostaria de conversar sobre reajuste ou cancelamento de plano de saúde. Não enviarei dados médicos nesta primeira mensagem.'
    };
    select.addEventListener('change', function () {
      anchor.setAttribute('data-msg', messages[select.value] || C.mensagem || '');
      updateContactLinks();
    });
  }
  document.addEventListener('click', function (event) {
    var el = event.target.closest ? event.target.closest('[data-acao]') : null;
    if (el) record(el.getAttribute('data-acao'), el.getAttribute('data-local'));
  }, true);
  updateContactLinks();
  consentUI();
  menuUI();
  quickUI();
})();
