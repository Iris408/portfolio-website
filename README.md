# Portfolio Website / 開発者ポートフォリオ

A personal developer portfolio built with Astro, React, Tailwind CSS, and JavaScript.

This portfolio presents my backend-focused full-stack engineering work, accessibility-focused projects, technical learning notes and selected projects case studies.

Astro、React、Tailwind CSS、JavaScript を使用して作成した個人開発者ポートフォリオです。

このポートフォリオには、バックエンド寄りのフルスタック開発、アクセシビリティ重視のプロジェクト、技術学習ログ、選抜プロジェクトをまとめています。

## Live Site / ライブサイト
* Developer Portfolio deployed on Render - [Engineering Lab](https://portfolio-website-blond-nine-77.vercel.app/)

## Current Status / 現在のステータス

- ✅ Engineering Lab visual direction
- ✅ Astro portfolio structure
- ✅ React component-based sections
- ✅ Homepage refocused around Profile, Selected Work, Technical Log and Contact
- ✅ Seperate `/about` page and dedicated `/projects` page
- ✅ Selected Work homepage layout using horizontal project rows
- ✅ Project image preview modal
- ✅ Reusable project card component
- ✅ Shared project data file in `src/data/project.js`
- ✅ Technical Log section for engineering notes and learning focus
- ✅ Contact section with GitHub, Linkedin, CV and email actions
- ✅ Added project tag filtering to the projects page
- ✅ Vercel Deployment

このポートフォリオは、より落ち着いた Engineering Lab 風のデザインへ変更し、ホームページを Profile、Selected Work、Technical Log、Contact を中心に整理しました。About は専用ページへ移動し、旧 Stack セクションは削除しました。

---

## Features / 機能
| EN | 日本語 |
| --- | --- |
| Main portfolio homepage | 落ち着いた印象のポートフォリオホームページ |
| Separate About page | 専用の About ページ |
| Selected Work section on the homepage | ホームページ上の Selected Work セクション |
| Horizontal project rows for quick scanning | 素早く読める横長プロジェクト表示 |
| Dedicated `/projects` page for all projects | 全プロジェクトを一覧表示する専用の `/projects` ページ |
| Shared project data file for easier maintenance | 保守しやすい共有プロジェクトデータファイル |
| Reusable project card component | 再利用可能なプロジェクトカードコンポーネント |
| Reusable project preview modal | 再利用可能なプロジェクト画像プレビューモーダル |
| Image preview pop-up for project screenshots | プロジェクトスクリーンショット用の画像プレビュー機能 |
| Technical Log section | テクニカルログセクション |
| GitHub and live demo links | GitHub とライブデモリンク |
| CV download link | 履歴書・職務経歴書のダウンロードリンク |
| Contact section with GitHub, LinkedIn, CV, and email actions | GitHub、LinkedIn、履歴書、メール連絡用のコンタクトセクション |
| Tailwind CSS styling | Tailwind CSS スタイリング |
| Vercel deployment | Vercel へのデプロイ |

## Tech Stack / 技術スタック

* Astro
* React
* Tailwind CSS
* JavaScript
* Lucide React
* Vercel
* Git/GitHub

## Project Structure / プロジェクトの構成

```text
portfolio-website/
├── public/
│   ├── screenshots/
│   ├── Ashleigh_Magloire_FullStack_Resume.pdf
│   ├── favicon.ico
│   └── favicon.svg
│
├── src/
│   ├── components/
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── PreviewModal.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectsPageClient.jsx
│   │   └── TechnicalLog.jsx
│   │
│   ├── data/
│   │   └── projects.js
│   │
│   ├── layouts/
│   │   └── MainLayout.astro
│   │
│   ├── pages/
│   │   ├── about.astro
│   │   ├── index.astro
│   │   └── projects.astro
│   │
│   └── styles/
│       └── global.css
│
├── package.json
├── package-lock.json
└── README.md
```

## Selected Projects / 選抜プロジェクト

Current homepage selected projects:

1. Inventory Management System
2. Bloom - Calm Routine, Focus & Progress App
3. Mini User API

Additional projects, including JWT Authentication Dashboard and System Health Monitor, are available on the full `/projects` page.

現在ホームページに表示している選抜プロジェクトは、Inventory Management System、Bloom、Mini User API です。JWT Authentication Dashboard や System Health Monitor などの追加プロジェクトは、専用の `/projects` ページで確認できます。

## Technical Log / テクニカルログ

The Technical Log section is a lightweight homepage section for current engineering learning and debugging focus.

Current log areas include:

* Authentication & JWT
* Database Persistence
* Accessible Product UI

In the future, this can expand into a dedicated /log or blog-style technical writing area.

テクニカルログは、現在の学習・デバッグ・開発フォーカスを短くまとめるセクションです。将来的には /log や技術ブログ形式のページへ拡張できます。

## Future Improvements

| EN | 日本語 | Status |
| --- | --- | --- |
| Improve project tag filtering | プロジェクトタグのフィルター機能を改善 | In Progress |
| Add more backend and DevOps project summaries | バックエンドとDevOps系プロジェクトの要約を追加 | In Progress |
| Continue adding Technical Log entries | テクニカルログのエントリーを継続的に追加 | In Progress |
| Add more project screenshots | プロジェクトのスクリーンショットを追加 | Planned |
| Add deployment status badges | デプロイ状況バッジを追加 | Planned |
| Improve mobile project card layout | モバイル用プロジェクトカードのレイアウトを改善 | Planned |
| Add accessibility improvements | アクセシビリティ改善を追加 | Planned |

## Notes

- This portfolio is a work in progress and will continue to improve as I complete more full-stack, backend, and DevOps-focused projects.
- 現在作成途中のものであり、フルスタック、バックエンド、DevOpsに特化したプロジェクトをさらに完了していくにつれて、さらに改善されていく予定です。