"use client";

import { useEffect, useRef, useState } from "react";
import Mascot from "@/components/Mascot";

const EXERCISES = [
  { key: "updown", title: "위아래 보기", desc: "고개는 그대로! 눈동자만 공을 따라 위아래로 움직여요", dur: 5 },
  { key: "leftright", title: "좌우 보기", desc: "눈동자만 공을 따라 천천히 좌우로 움직여요", dur: 5 },
  { key: "circle", title: "원 그리기", desc: "공을 따라 눈동자로 크게 원을 그려요", dur: 5 },
  { key: "blink", title: "깜빡이기", desc: "눈누를 따라 천천히 감았다 뜨세요", dur: 5 },
] as const;

const POINTS_PER_SESSION = 10;

type Phase = "idle" | "run" | "done";
type Stats = { points: number; streak: number; todayCount: number };

function localDateStr(offsetDays = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}`;
}

function loadStats(): Stats {
  try {
    const points = Number(localStorage.getItem("nn_points") || 0);
    const streak = Number(localStorage.getItem("nn_streak") || 0);
    const today = JSON.parse(localStorage.getItem("nn_today") || "null") as {
      date: string;
      count: number;
    } | null;
    const todayCount = today && today.date === localDateStr() ? today.count : 0;
    const last = localStorage.getItem("nn_last_date");
    // 어제도 오늘도 안 했으면 스트릭은 끊긴 것
    const effectiveStreak =
      last === localDateStr() || last === localDateStr(-1) ? streak : 0;
    return { points, streak: effectiveStreak, todayCount };
  } catch {
    return { points: 0, streak: 0, todayCount: 0 };
  }
}

function saveSession(): Stats {
  const today = localDateStr();
  const yesterday = localDateStr(-1);
  const points = Number(localStorage.getItem("nn_points") || 0) + POINTS_PER_SESSION;
  const last = localStorage.getItem("nn_last_date");
  let streak = Number(localStorage.getItem("nn_streak") || 0);
  if (last !== today) {
    streak = last === yesterday ? streak + 1 : 1;
  }
  let todayCount = 0;
  try {
    const td = JSON.parse(localStorage.getItem("nn_today") || "null") as {
      date: string;
      count: number;
    } | null;
    if (td && td.date === today) todayCount = td.count;
  } catch {
    /* 손상된 값은 새로 시작 */
  }
  todayCount += 1;
  localStorage.setItem("nn_points", String(points));
  localStorage.setItem("nn_streak", String(streak));
  localStorage.setItem("nn_last_date", today);
  localStorage.setItem("nn_today", JSON.stringify({ date: today, count: todayCount }));
  return { points, streak, todayCount };
}

/** 운동 가이드용 대칭 눈알 공 (회전해도 모양 유지) */
function Ball({ size = 68 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" aria-hidden="true">
      <defs>
        <radialGradient id="nnBallIris" cx="0.42" cy="0.36" r="0.85">
          <stop offset="0%" stopColor="#7ee0f2" />
          <stop offset="100%" stopColor="#1d9dbd" />
        </radialGradient>
      </defs>
      <circle cx="40" cy="40" r="36" fill="#ffffff" stroke="#c9edf7" strokeWidth="4" />
      <circle cx="40" cy="40" r="19" fill="url(#nnBallIris)" />
      <circle cx="40" cy="40" r="9" fill="#17324a" />
      <circle cx="45" cy="33" r="4" fill="#ffffff" />
    </svg>
  );
}

function Stage({ exKey }: { exKey: (typeof EXERCISES)[number]["key"] }) {
  return (
    <div className="relative h-72 w-full overflow-hidden rounded-3xl bg-nn-blue-soft">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {exKey === "updown" && (
          <div className="nn-anim-updown">
            <Ball />
          </div>
        )}
        {exKey === "leftright" && (
          <div className="nn-anim-leftright">
            <Ball />
          </div>
        )}
        {exKey === "circle" && (
          <div className="nn-orbit">
            <div style={{ transform: "translateX(96px)" }}>
              <div className="nn-orbit-counter">
                <Ball />
              </div>
            </div>
          </div>
        )}
        {exKey === "blink" && (
          <div className="nn-anim-blink">
            <Ball size={150} />
          </div>
        )}
      </div>
    </div>
  );
}

function StatsBar({ stats }: { stats: Stats }) {
  const items = [
    { label: "오늘", value: `${stats.todayCount}회` },
    { label: "연속", value: `${stats.streak}일` },
    { label: "총 눈누", value: `${stats.points}` },
  ];
  return (
    <div className="flex justify-center gap-3">
      {items.map((it) => (
        <div
          key={it.label}
          className="rounded-full bg-white px-4 py-2 text-sm shadow-sm"
        >
          <span className="text-nn-muted">{it.label} </span>
          <span className="font-bold text-nn-ink">{it.value}</span>
        </div>
      ))}
    </div>
  );
}

function ReminderCard({ onGo }: { onGo: () => void }) {
  const [on, setOn] = useState(false);
  const [mins, setMins] = useState(20);
  const [nextAt, setNextAt] = useState<number | null>(null);
  const [now, setNow] = useState(() => Date.now());
  const [fired, setFired] = useState(false);
  const minsRef = useRef(mins);
  minsRef.current = mins;

  useEffect(() => {
    if (!on) return;
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, [on]);

  useEffect(() => {
    if (!on || nextAt === null || now < nextAt) return;
    setFired(true);
    setNextAt(Date.now() + minsRef.current * 60_000);
    if (typeof Notification !== "undefined" && Notification.permission === "granted") {
      try {
        new Notification("눈누난나", {
          body: "눈 운동 시간이에요! 👁 20초만 쉬어가요.",
        });
      } catch {
        /* 브라우저가 페이지 컨텍스트 알림을 막아도 인페이지 배너로 충분 */
      }
    }
  }, [now, on, nextAt]);

  const start = async () => {
    if (typeof Notification !== "undefined" && Notification.permission === "default") {
      try {
        await Notification.requestPermission();
      } catch {
        /* 권한 거부여도 인페이지 배너로 동작 */
      }
    }
    setFired(false);
    setNextAt(Date.now() + mins * 60_000);
    setOn(true);
  };

  const stop = () => {
    setOn(false);
    setNextAt(null);
    setFired(false);
  };

  const remain = on && nextAt ? Math.max(0, nextAt - now) : 0;
  const mm = String(Math.floor(remain / 60_000)).padStart(2, "0");
  const ss = String(Math.floor((remain % 60_000) / 1000)).padStart(2, "0");

  return (
    <div className="rounded-3xl border-2 border-nn-blue-soft bg-white p-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="font-bold">⏰ 20-20-20 리마인더</h3>
          <p className="mt-1 text-sm text-nn-muted">
            이 탭이 열려 있는 동안, 정해진 간격마다 알려드려요.
          </p>
        </div>
        {on ? (
          <span className="rounded-full bg-nn-blue-soft px-4 py-2 font-mono text-lg font-bold text-nn-blue-deep">
            {mm}:{ss}
          </span>
        ) : null}
      </div>

      {fired && (
        <div className="nn-pop mt-4 flex items-center justify-between gap-3 rounded-2xl bg-nn-lime/60 px-4 py-3">
          <p className="font-bold">지금이에요! 눈 풀어줄 시간 👁</p>
          <button
            onClick={() => {
              setFired(false);
              onGo();
            }}
            className="shrink-0 rounded-full bg-nn-ink px-4 py-2 text-sm font-bold text-white"
          >
            20초 운동 시작
          </button>
        </div>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {[10, 20, 30, 60].map((m) => (
          <button
            key={m}
            onClick={() => setMins(m)}
            disabled={on}
            className={`rounded-full px-4 py-2 text-sm font-bold transition ${
              mins === m
                ? "bg-nn-blue text-white"
                : "bg-nn-blue-soft text-nn-ink hover:bg-nn-blue/20"
            } ${on ? "opacity-60" : ""}`}
          >
            {m}분
          </button>
        ))}
        <div className="ml-auto">
          {on ? (
            <button
              onClick={stop}
              className="rounded-full border-2 border-nn-blue px-5 py-2 text-sm font-bold text-nn-blue-deep"
            >
              중지
            </button>
          ) : (
            <button
              onClick={start}
              className="rounded-full bg-nn-blue px-5 py-2 text-sm font-bold text-white hover:bg-nn-blue-deep"
            >
              시작
            </button>
          )}
        </div>
      </div>
      <p className="mt-3 text-xs text-nn-muted">
        백그라운드 알림은 준비 중인 iOS 앱에서 지원할 예정이에요.
      </p>
    </div>
  );
}

export default function ExerciseApp() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [idx, setIdx] = useState(0);
  const [secLeft, setSecLeft] = useState<number>(EXERCISES[0].dur);
  const [stats, setStats] = useState<Stats>({ points: 0, streak: 0, todayCount: 0 });

  useEffect(() => {
    setStats(loadStats());
  }, []);

  useEffect(() => {
    if (phase !== "run") return;
    const t = setTimeout(() => {
      if (secLeft > 1) {
        setSecLeft(secLeft - 1);
        return;
      }
      if (idx < EXERCISES.length - 1) {
        setIdx(idx + 1);
        setSecLeft(EXERCISES[idx + 1].dur);
      } else {
        setStats(saveSession());
        setPhase("done");
      }
    }, 1000);
    return () => clearTimeout(t);
  }, [phase, secLeft, idx]);

  const start = () => {
    setIdx(0);
    setSecLeft(EXERCISES[0].dur);
    setPhase("run");
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const ex = EXERCISES[idx];

  return (
    <main className="mx-auto w-full max-w-xl px-5 py-10">
      {phase === "idle" && (
        <div className="flex flex-col items-center gap-6 text-center">
          <Mascot size={140} className="nn-float" />
          <div>
            <h1 className="text-3xl font-black">20초 눈 운동</h1>
            <p className="mt-2 text-nn-muted">
              4가지 운동, 각 5초. 눈누만 따라오면 끝나요.
            </p>
          </div>
          <StatsBar stats={stats} />
          <div className="flex flex-wrap justify-center gap-2">
            {EXERCISES.map((e) => (
              <span
                key={e.key}
                className="rounded-full bg-nn-blue-soft px-4 py-2 text-sm font-medium"
              >
                {e.title}
              </span>
            ))}
          </div>
          <button
            onClick={start}
            className="w-full max-w-xs rounded-full bg-nn-blue px-8 py-4 text-lg font-bold text-white shadow-lg shadow-nn-blue/30 transition hover:bg-nn-blue-deep"
          >
            시작하기
          </button>
          <div className="mt-6 w-full text-left">
            <ReminderCard onGo={start} />
          </div>
        </div>
      )}

      {phase === "run" && (
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-nn-blue-deep">
                {idx + 1} / {EXERCISES.length}
              </p>
              <h1 className="text-2xl font-black">{ex.title}</h1>
            </div>
            <span className="rounded-full bg-nn-blue-soft px-5 py-3 text-2xl font-black text-nn-blue-deep">
              {secLeft}
            </span>
          </div>
          <Stage exKey={ex.key} />
          <p className="text-center font-medium text-nn-muted">{ex.desc}</p>
          <div className="flex justify-center gap-2">
            {EXERCISES.map((e, i) => (
              <span
                key={e.key}
                className={`h-2.5 w-2.5 rounded-full ${
                  i <= idx ? "bg-nn-blue" : "bg-nn-blue-soft"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setPhase("idle")}
            className="mx-auto text-sm text-nn-muted underline-offset-2 hover:underline"
          >
            그만두기
          </button>
        </div>
      )}

      {phase === "done" && (
        <div className="nn-pop flex flex-col items-center gap-6 text-center">
          <Mascot size={140} />
          <div>
            <p className="text-4xl font-black text-nn-blue-deep">
              +{POINTS_PER_SESSION} 눈누!
            </p>
            <h1 className="mt-2 text-2xl font-black">눈이 눈누난나~ 해졌어요</h1>
            <p className="mt-2 text-nn-muted">
              틈틈이 자주 하는 게 몰아서 하는 것보다 좋아요.
            </p>
          </div>
          <StatsBar stats={stats} />
          <div className="flex gap-3">
            <button
              onClick={start}
              className="rounded-full bg-nn-blue px-7 py-3 font-bold text-white hover:bg-nn-blue-deep"
            >
              한 번 더
            </button>
            <button
              onClick={() => setPhase("idle")}
              className="rounded-full border-2 border-nn-blue-soft px-7 py-3 font-bold text-nn-ink"
            >
              처음으로
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
