(function () {
    'use strict';

    var STORAGE_KEY = 'jacky_hub_lang';
    var TITLES = {
        zh: '羅子淇 Jacky Law | 人力資源領袖 • AI 治理實踐者 • 三體系主導稽核員 (ISO 42001/27701/27001)',
        en: 'Jacky Law | F.I.H.R.M.(HK) • FHKIoD • HKCS iLEAP • GBA Mediator • ISO Lead Auditor (42001/27701/27001)'
    };

    function normalizeLang(raw) {
        if (!raw || typeof raw !== 'string') return null;
        var val = raw.trim().toLowerCase();
        if (val === 'en' || val.indexOf('en-') === 0) return 'en';
        if (val === 'zh' || val.indexOf('zh-') === 0) return 'zh';
        return null;
    }

    function detectLang() {
        try {
            var params = new URLSearchParams(window.location.search);
            var fromUrl = normalizeLang(params.get('lang'));
            if (fromUrl) return fromUrl;

            var fromSession = normalizeLang(sessionStorage.getItem(STORAGE_KEY));
            if (fromSession) return fromSession;
        } catch (e) {}
        return 'zh';
    }

    function syncUrl(lang) {
        try {
            if (!window.history || !window.history.replaceState) return;
            var url = new URL(window.location.href);
            if (lang === 'en') {
                url.searchParams.set('lang', 'en');
            } else {
                url.searchParams.delete('lang');
            }
            window.history.replaceState(null, '', url.pathname + url.search + url.hash);
        } catch (e) {}
    }

    function applyLang(lang, shouldSyncUrl) {
        var current = normalizeLang(lang) || 'zh';
        var root = document.documentElement;

        root.setAttribute('data-lang', current);
        root.setAttribute('lang', current === 'en' ? 'en' : 'zh-HK');
        document.title = TITLES[current];

        var buttons = document.querySelectorAll('[data-set-lang]');
        for (var i = 0; i < buttons.length; i++) {
            var btn = buttons[i];
            var isMatch = btn.getAttribute('data-set-lang') === current;
            btn.setAttribute('aria-pressed', isMatch ? 'true' : 'false');
        }

        try {
            sessionStorage.setItem(STORAGE_KEY, current);
        } catch (e) {}

        if (shouldSyncUrl) {
            syncUrl(current);
        }
    }

    function init() {
        var switcher = document.querySelector('.lang-switcher');
        if (switcher) {
            switcher.addEventListener('click', function (event) {
                var target = event.target.closest('[data-set-lang]');
                if (!target) return;
                var selected = target.getAttribute('data-set-lang');
                if (selected && selected !== document.documentElement.getAttribute('data-lang')) {
                    applyLang(selected, true);
                }
            });
        }
        applyLang(detectLang(), false);
    }

    applyLang(detectLang(), false);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.addEventListener('pageshow', function (event) {
        if (event.persisted) {
            applyLang(detectLang(), false);
        }
    });

    window.addEventListener('popstate', function () {
        applyLang(detectLang(), false);
    });
})();
