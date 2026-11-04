/**
 * =====================================================================
 * MAGI 三賢人 × The Three Lines Model AI 管治審計終端
 * 100% Client-Side Pure JS / Zero Telemetry / Self-Contained
 * =====================================================================
 */
(function () {
    'use strict';

    var MONO = '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace';

    var S = {
        title: 'background: #000000; color: #FF1E27; font-family: ' + MONO + '; font-size: 13px; font-weight: 900; padding: 7px 10px; border-left: 5px solid #FF1E27; border-top: 1px solid #222; border-right: 1px solid #222; display: block;',
        sub: 'background: #000000; color: #FF7900; font-family: ' + MONO + '; font-size: 11px; font-weight: bold; padding: 4px 10px; border-left: 5px solid #FF7900; border-bottom: 1px solid #222; border-right: 1px solid #222; display: block;',
        magiUnit: 'background: #000000; color: #FF7900; font-family: ' + MONO + '; font-size: 10.5px; font-weight: 900; padding: 4px 8px; border: 1.5px solid #FF7900; border-radius: 2px;',
        statusPass: 'background: #FF7900; color: #000000; font-family: ' + MONO + '; font-size: 12px; font-weight: 900; padding: 4px 10px; border-radius: 2px;',
        panelFull: 'background: #000000; color: #FFB347; font-family: ' + MONO + '; font-size: 11px; line-height: 1.6; padding: 8px 12px; border-left: 5px solid #FF7900; border-right: 1px solid #222; border-top: 1px solid #222; border-bottom: 1px solid #222; display: block; white-space: pre;',
        warnHead: 'background: #FF1E27; color: #FFFFFF; font-family: ' + MONO + '; font-size: 12px; font-weight: 900; padding: 3px 8px; display: block;',
        warnBody: 'background: #0d0002; color: #FCA5A5; font-family: ' + MONO + '; font-size: 11px; line-height: 1.6; padding: 8px 10px; border-left: 5px solid #FF1E27; border-bottom: 1px solid #FF1E27; border-right: 1px solid #222; display: block;',
        cliBar: 'background: #000000; color: #00E575; font-family: ' + MONO + '; font-size: 11px; font-weight: bold; padding: 6px 10px; border: 1px solid #FF7900; border-left: 5px solid #00E575; display: block;',
        cmdKey: 'background: #FF7900; color: #000000; font-weight: 900; font-family: ' + MONO + '; padding: 1px 6px; border-radius: 2px;',
        cmdDesc: 'background: #000000; color: #E2E8F0; font-family: ' + MONO + '; padding: 1px 6px;'
    };

    function renderMagiTerminal() {
        console.log('%c[ TACTICAL CENTER // MAGI AI 管治審計終端 (GOVERNANCE AUDIT) ]', S.title);
        console.log('%cPROVENANCE: PGP [FFA3E47793F1CA32] • IIA THE THREE LINES MODEL (三道防線認證)', S.sub);
        console.log('');

        console.log(
            '%c[ MELCHIOR-1: 一線研發 (DevSecOps) ] 合意 AGREED %c  %c[ BALTHASAR-2: 二線風控 (Risk & Legal) ] 合意 AGREED %c  %c[ CASPER-3: 三線審計 (Internal Audit) ] 合意 AGREED ',
            S.magiUnit, '',
            S.magiUnit, '',
            S.magiUnit
        );
        console.log('');
        console.log('%c>> STATUS: 三賢人全數合意 (ALL AGREED) // AI 管治審計通過 (PASSED 3/3)', S.statusPass);
        console.log('');

        var panelContent = [
            '==== [ COMPLIANCE & DEFENSE BASELINE / 合規基準矩陣 ] ====',
            '• 1st Line (一線交付): [PASS] 純記憶體運算 In-Memory / ZDR',
            '• 2nd Line (二線合規): [PASS] Triple-ISO / 歐盟法案 EU AI Act',
            '• 3rd Line (三線審計): [PASS] CodeQL / OpenSSF / Rekor 存證',
            '================== [ INTEGRITY: 100% ] =================='
        ].join('\n');
        console.log('%c' + panelContent, S.panelFull);
        console.log('');

        console.log('%c 🛑 SAFETY & COMPLIANCE ADVISORY // 存證與資安風險提示 ', S.warnHead);
        console.log(
            '%c【資安與誠信提示】此處為瀏覽器控制台（Console），供開發者調試使用。\n依據普通法與資訊安全原則，請勿在此貼上任何第三方指示的未經授權腳本，以免遭受「自我跨站腳本（Self-XSS）」攻擊而洩露本機憑證。\n本站恪守「純前端本機記憶體運算」與「零資料留存（Zero Data Retention）」，絕無伺服器側跟蹤。請保持防詐意識，守護自身數碼資產。\n\n[Security Advisory] This feature is intended for developers. Under infosec best practices, never paste untrusted scripts here to avoid Self-XSS exploits. This site strictly operates with Zero Data Retention (ZDR) and pure client-side sandboxing. Stay safe and protect your digital privacy.',
            S.warnBody
        );
        console.log('');

        console.log('%c💡 終端互動指令 (CLI): 請輸入 law.help() 查看功能 / Type law.help() for suite.', S.cliBar);
    }

    var berserkTimer = null;
    var timerRafId = null;

    function removeHudOverlay() {
        if (timerRafId) {
            cancelAnimationFrame(timerRafId);
            timerRafId = null;
        }
        var existing = document.getElementById('eva-timer-hud');
        if (existing && existing.parentNode) {
            existing.parentNode.removeChild(existing);
        }
    }

    window.law = Object.freeze({
        help: function () {
            console.log('%c[ MAGI CONSOLE CLI INTERACTION SUITE / 互動指令集 ]', S.sub);
            console.log('%claw.audit()%c     - 執行本機純淨度與三道防線體檢 / Run health audit', S.cmdKey, S.cmdDesc);
            console.log('%claw.emergency()%c - 模擬使徒 (パターン青 / AI 威脅) 迎擊防禦程序 / Intercept threat', S.cmdKey, S.cmdDesc);
            console.log('%claw.timer()%c     - 啟動畫面戰術 HUD 內部電源經典倒數 / EVA Tactical HUD Timer', S.cmdKey, S.cmdDesc);
            console.log('%claw.berserk()%c   - 啟動初號機暴走狀態 / Engage EVA-01 Berserk mode', S.cmdKey, S.cmdDesc);
            console.log('%claw.magi()%c      - 重新輪詢三賢人共識狀態 / Re-poll MAGI consensus', S.cmdKey, S.cmdDesc);
            console.log('%claw.provenance()%c- 檢索 PGP 身份鏈與認證存證 / View identity anchors', S.cmdKey, S.cmdDesc);
            console.log('%c💡 提示 (Note): 若系統開啟「減少動態效果 (Reduce Motion)」，暴走光暈將被自動抑制。', 'color:#888888; font-style:italic; font-size:11px; font-family:' + MONO);
            return 'Type any command above to proceed / 請輸入上述任一指令執行。';
        },

        timer: function (minutes) {
            if (timerRafId || document.getElementById('eva-timer-hud')) {
                removeHudOverlay();
                console.log('%c[ UMBILICAL CABLE RECONNECTED // 臍帶電纜重新連接・外部供電恢復 ]', 'background:#000; color:#00E575; font-weight:bold; padding:4px 8px; font-family:' + MONO);
                return 'Timer stopped. External power restored.';
            }

            var durationMin = (typeof minutes === 'number' && minutes > 0) ? minutes : 5;
            var durationMs = durationMin * 60 * 1000;
            var startTime = performance.now();

            console.log('%c[ WARNING: UMBILICAL CABLE SEVERED // 臍帶電纜切斷 ]', 'background:#FF1E27; color:#FFFFFF; font-weight:900; font-size:12px; padding:3px 8px; font-family:' + MONO);
            console.log('%cINTERNAL BATTERY SUPPLY ACTIVE // 戰術 HUD 已投射至畫面中央 (點擊畫面或按 ESC 關閉)', S.sub);

            var hud = document.createElement('div');
            hud.id = 'eva-timer-hud';
            hud.style.cssText = [
                'position: fixed',
                'top: 0',
                'left: 0',
                'width: 100vw',
                'height: 100vh',
                'background: rgba(0, 0, 0, 0.72)',
                'backdrop-filter: blur(4px)',
                'z-index: 999999',
                'display: flex',
                'align-items: center',
                'justify-content: center',
                'cursor: pointer',
                'user-select: none'
            ].join(';');

            hud.innerHTML = [
                '<div style="background: #000; border: 3px solid #FF1E27; box-shadow: 0 0 35px rgba(255,30,39,0.5), inset 0 0 20px rgba(255,30,39,0.2); padding: 25px 35px; min-width: 320px; text-align: center; font-family: ' + MONO + '; position: relative;">',
                '  <div style="font-size: 11px; font-weight: 900; color: #FF1E27; letter-spacing: 2px; margin-bottom: 6px; display: flex; justify-content: space-between;">',
                '    <span>EMERGENCY</span><span>INTERNAL BATTERY</span>',
                '  </div>',
                '  <div style="border-top: 1px solid #FF1E27; border-bottom: 1px solid #FF1E27; padding: 12px 0; margin: 10px 0;">',
                '    <div id="eva-clock-num" style="font-size: 56px; font-weight: 900; color: #FF1E27; text-shadow: 0 0 15px #FF1E27; letter-spacing: 3px; font-variant-numeric: tabular-nums;">--:--:--</div>',
                '  </div>',
                '  <div style="font-size: 10px; color: #FF7900; letter-spacing: 1.5px; font-weight: bold;">',
                '    活動限界 ACTIVE TIME REMAINING',
                '  </div>',
                '  <div style="font-size: 9px; color: #888; margin-top: 8px;">',
                '    [ 點擊畫面任意處或按 ESC 重新連接臍帶電纜 ]',
                '  </div>',
                '</div>'
            ].join('');

            document.body.appendChild(hud);

            var clockEl = document.getElementById('eva-clock-num');

            function updateFrame(now) {
                var elapsed = now - startTime;
                var remaining = durationMs - elapsed;

                if (remaining <= 0) {
                    clockEl.innerText = '00:00:00';
                    removeHudOverlay();
                    console.log('%c[ EMERGENCY: INTERNAL BATTERY DEPLETED // 活動極限到達・機體機能停止 ]', 'background:#FF1E27; color:#FFFFFF; font-weight:900; font-size:13px; padding:4px 8px; font-family:' + MONO);
                    return;
                }

                var totalSec = Math.floor(remaining / 1000);
                var m = Math.floor(totalSec / 60);
                var s = totalSec % 60;
                var ms = Math.floor((remaining % 1000) / 10);

                var mStr = (m < 10 ? '0' : '') + m;
                var sStr = (s < 10 ? '0' : '') + s;
                var msStr = (ms < 10 ? '0' : '') + ms;

                clockEl.innerText = mStr + ':' + sStr + ':' + msStr;
                timerRafId = requestAnimationFrame(updateFrame);
            }

            timerRafId = requestAnimationFrame(updateFrame);

            hud.addEventListener('click', function () {
                removeHudOverlay();
                console.log('%c[ UMBILICAL CABLE RECONNECTED // 臍帶電纜重新連接 ]', 'background:#000; color:#00E575; font-weight:bold; padding:4px 8px; font-family:' + MONO);
            });

            function onKeyDown(e) {
                if (e.key === 'Escape') {
                    removeHudOverlay();
                    window.removeEventListener('keydown', onKeyDown);
                    console.log('%c[ UMBILICAL CABLE RECONNECTED // 臍帶電纜重新連接 ]', 'background:#000; color:#00E575; font-weight:bold; padding:4px 8px; font-family:' + MONO);
                }
            }
            window.addEventListener('keydown', onKeyDown);

            return 'Tactical HUD activated on screen (' + durationMin + ' min).';
        },

        emergency: function () {
            console.log(
                '%c[ 🚨 EMERGENCY // パターン青 (PATTERN BLUE) DETECTED ]',
                'background:#FF1E27; color:#FFFFFF; font-weight:900; font-size:13px; padding:4px 8px; font-family:' + MONO
            );
            console.log('%c>> 威脅識別 (Identification): 未授權自主對抗攻擊實體 (Rogue AI Threat / Adversarial Injection)', 'color:#FF7900; font-weight:bold; font-family:' + MONO);
            console.log('');

            console.log(
                '%c⬡ MELCHIOR-1 (1st Line): 沙盒熔斷隔絕 (Sandbox Circuit Breaker: LOCKED)\n' +
                '⬢ BALTHASAR-2 (2nd Line): 歐盟法案違規封鎖 (EU AI Act Prohibited Threat: BANNED)\n' +
                '⬡ CASPER-3   (3rd Line): 鑑識存證封存 (WORM Audit Trail: SECURED)',
                'background:#000000; color:#FF7900; font-family:' + MONO + '; font-size:11px; line-height:1.6; padding:8px 12px; border-left:4px solid #FF1E27; border:1px solid #333; display:block;'
            );
            console.log('');
            console.log('%c>> MAGI 審議結果: 全數迎擊 (ALL AGREED: INTERCEPT & QUARANTINE)', S.statusPass);

            if (!window.matchMedia || !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                var docEl = document.documentElement;
                var originTransition = docEl.style.transition;
                var originBoxShadow = docEl.style.boxShadow;

                docEl.style.transition = 'box-shadow 0.25s ease';
                docEl.style.boxShadow = 'inset 0 0 60px #FF1E27, inset 0 0 100px #FF7900';

                setTimeout(function () {
                    docEl.style.boxShadow = 'inset 0 0 40px #00E575';
                }, 500);

                setTimeout(function () {
                    docEl.style.boxShadow = originBoxShadow;
                    docEl.style.transition = originTransition;
                    console.log('%c[ 🛡️ ALL ARMOR PLATES SECURED // 防禦裝甲全面閉鎖・威脅已成功隔離消解 ]', 'background:#000; color:#00E575; font-weight:bold; padding:4px 8px; font-family:' + MONO);
                }, 1200);
            }

            return 'Threat intercepted. Zero Data Retention intact. System status: GREEN.';
        },

        audit: function () {
            var memInfo = (window.performance && window.performance.memory) ? 
                (window.performance.memory.usedJSHeapSize / 1048576).toFixed(2) + ' MB' : 'Protected';
            
            console.log('%c[ AUDIT REPORT ] The Three Lines Assessment (三道防線審計報表):', S.statusPass);
            
            var auditTable = [
                '┌──────────────────────┬────────────────────────┬──────────────────┐',
                '│ 防線 (Defense Line)  │ 管控目標 (Target)      │ 審計標準 (Std)   │',
                '├──────────────────────┼────────────────────────┼──────────────────┤',
                '│ 1st: 業務運營 (Ops)  │ 零留存 ZERO (Local)    │ ZDR Mandate      │',
                '│ 2nd: 法規合規 (Comp) │ 全面落實 ENFORCED      │ ISO 42001/27701  │',
                '│ 3rd: 獨立保證 (Assur)│ 供應鏈固化 HARDENED    │ OpenSSF / CodeQL │',
                '│ 系統內存 (JS Heap)   │ 佔用量: ' + memInfo.padEnd(14) + ' │ Perf Budget      │',
                '└──────────────────────┴────────────────────────┴──────────────────┘'
            ].join('\n');

            console.log('%c' + auditTable, 'background: #000000; color: #FF7900; font-family: ' + MONO + '; font-size: 11px; line-height: 1.4; padding: 6px 10px; display: block; white-space: pre;');
            return 'Audit complete: No anomalies or unauthorized leaks detected / 審計完成：未檢測到異常或未授權資料洩漏。';
        },

        berserk: function () {
            if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                console.log('%c[ SYSTEM NOTICE ] Motion reduced by OS settings. Berserk visual suppressed / 系統已開啟減弱動態，視覺效果已抑制。', 'color:#FF1E27; font-weight:bold;');
                return 'Berserk mode (visual effect suppressed for accessibility).';
            }

            if (berserkTimer) {
                clearTimeout(berserkTimer);
            }

            console.log(
                '%c[ WARNING: SYNCHRONIZATION RATE EXCEEDED 400% // 同步率超過 400% 暴走狀態突入 ]',
                'background:#FF1E27; color:#FFFFFF; font-weight:900; font-size:13px; padding:4px 8px; font-family:' + MONO
            );

            var docEl = document.documentElement;
            var originTransition = docEl.style.transition;
            var originBoxShadow = docEl.style.boxShadow;
            var originFilter = docEl.style.filter;

            docEl.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            docEl.style.boxShadow = 'inset 0 0 70px #39FF14, 0 0 35px #7B2CBF';
            docEl.style.filter = 'contrast(1.15) hue-rotate(15deg)';

            setTimeout(function () {
                docEl.style.boxShadow = 'inset 0 0 90px #FF1E27, 0 0 50px #FF1E27';
                docEl.style.filter = 'contrast(1.25) invert(0.08)';
            }, 400);

            berserkTimer = setTimeout(function () {
                docEl.style.boxShadow = originBoxShadow;
                docEl.style.filter = originFilter;
                docEl.style.transition = originTransition;
                berserkTimer = null;
                console.log('%c[ EVA-01 RE-CONTAINED // 初號機回到抑制拘束架構 ]', 'color:#00E575; font-weight:bold; font-family:' + MONO);
            }, 1600);

            return 'Sync Rate exceeded 400%. EVA-01 Berserk mode engaged / 初號機暴走模式模擬啟動。';
        },

        magi: function () {
            renderMagiTerminal();
            return 'MAGI Consensus Re-polled / 三賢人共識重新輪詢完成。';
        },

        provenance: function () {
            console.log('%c[ CANONICAL PROVENANCE RECORDS / 權威身份與認證存證鏈 ]', S.title);
            console.log('• ORCID iD       : https://orcid.org/0009-0006-0855-0842');
            console.log('• PGP Key ID     : FFA3E47793F1CA32');
            console.log('• PGP Raw Key    : https://keybase.io/jackylawck/pgp_keys.asc');
            console.log('• Keybase Proof  : https://keybase.io/jackylawck');
            console.log('• HKCS W3C ID    : https://hkcs.org.hk/verify/?id=019dd246-6cba-724a-8360-476e1965a1fb');
            console.log('• Mastermind ID  : https://www.credly.com/badges/c6abd067-0cd9-47c5-bcbd-8becd6e86429/public_url');
            console.log('• Oracle GenAI   : https://catalog-education.oracle.com/ords/certview/sharebadge_m?id=E9A6CD33539B3B4476ECF08CDF00F0935F8A39101F74B1C929B7683E4FCF4096');
            return 'Cryptographic identity anchors verified / 密碼學身分存證鏈檢驗通過。';
        }
    });

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setTimeout(renderMagiTerminal, 250);
    } else {
        window.addEventListener('DOMContentLoaded', function () {
            setTimeout(renderMagiTerminal, 250);
        });
    }
})();
