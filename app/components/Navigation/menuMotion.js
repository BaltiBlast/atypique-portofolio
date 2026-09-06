// Every item shares the same timeline, including its initial and final pause.
// Reversing playback therefore also reverses the stagger without restarting it.
export function createMenuMotion(elements, onStateChange) {
  const desktop = window.matchMedia("(min-width: 768px)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let state = "closed";
  let animations = [];
  let revision = 0;

  function setState(next) {
    state = next;
    onStateChange(next);
  }

  function cancel() {
    revision += 1;
    animations.forEach((animation) => animation.cancel());
    animations = [];
  }

  function settle(open) {
    cancel();
    setState(open ? "open" : "closed");
  }

  function move(open) {
    if (desktop.matches) return settle(false);
    if (reducedMotion.matches) return settle(open);
    if ((open && state === "open") || (!open && state === "closed")) return;

    if (animations.length && animations.every((animation) =>
      open
        ? animation.currentTime >= animation.effect.getTiming().duration
        : animation.currentTime <= 0
    )) return settle(open);

    if (!animations.length) {
      const css = getComputedStyle(elements[0]);
      const milliseconds = (name) => {
        const value = css.getPropertyValue(name).trim();
        return parseFloat(value) * (value.endsWith("ms") ? 1 : 1000);
      };
      const duration = milliseconds("--motion-duration-menu-item");
      const stagger = milliseconds("--motion-stagger-menu-item");
      const total = duration + stagger * (elements.length - 1);
      const easing = css.getPropertyValue("--motion-easing-menu").trim();
      const distance = css.getPropertyValue("--space-sm").trim();
      animations = elements.map((element, index) => {
        const hidden = { opacity: 0, transform: `translateX(${distance})` };
        const visible = { opacity: 1, transform: "translateX(0)" };
        const animation = element.animate([
          { ...hidden, offset: 0 },
          { ...hidden, offset: index * stagger / total, easing },
          { ...visible, offset: (index * stagger + duration) / total },
          { ...visible, offset: 1 },
        ], { duration: total, fill: "both" });
        animation.pause();
        animation.currentTime = open ? 0 : total;
        return animation;
      });
    }

    setState(open ? "opening" : "closing");
    const currentRevision = ++revision;
    animations.forEach((animation) => {
      animation.updatePlaybackRate(open ? 1 : -1);
      animation.play();
    });
    Promise.all(animations.map((animation) => animation.finished)).then(() => {
      if (revision === currentRevision) settle(open);
    }).catch((error) => {
      if (error.name !== "AbortError" && revision === currentRevision) settle(open);
    });
  }

  function onDesktopChange() {
    if (desktop.matches) settle(false);
  }

  function onMotionChange() {
    if (reducedMotion.matches) settle(state === "open" || state === "opening");
  }

  desktop.addEventListener("change", onDesktopChange);
  reducedMotion.addEventListener("change", onMotionChange);

  return {
    toggle: () => move(state !== "open" && state !== "opening"),
    close: () => move(false),
    dispose() {
      cancel();
      desktop.removeEventListener("change", onDesktopChange);
      reducedMotion.removeEventListener("change", onMotionChange);
    },
  };
}
