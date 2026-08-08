"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import type { Locale } from "@/lib/content";

const STORAGE_KEY = "chelsea_portfolio_intro_seen_v1";

export function IntroExperience({ locale }: { locale: Locale }) {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const [sound, setSound] = useState(false);
  const audio = useRef<AudioContext | null>(null);

  const finish = useCallback(() => {
    setClosing(true);
    window.localStorage.setItem(STORAGE_KEY, "1");
    window.setTimeout(() => { setVisible(false); setClosing(false); }, 650);
  }, []);

  const start = useCallback(() => {
    setVisible(true);
    setClosing(false);
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduced && !window.localStorage.getItem(STORAGE_KEY)) start();
    const replay = () => start();
    window.addEventListener("chelsea:replay-intro", replay);
    return () => window.removeEventListener("chelsea:replay-intro", replay);
  }, [start]);

  useEffect(() => {
    if (!visible) return;
    const mobile = window.matchMedia("(max-width: 600px)").matches;
    const timer = window.setTimeout(finish, mobile ? 3900 : 7600);
    document.body.dataset.intro = "open";
    return () => {
      window.clearTimeout(timer);
      delete document.body.dataset.intro;
      audio.current?.close();
      audio.current = null;
    };
  }, [finish, visible]);

  const toggleSound = () => {
    if (sound) {
      audio.current?.close();
      audio.current = null;
      setSound(false);
      return;
    }
    const Context = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Context) return;
    const ctx = new Context();
    const gain = ctx.createGain();
    const low = ctx.createOscillator();
    const high = ctx.createOscillator();
    gain.gain.value = 0.018;
    low.frequency.value = 146.83;
    high.frequency.value = 220;
    low.type = "sine";
    high.type = "sine";
    low.connect(gain); high.connect(gain); gain.connect(ctx.destination);
    low.start(); high.start();
    audio.current = ctx;
    setSound(true);
  };

  if (!visible) return null;
  const zh = locale === "zh";

  return <section className={`intro-film${closing ? " is-closing" : ""}`} aria-label={zh ? "产品思考开场" : "Product thinking introduction"}>
    <div className="intro-sky" />
    <div className="intro-grain" />
    <div className="intro-frame intro-problem">
      <Image src="/oil-student.png" alt="" fill priority sizes="(max-width: 600px) 92vw, 780px" />
      <p>{zh ? "学生记住了单词，却没看见词与词之间的关系。" : "Learners remembered words, but missed the relationships between them."}</p>
    </div>
    <div className="intro-frame intro-relations" aria-hidden="true">
      {[["rapid", "swift"], ["hidden", "obscure"], ["change", "shift"]].map((pair, i) => <div className={`intro-pair pair-${i + 1}`} key={pair[0]}><span>{pair[0]}</span><i /><span>{pair[1]}</span></div>)}
    </div>
    <div className="intro-frame intro-hints" aria-hidden="true">
      <div className="hint-stair">{[1,2,3,4,5,6].map((step) => <span key={step} style={{"--hint": step} as CSSProperties}>{step}</span>)}</div>
      <p>{zh ? "好的AI不是更快给答案，而是让下一步刚刚好。" : "Good AI does not answer faster. It makes the next step possible."}</p>
    </div>
    <div className="intro-frame intro-method">
      <span>Observe</span><i /><span>Build</span><i /><span>Validate</span>
      <strong>Chelsea Zhao</strong>
    </div>
    <div className="intro-controls">
      <button type="button" onClick={toggleSound}>{sound ? (zh ? "关闭声音" : "Sound off") : (zh ? "开启声音" : "Sound on")}</button>
      <button type="button" onClick={finish}>{zh ? "跳过" : "Skip"}</button>
    </div>
  </section>;
}

export function ReplayIntro({ locale }: { locale: Locale }) {
  return <button className="replay-intro" type="button" onClick={() => window.dispatchEvent(new Event("chelsea:replay-intro"))}>
    <span aria-hidden="true">↺</span>{locale === "zh" ? "重播开场" : "Replay intro"}
  </button>;
}
