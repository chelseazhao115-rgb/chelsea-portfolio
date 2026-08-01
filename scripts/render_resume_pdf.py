from pathlib import Path
import pypdfium2 as pdfium

src = Path(r"C:\Users\hp\Desktop\selfwebsite\portfolio\public\Chelsea_Zhao_Product_Manager_Resume_CN.pdf")
out = Path(r"C:\Users\hp\Desktop\selfwebsite\tmp\unified_resume_render")
out.mkdir(parents=True, exist_ok=True)
pdf = pdfium.PdfDocument(src)
for i, page in enumerate(pdf):
    page.render(scale=1.8).to_pil().save(out / f"page-{i+1}.png")
print(f"Rendered {len(pdf)} page(s) to {out}")
