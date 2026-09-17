const CONSENT_KEY = "scybud-analytics-consent";

function loadAnalytics() {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", "G-5J3R5GPKQX");

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-5J3R5GPKQX";
  document.head.appendChild(script);
}

const overlay = document.getElementById("consentOverlay");
const stored = localStorage.getItem(CONSENT_KEY);

document.getElementById("cookieSettings").addEventListener("click", () => {
  overlay.hidden = false;
});

if (stored === "granted") {
  loadAnalytics();
} else if (stored !== "denied") {
  overlay.hidden = false;
}

document.getElementById("consentAccept").addEventListener("click", () => {
  localStorage.setItem(CONSENT_KEY, "granted");
  overlay.hidden = true;
  loadAnalytics();
});

document.getElementById("consentDecline").addEventListener("click", () => {
  localStorage.setItem(CONSENT_KEY, "denied");
  overlay.hidden = true;
});

loadAnalytics()