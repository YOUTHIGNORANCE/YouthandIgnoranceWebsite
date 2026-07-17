document.addEventListener('DOMContentLoaded', () => {
  
  // --- PROJECT DATA DATABASE ---
  const projects = [
    {
      id: "birdshot",
      title: "BIRDSHOT",
      category: ["LOREM IPSUM DOLOR SIT", "LOREM IPSUM DOLOR", "LOREM IPSUM", "LOREM IPSUM SIT"],
      year: "2026",
      about: [
        "LOREM IPSUM DOLOR SIT AMET, CONSETETUR SADIPSCING ELITR, SED DIAM NONUMY EIRMOD TEMPOR INVIDUNT UT LABORE ET DOLORE MAGNA ALIQUAM ERAT, SED DIAM VOLUPTUA. AT VERO EOS ET ACCUSAM ET JUSTO DUO DOLORES ET EA REBUM. STET CLITA KASD GUBERGEN, NO SEA TAKIMATA SANCTUS EST.",
        "LOREM IPSUM DOLOR SIT AMET, CONSETETUR SADIPSCING ELITR, SED DIAM NONUMY EIRMOD TEMPOR INVIDUNT UT LABORE ET DOLORE MAGNA ALIQUAM ERAT, SED DIAM VOLUPTUA."
      ],
      description: [
        "BIRDSHOT CAPTURES A POETIC CINEMATIC VISION FOCUSING ON MASS RENDERINGS OF ABSTRACT FORM AND WEIGHT. EACH SCENE COMBINES FLUID SIMULATIONS WITH THE SHARP DETAIL OF GEOMETRIC SCULPTURES UNDER CONVOLUTED STUDIO LIGHTING CONDITIONS.",
        "THE PRODUCTION HIGHLIGHTS THE FLUID TENSION BETWEEN RIGID STATUE COMPOSITIONS AND ORGANIC ELEMENTAL FORCES, BRINGING FORTH A SENSE OF UNTAMED CREATIVITY AND DIRECTIONAL CLARITY.",
        "DEVELOPED AND RENDERED IN GERMANY IN 2026, THIS PROJECT SERVES AS A CORNERSTONE REVEAL FOR THE STUDIO'S EXPERIMENTAL MOTION ARM."
      ],
      images: {
        img1: "assets/Eye.png",
        img2: "assets/Cape.png",
        imgFull: "assets/Background_Project_Hover.png",
        img3: "assets/Cape.png",
        img4: "assets/Eye.png",
        img5: "Statues.png",
        imgBottom: "Statues.png"
      }
    },
    {
      id: "sentient-shore",
      title: "SENTIENT SHORE",
      category: ["CGI & MOTION DESIGN", "DIRECTION", "VISUAL ART"],
      year: "2026",
      about: [
        "SENTIENT SHORE EXPLORES THE INTERSECTION OF NATURAL FORMS AND DIGITAL FLUIDITY. A SEAMLESS VOYAGE INTO ORGANIC RHYTHMS AND TEXTURES CAPTURED UNDER DRAMATIC RED STUDIOS.",
        "DEVELOPED AND RENDERED IN GERMANY, FOCUSING ON MINIMALIST AESTHETICS AND HIGH CONTRAST CGI DIRECTION."
      ],
      description: [
        "SENTIENT SHORE EXPLORES THE INTERSECTION OF NATURAL FORMS AND DIGITAL FLUIDITY. A SEAMLESS VOYAGE INTO ORGANIC RHYTHMS AND TEXTURES CAPTURED UNDER DRAMATIC RED STUDIOS.",
        "DEVELOPED AND RENDERED IN GERMANY, FOCUSING ON MINIMALIST AESTHETICS AND HIGH CONTRAST CGI DIRECTION, THE NARRATIVE TRACES AN IMAGINED ARCHAEOLOGICAL FIND IN A SURREAL RED-HUED DESERT.",
        "BY STRIPPING DOWN THE DETAIL AND FOCUSING ON LIGHT, SHADOW, AND DRAPED GEOMETRIC FORMS, THE EXPERIMENT STRADDLES THE LINE BETWEEN DESIGN AND SCULPTURAL ART."
      ],
      images: {
        img1: "assets/Cape.png",
        img2: "assets/Eye.png",
        imgFull: "Statues.png",
        img3: "assets/Eye.png",
        img4: "assets/Cape.png",
        img5: "assets/Background_Project_Hover.png",
        imgBottom: "assets/Background_Project_Hover.png"
      }
    },
    {
      id: "perfect-hue",
      title: "PERFECT HUE",
      category: ["COLOR RESEARCH", "MOTION DESIGN", "3D ANIMATION"],
      year: "2025",
      about: [
        "PERFECT HUE IS A METICULOUS EXPLORATION OF CHROMATIC SPECTRUMS, REFRACTION, AND LIGHT INTERPLAY ON VEILED SCULPTURES AND DETAILED RENDERINGS.",
        "THE WORK COMBINES CLASSICAL COMPOSITIONS WITH CUTTING EDGE SIMULATION ALGORITHMS."
      ],
      description: [
        "PERFECT HUE IS A METICULOUS EXPLORATION OF CHROMATIC SPECTRUMS, REFRACTION, AND LIGHT INTERPLAY ON VEILED SCULPTURES AND DETAILED RENDERINGS.",
        "THE WORK COMBINES CLASSICAL COMPOSITIONS WITH CUTTING EDGE SIMULATION ALGORITHMS, GENERATING COMPLEX REFRACTIVE PATTERNS THAT DANCE ACROSS SEMI-TRANSPARENT TEXTURED MEMBRANES.",
        "OUR TEAM DEVOTED MONTHS TO OPTIMIZING THE PHYSICS RENDER ENGINE TO CAPTURE SUBTLE PHOTON EMISSIONS AND COLORED SHADOW BEHAVIOR."
      ],
      images: {
        img1: "assets/Eye.png",
        img2: "Statues.png",
        imgFull: "assets/Cape.png",
        img3: "assets/Cape.png",
        img4: "assets/Eye.png",
        img5: "assets/Background_Project_Hover.png",
        imgBottom: "assets/Background_Project_Hover.png"
      }
    },
    {
      id: "prototype",
      title: "PROTOTYPE",
      category: ["CREATIVE DIRECTION", "SYSTEMS DESIGN", "CGI"],
      year: "2025",
      about: [
        "A RAW INTERACTIVE BLUEPRINT DEMONSTRATING REALTIME RIGGING AND VOLUMETRIC SPACE MAPPING FOR THE STUTTGART DESIGN EXHIBIT.",
        "A TACTILE METALLIC EXPERIMENT INTEGRATING GEOMETRY WITH HUMAN ANATOMY."
      ],
      description: [
        "A RAW INTERACTIVE BLUEPRINT DEMONSTRATING REALTIME RIGGING AND VOLUMETRIC SPACE MAPPING FOR THE STUTTGART DESIGN EXHIBIT.",
        "A TACTILE METALLIC EXPERIMENT INTEGRATING GEOMETRY WITH HUMAN ANATOMY, EXAMINING HOW STRUCTURAL RIGIDITY CAN EMULATE MUSCULATURE.",
        "THE EXHIBIT FEATURES DYNAMIC VOLUMETRIC SCATTERING AND PHYSICAL CONTROLLERS THAT LET VIEWERS MANIPULATE THE LIGHT FIELDS LIVE."
      ],
      images: {
        img1: "Statues.png",
        img2: "assets/Cape.png",
        imgFull: "assets/Background_Project_Hover.png",
        img3: "assets/Eye.png",
        img4: "Statues.png",
        img5: "assets/Cape.png",
        imgBottom: "assets/Eye.png"
      }
    },
    {
      id: "lorem-ipsum-dolor",
      title: "LOREM IPSUM",
      category: ["MOTION SIMULATION", "BRUTALISM", "DIRECTION"],
      year: "2025",
      about: [
        "LOREM IPSUM DOLOR SIT AMET, CONSETETUR SADIPSCING ELITR, SED DIAM NONUMY EIRMOD TEMPOR INVIDUNT UT LABORE ET DOLORE MAGNA ALIQUAM ERAT, SED DIAM VOLUPTUA.",
        "STET CLITA KASD GUBERGEN, NO SEA TAKIMATA SANCTUS EST. RENDERED FOR THE YOUTH & IGNORANCE CORE BRAND IDENTITY PORTFOLIO."
      ],
      description: [
        "LOREM IPSUM DOLOR SIT AMET, CONSETETUR SADIPSCING ELITR, SED DIAM NONUMY EIRMOD TEMPOR INVIDUNT UT LABORE ET DOLORE MAGNA ALIQUAM ERAT, SED DIAM VOLUPTUA.",
        "STET CLITA KASD GUBERGEN, NO SEA TAKIMATA SANCTUS EST. RENDERED FOR THE YOUTH & IGNORANCE CORE BRAND IDENTITY PORTFOLIO.",
        "DUIS AUTEM VEL EUM IRIURE DOLOR IN HENDRERIT IN VULPUTATE VELIT ESSE MOLESTIE CONSEQUAT, VEL ILLUM DOLORE EU FEUGIAT NULLA FACILISIS AT VERO EROS ET ACCUMSAN."
      ],
      images: {
        img1: "assets/Cape.png",
        img2: "assets/Eye.png",
        imgFull: "Statues.png",
        img3: "Statues.png",
        img4: "assets/Cape.png",
        img5: "assets/Eye.png",
        imgBottom: "assets/Background_Project_Hover.png"
      }
    }
  ];

  // --- PARSE URL SEARCH PARAMS ---
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('id') || 'birdshot';

  // Find Project Index
  let projectIndex = projects.findIndex(p => p.id === projectId);
  if (projectIndex === -1) {
    projectIndex = 0; // Fallback to first project
  }
  
  const project = projects[projectIndex];

  // --- DYNAMICALLY POPULATE CONTENT ---
  
  // Set Title
  document.getElementById('projTitle').textContent = project.title;
  document.title = `Y+I | ${project.title}`;

  // Set Category Stack
  const categoryContainer = document.getElementById('projCategory');
  categoryContainer.innerHTML = ''; // Clear fallback
  project.category.forEach(cat => {
    const item = document.createElement('div');
    item.textContent = cat;
    categoryContainer.appendChild(item);
  });

  // Set Year
  document.getElementById('projYear').textContent = project.year;

  // Set About Description text
  const aboutContainer = document.getElementById('projAbout');
  aboutContainer.innerHTML = '';
  project.about.forEach(paragraph => {
    const p1 = document.createElement('p');
    p1.textContent = paragraph;
    p1.style.marginBottom = '16px'; // multiples of 8 spacing
    aboutContainer.appendChild(p1);
  });

  // Set Middle Description text (longer, fuller)
  const descContainer = document.getElementById('projDesc');
  descContainer.innerHTML = '';
  project.description.forEach(paragraph => {
    const p2 = document.createElement('p');
    p2.textContent = paragraph;
    p2.style.marginBottom = '16px';
    descContainer.appendChild(p2);
  });

  // Set Image Elements
  document.getElementById('projImg1').src = project.images.img1;
  document.getElementById('projImg2').src = project.images.img2;
  document.getElementById('projImgFull').src = project.images.imgFull;
  document.getElementById('projImg3').src = project.images.img3;
  document.getElementById('projImg4').src = project.images.img4;
  document.getElementById('projImg5').src = project.images.img5;
  document.getElementById('projImgBottom').src = project.images.imgBottom;

  // --- NAVIGATION LINKS SETUP ---
  const prevIndex = (projectIndex - 1 + projects.length) % projects.length;
  const nextIndex = (projectIndex + 1) % projects.length;

  const prevBtn = document.getElementById('prevProjectBtn');
  const nextBtn = document.getElementById('nextProjectBtn');

  prevBtn.href = `project.html?id=${projects[prevIndex].id}`;
  nextBtn.href = `project.html?id=${projects[nextIndex].id}`;

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

  // --- SCROLL REVEAL ANIMATION (SMOOTH INTERPOLATED SCROLL-BOUND) ---
  let revealItems = [];
  let revealGroups = [];
  let isAnimating = false;
  let introCompleted = false;
  const staggerQueue = [];
  let lastRevealTime = 0;

  function measureRevealElements() {
    revealItems = Array.from(document.querySelectorAll('.reveal-on-scroll')).map(el => {
      let elTop = 0;
      let elLeft = 0;
      let tempEl = el;
      while (tempEl) {
        elTop += tempEl.offsetTop;
        elLeft += tempEl.offsetLeft;
        tempEl = tempEl.offsetParent;
      }
      return {
        element: el,
        offsetTop: elTop,
        offsetLeft: elLeft,
        height: el.offsetHeight,
        targetOpacity: 0,
        targetTranslateY: 60,
        currentOpacity: 0,
        currentTranslateY: 60,
        revealed: false
      };
    });

    // Group revealItems by vertical proximity (within 50px of offsetTop)
    revealGroups = [];
    const sorted = [...revealItems].sort((a, b) => a.offsetTop - b.offsetTop);
    let currentGroup = [];

    sorted.forEach(item => {
      if (currentGroup.length === 0) {
        currentGroup.push(item);
      } else {
        const first = currentGroup[0];
        if (Math.abs(item.offsetTop - first.offsetTop) < 50) {
          currentGroup.push(item);
        } else {
          revealGroups.push({
            items: currentGroup,
            revealed: false
          });
          currentGroup = [item];
        }
      }
    });
    if (currentGroup.length > 0) {
      revealGroups.push({
        items: currentGroup,
        revealed: false
      });
    }

    // Link each item back to its group reference
    revealGroups.forEach(group => {
      group.items.forEach(item => {
        item.group = group;
      });
    });
  }

  // Easing functions for a organic, premium non-linear feel
  function easeOutCubic(x) {
    return 1 - Math.pow(1 - x, 3);
  }
  function easeOutQuad(x) {
    return 1 - (1 - x) * (1 - x);
  }

  function updateTargetStates() {
    const viewportHeight = window.innerHeight;
    const header = document.querySelector('.site-header');
    const headerHeight = header ? header.offsetHeight : 96;
    
    // Binary trigger limits
    const bottomTrigger = viewportHeight - 120; // Triggers reveal when element enters screen by 120px
    const topTrigger = headerHeight + 80;        // Triggers exit when element bottom is within 80px of header

    const maxTranslateY = 60; // Symmetrical slide-up translation (60px)
    const scrollY = window.scrollY;

    // 1. Group trigger phase: reveal entire horizontal rows together in perfect left-to-right sequence
    revealGroups.forEach(group => {
      if (!group.revealed) {
        const shouldTrigger = group.items.some(item => {
          const relativeTop = item.offsetTop - scrollY;
          return relativeTop < bottomTrigger;
        });

        if (shouldTrigger) {
          group.revealed = true;
          
          // Sort items in this group left-to-right
          const sortedItems = [...group.items].sort((a, b) => a.offsetLeft - b.offsetLeft);
          
          const now = Date.now();
          sortedItems.forEach(item => {
            item.revealed = true;
            
            let delay = 0;
            if (now < lastRevealTime + 120) {
              lastRevealTime = lastRevealTime + 120;
              delay = lastRevealTime - now;
            } else {
              lastRevealTime = now;
              delay = 0;
            }

            setTimeout(() => {
              if (item.revealed) {
                item.targetOpacity = 1;
                item.targetTranslateY = 0;
                if (!isAnimating) {
                  isAnimating = true;
                  requestAnimationFrame(animateLoop);
                }
              }
            }, delay);
          });
        }
      }
    });

    // 2. State assignment phase: set opacity & position targets based on current state
    revealItems.forEach(item => {
      // If we are still playing the onload stagger and the user hasn't scrolled,
      // do not overwrite the target states of items that are queued to reveal later!
      if (!introCompleted && !hasScrolled) {
        const isInQueue = staggerQueue.some(entry => entry.type === 'reveal-el' && entry.element === item.element);
        if (isInQueue && item.targetOpacity === 0) {
          return;
        }
      }

      // Calculate layout coordinates relative to the viewport top
      const relativeTop = item.offsetTop - scrollY;
      const relativeBottom = relativeTop + item.height;

      if (relativeTop >= bottomTrigger) {
        // Reset item and group states when scrolled back below trigger zone
        item.targetOpacity = 0;
        item.targetTranslateY = maxTranslateY;
        item.revealed = false;
        if (item.group) {
          item.group.revealed = false;
        }
      } else if (relativeBottom <= topTrigger) {
        // Hidden at the top (exited)
        item.targetOpacity = 0;
        item.targetTranslateY = -maxTranslateY;
      } else {
        // In the active viewport region
        if (item.revealed) {
          item.targetOpacity = 1;
          item.targetTranslateY = 0;
        }
      }
    });
  }

  function animateLoop() {
    let needsMoreFrames = false;
    const lerpFactor = 0.08; // Super smooth interpolation factor

    revealItems.forEach(item => {
      // Smoothly interpolate opacity
      const diffOpacity = item.targetOpacity - item.currentOpacity;
      if (Math.abs(diffOpacity) > 0.001) {
        item.currentOpacity += diffOpacity * lerpFactor;
        needsMoreFrames = true;
      } else {
        item.currentOpacity = item.targetOpacity;
      }

      // Smoothly interpolate transform
      const diffTranslate = item.targetTranslateY - item.currentTranslateY;
      if (Math.abs(diffTranslate) > 0.05) {
        item.currentTranslateY += diffTranslate * lerpFactor;
        needsMoreFrames = true;
      } else {
        item.currentTranslateY = item.targetTranslateY;
      }

      // Apply inline styles directly for high performance
      item.element.style.opacity = item.currentOpacity;
      item.element.style.transform = `translateY(${item.currentTranslateY}px)`;
    });

    if (needsMoreFrames) {
      requestAnimationFrame(animateLoop);
    } else {
      isAnimating = false;
    }
  }

  let hasScrolled = false;

  function onScroll() {
    hasScrolled = true;
    updateTargetStates();
    if (!isAnimating) {
      isAnimating = true;
      requestAnimationFrame(animateLoop);
    }
  }

  // Measure once initially
  measureRevealElements();
  
  // Set up staggered intro for elements initially in the viewport
  const viewportHeight = window.innerHeight;
  
  // Prepare header elements initially hidden with CSS transitions
  const headerLogo = document.querySelector('.logo');
  const headerContact = document.querySelector('.desktop-contact-link');
  const headerTrigger = document.querySelector('.mobile-menu-trigger');

  if (headerLogo) {
    headerLogo.style.opacity = '0';
    headerLogo.style.transform = 'translateY(6px)';
    headerLogo.style.transition = 'opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1), transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
  }
  if (headerContact) {
    headerContact.style.opacity = '0';
    headerContact.style.transform = 'translateY(6px)';
    headerContact.style.transition = 'opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1), transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
  }
  if (headerTrigger) {
    headerTrigger.style.opacity = '0';
    headerTrigger.style.transform = 'translateY(6px)';
    headerTrigger.style.transition = 'opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1), transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
  }

  // Build a manual layout sequence to bypass dynamic image loading offset shifts
  staggerQueue.length = 0;

  // 1. Logo
  if (headerLogo) staggerQueue.push({ type: 'header', element: headerLogo });

  // 2. Contact button / Burger trigger
  if (headerContact || headerTrigger) {
    staggerQueue.push({
      type: 'header-group',
      elements: [headerContact, headerTrigger].filter(Boolean)
    });
  }

  // 3. Project title
  const titleEl = document.querySelector('.subpage-title-col');
  if (titleEl) staggerQueue.push({ type: 'reveal-el', element: titleEl });

  // 4. Category column
  const categoryEl = document.querySelector('.subpage-category-col');
  if (categoryEl) staggerQueue.push({ type: 'reveal-el', element: categoryEl });

  // 5. Year column
  const yearEl = document.querySelector('.subpage-year-col');
  if (yearEl) staggerQueue.push({ type: 'reveal-el', element: yearEl });

  // 6. About column
  const aboutEl = document.querySelector('.subpage-about-col');
  if (aboutEl) staggerQueue.push({ type: 'reveal-el', element: aboutEl });

  // 7. Navigation bar
  const navEl = document.querySelector('.subpage-nav-bar');
  if (navEl) staggerQueue.push({ type: 'reveal-el', element: navEl });

  // 8 & 9. First row images
  const mediaRows = document.querySelectorAll('.subpage-media-row');
  if (mediaRows.length > 0) {
    const firstRowCols = mediaRows[0].querySelectorAll('.media-col');
    if (firstRowCols.length > 0) staggerQueue.push({ type: 'reveal-el', element: firstRowCols[0] });
    if (firstRowCols.length > 1) staggerQueue.push({ type: 'reveal-el', element: firstRowCols[1] });
  }

  // Pre-set target & current states for all reveal items
  revealItems.forEach(item => {
    const isInQueue = staggerQueue.some(entry => entry.type === 'reveal-el' && entry.element === item.element);
    
    if (isInQueue) {
      // Staggered intro items start at 0 opacity and 15px translation offset
      item.targetOpacity = 0;
      item.targetTranslateY = 15;
      item.currentOpacity = 0;
      item.currentTranslateY = 15;
      item.revealed = false;
    } else {
      // Offscreen items start at standard scroll reveal target
      const relativeTop = item.offsetTop;
      const bottomTrigger = viewportHeight - 120;
      
      if (relativeTop >= bottomTrigger) {
        item.targetOpacity = 0;
        item.targetTranslateY = 60;
        item.revealed = false;
      } else {
        item.targetOpacity = 1;
        item.targetTranslateY = 0;
        item.revealed = true;
        if (item.group) {
          item.group.revealed = true;
        }
      }
      item.currentOpacity = item.targetOpacity;
      item.currentTranslateY = item.targetTranslateY;
    }
    
    // Apply initial styling to DOM to prevent flashes
    item.element.style.opacity = item.currentOpacity;
    item.element.style.transform = `translateY(${item.currentTranslateY}px)`;
  });

  // Stagger reveal of all queued elements, offsetting each step by exactly 120ms
  staggerQueue.forEach((entry, index) => {
    setTimeout(() => {
      if (hasScrolled) return;

      if (entry.type === 'header') {
        entry.element.style.opacity = '1';
        entry.element.style.transform = 'translateY(0)';
      } else if (entry.type === 'header-group') {
        entry.elements.forEach(el => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        });
      } else if (entry.type === 'reveal-el') {
        const item = revealItems.find(x => x.element === entry.element);
        if (item) {
          item.revealed = true; // Mark as revealed so it does not trigger again
          if (item.group) {
            item.group.revealed = true;
          }
          item.targetOpacity = 1;
          item.targetTranslateY = 0;
          if (!isAnimating) {
            isAnimating = true;
            requestAnimationFrame(animateLoop);
          }
        }
      }

      // Mark intro as completed once the final item is reached
      if (index === staggerQueue.length - 1) {
        introCompleted = true;
      }
    }, index * 120); // Snappy 120ms stagger step
  });

  // Clear transition/transform styles from header elements after animation finishes
  // to avoid interfering with hover styles
  setTimeout(() => {
    if (headerLogo) {
      headerLogo.style.opacity = '';
      headerLogo.style.transform = '';
      headerLogo.style.transition = '';
    }
    if (headerContact) {
      headerContact.style.opacity = '';
      headerContact.style.transform = '';
      headerContact.style.transition = '';
    }
    if (headerTrigger) {
      headerTrigger.style.opacity = '';
      headerTrigger.style.transform = '';
      headerTrigger.style.transition = '';
    }
  }, staggerQueue.length * 120 + 800);

  // Attach event listeners
  window.addEventListener('scroll', onScroll, { passive: true });

  window.addEventListener('resize', () => {
    measureRevealElements();
    updateTargetStates();
    if (!isAnimating) {
      isAnimating = true;
      requestAnimationFrame(animateLoop);
    }
  });

  window.addEventListener('load', () => {
    measureRevealElements();
    updateTargetStates();
    if (!isAnimating) {
      isAnimating = true;
      requestAnimationFrame(animateLoop);
    }
  });

  // Re-measure after each project image successfully loads and updates layout flow
  document.querySelectorAll('.subpage-media-container img').forEach(img => {
    img.addEventListener('load', () => {
      measureRevealElements();
      updateTargetStates();
    });
  });
});
