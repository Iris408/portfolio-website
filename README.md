# Portfolio Website

A personal developer portfolio built with Astro, React, Tailwind CSS, and Framer Motion.

This portfolio showcases my backend, full-stack, DevOps-focused and accessibilty-focused projects while I continue building practical software engineering experience alongside my Master’s degree in Computer Science.

# 開発者ポートフォリオ
Astro、React、Tailwind CSS、およびFramer Motionを使用して作成した個人開発者ポートフォリオです。

コンピュータサイエンスの修士課程で学びながら実践的なソフトウェアエンジニアリングの経験を積み重ねていく中で、私が手掛けたバックエンド、フルスタック、DevOps、およびアクセシビリティに重点を置いたプロジェクトを紹介しています。

## Live Site / ライブサイト
[Developer Portfolio Website](https://portfolio-website-blond-nine-77.vercel.app/)

## Current Status / 現在のステータス

- ✅ Astro portfolio structure
- ✅ React component-based sections
- ✅ Homepage with hero, about, stack, featured projects, and contact sections
- ✅ Dedicated `/projects` page
- ✅ Shared project data file
- ✅ Reusable project card component
- ✅ Project image preview model
- ✅ Navbar section links
- ✅ CV download link
- ✅ Contact buttons
- ✅ Responsive layout
- ✅ Purple/lavender visual theme
- ✅ Vercel Deployment
- ✅ Local production build test

このポートフォリオは、ホームページ、プロジェクト一覧ページ、再利用可能なReactコンポーネント、画像プレビューモーダル、技術スタックセクション、Vercelデプロイまで実装済みです。

## Features / 機能
| EN | 日本語 |
| --- | --- |
| Responsive portfolio homepage | レスポンシブ対応のポートフォリオホームページ |
| Featured projects section on the homepage | ホームページ上の注目プロジェクトセクション |
| Dedicated `/projects` page for all portfolio projects | 全プロジェクトを一覧表示する専用の /projects ページ |
| Shared project data file for easier maintenance | 保守しやすい共有プロジェクトデータファイル |
| Reusable project card component | 再利用可能なプロジェクトカードコンポーネント |
| Reusable project preview model | 再利用可能なプロジェクト画像プレビューモーダル |
| Image preview pop up for project screenshots | プロジェクトスクリーンショット用の画像プレビュー機能 |
| Smooth animations with Framer Motion | Framer Motionによるスムーズなアニメーション |
| Tailwind CSS styling | Tailwind CSSスタイリング | 
| GitHub and live demo links | GitHubとライブデモリンク |
| CV download link | 履歴書、職務経歴書のダウンロードリンク
| Contact section with GitHub, Linkedin, CV and email actions | GitHub、Linkedin、履歴書、職務経歴書、メール連絡用のコンタクトセクション |
| Vercel deployment | Vercelへのデプロイ |

## Tech Stack / 技術スタック

* Astro
* React
* Tailwind CSS
* Framer Motion
* Lucide React
* JavaScript
* Vercel
* Git/GitHub

## Project Structure / プロジェクトの構成

portfolio-website/
├── public/
│   ├── images/
│   │   ├── bloom-app.png
│   │   ├── inventory_dashboard.png
│   │   ├── jwt-auth-dashboard.png
│   │   ├── mini-user-api.png
│   │   └── system-health-monitor.png
│   └── screenshots/
│
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── PreviewModal.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectsPageClient.jsx
│   │   └── Stack.jsx
│   │
│   ├── data/
│   │   └── projects.js
│   │
│   ├── layouts/
│   │   └── MainLayout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   └── projects.astro
│   │
│   └── styles/
│       └── global.css
│
├── package.json
├── package-lock.json
└── README.md

### Homepage

The homepage includes: | ホームページには以下のセクションがあります。

* Hero section / ヒーローセクション
* About section / Aboutセクション
* Tech stack section / 技術スタックセクション
* Featured projects section / 注目プロジェクトセクション
* Contact section / コンタクトセクション

The homepage displays only the first three projects marked as:
```bash
featured: true
```
inside:
```bash
src/data/projects.js
```
- ホームページには、src/data/projects.js 内で featured: true に設定されたプロジェクトのうち、最初の3件が表示されます。

### Projects Page / プロジェクト一覧ページ

The full Projects page is available at:
```bash
/projects
```
This page displays all projects stored in:
```bash
src/data/projects.js
```
The `/projects` page uses a React client componenet for the project grid and preview modal:
```bash
src/components/ProjectsPageClient.jsx
```
- /projects ページでは、src/data/projects.js に登録されている全プロジェクトを一覧表示します。
プロジェクトのグリッド表示と画像プレビューモーダルは、Reactクライアントコンポーネントである ProjectsPageClient.jsx が管理しています。

## Featured Projects / 注目プロジェクト

Current homepage featured projects:

1. Inventory Management System
2. Mini User API
3. JWT Authentication Dashboard

Additional projects including System Health Monitor and Bloom, are available on the full `/projects` page.

- 現在ホームページに表示している注目プロジェクトは以下の3件です。
- System Health MonitorやBloomなどの追加プロジェクトは、専用の /projects ページで確認できます。

### Project Preview Modal / プロジェクトイメージプレビューモーダル
The portfolio now includes an image preview modal for project screenshots.

The modal is handled in:
```bash
src/components/PreviewModal.jsx
```
The resuable project card is handled in:
```bash
src/components/ProjectCard.jsx
```
Each project image is defined in:
```bash
src/data/Projects.js
```
- プロジェクトのスクリーンショットをページ内で確認できる画像プレビューモーダルがあります。
- モーダル表示は PreviewModal.jsx、プロジェクトカードのUIは ProjectCard.jsx で管理しています。
- 各プロジェクトの画像パスは src/data/projects.js に定義し、画像ファイルは public/images/ に配置します。

## Local Installation / ローカルインストール

Clone the repository:
```bash
git clone https://github.com/Iris408/portfolio-website
```
Move into the project folder:
```bash
cd portfolio-website
```
Install dependencies:
```bash
npm install
```
Run the development server:
```bash
npm run dev
```
Build the project:
```bash
npm run build
```
Preview the production build:
```bash
npm run preview
```
### Deployment / デプロイ

This project is deployed using Vercel.
```bash
npm run build
```
Vercel automatically redeploys the project after changes are pushed to GitHub.
- リポジトリをクローンし、依存関係をインストールした後、開発サーバーを起動できます。
- 本番環境用のビルド確認には npm run build を使用し、ビルド後の動作確認には npm run preview を使用します。


## Future Improvements

| EN | 日本語 |
| --- | --- |
| Add more project screenshots | スクリーンショットを追加する |
| Add project detail pages | プロジェクト詳細ページを追加する |
| Add filtering by project type | プロジェクトタイプによるフィルタリングを追加する |
| Add deployment status badges | デプロイステータスバッジを追加する |
| Add blog or learning notes section | ブログや学習ノートセクションを追加する |
| Improve mobile project card layout | モバイルのレイアウトを改善する |
| Add accessibility improvements | アクセシビリティ機能を強化する |
| Add more backend and DevOps project summaries | バックエンド、DevOpsプロジェクトの概要情報を追加する |
| Add Bloom once the public preview is ready | 準備が整い次第、Bloomを追加する |

## Notes

This portfolio is a work in progress and will continue to improve as I complete more full-stack, backend, and DevOps-focused projects.
- 現在作成途中のものであり、フルスタック、バックエンド、DevOpsに特化したプロジェクトをさらに完了していくにつれて、さらに改善されていく予定です。