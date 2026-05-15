/* ══════════════════════════════════════
   Swipeable Category Tabs
   Left/right swipe on .trait-panels
   switches active tab + panel
══════════════════════════════════════ */
(function () {
  function init() {
    const tabsContainer = document.getElementById('categoryTabs');
    const panelsContainer = document.getElementById('traitPanels');
    if (!tabsContainer || !panelsContainer) return;

    const tabs   = Array.from(tabsContainer.querySelectorAll('.tab-btn'));
    const panels = Array.from(panelsContainer.querySelectorAll('.trait-panel'));

    if (!tabs.length || !panels.length) return;

    let touchStartX = 0;
    let touchStartY = 0;
    let isSwiping   = false;

    function getActiveIndex() {
      return tabs.findIndex(t => t.classList.contains('active'));
    }

    function goToIndex(index) {
      if (index < 0 || index >= tabs.length) return;

      tabs.forEach((t, i) => {
        t.classList.toggle('active', i === index);
      });

      panels.forEach((p, i) => {
        p.classList.toggle('active', i === index);
      });

      // Scroll active tab into view (for narrow screens)
      tabs[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    // ── Touch events on the panels area ──
    panelsContainer.addEventListener('touchstart', (e) => {
      touchStartX  = e.touches[0].clientX;
      touchStartY  = e.touches[0].clientY;
      isSwiping    = false;
    }, { passive: true });

    panelsContainer.addEventListener('touchmove', (e) => {
      if (!touchStartX) return;
      const dx = e.touches[0].clientX - touchStartX;
      const dy = e.touches[0].clientY - touchStartY;

      // Only lock into horizontal swipe if mostly horizontal
      if (!isSwiping && Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 8) {
        isSwiping = true;
      }

      // Prevent page scroll while swiping horizontally
      if (isSwiping) {
        e.preventDefault();
      }
    }, { passive: false });

    panelsContainer.addEventListener('touchend', (e) => {
      if (!isSwiping) return;

      const dx = e.changedTouches[0].clientX - touchStartX;
      const THRESHOLD = 50; // px needed to trigger

      if (Math.abs(dx) >= THRESHOLD) {
        const current = getActiveIndex();
        if (dx < 0) {
          // Swipe left → next tab
          goToIndex(current + 1);
        } else {
          // Swipe right → previous tab
          goToIndex(current - 1);
        }
      }

      touchStartX  = 0;
      touchStartY  = 0;
      isSwiping    = false;
    }, { passive: true });

    // ── Also allow swiping on the avatar card area (UX bonus) ──
    const avatarCard = document.getElementById('avatarCard');
    if (avatarCard) {
      let ax = 0, ay = 0, as_ = false;

      avatarCard.addEventListener('touchstart', (e) => {
        ax = e.touches[0].clientX;
        ay = e.touches[0].clientY;
        as_ = false;
      }, { passive: true });

      avatarCard.addEventListener('touchmove', (e) => {
        const dx = e.touches[0].clientX - ax;
        const dy = e.touches[0].clientY - ay;
        if (!as_ && Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 8) {
          as_ = true;
        }
        if (as_) e.preventDefault();
      }, { passive: false });

      avatarCard.addEventListener('touchend', (e) => {
        if (!as_) return;
        const dx = e.changedTouches[0].clientX - ax;
        if (Math.abs(dx) >= 50) {
          goToIndex(getActiveIndex() + (dx < 0 ? 1 : -1));
        }
        ax = 0; ay = 0; as_ = false;
      }, { passive: true });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();