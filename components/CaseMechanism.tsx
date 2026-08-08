"use client";

import { useState } from "react";
import { AgoraMiniLab } from "@/components/ProjectLabDemos";
import type { Locale } from "@/lib/content";

export function CaseMechanism({ locale, slug }: { locale: Locale; slug: "rescue-ducks" | "agora" }) {
  const [connected, setConnected] = useState(false);
  if (slug === "agora") return <section className="case-mechanism agora-mechanism" data-reveal>
    <div><h2>{locale === "zh" ? "帮助应该到哪一步？" : "How far should help go?"}</h2><p>{locale === "zh" ? "试一下核心机制：逐级切换提示，观察每一级如何增加帮助，同时保留学生完成下一步的空间。" : "Try the core mechanism: move through the levels and see how each adds support while preserving the learner's next step."}</p></div>
    <div className="case-demo-shell"><AgoraMiniLab locale={locale} /></div>
  </section>;

  const items = connected ? [
    ["rapid", "swift", "speed"], ["hidden", "obscure", "hidden"], ["change", "shift", "change"],
  ] : [["rapid", "?", "alone"], ["obscure", "?", "alone"], ["shift", "?", "alone"]];
  return <section className={`case-mechanism rescue-mechanism${connected ? " is-connected" : ""}`} data-reveal>
    <div><h2>{locale === "zh" ? "同一个词库，两种注意方式。" : "The same vocabulary. A different focus."}</h2><p>{locale === "zh" ? "从孤立记忆到关系识别：切换前后状态，看产品如何把注意力从单个释义迁移到同义关系。" : "From isolated memory to relationship recognition: toggle the state to see attention move from isolated definitions to semantic relationships."}</p><button type="button" onClick={() => setConnected(value => !value)}>{connected ? (locale === "zh" ? "查看改版前" : "View before") : (locale === "zh" ? "建立关系" : "Connect words")}</button></div>
    <div className="relation-board">{items.map(([a,b,group]) => <div className={`relation-row group-${group}`} key={a}><span>{a}</span><i /><span>{b}</span></div>)}</div>
  </section>;
}
