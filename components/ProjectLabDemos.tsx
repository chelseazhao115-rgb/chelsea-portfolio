"use client";

import { useState, type CSSProperties } from "react";
import type { Locale } from "@/lib/content";

const words = [
  { label: "rapid", group: "speed" }, { label: "obscure", group: "hidden" },
  { label: "swift", group: "speed" }, { label: "hidden", group: "hidden" },
];

export function RescueMiniLab({ locale }: { locale: Locale }) {
  const [picked, setPicked] = useState<number[]>([]);
  const select = (index: number) => setPicked((current) => current.includes(index) ? current.filter(i => i !== index) : [...current.slice(-1), index]);
  const matched = picked.length === 2 && words[picked[0]].group === words[picked[1]].group;
  return <div className="mini-lab rescue-mini" aria-label={locale === "zh" ? "同义词关系演示" : "Synonym relationship demo"}>
    <p>{locale === "zh" ? "选出有关系的两个词" : "Pick two related words"}</p>
    <div className="word-field">{words.map((word, i) => <button key={word.label} type="button" className={`${picked.includes(i) ? "is-picked" : ""} group-${word.group}`} onClick={() => select(i)}>{word.label}</button>)}</div>
    <div className={`match-signal${matched ? " is-matched" : ""}`} role="status">{matched ? (locale === "zh" ? "关系被看见了 ✓" : "Relationship found ✓") : (locale === "zh" ? "词义不是孤岛" : "Meaning is relational")}</div>
  </div>;
}

const hints = {
  zh: ["先判断题目在问什么", "回忆相关概念", "找出已知量与未知量", "选择可能的解题关系", "完成下一步计算", "检查过程并表达答案"],
  en: ["Name what the question asks", "Recall the relevant concept", "Separate knowns from unknowns", "Choose a useful relationship", "Complete the next calculation", "Check and express the answer"],
};

export function AgoraMiniLab({ locale }: { locale: Locale }) {
  const [level, setLevel] = useState(2);
  return <div className="mini-lab agora-mini" aria-label={locale === "zh" ? "六级提示演示" : "Six-level hint demo"}>
    <div className="hint-levels">{hints[locale].map((_, i) => <button key={i} type="button" aria-label={`${locale === "zh" ? "提示" : "Hint"} ${i + 1}`} aria-pressed={level === i} onClick={() => setLevel(i)}>{i + 1}</button>)}</div>
    <div className="hint-output"><span>{locale === "zh" ? `提示 ${level + 1}` : `Hint ${level + 1}`}</span><p>{hints[locale][level]}</p></div>
  </div>;
}

export function EvidenceDeck({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0);
  const groups = locale === "zh" ? [
    ["理解用户", "课堂行为、错误、访谈和反馈", "Rescue Ducks · 30–40名学生测试"],
    ["构建产品", "定义MVP，用AI把假设做成可体验产品", "Rescue Ducks · Agora · 个人网站"],
    ["验证价值", "用数据、错误类型和评测框架持续迭代", "Kalowave · 用户测试 · AI评测"],
  ] : [
    ["Understand users", "Classroom behaviour, errors, interviews and feedback", "Rescue Ducks · 30–40 learner tests"],
    ["Build products", "Scope the MVP and make the hypothesis tangible with AI", "Rescue Ducks · Agora · Portfolio"],
    ["Validate value", "Use data, error patterns and evaluation to iterate", "Kalowave · User tests · AI evaluation"],
  ];
  return <div className="evidence-deck">
    <div className="deck-tabs" role="tablist">{groups.map((group, i) => <button key={group[0]} role="tab" aria-selected={active === i} onClick={() => setActive(i)}>{group[0]}</button>)}</div>
    <div className="deck-stage" role="tabpanel">
      {groups.map((group, i) => <article key={group[0]} className={active === i ? "is-active" : ""} style={{"--card-index": i} as CSSProperties}><span>0{i + 1}</span><h3>{group[0]}</h3><p>{group[1]}</p><strong>{group[2]}</strong></article>)}
    </div>
  </div>;
}
