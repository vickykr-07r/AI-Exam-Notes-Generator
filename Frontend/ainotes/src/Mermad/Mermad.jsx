import { useEffect, useRef } from "react";
import mermaid from "mermaid";

function fixMermaid(chart) {
  if (!chart) return "";

  let fixed = chart;

  if (!fixed.includes("\n")) {
    fixed = fixed.replace("graph TD", "graph TD\n");
  }

  let counter = 0;
  fixed = fixed.replace(/\[(.*?)\]/g, (match, text) => {
    counter++;
    return `N${counter}[${text}]`;
  });

  return fixed;
}

function MermaidChart({ chart }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!chart || !ref.current) return;

    const safeChart = fixMermaid(chart);

    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "loose",
    });

    ref.current.innerHTML = "";

    const container = document.createElement("div");
    container.className = "mermaid";
    container.textContent = safeChart;

    ref.current.appendChild(container);

    setTimeout(() => {
      try {
        mermaid.run();
      } catch (err) {
        console.error("Mermaid error:", err);
      }
    }, 0);
  }, [chart]);

  return <div ref={ref} />;
}

export default MermaidChart;