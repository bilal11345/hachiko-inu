// app.js — Main Application Controller

document.addEventListener('DOMContentLoaded', () => {

  // ─── State ───────────────────────────────────────────────────────────────
  const state = {
  selected: {
  backgrounds: null,
  dress: null,
  neck: null,
  eyes: null,
  hairs: null,
}, 
    tokenId: null,
    rarity: null,
  };

  // ─── DOM References ───────────────────────────────────────────────────────
  const canvas         = document.getElementById('avatarCanvas');
  const traitPillsEl  = document.getElementById('traitPills');
  const tokenDisplay  = document.getElementById('tokenDisplay');
  const rarityDisplay = document.getElementById('rarityBadge');
  const statsBar      = document.getElementById('statsBar');
  const btnRandom     = document.getElementById('btnRandomize');
  const btnReset      = document.getElementById('btnReset');
  const btnDownload   = document.getElementById('btnDownload');
  const btnToken      = document.getElementById('btnToken');
  const avatarFrame   = document.getElementById('avatarFrame');
  const particleContainer = document.getElementById('particles');

  // ─── Init Canvas Engine ───────────────────────────────────────────────────
  AvatarEngine.init(canvas);
  AvatarEngine.render(state.selected);

  // ─── Build Trait Panels ───────────────────────────────────────────────────
  const categoryMap = {
  backgrounds: TRAITS.backgrounds,
  dress: TRAITS.dress,
  eyes: TRAITS.eyes,
  hairs: TRAITS.hairs,
  neck: TRAITS.neck,
};

  Object.entries(categoryMap).forEach(([category, traits]) => {
  const grid = document.getElementById(`grid-${category}`);
    if (!grid) return;

    traits.forEach(trait => {
      const btn = document.createElement('button');
      btn.className = 'trait-item';
      btn.dataset.category = category;
      btn.dataset.path = trait.path;
      btn.dataset.name = trait.name;
      btn.title = trait.name;

      const img = document.createElement('img');
      img.src = trait.path;
      img.alt = trait.name;
      img.loading = 'lazy';

    const label = document.createElement('span');
    label.className = 'trait-name';
    label.textContent = trait.name;

      btn.appendChild(img);
      btn.appendChild(label);
      grid.appendChild(btn);

      btn.addEventListener('click', () => handleTraitClick(btn, category, trait));
    });
  });

function handleTraitClick(btn, category, trait) {

  const isActive = btn.classList.contains('active');

  // remove active from all items in this category
  document
    .querySelectorAll(`.trait-item[data-category="${category}"]`)
    .forEach(b => b.classList.remove('active'));

  if (isActive) {
    // deselect
    state.selected[category] = null;
  } else {
    // select new
    btn.classList.add('active');
    state.selected[category] = trait.path;
  }

  triggerAvatarUpdate();
}
  // ─── Avatar Update ────────────────────────────────────────────────────────
  function triggerAvatarUpdate() {
    AvatarEngine.render(state.selected);
    updateTraitPills();
    updateStatsBar();
  }

  // ─── Trait Pills ──────────────────────────────────────────────────────────
  function updateTraitPills() {
    traitPillsEl.innerHTML = '';
    let count = 0;

    Object.entries(state.selected).forEach(([category, path]) => {
      if (!path) return;
      count++;
      const traits = categoryMap[category];
      const trait = traits.find(t => t.path === path);
      if (!trait) return;

      const pill = document.createElement('div');
      pill.className = 'trait-pill';
      pill.innerHTML = `
        <span class="pill-cat">${capitalize(category)}</span>
        <span class="pill-name">${trait.name}</span>
        <button class="pill-remove" data-category="${category}" aria-label="Remove">✕</button>
      `;
      pill.querySelector('.pill-remove').addEventListener('click', () => {
        state.selected[category] = null;
        document.querySelectorAll(`.trait-item[data-category="${category}"].active`).forEach(b => b.classList.remove('active'));
        triggerAvatarUpdate();
      });
      traitPillsEl.appendChild(pill);
    });

    if (count === 0) {
      traitPillsEl.innerHTML = '<span class="no-traits">No traits selected</span>';
    }
  }

  // ─── Stats Bar ────────────────────────────────────────────────────────────
  function updateStatsBar() {
    const total = Object.keys(state.selected).length;
    const active = Object.values(state.selected).filter(Boolean).length;
    const pct = Math.round((active / total) * 100);

    if (statsBar) {
      statsBar.querySelector('.stat-fill').style.width = pct + '%';
      statsBar.querySelector('.stat-label').textContent = `${active}/${total} Traits`;
    }
  }

  // ─── Rarity System ────────────────────────────────────────────────────────
  const RARITIES = [
    { label: 'Common',    emoji: '⚪', weight: 50, color: '#aaa' },
    { label: 'Rare',      emoji: '🔵', weight: 30, color: '#4fa3f7' },
    { label: 'Epic',      emoji: '🟣', weight: 15, color: '#c084fc' },
    { label: 'Legendary', emoji: '🟡', weight: 5,  color: '#fbbf24' },
  ];

  function rollRarity() {
    const roll = Math.random() * 100;
    let cumulative = 0;
    for (const r of RARITIES) {
      cumulative += r.weight;
      if (roll < cumulative) return r;
    }
    return RARITIES[0];
  }

  function displayRarity(rarity) {
    if (!rarityDisplay) return;
    rarityDisplay.textContent = `${rarity.emoji} ${rarity.label}`;
    rarityDisplay.style.color = rarity.color;
    rarityDisplay.style.borderColor = rarity.color;
    rarityDisplay.classList.add('pop');
    setTimeout(() => rarityDisplay.classList.remove('pop'), 400);
  }

  // ─── Token Generator ──────────────────────────────────────────────────────
  function generateToken() {
    const id = Math.floor(Math.random() * 9999) + 1;
    state.tokenId = id;
    if (tokenDisplay) {
      tokenDisplay.textContent = `#${String(id).padStart(4, '0')}`;
      tokenDisplay.classList.add('pop');
      setTimeout(() => tokenDisplay.classList.remove('pop'), 400);
    }
    const rarity = rollRarity();
    state.rarity = rarity;
    displayRarity(rarity);
  }

  // ─── Randomize ────────────────────────────────────────────────────────────
  btnRandom && btnRandom.addEventListener('click', () => {
    // Shake animation
    avatarFrame && avatarFrame.classList.add('shake');
    setTimeout(() => avatarFrame && avatarFrame.classList.remove('shake'), 500);

    // Random traits
    Object.keys(categoryMap).forEach(category => {
      const traits = categoryMap[category];
      const pick = Math.random() < 0.85
        ? traits[Math.floor(Math.random() * traits.length)]
        : null;

      // Clear active in UI
      document.querySelectorAll(`.trait-item[data-category="${category}"]`).forEach(b => b.classList.remove('active'));

      if (pick) {
        state.selected[category] = pick.path;
        const btn = document.querySelector(`.trait-item[data-category="${category}"][data-path="${CSS.escape(pick.path)}"]`);
        btn && btn.classList.add('active');
      } else {
        state.selected[category] = null;
      }
    });

    generateToken();
    triggerAvatarUpdate();
  });

  // ─── Reset ────────────────────────────────────────────────────────────────
  btnReset && btnReset.addEventListener('click', () => {
    Object.keys(state.selected).forEach(k => { state.selected[k] = null; });
    document.querySelectorAll('.trait-item.active').forEach(b => b.classList.remove('active'));
    if (tokenDisplay) tokenDisplay.textContent = '#????';
    if (rarityDisplay) {
      rarityDisplay.textContent = '— Unranked';
      rarityDisplay.style.color = '';
      rarityDisplay.style.borderColor = '';
    }
    triggerAvatarUpdate();
  });

  // ─── Download ─────────────────────────────────────────────────────────────
  btnDownload && btnDownload.addEventListener('click', async () => {
    btnDownload.textContent = '⏳ Rendering...';
    btnDownload.disabled = true;
    const name = state.tokenId ? `hachiko-${state.tokenId}.png` : 'my-avatar.png';
    await AvatarEngine.renderAndDownload(state.selected, name);
    setTimeout(() => {
      btnDownload.textContent = '⬇ Download PNG';
      btnDownload.disabled = false;
    }, 1000);
  });

  // ─── Token Button ─────────────────────────────────────────────────────────
  btnToken && btnToken.addEventListener('click', generateToken);

  // ─── Mouse Tilt Effect ────────────────────────────────────────────────────
  avatarFrame && avatarFrame.addEventListener('mousemove', (e) => {
    const rect = avatarFrame.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    const tiltX = dy * -8;
    const tiltY = dx * 8;
    avatarFrame.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
  });

  avatarFrame && avatarFrame.addEventListener('mouseleave', () => {
    avatarFrame.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
  });

  // ─── Floating Particles ───────────────────────────────────────────────────
  function spawnParticles() {
    if (!particleContainer) return;
    const count = 30;
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 4 + 2;
      const x = Math.random() * 100;
      const duration = Math.random() * 12 + 8;
      const delay = Math.random() * 10;
      const colors = ['#c084fc', '#818cf8', '#f472b6', '#38bdf8', '#fbbf24'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      p.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${x}%;
        bottom: -10px;
        background: ${color};
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
        opacity: ${Math.random() * 0.5 + 0.2};
      `;
      particleContainer.appendChild(p);
    }
  }

  spawnParticles();

  // ─── CATEGORY TABS ─────────────────────────────

const tabButtons = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.trait-panel');

tabButtons.forEach(btn => {

  btn.addEventListener('click', () => {

    const category = btn.dataset.category;

    // remove active from all tabs
    tabButtons.forEach(b => b.classList.remove('active'));

    // remove active from all panels
    panels.forEach(panel => panel.classList.remove('active'));

    // activate clicked tab
    btn.classList.add('active');

    // activate panel
    const targetPanel = document.getElementById(`panel-${category}`);

    if (targetPanel) {
      targetPanel.classList.add('active');
    }

  });

});

  // ─── Category Accordion ───────────────────────────────────────────────────
  document.querySelectorAll('.category-header').forEach(header => {
    header.addEventListener('click', () => {
      const panel = header.nextElementSibling;
      const isOpen = panel.classList.contains('open');
      // Close all
      document.querySelectorAll('.trait-grid').forEach(g => g.classList.remove('open'));
      document.querySelectorAll('.category-header').forEach(h => h.classList.remove('active'));
      // Open clicked
      if (!isOpen) {
        panel.classList.add('open');
        header.classList.add('active');
      }
    });
  });

  // Open first category by default
  const firstHeader = document.querySelector('.category-header');
  if (firstHeader) {
    firstHeader.click();
  }

  // ─── Init UI ──────────────────────────────────────────────────────────────
  updateTraitPills();
  updateStatsBar();

  // ─── Helpers ─────────────────────────────────────────────────────────────
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

});