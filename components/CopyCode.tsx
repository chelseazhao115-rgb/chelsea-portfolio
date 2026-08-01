"use client";
import { useState } from "react";

export function CopyCode({ code, hint }: { code: string; hint: string }) {
  const [copied, setCopied] = useState(false);
  return <button className="copy-code" onClick={async () => { await navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 1600); }} aria-label={`${hint}: ${code}`}>
    <code>{code}</code><span>{copied ? "Copied ✓" : hint}</span>
  </button>;
}
