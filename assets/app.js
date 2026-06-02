const menuToggle = document.querySelector("[data-menu-toggle]");
const mainNav = document.querySelector("[data-main-nav]");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const expanded = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(expanded));
  });
}

function initSlider(sliderRoot) {
  const slides = Array.from(sliderRoot.querySelectorAll("[data-slide]"));
  const dots = Array.from(sliderRoot.querySelectorAll("[data-slide-to]"));
  const prevBtn = sliderRoot.querySelector("[data-prev-slide]");
  const nextBtn = sliderRoot.querySelector("[data-next-slide]");
  const defaultDelayMs = 4500;
  const autoplayDelayMs = Number(sliderRoot.dataset.sliderDelay) || defaultDelayMs;
  let currentIndex = slides.findIndex((slide) => slide.classList.contains("active"));
  if (currentIndex < 0) {
    currentIndex = 0;
  }
  let autoplayId = null;

  if (slides.length === 0) {
    return;
  }

  const render = () => {
    slides.forEach((slide, index) => {
      slide.classList.toggle("active", index === currentIndex);
    });

    dots.forEach((dot, index) => {
      const isActive = index === currentIndex;
      dot.classList.toggle("active", isActive);
      dot.setAttribute("aria-selected", String(isActive));
    });
  };

  const goTo = (index) => {
    currentIndex = (index + slides.length) % slides.length;
    render();
  };

  const stopAutoplay = () => {
    if (autoplayId) {
      clearInterval(autoplayId);
      autoplayId = null;
    }
  };

  const startAutoplay = () => {
    if (slides.length < 2) {
      return;
    }
    stopAutoplay();
    autoplayId = setInterval(() => {
      goTo(currentIndex + 1);
    }, autoplayDelayMs);
  };

  prevBtn?.addEventListener("click", () => {
    goTo(currentIndex - 1);
    startAutoplay();
  });

  nextBtn?.addEventListener("click", () => {
    goTo(currentIndex + 1);
    startAutoplay();
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const index = Number(dot.dataset.slideTo);
      if (!Number.isNaN(index)) {
        goTo(index);
        startAutoplay();
      }
    });
  });

  sliderRoot.addEventListener("mouseenter", stopAutoplay);
  sliderRoot.addEventListener("mouseleave", startAutoplay);
  sliderRoot.addEventListener("focusin", stopAutoplay);
  sliderRoot.addEventListener("focusout", startAutoplay);

  render();
  startAutoplay();
}

document.querySelectorAll("[data-slider]").forEach((sliderRoot) => {
  initSlider(sliderRoot);
});
