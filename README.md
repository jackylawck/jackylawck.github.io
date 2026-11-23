# 羅子淇 Jacky Law | Official Hub (`jackylawck.github.io`)

> **以人為本・大巧不工 (Simplicity & Human-Centricity)**  
> Official source repository for the personal hub and machine-readable indexing architecture of **Jacky Law (羅子淇)**.  
> 羅子淇個人官方主頁與前後台分層管治索引架構之原始碼庫。

<div align="center">

[![Production Status](https://img.shields.io/website?url=https%3A%2F%2Fjackylawck.github.io&label=Production&style=flat-square&logo=github)](https://jackylawck.github.io/)
[![ORCID](https://img.shields.io/badge/ORCID-0009--0006--0855--0842-A6CE39?style=flat-square&logo=orcid&logoColor=white)](https://orcid.org/0009-0006-0855-0842)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![Zero Telemetry](https://img.shields.io/badge/Data%20Retention-Zero%20(ZDR)-brightgreen?style=flat-square)](https://jackylawck.github.io/)
[![PGP Signed](https://img.shields.io/badge/Commits-PGP%20Signed-informational?style=flat-square&logo=gnupg)](https://keybase.io/jackylawck)

**Live Hub:** [jackylawck.github.io](https://jackylawck.github.io/) · **LLM Context:** [`llms.txt`](https://jackylawck.github.io/llms.txt) · **Sitemap:** [`sitemap.xml`](https://jackylawck.github.io/sitemap.xml)

</div>

---

## Overview & Decoupled Architecture | 項目概述與分層管治架構

- **繁體中文：** 本倉庫託管羅子淇的官方個人主頁，集中呈現其在**零額外授權 Microsoft 365 企業合規自動化**、**代碼即管治（Governance-as-Code）**、**零信任純前端工具**及**跨學科數值模擬**方面的實踐。全站採用「前後台分層設計（Decoupled Presentation & Indexing）」，恪守零框架依賴、零追蹤與純本機運算原則。
- **English:** This repository hosts the official landing hub of Jacky Law, presenting practical initiatives across **zero-license Microsoft 365 compliance automation**, **Governance-as-Code**, **zero-data-retention client tools**, and **computational research**. It implements a decoupled presentation and indexing architecture with zero external frameworks, zero telemetry, and pure client-side execution.

### Repository Structure | 核心檔案分工

- `index.html`: **Executive Landing Hub (極簡雙語主頁)** - 採用原生 `<details>` 摺疊結構，聚焦 7 項零授權 M365 企業落地示範、12 項官方認證存證與 8 篇媒體專欄；內嵌 `Schema.org` JSON-LD 結構化資料與嚴格 CSP 防護標頭。
- `css/style.css` & `js/lang.js`: **Zero-Dependency Presentation & i18n (無框架樣式與雙語控制)** - 原生 CSS 變數排版與防閃爍繁英切換模組，支援網址參數（`?lang=en`）、`bfcache` 返回快取及無障礙動效設定。
- `llms.txt`: **Machine-Readable Governance Documentation (機器可讀管治文檔)** - 對齊 IAPP AIGP 透明度原則，為 AI 系統與檢索代理提供結構化雙語履歷、五大支柱清單及確定性非 AI 豁免聲明（Out-of-Scope Assertions）。
- `sitemap.xml` & `robots.txt`: **Multi-Node Indexing & Crawler Governance (全網域索引與爬蟲治理)** - 收錄全網域 62 條路徑（涵蓋 60 個公開專案與頁面入口），並依 RFC 9309 區分即時檢索代理與未授權批量訓練爬蟲。
- `js/magi.js`: **Client-Side Governance Terminal (本機管治審計終端)** - 純前端 DevTools 互動審計與三道防線（The Three Lines Model）自檢模組。
- `keybase.txt`: **Cryptographic Domain Proof (網域所有權密碼學存證)** - Keybase 簽署之網域綁定證明。

---

## Five Strategic Pillars Indexed | 全網域索引之五大支柱

| 支柱 (Pillar) | 領域範疇 (Domain) | 核心架構與代表項目 (Core Frameworks & Projects) |
| :--- | :--- | :--- |
| **Pillar I** | **AI Governance & Decision Support**<br>企業 AI 管治與決策支援 | 對標 ISO/IEC 42001、EU AI Act、HK PCPD、內地 PIPL 及數字辦指引的法規總帳、MCP 安全網關與跨境勞動力精算工具（*Laboris*, *TalentBridge*, *MCD Privacy Audit Gateway*, *The Veracity*, *Veritas* 等）。 |
| **Pillar II** | **Zero-Trust & Privacy-by-Design Tools**<br>零信任純前端工具矩陣 | 100% 本機記憶體運算、零伺服器上傳（ZDR）的影片壓縮、學童默書、播報提詞、繁簡合規與加密金庫（*SlimVid 片纖瘦*, *KidsPrepDictate 童温默書*, *SpeakFlow 順住講*, *KidsDictate*, *KidsWriteTC*, *PauseWell*, *LeaveWell*, *ScanSign*, *VeriZh* 等）。 |
| **Pillar III** | **Organizational Agility & Cognitive Tools**<br>敏捷互動與認知工具 | 確定性自比計量（Hamilton-Hare 最大餘數法）、純演繹推理（Rust/WASM SMT）與零後端 P2P 團隊破冰工具（*Nature Compass*, *Lawgic*, *DISC Assessment*, *Social Tag* 等）。 |
| **Pillar IV** | **J.A.R. · Joint Applied Research**<br>數值模擬與科學探索 | 量子態向量演化、廣義相對論克爾黑洞光線追蹤、托卡馬克核融合及 6-DoF 航天對接數值物理沙盒（*JAR QubitLab*, *JAR Black Hole*, *JAR Fusion Core*, *JAR Above Tiangong* 等）。 |
| **Pillar V** | **Enterprise Automation & Low-Code Workflows**<br>企業自動化與低代碼管治 | 基於 M365 原生工作流、本地端 FAISS 語意檢索與 Python/Streamlit 的零授權合規系統，對齊 ISO 37002、ISO 27001/27701、HK PDPO 及《調解條例》Cap. 620（*SpeakUp-Mediation*, *DailyStaffAppraisal*, *DOIS*, *NOTAS*, *SiteworksSafetyChecklist*, *TAP*, *ChargeCodeAssistant* 等 14 項示範）。 |

---

## Architecture & Security Controls | 架構與資安規範

- **Pure Client-Side Execution:** 無遠端資料庫、無伺服器追蹤、零分析 Cookie，確保零資料留存（Zero Data Retention）。
- **Strict Content Security Policy (CSP):** 強制執行 `default-src 'self'`、`object-src 'none'`、`base-uri 'self'` 及 `form-action 'none'`，阻絕跨站腳本攻擊（XSS）與未授權外部請求。
- **Cryptographic Provenance:** 正式發布 Commit 均經 PGP 金鑰（ID: `FFA3E47793F1CA32`）簽章，並以 `keybase.txt` 錨定跨平台身分存證。

---

## Canonical Records & Verification | 官方認證存證鏈

- **HKIHRM Fellow Roster:** [Fellow Member List (F.I.H.R.M.(HK))](https://www.hkihrm.org/fellow-member-list/)
- **HKIoD INED Candidate List:** [INED Appointment Service (FHKIoD)](https://www.hkiod.com/weblist-of-candidates-for-ined-appointment-service/)
- **DoJ GBA Mediator Panel:** [Official Roster (PDF)](https://www.doj.gov.hk/tc/legal_dispute/pdf/GBA_Mediator_Panel_2024_tc.pdf)
- **Credly Verification (Triple-ISO Lead Auditor):** [ISO 42001 / 27701 / 27001](https://www.credly.com/badges/c6abd067-0cd9-47c5-bcbd-8becd6e86429/public_url)
- **HKCS W3C Credential (MHKCS):** [Verify ID: 019dd246](https://hkcs.org.hk/verify/?id=019dd246-6cba-724a-8360-476e1965a1fb)
- **Oracle CertView:** [OCI 2025 Generative AI Professional](https://catalog-education.oracle.com/ords/certview/sharebadge_m?id=E9A6CD33539B3B4476ECF08CDF00F0935F8A39101F74B1C929B7683E4FCF4096)
- **ORCID Record:** [0009-0006-0855-0842](https://orcid.org/0009-0006-0855-0842)
- **Identity Proofs:** [keybase.io/jackylawck](https://keybase.io/jackylawck)

---

## License

The website structure, architectural designs, and source code are open-source and licensed under the [MIT License](LICENSE).
