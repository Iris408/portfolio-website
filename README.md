# Portfolio Website / 開発者ポートフォリオ

This portfolio showcases my backend-focused full-stack engineering projects, accessibility-first applications, technical learning journal, and in-depth engineering case studies documenting how each flagship project evolved from concept to deployment.

このポートフォリオでは、バックエンド寄りのフルスタック開発、アクセシビリティ重視のアプリケーション、技術学習ログ、そして主要プロジェクトの設計・実装・改善過程をまとめたケーススタディを紹介しています。

## Live Site / ライブサイト
* Developer Portfolio deployed on Vercel - [Engineering Lab](https://portfolio-website-blond-nine-77.vercel.app/)

## Current Status / 現在のステータス

- ✅ Engineering Lab visual direction
- ✅ Astro portfolio structure
- ✅ React component-based sections
- ✅ Homepage refocused around Profile, Selected Work, Technical Log and Contact
- ✅ Separate `/about` page and dedicated `/projects` page
- ✅ Selected Work homepage layout using horizontal project rows
- ✅ Project image preview modal
- ✅ Reusable project card component
- ✅ Shared project data file in `src/data/project.js`
- ✅ Technical Log section for engineering notes and learning focus
- ✅ Contact section with GitHub, Linkedin, CV and email actions
- ✅ Added project tag filtering to the projects page
- ✅ Vercel Deployment
- ✅ Dedicated reusable case study system
- ✅ Bloom engineering case study
- ✅ Reusable case study components
- ✅ Technical architecture documentation
- ✅ Engineering decisions and learning summaries

このポートフォリオは、より落ち着いた Engineering Lab 風のデザインへ変更し、ホームページを Profile、Selected Work、Technical Log、Contact を中心に整理しました。About は専用ページへ移動し、旧 Stack セクションは削除しました。

## Recent Engineering Updates / 最近のエンジニアリングアップデイト

- Added reusable engineering case study system
- Published the Bloom engineering case study
- Introduced reusable case study components
- Added project timeline support
- Added engineering decisions and lessons learned sections
- Continued expanding the Technical Log

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
| Dedicated engineering case studies | エンジニアリングケーススタディ |
| Project release timelines | プロジェクトリリース履歴 |
| Engineering decision documentation | 設計・技術判断の記録 |
| Technical architecture summaries | 技術アーキテクチャ概要 |

## Tech Stack / 技術スタック

* Astro
* React
* Tailwind CSS
* JavaScript
* Lucide React
* Vercel
* Git/GitHub
* Markdown

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
│   │   │   ├── case-study/
│   │   │   ├── CaseStudyHero.jsx
│   │   │   ├── CaseStudySection.jsx
│   │   │   ├── ChallengeCard.jsx
│   │   │   ├── FeatureGrid.jsx
│   │   │   ├── LearningList.jsx
│   │   │   ├── TechStack.jsx
│   │   │   └── Timeline.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── PreviewModal.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectsPageClient.jsx
│   │   ├── TechnicalLog.jsx
│   │   └── TechnicalLogClient.jsx
│   │
│   ├── data/
│   │   ├── technicalNotes.js
│   │   └── projects.js
│   │
│   ├── layouts/
│   │   └── MainLayout.astro
│   │
│   ├── pages/
│   │   ├── case-studies/
│   │   │   └── bloom.astro
│   │   ├── about.astro
│   │   ├── index.astro
│   │   └── projects.astro
│   │
│   └── styles/
│       └── global.css
│
├── package.json
├── package-lock.json
├── LICENSE
└── README.md
```

## Selected Projects / 選抜プロジェクト

Current homepage selected projects:

1. Inventory Management System
2. Bloom - Calm Routine, Focus & Progress App
3. Mini User API
4. JWT Authentication Dashboard
5. System Health Monitor

Additional projects, including Employee Management System and Telemetry Monitoring Platform, are available on the full `/projects` page.

現在ホームページに表示している選抜プロジェクトは、Inventory Management System、Bloom、Mini User API です。Employee Management System や Telemetry Monitoring Platform などの追加プロジェクトは、専用の `/projects` ページで確認できます。

## Engineering Case Studies / エンジニアリング事例集

Selected flagship projects include dedicated engineering case studies.

Each case study documents:

- Project goals
- Technical architecture
- Features
- Challenges
- Engineering decisions
- Technologies used
- Release timeline
- Lessons learned
- Future improvements

Current case studies:

- 🌱 Bloom

## Technical Log / テクニカルログ

The Technical Log is a dedicated blog-style technical writing area for current engineering learning and debugging focus.
「テクニカルログ」は、現在のエンジニアリング学習やデバッグに焦点を当てた、ブログ形式のテクニカルライティング専用コーナーです。

Current log areas include:

* Authentication & JWT
* Database Persistence
* Accessible Product UI

## Portfolio Architecture / ポートフォリオの構成

The portfolio is designed around reusable, component-driven architecture.

Reusable systems include:

- Project cards
- Project preview modal
- Technical Log
- Case study framework
- Feature grids
- Timeline components
- Technology stack cards

This allows new flagship projects to be added with minimal duplication while keeping the design consistent across the portfolio.

## Deployment / デプロイ

The portfolio is continuously deployed with Vercel.

Each update is version controlled with Git and GitHub before being deployed automatically.

## Future Improvements / 今後の改善

| EN | 日本語 | Status |
| --- | --- | --- |
| Additional engineering case studies | エンジニアリングケーススタディの追加 | In Progress |
| Interactive architecture diagrams | インタラクティブなアーキテクチャ図の追加 | Planned |
| Project screenshot galleries | プロジェクトのスクリーンショットギャラリーの追加 | Planned |
| DevOps deployment write-ups | DevOpsおよびデプロイに関する技術解説の追加 | Planned |
| Technical blog expansion | 技術ブログコンテンツの拡充 | Planned |
| Performance optimisation | パフォーマンスの最適化 | Planned |
| Accessibility improvements | アクセシビリティの継続的な改善 | Ongoing |

## Engineering Goals / エンジニアリングの目標

This portfolio is intended to demonstrate progression from junior developer projects toward production-ready engineering practices.

Alongside completed applications, it highlights:

- Engineering decision making
- Incremental feature development
- Accessibility-first thinking
- Backend architecture
- Documentation
- Testing
- Continuous improvement

## Philosophy / 哲学

This portfolio is intentionally built as an evolving engineering workspace rather than a static showcase.

Each project demonstrates not only the finished result, but also the design decisions, technical challenges, lessons learned and iterative improvements that shaped its development.

このポートフォリオは、単なる静的な作品集ではなく、進化し続けるエンジニアリングの作業場として意図的に構築されています。

各プロジェクトでは、完成した成果物だけでなく、その開発を形作った設計上の判断、技術的な課題、得られた教訓、そして反復的な改善の過程も紹介しています。

## License

This project is licensed under the MIT License.

See the LICENSE file for details.