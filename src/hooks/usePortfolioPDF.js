import { useCallback, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

/**
 * Hook untuk mengekspor seluruh portofolio dalam bentuk slide presentasi (PPT visual) ke file PDF.
 * Setiap slide (16:9 landscape) dirender dan dikompilasi menjadi halaman PDF visual berkualitas tinggi.
 */
export function usePortfolioPDF() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState("");

  const download = useCallback(async () => {
    const container = document.getElementById("pdf-slides-container");
    if (!container) {
      console.warn("Container #pdf-slides-container tidak ditemukan");
      window.print();
      return;
    }

    const slides = Array.from(container.querySelectorAll(".pdf-slide"));
    if (!slides.length) {
      window.print();
      return;
    }

    setLoading(true);
    setProgress("Mempersiapkan slide...");

    // Pindahkan container ke posisi render yang aman untuk html2canvas
    const originalLeft = container.style.left;
    const originalZIndex = container.style.zIndex;
    container.style.position = "fixed";
    container.style.top = "0px";
    container.style.left = "0px";
    container.style.zIndex = "99999";
    container.style.opacity = "1";
    container.style.pointerEvents = "none";

    try {
      // Tunggu layout & image render sejenak
      await new Promise((resolve) => setTimeout(resolve, 350));

      // Dimensi slide: 1120 x 630 px (16:9 landscape)
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [1120, 630],
        compress: true,
      });

      for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        setProgress(`Menyusun slide ${i + 1} dari ${slides.length}...`);

        const canvas = await html2canvas(slide, {
          scale: 1.5,
          useCORS: true,
          allowTaint: true,
          logging: false,
          backgroundColor: "#ffffff",
          width: 1120,
          height: 630,
        });

        const imgData = canvas.toDataURL("image/jpeg", 0.9);

        if (i > 0) {
          pdf.addPage([1120, 630], "landscape");
        }
        pdf.addImage(imgData, "JPEG", 0, 0, 1120, 630, undefined, "FAST");
      }

      setProgress("Menyimpan PDF...");
      pdf.save("Portfolio_Fathan_Salaka_R_Slides.pdf");
    } catch (err) {
      console.error("Gagal membuat slide PDF:", err);
      // Fallback ke window.print jika ada kendala
      window.print();
    } finally {
      container.style.position = "absolute";
      container.style.left = originalLeft || "-9999px";
      container.style.zIndex = originalZIndex || "-100";
      container.style.opacity = "0";
      setLoading(false);
      setProgress("");
    }
  }, []);

  return { download, loading, progress };
}
