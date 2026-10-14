/**
 * GOLDEN LENS STUDIO — LIGHTWEIGHT INTERACTIONS & THEME MANAGER v3.0
 */

(function () {
  "use strict";

  function setupThemeManager() {
    var saved = localStorage.getItem("goldenlens_theme") || "dark";
    document.documentElement.setAttribute("data-theme", saved);

    var toggleBtns = document.querySelectorAll(".theme-toggle-btn");
    toggleBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var current = document.documentElement.getAttribute("data-theme") || "dark";
        var next = current === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("goldenlens_theme", next);
      });
    });
  }

  function initGSAPSuite() {
    setupThemeManager();

    var g = typeof window !== "undefined" ? window.gsap : null;
    if (!g) return;

    setup3DCardTilt(g);
    setupMagneticButtons(g);
  }

  function setup3DCardTilt(g) {
    if (!window.matchMedia || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    var cards = document.querySelectorAll(".work-card, .video-card, .pkg-item-card, .service-card");

    cards.forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left - rect.width / 2;
        var y = e.clientY - rect.top - rect.height / 2;

        var rotateX = (-y / (rect.height / 2)) * 4;
        var rotateY = (x / (rect.width / 2)) * 4;

        g.to(card, {
          rotateX: rotateX,
          rotateY: rotateY,
          scale: 1.015,
          duration: 0.3,
          ease: "power2.out",
          transformPerspective: 1000
        });
      });

      card.addEventListener("mouseleave", function () {
        g.to(card, {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          duration: 0.45,
          ease: "power2.out"
        });
      });
    });
  }

  function setupMagneticButtons(g) {
    if (!window.matchMedia || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    var buttons = document.querySelectorAll(".btn-gold, .btn-whatsapp, .btn-outline-gold, .btn-all-works, .theme-toggle-btn");

    buttons.forEach(function (btn) {
      btn.addEventListener("mousemove", function (e) {
        var rect = btn.getBoundingClientRect();
        var x = (e.clientX - rect.left - rect.width / 2) * 0.2;
        var y = (e.clientY - rect.top - rect.height / 2) * 0.2;

        g.to(btn, {
          x: x,
          y: y,
          duration: 0.25,
          ease: "power2.out"
        });
      });

      btn.addEventListener("mouseleave", function () {
        g.to(btn, {
          x: 0,
          y: 0,
          duration: 0.4,
          ease: "power2.out"
        });
      });
    });
  }

  window.initGSAPSuite = initGSAPSuite;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initGSAPSuite);
  } else {
    initGSAPSuite();
  }
})();
