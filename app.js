/**
 * Plantilla: Corazón que se dibuja ❤️
 * JS limpio, modular, comentado y orientado a rendimiento.
 * El mensaje se edita fácilmente desde aquí (CONFIG).
 */

"use strict";

/* =========================
   CONFIG (edita aquí)
========================= */
const CONFIG = {
  kicker: "Te lo digo con el corazón…",
  title: "Eres mi lugar seguro.",
  body: "Gracias por existir y por hacer que todo tenga sentido.",
  drawDurationMs: 2900, // debe coincidir aprox con CSS: 2.9s
};

/* =========================
   Helpers
========================= */
function qs(selector, root = document) {
  return root.querySelector(selector);
}

function setText(id, value) {
  const el = qs(`#${id}`);
  if (el) el.textContent = value;
}

/**
 * Ajusta stroke-dasharray/dashoffset al largo real del path
 * para que la animación sea fluida en cualquier pantalla.
 */
function prepareSvgPath(pathEl) {
  const length = pathEl.getTotalLength();

  // Setea el trazo para que empiece "invisible"
  pathEl.style.strokeDasharray = `${length}`;
  pathEl.style.strokeDashoffset = `${length}`;

  // Forzar reflow (asegura que el browser aplique styles antes de animar)
  // eslint-disable-next-line no-unused-expressions
  pathEl.getBoundingClientRect();
}

/* =========================
   Animación
========================= */
function showMessage(messageEl) {
  messageEl.classList.add("is-visible");
}

function hideMessage(messageEl) {
  messageEl.classList.remove("is-visible");
}

function restartAnimation(pathEl) {
  // Reinicia la animación CSS de forma segura
  pathEl.style.animation = "none";
  // Fuerza reflow
  // eslint-disable-next-line no-unused-expressions
  pathEl.getBoundingClientRect();
  pathEl.style.animation = "";
}

/* =========================
   Init
========================= */
function init() {
  // Setea textos desde CONFIG
  setText("kicker", CONFIG.kicker);
  setText("title", CONFIG.title);
  setText("body", CONFIG.body);

  const pathEl = qs("#heartPath");
  const messageEl = qs("#message");
  const replayBtn = qs("#replayBtn");

  if (!pathEl || !messageEl) return;

  // Preparar el path con su largo real
  prepareSvgPath(pathEl);

  // Ocultar mensaje inicialmente
  hideMessage(messageEl);

  // Mostrar mensaje cuando termine la animación (más robusto que setTimeout)
  pathEl.addEventListener("animationend", () => {
    showMessage(messageEl);
  });

  // Fallback por si algún navegador no dispara animationend (raro, pero posible)
  window.setTimeout(() => showMessage(messageEl), CONFIG.drawDurationMs + 200);

  // Botón: replay (táctil friendly)
  if (replayBtn) {
    replayBtn.addEventListener("click", () => {
      hideMessage(messageEl);

      // Reinicia dashoffset para que vuelva a "dibujarse"
      prepareSvgPath(pathEl);
      restartAnimation(pathEl);
    });
  }
}

document.addEventListener("DOMContentLoaded", init);