(function () {
    'use strict';

    var TITLES = {
        zh: '羅子淇 Jacky Law | 人力資源領袖 • AI 治理實踐者 • 三體系主導稽核員 (ISO 42001/27701/27001)',
        en: 'Jacky Law | F.I.H.R.M.(HK) • FHKIoD • HKCS iLEAP • GBA Mediator • ISO Lead Auditor (42001/27701/27001)'
    };

    function detectInitialLang() {
        try {
            var params = new URLSearchParams(window.location.search);
            var qLang = params.get('lang');
            if (qLang === 'en' || qLang === 'zh') {
                return qLang;
            }
            var saved = sessionStorage.getItem('jacky_hub_lang');
            if (saved === 'en' || saved === 'zh') {
                return saved;
            }
        } catch (e) {}
        return 'zh';
    }

    function applyLang(lang) {
        var valid = lang === 'en' ? 'en' : 'zh';
        document.documentElement.setAttribute('data-lang', valid);
        document.documentElement.setAttribute('lang', valid === 'en' ? 'en' : 'zh-HK');
        document.title = TITLES[valid];

        var btnZh = document.getElementById('btn-lang-zh');
        var btnEn = document.getElementById('btn-lang-en');
        if (btnZh) btnZh.setAttribute('aria-pressed', valid === 'zh' ? 'true' : 'false');
        if (btnEn) btnEn.setAttribute('aria-pressed', valid === 'en' ? 'true' : 'false');

        try {
            sessionStorage.setItem('jacky_hub_lang', valid);
        } catch (e) {}
    }

    // 立即於首屏渲染前鎖定語系，防止畫面閃爍
    var initialLang = detectInitialLang();
    document.documentElement.setAttribute('data-lang', initialLang);
    document.documentElement.setAttribute('lang', initialLang === 'en' ? 'en' : 'zh-HK');

    function bindControls() {
        var btnZh = document.getElementById('btn-lang-zh');
        var btnEn = document.getElementById('btn-lang-en');
        if (btnZh) btnZh.addEventListener('click', function () { applyLang('zh'); });
        if (btnEn) btnEn.addEventListener('click', function () { applyLang('en'); });
        applyLang(document.documentElement.getAttribute('data-lang') || initialLang);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bindControls);
    } else {
        bindControls();
    }
})();
