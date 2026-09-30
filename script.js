const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navMenu.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* =========================================================
   SHADOW — LIGHTWEIGHT PARTICLE BACKGROUND
========================================================= */

(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const canvas = document.createElement("canvas");
  canvas.className = "shadow-particles";
  document.body.prepend(canvas);

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let particles = [];

  const setup = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = width < 600 ? 28 : width < 1000 ? 38 : 48;

    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.3 + .35,
      vx: (Math.random() - .5) * .16,
      vy: (Math.random() - .5) * .16,
      a: Math.random() * .45 + .15
    }));
  };

  const draw = () => {
    ctx.clearRect(0, 0, width, height);

    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < -5) p.x = width + 5;
      if (p.x > width + 5) p.x = -5;
      if (p.y < -5) p.y = height + 5;
      if (p.y > height + 5) p.y = -5;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(96,165,250,${p.a})`;
      ctx.fill();
    }

    requestAnimationFrame(draw);
  };

  setup();
  window.addEventListener("resize", setup, { passive: true });
  draw();
})();


/* SHADOW_STAGE11_NAV */
document.addEventListener("DOMContentLoaded", () => {
  // Close mobile navigation after selecting a section.
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", () => {
      const menu = document.querySelector(".nav-menu, .nav-links");
      const toggle = document.querySelector(".menu-toggle, .hamburger");

      if (menu) {
        menu.classList.remove("active", "open", "show");
      }

      if (toggle) {
        toggle.classList.remove("active", "open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  // Prevent accidental empty placeholder links from jumping to nowhere.
  document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener("click", event => event.preventDefault());
  });
});
