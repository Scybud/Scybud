// Pillar tabs with an auto advancing loop
const loop = document.getElementById("loop");

if (loop) {
  const steps = [...loop.querySelectorAll(".step")];
  const stages = [...loop.querySelectorAll(".stage")];
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let current = 0;
  let timer = null;

  // Selects one pillar and hides the others
  function show(i) {
    current = i;
    steps.forEach((s, k) => s.setAttribute("aria-selected", k === i));
    stages.forEach((p, k) => (p.hidden = k !== i));
  }

  // Autoplay stops for good after the first click
  function stop() {
    clearInterval(timer);
    loop.classList.add("paused");
  }

  steps.forEach((s, k) =>
    s.addEventListener("click", () => {
      show(k);
      stop();
    }),
  );

  // Arrow keys move between tabs
  loop.querySelector(".steps").addEventListener("keydown", (e) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next =
      (current + (e.key === "ArrowRight" ? 1 : -1) + steps.length) %
      steps.length;
    show(next);
    stop();
    steps[next].focus();
  });

  if (still) loop.classList.add("paused");
  else timer = setInterval(() => show((current + 1) % steps.length), 5000);
}

// Product cards tilt toward the pointer through CSS custom properties
document.querySelectorAll(".pcard").forEach((card) => {
  card.addEventListener("pointermove", (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty(
      "--ry",
      `${((e.clientX - r.left) / r.width - 0.5) * 8}deg`,
    );
    card.style.setProperty(
      "--rx",
      `${-((e.clientY - r.top) / r.height - 0.5) * 8}deg`,
    );
  });
  card.addEventListener("pointerleave", () => {
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
  });
});
