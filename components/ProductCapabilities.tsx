import type { Capability } from "@/lib/content";

export function ProductCapabilities({ items }: { items: Capability[] }) {
  return (
    <div className="product-capability-grid">
      {items.map((item) => (
        <article className="product-capability" key={item.title}>
          <div className="product-capability-heading">
            <span aria-hidden="true">{item.mark}</span>
            <div>
              <small>{item.subtitle}</small>
              <h3>{item.title}</h3>
            </div>
          </div>
          <p>{item.body}</p>
          <strong>{item.evidence}</strong>
        </article>
      ))}
    </div>
  );
}
