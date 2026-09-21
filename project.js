document.addEventListener('DOMContentLoaded', () => {
  
  // --- PROJECT DATA DATABASE ---
  const projects = [
    {
      id: "birdshot",
      title: "BIRDSHOT",
      category: ["ANIMATION", "SHORT FILM", "CGI", "AI"],
      year: "2026",
      about: [
        "WHEN WE ARE CONSTANTLY EXPOSED TO NEWS OF CRISES AND VIOLENCE, WE BEGIN TO LOSE OUR ABILITY TO CARE.",
        "BIRDSHOT IS AN ANIMATED SHORT FILM THAT EXPLORES THIS GROWING NUMBNESS, SHOWN THROUGH THE TRAGIC AND MYSTERIOUS DEATH OF A FASHION MODEL RIGHT ON THE RUNWAY.",
        "COMING SOON, CURRENTLY IN APPLICATION FOR FILM FESTIVALS."
      ],
      blocks: [
        // Block 1: Full-Width Eye
        {
          type: "full-width",
          item: { type: "image", src: "assets/Projects/26 Birdshot/1.webp", alt: "Close-up of a model's eye from Birdshot", eager: true }
        },
        // Block 2: 2-Cols (Back Torso & Runway Tunnel)
        {
          type: "2-cols",
          items: [
            { type: "image", src: "assets/Projects/26 Birdshot/2.webp", alt: "Model seen from behind on the Birdshot runway" },
            { type: "image", src: "assets/Projects/26 Birdshot/3.webp", alt: "Long illuminated runway tunnel" }
          ]
        },
        // Block 3: Offset Text & Stacked Images (Blending Techniques + Red Wolf & White Dove)
        {
          type: "text-media-offset",
          heading: "BLENDING TECHNIQUES",
          paragraphs: [
            "THIS PROJECT SERVED AS A PLAYGROUND FOR EXPERIMENTATION AND THE MIXING OF DIFFERENT FILMMAKING TECHNIQUES. COMBINING THE USE OF ARTIFICIAL INTELLIGENCE AND TRADITIONAL 3D ANIMATION SERVED THE DIFFERENT LEVELS OF ABSTRACTION WITHIN THE STORY OF THE FILM."
          ],
          items: [
            { type: "image", src: "assets/Projects/26 Birdshot/4.webp", alt: "Red wolf visual from Birdshot" },
            { type: "image", src: "assets/Projects/26 Birdshot/5.webp", alt: "White dove in flight" }
          ]
        },
        // Block 4: Full-Width Image 6 (Knight Figure in Red Cloak)
        {
          type: "full-width",
          item: { type: "image", src: "assets/Projects/26 Birdshot/6.webp", alt: "Knight-like figure wearing a red cloak" }
        },
        // Block 5: 3-Cols (Model, Flower Mouth, Reaching Hand)
        {
          type: "3-cols",
          items: [
            { type: "image", src: "assets/Projects/26 Birdshot/7.webp", alt: "Model standing in a hallway" },
            { type: "image", src: "assets/Projects/26 Birdshot/8.webp", alt: "Model holding a flower in her mouth" },
            { type: "image", src: "assets/Projects/26 Birdshot/9.webp", alt: "Hand reaching toward the camera" }
          ]
        },
        // Block 6: Full-Width Image 10 (Veiled Statues Stand)
        {
          type: "full-width",
          item: { type: "image", src: "assets/Projects/26 Birdshot/10.webp", alt: "Veiled statues standing together" }
        },
        // Block 7: 4-Grid (2x2 Grid of Videos 11, 12, 13, 14)
        {
          type: "4-grid",
          items: [
            { type: "vimeo", vimeoId: "1215410702", alt: "Video 11 Motion", aspectRatio: "2048 / 858" },
            { type: "vimeo", vimeoId: "1215410700", alt: "Video 12 Motion", aspectRatio: "2048 / 858" },
            { type: "vimeo", vimeoId: "1215410704", alt: "Video 13 Motion", aspectRatio: "2048 / 858" },
            { type: "vimeo", vimeoId: "1215410701", alt: "Video 14 Motion", aspectRatio: "2048 / 858" }
          ]
        },
        // Block 8: Full-Width Video 15 Container (Large container under 4 smaller videos)
        {
          type: "full-width",
          item: { type: "vimeo", vimeoId: "1215420020", alt: "Video 15 Full Width Motion" }
        },
        // Block 9: Full-Width Image 16 (Crowded Veiled Statues - Bottom Visual)
        {
          type: "full-width",
          item: { type: "image", src: "assets/Projects/26 Birdshot/16.webp", alt: "Crowd of veiled statues" }
        }
      ],
      credits: [
        { label: "DIRECTION,\nART DIRECTION\n+ DESIGN", value: ["LUKAS BÖTTNER", "MARC EISLER", "MARIA SEEMANN", "JAKOB WAGNER"] },
        { label: "ANIMATION", value: ["MARC EISLER", "MARIA SEEMANN"] },
        { label: "CFX + VFX", value: ["LUKAS BÖTTNER", "JAKOB WAGNER"] },
        { label: "SOUND\n+ PICTURE POST", value: ["MARC EISLER"] }
      ],
      software: [
        "UNREAL ENGINE 5",
        "HOUDINI",
        "REALLUSION SUITE",
        "BLENDER",
        "REDSHIFT",
        "SUBSTANCE PAINTER",
        "DAVINCI RESOLVE",
        "FLORA AI"
      ]
    },
    {
      id: "sentient-shore",
      title: "SENTIENT SHORE",
      category: ["ANIMATION", "SHORT FILM", "CGI", "AI"],
      year: "2026",
      about: [
        "SENTIENT SHORE IS AN EXPERIMENTAL ANIMATED SHORT FILM THAT EXPLORES ALIENATION AND DECAY"
      ],
      credits: [
        { label: "DIRECTION,\nART DIRECTION\n+ DESIGN", value: ["MARC EISLER"] },
        { label: "ANIMATION", value: ["MARC EISLER"] },
        { label: "CHARACTER FX", value: ["LUKAS BÖTTNER"] },
        { label: "SOUND\n+ PICTURE POST", value: ["MARC EISLER"] }
      ],
      software: [
        "UNREAL ENGINE 5",
        "TOUCHDESIGNER",
        "HOUDINI",
        "REALLUSION SUITE",
        "BLENDER",
        "DAVINCI RESOLVE"
      ],
      blocks: [
        // Block 1: Full-Width Hero Film
        {
          type: "full-width",
          item: { type: "vimeo", vimeoId: "1228775984", alt: "Sentient Shore hero film", eager: true, controls: true, aspectRatio: "4 / 3" }
        },
        // Block 2: 2-Cols (Images 2 & 3: Figure on Shore & Profile Silhouette)
        {
          type: "2-cols",
          items: [
            { type: "image", src: "assets/Projects/25 Sentient Shore/2.webp", alt: "Figure on Shore Dusk" },
            { type: "image", src: "assets/Projects/25 Sentient Shore/3.webp", alt: "Profile Silhouette" }
          ]
        },
        // Block 3: Text + 2x2 Grid Offset (Images 4, 5, 6, 7: Abstract B-Roll)
        {
          type: "text-media-offset-grid",
          heading: "ABSTRACT B-ROLL",
          subtext: "TOUCHDESIGNER",
          items: [
            { type: "image", src: "assets/Projects/25 Sentient Shore/4.webp", alt: "Abstract Light 1" },
            { type: "image", src: "assets/Projects/25 Sentient Shore/5.webp", alt: "Abstract Starburst" },
            { type: "image", src: "assets/Projects/25 Sentient Shore/6.webp", alt: "Abstract Ray Lines" },
            { type: "image", src: "assets/Projects/25 Sentient Shore/7.webp", alt: "Abstract Burst Motion" }
          ]
        },
        // Block 4: Centered Medium Image 8 (Glowing Visor Figure)
        {
          type: "centered-medium",
          item: { type: "image", src: "assets/Projects/25 Sentient Shore/8.webp", alt: "Glowing Visor Figure" }
        },
        // Block 5: Full-Width Image 9 (Dusk Water Figure)
        {
          type: "full-width",
          item: { type: "image", src: "assets/Projects/25 Sentient Shore/9.webp", alt: "Dusk Water Figure" }
        },
        // Block 6: 2-Cols (Images 10 & 11: Spotlight Figure & Overhead Crowd)
        {
          type: "2-cols",
          items: [
            { type: "image", src: "assets/Projects/25 Sentient Shore/10.webp", alt: "Spotlight Figure" },
            { type: "image", src: "assets/Projects/25 Sentient Shore/11.webp", alt: "Overhead Crowd" }
          ]
        },
        // Block 7: Centered Medium Image 12 (Two Red Figures Facing)
        {
          type: "centered-medium",
          item: { type: "image", src: "assets/Projects/25 Sentient Shore/12.webp", alt: "Two Red Figures Facing" }
        },
        // Block 8: Offset Right Image 13 (Red Figure Right Column)
        {
          type: "offset-right",
          item: { type: "image", src: "assets/Projects/25 Sentient Shore/13.webp", alt: "Red Figure Right" }
        },
        // Block 9: Offset Left Image 14 (Red Blurry Profile Left Column)
        {
          type: "offset-left",
          item: { type: "image", src: "assets/Projects/25 Sentient Shore/14.webp", alt: "Red Profile Left" }
        },
        // Block 10: 4-Cols Row (Images 15, 16, 17, 18: 4 images next to each other in 1 row)
        {
          type: "4-cols",
          items: [
            { type: "image", src: "assets/Projects/25 Sentient Shore/15.webp", alt: "Red Abstract 1" },
            { type: "image", src: "assets/Projects/25 Sentient Shore/16.webp", alt: "Red Abstract 2" },
            { type: "image", src: "assets/Projects/25 Sentient Shore/17.webp", alt: "Red Abstract 3" },
            { type: "image", src: "assets/Projects/25 Sentient Shore/18.webp", alt: "Red Abstract 4" }
          ]
        },
        // Block 11: Centered Medium Image 19 (Blue Figure in Water at Dusk)
        {
          type: "centered-medium",
          item: { type: "image", src: "assets/Projects/25 Sentient Shore/19.webp", alt: "Blue Figure Water Dusk" }
        },
        // Block 12: Full-Width Image 20 (Shattered Crystal Figure Visual)
        {
          type: "full-width",
          item: { type: "image", src: "assets/Projects/25 Sentient Shore/20.webp", alt: "Shattered Crystal Figure Visual" }
        }
      ]
    },
    {
      id: "perfect-hue",
      title: "PERFECT HUE",
      category: ["ANIMATION", "SHORT FILM", "CGI", "HAND DRAWN"],
      year: "2024",
      about: [
        "PERFECT HUE IS AN ANIMATED SHORT FILM THAT DEALS WITH ATTENTION AND THE WARPING OF SENSE AND REALITY."
      ],
      blocks: [
        {
          type: "full-width",
          item: { type: "vimeo", vimeoId: "1219168675", alt: "Perfect Hue animated short film", eager: true, controls: true }
        },
        {
          type: "2-cols",
          items: [
            { type: "image", src: "assets/Projects/24 Perfect Hue/2.webp", alt: "Colorful reflections rippling across dark water" },
            { type: "image", src: "assets/Projects/24 Perfect Hue/3.webp", alt: "Neon runway leading toward a bright white light" }
          ]
        },
        {
          type: "text-media-offset-grid",
          heading: "HAND DRAWN FX",
          paragraphs: ["WE USED HAND DRAWN OVERLAYS TO ACHIEVE A MIXED MEDIA LOOK AND COMIC FEEL."],
          items: [
            { type: "image", src: "assets/Projects/24 Perfect Hue/4.webp", alt: "Character with a hand-drawn orange smoke overlay" },
            { type: "image", src: "assets/Projects/24 Perfect Hue/5.webp", alt: "Close-up of a character's tattooed hand and chest" },
            { type: "image", src: "assets/Projects/24 Perfect Hue/6.webp", alt: "Character dancing beneath magenta lights with hand-drawn color accents" },
            { type: "image", src: "assets/Projects/24 Perfect Hue/7.webp", alt: "White hand-drawn face and lettering over a red background" }
          ]
        },
        {
          type: "full-width",
          item: { type: "image", src: "assets/Projects/24 Perfect Hue/8.webp", alt: "Three colorful hand-painted character portrait studies" }
        },
        {
          type: "character-design",
          heading: "CHARACTER DESIGN",
          paragraphs: ["TATTOOS, BRIGHTLY COLORED HAIR AND SPIKY ACCENTS SERVE THE CYBERPUNK AESTHETIC."],
          items: [
            { type: "image", src: "assets/Projects/24 Perfect Hue/9.webp", alt: "Front-facing illustrated cyberpunk character portrait" },
            { type: "image", src: "assets/Projects/24 Perfect Hue/10.webp", alt: "Front and back turnaround of the cyberpunk character" }
          ]
        },
        {
          type: "3-cols",
          items: [
            { type: "image", src: "assets/Projects/24 Perfect Hue/11.webp", alt: "Blindfolded character kneeling beneath red lights" },
            { type: "image", src: "assets/Projects/24 Perfect Hue/12.webp", alt: "Blindfolded character turning on a glowing platform" },
            { type: "image", src: "assets/Projects/24 Perfect Hue/13.webp", alt: "Dancing character traced with vivid hand-drawn accents" }
          ]
        },
        {
          type: "2-cols",
          items: [
            { type: "vimeo", vimeoId: "1219213870", alt: "Perfect Hue animation breakdown one" },
            { type: "vimeo", vimeoId: "1219214561", alt: "Perfect Hue animation breakdown two" }
          ]
        },
        {
          type: "2-cols",
          items: [
            { type: "image", src: "assets/Projects/24 Perfect Hue/16.webp", alt: "Blindfolded character restrained before a watching crowd" },
            { type: "image", src: "assets/Projects/24 Perfect Hue/17.webp", alt: "Character framed in a red-lit doorway" }
          ]
        },
        {
          type: "full-width",
          item: { type: "image", src: "assets/Projects/24 Perfect Hue/18.webp", alt: "Perfect Hue cast gathered in a nightclub setting" }
        }
      ],
      credits: [
        { label: "DIRECTION,\nART DIRECTION\n+ DESIGN", value: ["LUKAS BÖTTNER", "MARC EISLER", "MARIA SEEMANN", "JAKOB WAGNER"] },
        { label: "ANIMATION", value: ["MARC EISLER", "MARIA SEEMANN", "LUKAS BÖTTNER"] },
        { label: "2D FX", value: ["LUKAS BÖTTNER", "MARIA SEEMANN"] },
        { label: "SOUND\n+ PICTURE POST", value: ["MARC EISLER"] }
      ],
      software: ["BLENDER", "REALLUSION SUITE", "HOUDINI", "PROCREATE", "SUBSTANCE PAINTER", "DAVINCI RESOLVE"]
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
  document.body.classList.add(`project-${project.id}`);
  if (project.blocks && project.blocks.length > 0) {
    document.body.classList.add('modular-project');
  }

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
    if (paragraph.toUpperCase().includes('COMING SOON')) {
      p1.className = 'about-footnote';
      p1.style.fontStyle = 'italic';
      p1.style.color = '#6C7378';
    }
    aboutContainer.appendChild(p1);
  });

  // Preserve each image's aspect ratio before it loads to prevent layout shifts.
  const imageDimensions = {
    "24 Perfect Hue": { 1: [1856, 838], 2: [916, 387], 3: [916, 387], 4: [446, 335], 5: [447, 335], 6: [602, 257], 7: [447, 335], 8: [1856, 947], 9: [613, 701], 10: [551, 701], 11: [603, 257], 12: [602, 255], 13: [602, 257], 16: [916, 387], 17: [916, 387], 18: [1856, 1045] },
    "25 Sentient Shore": { 1: [1856, 1044], 2: [916, 687], 3: [916, 687], 4: [446, 335], 5: [447, 335], 6: [446, 335], 7: [447, 335], 8: [916, 687], 9: [1856, 1392], 10: [916, 687], 11: [916, 687], 12: [916, 687], 13: [916, 687], 14: [916, 687], 15: [447, 335], 16: [446, 335], 17: [446, 335], 18: [447, 335], 19: [916, 687], 20: [1856, 1392] },
    "26 Birdshot": { 1: [1856, 838], 2: [916, 387], 3: [916, 387], 4: [916, 387], 5: [916, 387], 6: [1856, 838], 7: [603, 257], 8: [602, 255], 9: [602, 257], 10: [1856, 881], 16: [1856, 769] }
  };

  function getImageDimensions(src) {
    const match = src.match(/assets\/Projects\/([^/]+)\/(\d+)\.(?:png|webp)$/);
    return match ? imageDimensions[match[1]]?.[match[2]] : null;
  }

  // --- MEDIA NODE CREATOR HELPER ---
  function createMediaNode(item) {
    if (item.type === 'vimeo') {
      const container = document.createElement('div');
      container.className = 'vimeo-embed-container';
      if (item.aspectRatio) {
        container.classList.add('has-custom-ratio');
        container.style.setProperty('--vimeo-aspect-ratio', item.aspectRatio);
      }
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const showControls = item.controls || reduceMotion;
      const iframe = document.createElement('iframe');
      const playerParams = new URLSearchParams({
        autoplay: item.controls || reduceMotion ? '0' : '1',
        loop: item.controls ? '0' : '1',
        muted: item.controls ? '0' : '1',
        background: showControls ? '0' : '1',
        controls: showControls ? '1' : '0',
        autopause: item.controls ? '1' : '0',
        quality: '1080p',
        dnt: '1'
      });
      if (item.controls) {
        playerParams.set('title', '0');
        playerParams.set('byline', '0');
        playerParams.set('portrait', '0');
        playerParams.set('badge', '0');
      }
      iframe.src = `https://player.vimeo.com/video/${item.vimeoId}?${playerParams}`;
      iframe.allow = 'autoplay; fullscreen; picture-in-picture';
      iframe.allowFullscreen = true;
      iframe.loading = item.eager ? 'eager' : 'lazy';
      iframe.title = item.alt || 'Project video';
      container.appendChild(iframe);
      return container;
    } else if (item.type === 'video') {
      const video = document.createElement('video');
      video.src = item.src;
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.preload = 'none';
      video.setAttribute('aria-label', item.alt || 'Project video');
      video.style.width = '100%';
      video.style.display = 'block';
      return video;
    } else {
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.alt || '';
      img.loading = item.eager ? 'eager' : 'lazy';
      img.decoding = 'async';
      if (item.eager) img.fetchPriority = 'high';
      const dimensions = getImageDimensions(item.src);
      if (dimensions) {
        [img.width, img.height] = dimensions;
        if (dimensions[0] > 1200 && item.src.endsWith('.webp')) {
          const mobileSrc = item.src.replace(/\.webp$/, '-720.webp');
          img.srcset = `${mobileSrc} 720w, ${item.src} ${dimensions[0]}w`;
          img.sizes = '(max-width: 768px) calc(100vw - 40px), 100vw';
        }
      }
      return img;
    }
  }

  // --- MODULAR BLOCK RENDERER ---
  const mediaContainer = document.getElementById('subpageMediaContainer');
  const creditsContainer = document.getElementById('subpageCreditsContainer');
  mediaContainer.innerHTML = '';
  if (creditsContainer) creditsContainer.innerHTML = '';

  if (project.blocks && project.blocks.length > 0) {
    // Render Modular Blocks
    project.blocks.forEach(block => {
      if (block.type === 'full-width') {
        const row = document.createElement('div');
        row.className = 'subpage-media-row media-row-full-width reveal-on-scroll';
        row.appendChild(createMediaNode(block.item));
        mediaContainer.appendChild(row);
      } else if (block.type === '2-cols') {
        const row = document.createElement('div');
        row.className = 'subpage-media-row media-row-two-cols';
        block.items.forEach(item => {
          const col = document.createElement('div');
          col.className = 'media-col reveal-on-scroll';
          col.appendChild(createMediaNode(item));
          row.appendChild(col);
        });
        mediaContainer.appendChild(row);
      } else if (block.type === '3-cols') {
        const row = document.createElement('div');
        row.className = 'subpage-media-row media-row-three-cols';
        block.items.forEach(item => {
          const col = document.createElement('div');
          col.className = 'media-col reveal-on-scroll';
          col.appendChild(createMediaNode(item));
          row.appendChild(col);
        });
        mediaContainer.appendChild(row);
      } else if (block.type === '4-grid') {
        const row = document.createElement('div');
        row.className = 'subpage-media-row media-row-four-grid';
        block.items.forEach(item => {
          const col = document.createElement('div');
          col.className = 'media-col reveal-on-scroll';
          col.appendChild(createMediaNode(item));
          row.appendChild(col);
        });
        mediaContainer.appendChild(row);
      } else if (block.type === 'text-media-offset') {
        const row = document.createElement('div');
        row.className = 'subpage-media-row media-row-text-offset';

        const textCol = document.createElement('div');
        textCol.className = 'offset-text-col reveal-on-scroll';
        
        const label = document.createElement('div');
        label.className = 'row-label';
        label.textContent = block.heading;
        textCol.appendChild(label);

        block.paragraphs.forEach(p => {
          const pEl = document.createElement('div');
          pEl.className = 'about-text';
          pEl.textContent = p;
          textCol.appendChild(pEl);
        });
        row.appendChild(textCol);

        const mediaCol = document.createElement('div');
        mediaCol.className = 'offset-media-col';
        block.items.forEach(item => {
          const wrapper = document.createElement('div');
          wrapper.className = 'reveal-on-scroll';
          wrapper.appendChild(createMediaNode(item));
          mediaCol.appendChild(wrapper);
        });
        row.appendChild(mediaCol);

        mediaContainer.appendChild(row);
      } else if (block.type === 'text-break') {
        const row = document.createElement('div');
        row.className = 'desktop-row subpage-desc-row reveal-on-scroll';
        
        const label = document.createElement('div');
        label.className = 'row-label';
        label.textContent = block.heading;
        row.appendChild(label);

        const content = document.createElement('div');
        content.className = 'row-content';
        const wrapper = document.createElement('div');
        wrapper.className = 'about-text';
        block.paragraphs.forEach(p => {
          const pEl = document.createElement('p');
          pEl.textContent = p;
          pEl.style.marginBottom = '16px';
          wrapper.appendChild(pEl);
        });
        content.appendChild(wrapper);
        row.appendChild(content);

        mediaContainer.appendChild(row);
      } else if (block.type === 'centered-medium') {
        const row = document.createElement('div');
        row.className = 'subpage-media-row media-row-centered-medium reveal-on-scroll';
        const wrapper = document.createElement('div');
        wrapper.className = 'centered-media-wrapper';
        wrapper.appendChild(createMediaNode(block.item));
        row.appendChild(wrapper);
        mediaContainer.appendChild(row);
      } else if (block.type === 'offset-right') {
        const row = document.createElement('div');
        row.className = 'subpage-media-row media-row-offset-right reveal-on-scroll';
        const col = document.createElement('div');
        col.className = 'offset-media-item';
        col.appendChild(createMediaNode(block.item));
        row.appendChild(col);
        mediaContainer.appendChild(row);
      } else if (block.type === 'offset-left') {
        const row = document.createElement('div');
        row.className = 'subpage-media-row media-row-offset-left reveal-on-scroll';
        const col = document.createElement('div');
        col.className = 'offset-media-item';
        col.appendChild(createMediaNode(block.item));
        row.appendChild(col);
        mediaContainer.appendChild(row);
      } else if (block.type === 'text-media-offset-grid') {
        const row = document.createElement('div');
        row.className = 'subpage-media-row media-row-text-offset-grid';

        const textCol = document.createElement('div');
        textCol.className = 'offset-text-col reveal-on-scroll';
        
        const label = document.createElement('div');
        label.className = 'row-label';
        label.textContent = block.heading;
        textCol.appendChild(label);

        if (block.subtext) {
          const sub = document.createElement('div');
          sub.className = 'row-label';
          sub.textContent = block.subtext;
          textCol.appendChild(sub);
        }
        if (block.paragraphs) {
          block.paragraphs.forEach(paragraph => {
            const p = document.createElement('div');
            p.className = 'about-text';
            p.textContent = paragraph;
            textCol.appendChild(p);
          });
        }
        row.appendChild(textCol);

        const gridCol = document.createElement('div');
        gridCol.className = 'offset-grid-col';
        block.items.forEach(item => {
          const wrapper = document.createElement('div');
          wrapper.className = 'reveal-on-scroll';
          wrapper.appendChild(createMediaNode(item));
          gridCol.appendChild(wrapper);
        });
        row.appendChild(gridCol);

        mediaContainer.appendChild(row);
      } else if (block.type === 'character-design') {
        const row = document.createElement('div');
        row.className = 'subpage-media-row media-row-character-design';

        block.items.forEach(item => {
          const col = document.createElement('div');
          col.className = 'media-col reveal-on-scroll';
          col.appendChild(createMediaNode(item));
          row.appendChild(col);
        });

        const textCol = document.createElement('div');
        textCol.className = 'character-design-text reveal-on-scroll';
        const label = document.createElement('div');
        label.className = 'row-label';
        label.textContent = block.heading;
        textCol.appendChild(label);
        block.paragraphs.forEach(paragraph => {
          const p = document.createElement('div');
          p.className = 'about-text';
          p.textContent = paragraph;
          textCol.appendChild(p);
        });
        row.appendChild(textCol);
        mediaContainer.appendChild(row);
      } else if (block.type === '4-cols') {
        const row = document.createElement('div');
        row.className = 'subpage-media-row media-row-four-cols';
        block.items.forEach(item => {
          const col = document.createElement('div');
          col.className = 'media-col reveal-on-scroll';
          col.appendChild(createMediaNode(item));
          row.appendChild(col);
        });
        mediaContainer.appendChild(row);
      }
    });

    // Render Credits & Software (if present)
    if ((project.credits && project.credits.length > 0) || (project.software && project.software.length > 0)) {
      const creditsRow = document.createElement('div');
      creditsRow.className = 'subpage-credits-row reveal-on-scroll';

      // Credits Col
      if (project.credits && project.credits.length > 0) {
        const creditsCol = document.createElement('div');
        creditsCol.className = 'credits-col';
        
        const hdr = document.createElement('div');
        hdr.className = 'row-label';
        hdr.textContent = 'CREDITS';
        creditsCol.appendChild(hdr);

        const list = document.createElement('ul');
        list.className = 'credits-list';
        project.credits.forEach(c => {
          const li = document.createElement('li');
          const label = document.createElement('span');
          label.className = 'credits-item-label';
          label.textContent = c.label;
          const value = document.createElement('span');
          value.className = 'credits-item-value';
          const values = Array.isArray(c.value) ? c.value : [c.value];
          values.forEach(name => {
            const line = document.createElement('span');
            line.textContent = name;
            value.appendChild(line);
          });
          li.append(label, value);
          list.appendChild(li);
        });
        creditsCol.appendChild(list);
        creditsRow.appendChild(creditsCol);
      }

      // Software Col
      if (project.software && project.software.length > 0) {
        const softwareCol = document.createElement('div');
        softwareCol.className = 'software-col';
        
        const hdr = document.createElement('div');
        hdr.className = 'row-label';
        hdr.textContent = 'SOFTWARE USED';
        softwareCol.appendChild(hdr);

        const list = document.createElement('ul');
        list.className = 'software-list';
        project.software.forEach(s => {
          const li = document.createElement('li');
          li.textContent = s;
          list.appendChild(li);
        });
        softwareCol.appendChild(list);
        creditsRow.appendChild(softwareCol);
      }

      creditsContainer.appendChild(creditsRow);
    }

  } else if (project.images) {
    // Legacy Fallback Renderer for projects without blocks
    const b1 = document.createElement('div');
    b1.className = 'subpage-media-row media-row-two-cols';
    b1.innerHTML = `<div class="media-col reveal-on-scroll"><img src="${project.images.img1}" alt="Visual 1"></div><div class="media-col reveal-on-scroll"><img src="${project.images.img2}" alt="Visual 2"></div>`;
    mediaContainer.appendChild(b1);

    const b2 = document.createElement('div');
    b2.className = 'subpage-media-row media-row-full-width reveal-on-scroll';
    b2.innerHTML = `<img src="${project.images.imgFull}" alt="Full Width Visual">`;
    mediaContainer.appendChild(b2);

    if (project.description) {
      const bDesc = document.createElement('div');
      bDesc.className = 'desktop-row subpage-desc-row reveal-on-scroll';
      let descHtml = '<div class="row-label">ABOUT</div><div class="row-content"><div class="about-text">';
      project.description.forEach(p => { descHtml += `<p style="margin-bottom:16px;">${p}</p>`; });
      descHtml += '</div></div>';
      bDesc.innerHTML = descHtml;
      mediaContainer.appendChild(bDesc);
    }

    const b3 = document.createElement('div');
    b3.className = 'subpage-media-row media-row-three-cols';
    b3.innerHTML = `<div class="media-col reveal-on-scroll"><img src="${project.images.img3}" alt="Visual 3"></div><div class="media-col reveal-on-scroll"><img src="${project.images.img4}" alt="Visual 4"></div><div class="media-col reveal-on-scroll"><img src="${project.images.img5}" alt="Visual 5"></div>`;
    mediaContainer.appendChild(b3);

    const b4 = document.createElement('div');
    b4.className = 'subpage-media-row media-row-full-width bottom-media reveal-on-scroll';
    b4.innerHTML = `<img src="${project.images.imgBottom}" alt="Bottom Visual">`;
    mediaContainer.appendChild(b4);
  }

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

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal-on-scroll').forEach(element => {
      element.style.opacity = '1';
      element.style.transform = 'none';
    });
    return;
  }

  // --- ONE-TIME SCROLL REVEALS ---
  // IntersectionObserver lets the browser schedule visibility checks efficiently.
  // Revealed elements are unobserved and never reset when images finish loading.
  const revealElements = Array.from(document.querySelectorAll('.reveal-on-scroll'));
  const headerLogo = document.querySelector('.logo');
  const headerContact = document.querySelector('.desktop-contact-link');
  const headerTrigger = document.querySelector('.mobile-menu-trigger');
  const headerElements = [headerLogo, headerContact, headerTrigger].filter(Boolean);

  headerElements.forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(6px)';
    element.style.transition = 'opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1), transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, index === 0 ? 0 : 120);
    setTimeout(() => {
      element.style.opacity = '';
      element.style.transform = '';
      element.style.transition = '';
    }, 900);
  });

  // Preserve the short, deliberate stagger used for the initial viewport.
  const introElements = [];
  const titleEl = document.querySelector('.subpage-title-col');
  const categoryEl = document.querySelector('.subpage-category-col');
  const yearEl = document.querySelector('.subpage-year-col');
  const aboutEl = document.querySelector('.subpage-about-col');
  const navEl = document.querySelector('.subpage-nav-bar');
  const mediaRows = document.querySelectorAll('.subpage-media-row');
  introElements.push(titleEl, categoryEl, yearEl, aboutEl, navEl);
  if (mediaRows.length > 0) {
    introElements.push(...mediaRows[0].querySelectorAll('.media-col'));
  }
  introElements.filter(Boolean).forEach((element, index) => {
    if (element.getBoundingClientRect().top < window.innerHeight - 120) {
      element.style.setProperty('--reveal-delay', `${(index + 2) * 120}ms`);
      element.style.setProperty('--reveal-distance', '15px');
    }
  });

  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(element => element.classList.add('is-visible'));
    return;
  }

  const revealObserver = new IntersectionObserver(entries => {
    const entering = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => {
        const topDifference = a.boundingClientRect.top - b.boundingClientRect.top;
        return Math.abs(topDifference) < 50
          ? a.boundingClientRect.left - b.boundingClientRect.left
          : topDifference;
      });

    entering.forEach((entry, index) => {
      const element = entry.target;
      if (!element.style.getPropertyValue('--reveal-delay') && entering.length > 1) {
        element.style.setProperty('--reveal-delay', `${index * 120}ms`);
      }
      element.classList.add('is-visible');
      revealObserver.unobserve(element);
    });
  }, {
    rootMargin: '0px 0px -120px 0px',
    threshold: 0.01
  });

  revealElements.forEach(element => revealObserver.observe(element));
});
