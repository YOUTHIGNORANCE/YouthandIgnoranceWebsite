document.addEventListener('DOMContentLoaded', () => {
  const menuTrigger = document.getElementById('menuTrigger');
  const menuClose = document.getElementById('menuClose');
  const mobileMenu = document.getElementById('mobileMenu');
  const keyvisualMask = document.getElementById('keyvisualMask');
  const keyvisualVideo = document.getElementById('keyvisualVideo');
  const keyvisualPoster = document.getElementById('keyvisualPoster');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (keyvisualVideo instanceof HTMLVideoElement) {
    let keyvisualRecoveryAttempts = 0;

    const resumeKeyvisual = () => {
      if (prefersReducedMotion || document.hidden) return;
      keyvisualVideo.muted = true;
      keyvisualVideo.defaultMuted = true;
      keyvisualVideo.play().catch(() => {
        keyvisualPoster?.classList.remove('hidden');
      });
    };

    keyvisualVideo.addEventListener('playing', () => {
      keyvisualPoster?.classList.add('hidden');
      keyvisualRecoveryAttempts = 0;
    });

    ['loadstart', 'waiting'].forEach(eventName => {
      keyvisualVideo.addEventListener(eventName, () => {
        keyvisualPoster?.classList.remove('hidden');
      });
    });

    ['stalled', 'error'].forEach(eventName => keyvisualVideo.addEventListener(eventName, () => {
      keyvisualPoster?.classList.remove('hidden');
      if (keyvisualRecoveryAttempts < 1) {
        keyvisualRecoveryAttempts += 1;
        keyvisualVideo.load();
        resumeKeyvisual();
      }
    }));

    keyvisualVideo.addEventListener('canplay', resumeKeyvisual);
    window.addEventListener('pageshow', resumeKeyvisual);

    if (prefersReducedMotion) {
      keyvisualVideo.autoplay = false;
      keyvisualVideo.pause();
    }
  }

  // Load and play experiment loops only while they are near the viewport.
  const experimentVideos = Array.from(document.querySelectorAll('.experiment-video video'));
  if (experimentVideos.length > 0 && !prefersReducedMotion) {
    const loadExperimentVideo = video => {
      if (video.dataset.loaded === 'true') return;
      video.muted = true;
      video.defaultMuted = true;
      video.querySelectorAll('source[data-src]').forEach(source => {
        source.src = source.dataset.src;
        source.removeAttribute('data-src');
      });
      video.load();
      video.dataset.loaded = 'true';
    };

    const updateExperimentVideo = (video, inView) => {
      video.dataset.inView = inView ? 'true' : 'false';
      if (inView && !document.hidden) {
        loadExperimentVideo(video);
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    };

    if ('IntersectionObserver' in window) {
      const experimentVideoObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => updateExperimentVideo(entry.target, entry.isIntersecting));
      }, { rootMargin: '60px 0px', threshold: 0.05 });
      experimentVideos.forEach(video => experimentVideoObserver.observe(video));
    } else {
      experimentVideos.forEach(video => updateExperimentVideo(video, true));
    }

    document.addEventListener('visibilitychange', () => {
      experimentVideos.forEach(video => {
        if (document.hidden) {
          video.pause();
        } else if (video.dataset.inView === 'true') {
          loadExperimentVideo(video);
          video.play().catch(() => {});
        }
      });
    });
  }

  if (menuTrigger) {
    menuTrigger.setAttribute('aria-expanded', 'false');
    menuTrigger.setAttribute('aria-controls', 'mobileMenu');
  }
  if (mobileMenu) mobileMenu.setAttribute('aria-hidden', 'true');

  function closeMobileMenu({ restoreFocus = true } = {}) {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('active');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
    document.documentElement.classList.remove('menu-open');
    if (menuTrigger) menuTrigger.setAttribute('aria-expanded', 'false');
    if (window.innerWidth <= 768 && typeof startMobileCycle === 'function') {
      startMobileCycle();
    }
    if (restoreFocus && menuTrigger) menuTrigger.focus();
  }

  // --- MOBILE BURGER MENU OVERLAY ---
  if (menuTrigger && mobileMenu) {
    menuTrigger.addEventListener('click', () => {
      mobileMenu.classList.add('active');
      mobileMenu.setAttribute('aria-hidden', 'false');
      menuTrigger.setAttribute('aria-expanded', 'true');
      document.body.classList.add('menu-open');
      document.documentElement.classList.add('menu-open');
      if (typeof stopMobileCycle === 'function') {
        stopMobileCycle();
      }
      if (menuClose) menuClose.focus();
    });
  }

  if (menuClose && mobileMenu) {
    menuClose.addEventListener('click', () => {
      closeMobileMenu();
    });
  }

  // Handle ESC key to close mobile menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('active')) {
      closeMobileMenu();
    }

    if (e.key === 'Tab' && mobileMenu && mobileMenu.classList.contains('active')) {
      const focusable = Array.from(mobileMenu.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'))
        .filter(element => element.getClientRects().length > 0);
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      } else if (!mobileMenu.contains(document.activeElement)) {
        e.preventDefault();
        first.focus();
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
    const projectTitle = row.querySelector('.project-title')?.textContent?.trim() || 'project';
    row.tabIndex = 0;
    row.setAttribute('role', 'link');
    row.setAttribute('aria-label', `View ${projectTitle}`);

    // Background Preview Hover Trigger
    row.addEventListener('mouseenter', () => {
      const bg = row.getAttribute('data-bg');
      console.log(`Mouse entered row: ${row.querySelector('.project-title').textContent}, bg: ${bg}`);
      
      // Clear hover lock from all rows
      workRows.forEach(r => r.classList.remove('hover-lock'));
      
      if (bg) {
        transitionToBackground(bg);
        if (keyvisualMask) keyvisualMask.classList.add('hidden');
      } else {
        transitionToBackground('');
        if (keyvisualMask) keyvisualMask.classList.remove('hidden');
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
          if (keyvisualMask) keyvisualMask.classList.add('hidden');
        } else {
          transitionToBackground('');
          if (keyvisualMask) keyvisualMask.classList.remove('hidden');
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
      
      const destination = row.getAttribute('data-href');
      const projectId = row.getAttribute('data-id');
      if (destination || projectId) {
        setTimeout(() => {
          window.location.href = destination || `project.html?id=${projectId}`;
        }, 150);
      }
    });

    row.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        row.click();
      }
    });
  });

  // --- MOBILE AUTO-CYCLING PREVIEW ---
  let mobileCycleTimeout = null;
  let mobileKeyvisualEndedHandler = null;
  let mobileCycleActive = false;
  let currentMobileIndex = -1; // -1 represents the initial keyvisual
  const mobileRows = document.querySelectorAll('.mobile-work-row');

  function showMobileSlide() {
    // Clear any pending transition timeout
    if (mobileCycleTimeout) {
      clearTimeout(mobileCycleTimeout);
      mobileCycleTimeout = null;
    }
    if (mobileKeyvisualEndedHandler && keyvisualVideo instanceof HTMLVideoElement) {
      keyvisualVideo.removeEventListener('ended', mobileKeyvisualEndedHandler);
      mobileKeyvisualEndedHandler = null;
    }

    // Wrap around to start if index overflows past the keyvisual slot
    if (currentMobileIndex > mobileRows.length) {
      currentMobileIndex = 0;
    }

    const isKeyvisualSlide = currentMobileIndex === -1 || currentMobileIndex === mobileRows.length;

    if (isKeyvisualSlide) {
      // Show the landing-page keyvisual
      mobileRows.forEach(r => r.classList.remove('active-highlight'));
      transitionToBackground('');
      if (keyvisualMask) {
        keyvisualMask.classList.remove('hidden');
        if (keyvisualVideo instanceof HTMLVideoElement) {
          keyvisualPoster?.classList.remove('hidden');
          keyvisualVideo.loop = false;
          keyvisualVideo.currentTime = 0;
          keyvisualVideo.play().catch(() => {});
        }
      }
      console.log("Mobile cycle: showing keyvisual");
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
        if (keyvisualMask) keyvisualMask.classList.add('hidden');
      } else {
        transitionToBackground('');
        if (keyvisualMask) keyvisualMask.classList.remove('hidden');
      }
      console.log(`Mobile cycle: showing project index ${currentMobileIndex}`);
    }

    const advanceMobileSlide = () => {
      if (currentMobileIndex === -1) {
        currentMobileIndex = 0;
      } else {
        currentMobileIndex++;
      }
      showMobileSlide();
    };

    if (isKeyvisualSlide && keyvisualVideo instanceof HTMLVideoElement) {
      // Advance only when the actual video finishes, so loading and buffering never shorten it.
      mobileKeyvisualEndedHandler = advanceMobileSlide;
      keyvisualVideo.addEventListener('ended', mobileKeyvisualEndedHandler, { once: true });
    } else {
      mobileCycleTimeout = setTimeout(advanceMobileSlide, 4000);
    }
  }

  function startMobileCycle() {
    if (mobileRows.length === 0) return;
    if (prefersReducedMotion) return;
    if (mobileCycleActive) return;
    mobileCycleActive = true;
    console.log("Starting mobile auto-cycling...");
    showMobileSlide();
  }

  function stopMobileCycle() {
    mobileCycleActive = false;
    if (mobileCycleTimeout) {
      clearTimeout(mobileCycleTimeout);
      mobileCycleTimeout = null;
    }
    if (mobileKeyvisualEndedHandler && keyvisualVideo instanceof HTMLVideoElement) {
      keyvisualVideo.removeEventListener('ended', mobileKeyvisualEndedHandler);
      mobileKeyvisualEndedHandler = null;
    }
  }

  function checkViewportForCycle() {
    if (mobileRows.length === 0) return;
    if (window.innerWidth <= 768) {
      if (keyvisualVideo instanceof HTMLVideoElement) keyvisualVideo.loop = false;
      startMobileCycle();
    } else {
      stopMobileCycle();
      if (keyvisualVideo instanceof HTMLVideoElement && !prefersReducedMotion) {
        keyvisualVideo.loop = true;
        keyvisualVideo.play().catch(() => {});
      }
    }
  }

  // Add click handler to mobile rows
  mobileRows.forEach(row => {
    const projectTitle = row.querySelector('.mob-project-title')?.textContent?.trim() || 'project';
    row.tabIndex = 0;
    row.setAttribute('role', 'link');
    row.setAttribute('aria-label', `View ${projectTitle}`);
    row.addEventListener('click', () => {
      const destination = row.getAttribute('data-href');
      const projectId = row.getAttribute('data-id');
      if (destination || projectId) {
        window.location.href = destination || `project.html?id=${projectId}`;
      }
    });
    row.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        row.click();
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
