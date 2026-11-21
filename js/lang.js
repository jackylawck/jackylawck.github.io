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

    function detectInitialLang() {
        try {
            var params = new URLSearchParams(window.location.search);
            var qLang = normalizeLang(params.get('lang'));
            if (qLang) return qLang;

            var saved = normalizeLang(sessionStorage.getItem(STORAGE_KEY));
            if (saved) return saved;
        } catch (e) {}
        return 'zh';
    }

    function syncUrlState(lang) {
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

    function applyLang(lang, updateUrl) {
        var valid = normalizeLang(lang) || 'zh';
        var root = document.documentElement;

        root.setAttribute('data-lang', valid);
        root.setAttribute('lang', valid === 'en' ? 'en' : 'zh-HK');
        document.title = TITLES[valid];

        var btnZh = document.getElementById('btn-lang-zh');
        var btnEn = document.getElementById('btn-lang-en');
        if (btnZh) btnZh.setAttribute('aria-pressed', valid === 'zh' ? 'true' : 'false');
        if (btnEn) btnEn.setAttribute('aria-pressed', valid === 'en' ? 'true' : 'false');

        try {
            sessionStorage.setItem(STORAGE_KEY, valid);
        } catch (e) {}

        if (updateUrl) {
            syncUrlState(valid);
        }
    }

    // 首屏渲染前立即鎖定語系與分頁標題，防止畫面閃爍
    var initialLang = detectInitialLang();
    document.documentElement.setAttribute('data-lang', initialLang);
    document.documentElement.setAttribute('lang', initialLang === 'en' ? 'en' : 'zh-HK');
    document.title = TITLES[initialLang];

    function bindControls() {
        var btnZh = document.getElementById('btn-lang-zh');
        var btnEn = document.getElementById('btn-lang-en');

        if (btnZh) {
            btnZh.addEventListener('click', function () {
                applyLang('zh', true);
            });
        }
        if (btnEn) {
            btnEn.addEventListener('click', function () {
                applyLang('en', true);
            });
        }

        applyLang(detectInitialLang(), false);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bindControls);
    } else {
        bindControls();
    }

    // 支援瀏覽器「返回」快取（bfcache）恢復時同步按鈕狀態
    window.addEventListener('pageshow', function (event) {
        if (event.persisted) {
            applyLang(detectInitialLang(), false);
        }
    });
})();
