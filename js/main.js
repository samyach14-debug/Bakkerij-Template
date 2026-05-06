document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initFaq();
  initFormFeedback();
});

function initMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initFaq() {
  const questions = document.querySelectorAll(".faq-question");
  if (!questions.length) return;

  questions.forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const expanded = btn.getAttribute("aria-expanded") === "true";

      btn.setAttribute("aria-expanded", String(!expanded));
      item.classList.toggle("open");
    });
  });
}

function initFormFeedback() {
  const forms = document.querySelectorAll("form");
  if (!forms.length) return;

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Bedankt! Je aanvraag is ontvangen. We nemen snel contact met je op.");
      form.reset();
    });
  });
}
