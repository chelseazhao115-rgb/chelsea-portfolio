import assert from "node:assert/strict";
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
  const slugs = ["rescue-ducks", "agora", "tencent-bootcamp", "portfolio"];
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

test("keeps the root route pointed at Chinese", async () => {
  const response = await render("/");
  assert.ok([301, 302, 303, 307, 308].includes(response.status));
  assert.equal(new URL(response.headers.get("location"), "http://localhost").pathname, "/zh");
});
