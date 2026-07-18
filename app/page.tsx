import Link from "next/link";
import Mascot from "@/components/Mascot";

const FEATURES = [
  {
    emoji: "⏰",
    title: "20-20-20 리마인더",
    desc: "설정한 간격마다 눈 쉴 시간을 알려드려요. 미국안과학회가 권장하는 눈 휴식 법칙 그대로.",
  },
  {
    emoji: "👀",
    title: "따라만 하면 되는 눈 스트레칭",
    desc: "위아래 보기, 좌우 보기, 원 그리기, 깜빡이기. 움직이는 눈누를 따라가면 딱 20초에 끝나요.",
  },
  {
    emoji: "✨",
    title: "할수록 쌓이는 눈누 포인트",
    desc: "운동을 마칠 때마다 눈누가 쌓이고, 매일 하면 연속 일수 스트릭이 자라나요.",
  },
];

const RULES = [
  { num: "20분", label: "마다 한 번" },
  { num: "6m", label: "먼 곳을 바라보며" },
  { num: "20초", label: "눈에게 휴식을" },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-nn-blue-soft to-white">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-5 pb-20 pt-16 text-center">
          <div className="nn-float">
            <Mascot size={190} />
          </div>
          <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            눈이 눈누난나~
            <br />할 시간이에요
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-nn-muted">
            스마트폰에 지친 눈, 딱 <strong className="text-nn-ink">20초</strong>면 살아나요.
            <br className="hidden sm:block" />
            따라만 하면 되는 눈 스트레칭과 20-20-20 리마인더.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="/exercise"
              className="rounded-full bg-nn-blue px-8 py-4 text-lg font-bold text-white shadow-lg shadow-nn-blue/30 transition hover:bg-nn-blue-deep"
            >
              지금 20초 눈 운동 하기
            </Link>
            <span className="rounded-full border-2 border-nn-blue-soft bg-white px-5 py-3 text-sm font-medium text-nn-muted">
              iOS 앱 준비 중 🍎
            </span>
          </div>
        </div>
      </section>

      {/* 20-20-20 rule */}
      <section className="mx-auto w-full max-w-5xl px-5 py-16">
        <h2 className="text-center text-2xl font-black sm:text-3xl">
          미국안과학회가 권장하는 <span className="text-nn-blue-deep">20-20-20 법칙</span>
        </h2>
        <p className="mt-3 text-center text-nn-muted">
          디지털 기기를 오래 보는 눈에게 필요한 최소한의 휴식이에요.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {RULES.map((r) => (
            <div
              key={r.num}
              className="rounded-3xl bg-nn-blue-soft px-6 py-8 text-center"
            >
              <p className="text-4xl font-black text-nn-blue-deep">{r.num}</p>
              <p className="mt-2 font-medium text-nn-ink">{r.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-nn-blue-soft/40">
        <div className="mx-auto w-full max-w-5xl px-5 py-16">
          <h2 className="text-center text-2xl font-black sm:text-3xl">
            눈누난나가 하는 일
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-3xl bg-white p-7 shadow-sm">
                <p className="text-3xl">{f.emoji}</p>
                <h3 className="mt-3 text-lg font-bold">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-nn-muted">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* iOS teaser */}
      <section className="mx-auto w-full max-w-5xl px-5 py-16">
        <div className="rounded-3xl bg-nn-ink px-7 py-10 text-center text-white sm:px-12">
          <h2 className="text-2xl font-black sm:text-3xl">곧 앱으로 만나요</h2>
          <p className="mx-auto mt-3 max-w-lg leading-relaxed text-white/70">
            백그라운드 알림, 스트릭 위젯, 그리고 눈누 캐릭터 상점까지.
            지금은 웹에서 먼저 눈을 풀어주세요.
          </p>
          <Link
            href="/exercise"
            className="mt-6 inline-block rounded-full bg-nn-lime px-8 py-4 text-lg font-bold text-nn-ink transition hover:brightness-95"
          >
            웹으로 먼저 해보기
          </Link>
        </div>
      </section>
    </main>
  );
}
