import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(path) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the bilingual portfolio home pages", async () => {
  for (const [path, expected] of [["/zh", "Rescue Ducks"], ["/en", "Four attempts"]]) {
    const response = await render(path);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    assert.match(await response.text(), new RegExp(expected, "i"));
  }
});

test("renders all four project cases in both languages", async () => {
  const slugs = ["rescue-ducks", "spoken-english-collector", "tencent-bootcamp", "portfolio"];
  for (const locale of ["zh", "en"]) {
    for (const slug of slugs) {
      const response = await render(`/${locale}/projects/${slug}`);
      assert.equal(response.status, 200, `${locale}/${slug}`);
      const html = await response.text();
      assert.match(html, /Chelsea Zhao/);
      assert.doesNotMatch(html, /Your site is taking shape|codex-preview/);
    }
  }
});

test("redirects legacy Agora routes to Spoken English Collector", async () => {
  for (const locale of ["zh", "en"]) {
    const response = await render(`/${locale}/projects/agora`);
    assert.equal(response.status, 307);
    assert.equal(new URL(response.headers.get("location")).pathname, `/${locale}/projects/spoken-english-collector`);
  }
});

test("renders the bilingual product workflow with honest evidence boundaries", async () => {
  for (const [locale, expected] of [["zh", "从发现问题到持续经营的产品闭环"], ["en", "The product loop, from discovery to sustained value"]]) {
    const response = await render(`/${locale}/projects/tencent-bootcamp`);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, new RegExp(expected));
    assert.match(html, /data-status="applied"/);
    assert.match(html, /data-status="framework"/);
    assert.match(html, new RegExp(`href="/${locale}/projects/rescue-ducks"`));
  }
});

test("keeps the product workflow exclusive to the methods case", async () => {
  for (const slug of ["rescue-ducks", "spoken-english-collector", "portfolio"]) {
    const response = await render(`/zh/projects/${slug}`);
    assert.equal(response.status, 200);
    assert.doesNotMatch(await response.text(), /class="product-process shell"/);
  }
});

test("keeps the root route pointed at Chinese", async () => {
  const response = await render("/");
  assert.ok([301, 302, 303, 307, 308].includes(response.status));
  assert.equal(new URL(response.headers.get("location"), "http://localhost").pathname, "/zh");
});

test("reinitialises reveal animations after client-side route changes", async () => {
  const source = await readFile(new URL("../components/ExperienceMotion.tsx", import.meta.url), "utf8");
  assert.match(source, /usePathname/);
  assert.match(source, /\[pathname\]/);
});
