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

  // --- SCROLL REVEAL ANIMATION (PURE SCROLL-BOUND OPACITY & TRANSLATE) ---
  let revealItems = [];

  function measureRevealElements() {
    revealItems = Array.from(document.querySelectorAll('.reveal-on-scroll')).map(el => {
      let elTop = 0;
      let tempEl = el;
      while (tempEl) {
        elTop += tempEl.offsetTop;
        tempEl = tempEl.offsetParent;
      }
      return {
        element: el,
        offsetTop: elTop,
        height: el.offsetHeight
      };
    });
  }

  // Easing functions for a organic, premium non-linear feel
  function easeOutCubic(x) {
    return 1 - Math.pow(1 - x, 3);
  }
  function easeOutQuad(x) {
    return 1 - (1 - x) * (1 - x);
  }

  function updateRevealOpacities() {
    const viewportHeight = window.innerHeight;
    const fadeLimit = viewportHeight * 0.35; // fade zone width (35% of viewport height)
    const maxTranslateY = 120; // maximum slide translation in pixels (increased for dramatic movement)
    const scrollY = window.scrollY;

    revealItems.forEach(item => {
      // Calculate layout coordinates relative to the viewport top
      const relativeTop = item.offsetTop - scrollY;
      const relativeBottom = relativeTop + item.height;

      // Bottom Entry progress (0 below viewport bottom, 1 at/above fade boundary)
      const progressBottom = (viewportHeight - relativeTop) / fadeLimit;
      const clampedBottom = Math.max(0, Math.min(1, progressBottom));
      
      // Top Exit progress (1 below top fade boundary, 0 at/above viewport top)
      const progressTop = relativeBottom / fadeLimit;
      const clampedTop = Math.max(0, Math.min(1, progressTop));

      // Map progress to distinct easing curves (quadratic for opacity, cubic for movement)
      const opacityBottom = easeOutQuad(clampedBottom);
      const opacityTop = easeOutQuad(clampedTop);
      
      const translateProgressBottom = easeOutCubic(clampedBottom);
      const translateProgressTop = easeOutCubic(clampedTop);

      const translateYBottom = (1 - translateProgressBottom) * maxTranslateY; // slides up from 120px to 0px
      const translateYTop = (translateProgressTop - 1) * maxTranslateY; // slides up from 0px to -120px
      
      // Combined opacity and translation values
      const opacity = Math.min(opacityBottom, opacityTop);
      const translateY = translateYBottom + translateYTop;
      
      // Apply inline styles directly for instant, scroll-bound response
      item.element.style.opacity = opacity;
      item.element.style.transform = `translateY(${translateY}px)`;
    });
  }

  // Measure once initially
  measureRevealElements();
  updateRevealOpacities();

  // Run on scroll and resize, optimized with requestAnimationFrame
  let tick = false;
  window.addEventListener('scroll', () => {
    if (!tick) {
      window.requestAnimationFrame(() => {
        updateRevealOpacities();
        tick = false;
      });
      tick = true;
    }
  });

  // Re-measure layout values when window changes size or completes loading all assets
  window.addEventListener('resize', () => {
    measureRevealElements();
    updateRevealOpacities();
  });

  window.addEventListener('load', () => {
    measureRevealElements();
    updateRevealOpacities();
  });
});
