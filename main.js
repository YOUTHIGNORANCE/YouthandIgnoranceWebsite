document.addEventListener('DOMContentLoaded', () => {
  const menuTrigger = document.getElementById('menuTrigger');
  const menuClose = document.getElementById('menuClose');
  const mobileMenu = document.getElementById('mobileMenu');
  const keyvisualMask = document.getElementById('keyvisualMask');

  // --- MOBILE BURGER MENU OVERLAY ---
  if (menuTrigger && mobileMenu) {
    menuTrigger.addEventListener('click', () => {
      mobileMenu.classList.add('active');
      document.body.classList.add('menu-open');
      document.documentElement.classList.add('menu-open');
      if (typeof stopMobileCycle === 'function') {
        stopMobileCycle();
      }
    });
  }

  if (menuClose && mobileMenu) {
    menuClose.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
      document.documentElement.classList.remove('menu-open');
      if (window.innerWidth <= 768) {
        if (typeof startMobileCycle === 'function') {
          startMobileCycle();
        }
      }
    });
  }

  // Handle ESC key to close mobile menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('active')) {
      mobileMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
      document.documentElement.classList.remove('menu-open');
      if (window.innerWidth <= 768) {
        if (typeof startMobileCycle === 'function') {
          startMobileCycle();
        }
      }
    }
  });

  // Handle window resizing (reset overflow if resizing to desktop)
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      document.body.style.overflow = '';
    } else {
      if (mobileMenu && !mobileMenu.classList.contains('active')) {
        document.body.style.overflow = '';
      }
    }
  });

  // --- 3D KEYVISUAL PARALLAX TILT EFFECT (DISABLED) ---
  if (keyvisualMask) {
    keyvisualMask.style.transform = 'rotateY(0deg) rotateX(0deg) translate3d(0, 0, 0)';
  }

  // --- BACKGROUND CROSSFADE TRANSITION ---
  let activeBg = document.getElementById('projectBgPreview');
  let inactiveBg = document.getElementById('projectBgPreviewTemp');

  function transitionToBackground(bg) {
    if (!activeBg || !inactiveBg) return;
    
    if (!bg) {
      activeBg.classList.remove('active');
      inactiveBg.classList.remove('active');
      return;
    }
    
    inactiveBg.style.backgroundImage = `url('${bg}')`;
    inactiveBg.style.zIndex = 2;
    activeBg.style.zIndex = 1;
    
    inactiveBg.classList.add('active');
    activeBg.classList.remove('active');
    
    const temp = activeBg;
    activeBg = inactiveBg;
    inactiveBg = temp;
  }

  // --- ADD HOVER ANIMATION FOR WORK ROW ITEMS ---
  const workRows = document.querySelectorAll('.work-row');

  workRows.forEach(row => {
    // Background Preview Hover Trigger
    row.addEventListener('mouseenter', () => {
      const bg = row.getAttribute('data-bg');
      console.log(`Mouse entered row: ${row.querySelector('.project-title').textContent}, bg: ${bg}`);
      
      // Clear hover lock from all rows
      workRows.forEach(r => r.classList.remove('hover-lock'));
      
      if (bg) {
        transitionToBackground(bg);
      }
      if (keyvisualMask) {
        keyvisualMask.classList.add('hidden');
      }
    });

    row.addEventListener('mouseleave', () => {
      console.log(`Mouse left row: ${row.querySelector('.project-title').textContent}`);
      // Only revert if this row is not locked
      if (!row.classList.contains('hover-lock')) {
        transitionToBackground('');
        if (keyvisualMask) {
          keyvisualMask.classList.remove('hidden');
        }
      }
    });

    row.addEventListener('click', () => {
      const isLocked = row.classList.contains('hover-lock');
      
      // Clear hover lock from all other rows
      workRows.forEach(r => r.classList.remove('hover-lock'));
      
      if (!isLocked) {
        row.classList.add('hover-lock');
        const bg = row.getAttribute('data-bg');
        if (bg) {
          transitionToBackground(bg);
        }
        if (keyvisualMask) {
          keyvisualMask.classList.add('hidden');
        }
        console.log(`Navigating/Locking project: ${row.querySelector('.project-title').textContent}`);
      } else {
        row.classList.remove('hover-lock');
        transitionToBackground('');
        if (keyvisualMask) {
          keyvisualMask.classList.remove('hidden');
        }
        console.log(`Unlocking project: ${row.querySelector('.project-title').textContent}`);
      }
      
      const projectId = row.getAttribute('data-id');
      if (projectId) {
        setTimeout(() => {
          window.location.href = `project.html?id=${projectId}`;
        }, 150);
      }
    });
  });

  // --- MOBILE AUTO-CYCLING PREVIEW ---
  let mobileCycleTimeout = null;
  let currentMobileIndex = -1; // -1 represents the initial keyvisual video play
  const mobileRows = document.querySelectorAll('.mobile-work-row');

  function showMobileSlide() {
    // Clear any pending transition timeout
    if (mobileCycleTimeout) {
      clearTimeout(mobileCycleTimeout);
      mobileCycleTimeout = null;
    }

    // Wrap around to start if index overflows past the coin video slot
    if (currentMobileIndex > mobileRows.length) {
      currentMobileIndex = 0;
    }

    if (currentMobileIndex === -1 || currentMobileIndex === mobileRows.length) {
      // Show keyvisual coin video
      mobileRows.forEach(r => r.classList.remove('active-highlight'));
      transitionToBackground('');
      if (keyvisualMask) {
        keyvisualMask.classList.remove('hidden');
        keyvisualMask.currentTime = 0;
        keyvisualMask.play().catch(err => console.log("Video play interrupted or blocked:", err));
      }
      console.log("Mobile cycle: showing keyvisual coin video");
    } else {
      // Show project at currentMobileIndex
      const activeRow = mobileRows[currentMobileIndex];

      // Highlight current row
      mobileRows.forEach(r => r.classList.remove('active-highlight'));
      activeRow.classList.add('active-highlight');

      // Update preview background image
      const bg = activeRow.getAttribute('data-bg');
      if (bg) {
        transitionToBackground(bg);
      }
      if (keyvisualMask) {
        keyvisualMask.classList.add('hidden');
      }
      console.log(`Mobile cycle: showing project index ${currentMobileIndex}`);
    }

    // Schedule next slide after exactly 4000ms for all states (including the coin video)
    mobileCycleTimeout = setTimeout(() => {
      if (currentMobileIndex === -1) {
        currentMobileIndex = 0;
      } else {
        currentMobileIndex++;
      }
      showMobileSlide();
    }, 4000);
  }

  function startMobileCycle() {
    if (mobileRows.length === 0) return;
    console.log("Starting mobile auto-cycling...");
    showMobileSlide();
  }

  function stopMobileCycle() {
    if (mobileCycleTimeout) {
      clearTimeout(mobileCycleTimeout);
      mobileCycleTimeout = null;
    }
  }

  function checkViewportForCycle() {
    if (mobileRows.length === 0) return;
    if (window.innerWidth <= 768) {
      startMobileCycle();
    } else {
      stopMobileCycle();
    }
  }

  // Add click handler to mobile rows
  mobileRows.forEach(row => {
    row.addEventListener('click', () => {
      const projectId = row.getAttribute('data-id');
      if (projectId) {
        window.location.href = `project.html?id=${projectId}`;
      }
    });
  });

  // Initial check & viewport resize triggers
  checkViewportForCycle();
  window.addEventListener('resize', checkViewportForCycle);

  // --- STICKY HEADER SCROLL LOGIC ---
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.site-header');
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });
});
