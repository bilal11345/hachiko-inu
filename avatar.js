// avatar.js — Layered Canvas Rendering Engine

const AvatarEngine = (() => {
  const CANVAS_SIZE = 600;
  let canvas, ctx;
  let imageCache = {};
  let renderQueue = null;

  // Layer order: background → base → dress → neck → eyes → hair
  const LAYER_ORDER = ['backgrounds', 'base', 'dress', 'neck', 'eyes', 'hairs'];

  function init(canvasElement) {
    canvas = canvasElement;
    ctx = canvas.getContext('2d');
    canvas.width = CANVAS_SIZE;
    canvas.height = CANVAS_SIZE;
    ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }

  function loadImage(src) {
    return new Promise((resolve, reject) => {
      if (imageCache[src]) {
        resolve(imageCache[src]);
        return;
      }
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        imageCache[src] = img;
        resolve(img);
      };
      img.onerror = () => {
        console.warn(`Failed to load: ${src}`);
        resolve(null); // Resolve with null so other layers still render
      };
      img.src = src;
    });
  }

  function drawLayer(img) {
    if (!img) return;
    ctx.drawImage(img, 0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }

  async function render(selectedTraits) {
    // Debounce rapid calls
    if (renderQueue) cancelAnimationFrame(renderQueue);
    renderQueue = requestAnimationFrame(async () => {
      ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

      // Always load base first
      const basePath = 'assets/hero/base.png';
      const baseImg = await loadImage(basePath);

      for (const layer of LAYER_ORDER) {
        if (layer === 'base') {
          drawLayer(baseImg);
          continue;
        }

        const traitPath = selectedTraits[layer];
        if (!traitPath) continue;

        const img = await loadImage(traitPath);
        drawLayer(img);
      }

      // Dispatch render complete event
      canvas.dispatchEvent(new CustomEvent('renderComplete'));
    });
  }

  function downloadPNG(filename = 'my-avatar.png') {
    // Render to a fresh offscreen canvas at full quality
    const offscreen = document.createElement('canvas');
    offscreen.width = CANVAS_SIZE;
    offscreen.height = CANVAS_SIZE;
    const offCtx = offscreen.getContext('2d');

    // Copy current canvas content
    offCtx.drawImage(canvas, 0, 0);

    const link = document.createElement('a');
    link.download = filename;
    link.href = offscreen.toDataURL('image/png', 1.0);
    link.click();
  }

  async function renderAndDownload(selectedTraits, filename) {
    // Force a clean render then download
    ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    const basePath = 'assets/hero/base.png';
    const baseImg = await loadImage(basePath);

    for (const layer of LAYER_ORDER) {
      if (layer === 'base') {
        drawLayer(baseImg);
        continue;
      }
      const traitPath = selectedTraits[layer];
      if (!traitPath) continue;
      const img = await loadImage(traitPath);
      drawLayer(img);
    }

    downloadPNG(filename);
  }

  function clearCache() {
    imageCache = {};
  }

  function getCanvas() {
    return canvas;
  }

  return { init, render, renderAndDownload, downloadPNG, clearCache, getCanvas };
})();