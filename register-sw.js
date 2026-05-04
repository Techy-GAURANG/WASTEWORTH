const link = document.createElement("link");
link.rel = "manifest";
link.href = "/manifest.json";
document.head.appendChild(link);

const meta = document.createElement("meta");
meta.name = "theme-color";
meta.content = "#8B5CF6";
document.head.appendChild(meta);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(() => console.log("Service Worker Registered"))
      .catch(err => console.log("SW error:", err));
  });
}