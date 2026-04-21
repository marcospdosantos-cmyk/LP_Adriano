const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const faqList = document.querySelector("[data-faq-list]");
const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const root = document.documentElement;

if (header && menuToggle && nav) {
  const updateHeaderGlass = () => {
    header.classList.toggle("is-glass", window.scrollY > 48);
  };

  updateHeaderGlass();
  window.addEventListener("scroll", updateHeaderGlass, { passive: true });

  menuToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-open");
    document.body.classList.toggle("menu-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      header.classList.remove("nav-open");
      document.body.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menu");
    }
  });
}

if (faqList) {
  faqList.addEventListener("toggle", (event) => {
    const current = event.target;

    if (!(current instanceof HTMLDetailsElement) || !current.open) {
      return;
    }

    faqList.querySelectorAll("details").forEach((item) => {
      if (item !== current) {
        item.removeAttribute("open");
      }
    });
  }, true);
}

if (!motionQuery.matches && root) {
  let nextX = window.innerWidth * 0.5;
  let nextY = window.innerHeight * 0.3;
  let frameId = 0;

  const commitGlowPosition = () => {
    root.style.setProperty("--mouse-x", `${nextX}px`);
    root.style.setProperty("--mouse-y", `${nextY}px`);
    frameId = 0;
  };

  const queueGlowPosition = (clientX, clientY) => {
    nextX = clientX;
    nextY = clientY;

    if (!frameId) {
      frameId = window.requestAnimationFrame(commitGlowPosition);
    }
  };

  window.addEventListener("pointermove", (event) => {
    queueGlowPosition(event.clientX, event.clientY);
  });

  window.addEventListener("pointerleave", () => {
    queueGlowPosition(window.innerWidth * 0.5, window.innerHeight * 0.3);
  });
}

const formatCounter = (value) => {
  return new Intl.NumberFormat("pt-BR").format(value);
};

const animateCounter = (element) => {
  if (element.dataset.counted === "true") {
    return;
  }

  element.dataset.counted = "true";

  const target = Number(element.dataset.count || 0);
  const suffix = element.dataset.suffix || "";

  if (motionQuery.matches) {
    element.textContent = `${formatCounter(target)}${suffix}`;
    return;
  }

  const duration = 1300;
  const start = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(target * eased);

    element.textContent = `${formatCounter(current)}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  };

  requestAnimationFrame(tick);
};

const revealTargets = document.querySelectorAll("[data-reveal], [data-stagger]");

if (revealTargets.length) {
  if (motionQuery.matches || !("IntersectionObserver" in window)) {
    revealTargets.forEach((target) => target.classList.add("is-visible"));
    document.querySelectorAll("[data-count]").forEach(animateCounter);
  } else {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");

        entry.target.querySelectorAll("[data-count]").forEach(animateCounter);

        if (entry.target.matches("[data-count]")) {
          animateCounter(entry.target);
        }

        revealObserver.unobserve(entry.target);
      });
    }, {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.14,
    });

    revealTargets.forEach((target) => revealObserver.observe(target));
  }
}
