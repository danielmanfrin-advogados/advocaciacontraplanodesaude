(function () {
  'use strict';
  var C = window.SITE_CONFIG || {};
  var sessionKey = 'danielmanfr_click_session';

  function digits(value) { return String(value || '').replace(/\D/g, ''); }
  function param(name) {
    try { return new URLSearchParams(window.location.search).get(name) || ''; }
    catch (e) { return ''; }
  }
  function sessionId() {
    try {
      var id = sessionStorage.getItem(sessionKey);
      if (!id) {
        id = 's-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 12);
        sessionStorage.setItem(sessionKey, id);
      }
      return id;
    } catch (e) { return ''; }
  }
  function updateContactLinks() {
    var wa = digits(C.whatsapp), tel = digits(C.telefone);
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
  function record(acao, local, detalhe) {
    if (!C.endpoint) return;
    var screenSize = window.screen ? window.screen.width + 'x' + window.screen.height : '';
    var ua = navigator.userAgent || '';
    var d = {
      site: C.site || 'danielmanfr',
      nicho: C.nicho || '',
      acao: acao || '',
      local: local || '',
      pagina: window.location.pathname || '/',
      origem: document.referrer || param('utm_source') || 'direto',
      utm_medium: param('utm_medium'),
      utm_campaign: param('utm_campaign'),
      utm_term: param('utm_term'),
      gclid: param('gclid') ? 'sim' : 'não',
      dispositivo: /Android|iPhone|iPad|iPod|Windows Phone|Mobile/i.test(ua) ? 'celular' : 'computador',
      tela: screenSize,
      idioma: navigator.language || '',
      sessao: sessionId(),
      detalhe: detalhe || ''
    };
    var query = Object.keys(d).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(d[key]);
    }).join('&');
    var url = C.endpoint + (C.endpoint.indexOf('?') === -1 ? '?' : '&') + query;
    function fallback() {
      try { var image = new Image(); image.src = url; } catch (e) {}
    }
    try {
      var request = window.fetch(url, { method: 'GET', mode: 'no-cors', keepalive: true });
      if (request && typeof request.catch === 'function') request.catch(fallback);
    } catch (e) { fallback(); }
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
    if (el) record(el.getAttribute('data-acao'), el.getAttribute('data-local'), el.getAttribute('data-msg') || '');
  }, true);
  window.registrarClique = record;
  updateContactLinks();
  menuUI();
  quickUI();
})();
