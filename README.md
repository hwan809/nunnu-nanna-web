<div align="center">

# 눈누난나

**스마트폰에 지친 눈, 딱 20초면 살아나요.**

따라만 하면 되는 눈 스트레칭과 20-20-20 리마인더로 눈 건강을 지켜요.

[![Live Demo](https://img.shields.io/badge/Live-Demo-3FC3E0?style=for-the-badge&logo=vercel&logoColor=white)](https://nunnu-nanna-web.vercel.app)
&nbsp;
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](#tech-stack)
[![Next.js](https://img.shields.io/badge/Next.js_16-000?style=flat-square&logo=nextdotjs)](#tech-stack)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](#tech-stack)

</div>

<p align="center">
  <img src="docs/screenshot.jpg" width="720" alt="눈누난나 스크린샷" />
</p>

---

## 소개

**눈누난나**는 미국안과학회(AAO)가 권장하는 **20-20-20 법칙**을 실천할 수 있도록 도와주는 눈 건강 서비스입니다.

> 20분마다, 6m 먼 곳을 바라보며, 20초 동안 눈에게 휴식을.

디지털 기기를 오래 보는 학생과 직장인을 위해, 가장 간단한 형태의 눈 운동 가이드와 주기 리마인더를 제공합니다.

## 주요 기능

### 20초 눈 운동
움직이는 가이드 볼을 따라가기만 하면 되는 4종 눈 스트레칭입니다.

| 운동 | 설명 | 시간 |
|------|------|------|
| 위아래 보기 | 눈동자만 공을 따라 위아래로 | 5초 |
| 좌우 보기 | 눈동자만 공을 따라 좌우로 | 5초 |
| 원 그리기 | 눈동자로 크게 원을 그리기 | 5초 |
| 깜빡이기 | 천천히 감았다 뜨기 | 5초 |

### 20-20-20 리마인더
탭이 열려 있는 동안 설정한 간격(10/20/30/60분)마다 눈 운동 시간을 알려줍니다. Web Notification을 지원하며, 알림을 허용하지 않아도 페이지 내 배너로 동작합니다.

### 눈누 포인트 & 스트릭
운동을 마칠 때마다 +10 눈누 포인트가 쌓이고, 매일 연속으로 하면 스트릭이 올라갑니다. 서버 없이 localStorage에 저장되므로 회원가입이 필요 없습니다.

### 눈누 마스코트
눈알 캐릭터 "눈누"가 SVG 애니메이션으로 깜빡이며 운동을 함께합니다.

## Tech Stack

| 영역 | 기술 |
|------|------|
| 프레임워크 | [Next.js](https://nextjs.org) 16 (App Router) |
| 언어 | TypeScript 5 |
| UI | React 19 · [Tailwind CSS](https://tailwindcss.com) 4 |
| 폰트 | Noto Sans KR (next/font) |
| 배포 | [Vercel](https://vercel.com) |
| 저장 | localStorage (서버/DB 없음) |

## 시작하기

```bash
# 저장소 클론
git clone https://github.com/hwan809/nunnu-nanna-web.git
cd nunnu-nanna-web

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

[http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

```bash
# 프로덕션 빌드
npm run build
npm start
```

## 페이지 구성

| 경로 | 내용 |
|------|------|
| `/` | 랜딩 페이지 — 마스코트 히어로, 20-20-20 설명, 기능 소개 |
| `/exercise` | 눈 운동 — 4종 운동 가이드, 리마인더, 포인트/스트릭 |
| `/privacy` | 개인정보처리방침 |
| `/terms` | 이용약관 |

## 프로젝트 히스토리

| 시기 | 내용 |
|------|------|
| 2024 | 부산과학고-부산일과학고 학술교류 프로젝트로 시작 (구명: eyenote) |
| 2025.12 | Flutter(Android)로 구현 시도 후 중단 — 과도한 스코프와 플랫폼 제약 |
| 2026.07 | 스코프를 깎고 **웹으로 재출시** (Next.js + Vercel) |

## 로드맵

- **iOS 앱** — 백그라운드 로컬 알림, 위젯, 스트릭, AdMob 수익화
- 캐릭터 상점 (눈누 포인트 소비처)
- 릴스/쇼츠 개입 (Screen Time API)

---

<div align="center">

**[눈누난나 사용해보기](https://nunnu-nanna-web.vercel.app)**

미리내 · [mirinae.app](https://mirinae.app)

</div>
