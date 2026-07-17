# Walkthrough - Time-Based Staggered Scroll Reveal, Smaller Legal Font Sizes & Mobile Carousel Coin Video

We have updated the subpage layout in `project.html` and the transition engine in `project.js` to implement a time-based staggered scroll reveal queue. This guarantees elements on the same row reveal sequentially from left to right, even if scroll events capture them in different frames. Additionally, we have reduced the font size of the Imprint and Privacy Policy links across all layouts and updated the mobile auto-cycling carousel to include the keyvisual coin video at full length.

---

## 🚀 Key Improvements & Visual Restorations

1. **Global Time-Based Spacing Queue:**
   - Modified [project.js](file:///C:/Users/Jakob/Documents/GitHub/YouthandIgnoranceWebsite/project.js) to track transition timing using a global `lastRevealTime` timestamp.
   - When elements are triggered to reveal (either together in one frame or across separate frames due to incremental scrolling), the system guarantees they are spaced by at least `120ms` relative to each other.
   - Elements are sorted left-to-right (`offsetLeft`) before queuing, ensuring that side-by-side elements (such as columns in a row) always reveal left-to-right sequentially.

2. **Self-Resetting Behavior:**
   - If an element is scrolled completely back down out of the viewport, its state resets (`item.revealed = false`). This allows it to play the staggered reveal animation again if scrolled back into view.

3. **Smaller Imprint & Privacy Policy Font Size:**
   - **Landing Page Footer:** Reduced desktop landing page footer links (`.imprint-link`) from `16px` to `12px`. Reduced mobile landing page footer links (`.mobile-homepage-footer a.overlay-footer-link`) to `10px`.
   - **Burger Menu Footer:** Reduced burger menu overlay footer links (`.overlay-footer-link`) from `12px` to `10px` on both desktop and mobile layouts.
   - **Subpage Footer:** Reduced subpage footer legal links (`.footer-imprint-list a`) from `16px` to `12px` on desktop, and from `12px` to `10px` on mobile.

4. **Mobile Homepage Video Carousel Stacking:**
   - Refactored the auto-cycling carousel inside [main.js](file:///C:/Users/Jakob/Documents/GitHub/YouthandIgnoranceWebsite/main.js) to incorporate the rotating coin keyvisual video into the cycle flow:
     - **Initial Play:** When loading the page on mobile, the coin video plays once at its full length (waiting for the HTML5 `ended` event) before starting the project slides cycle.
     - **Staggered Loop Integration:** Added the video slot at the end of the project stack (index `5`, right after the last project row **LOREM IPSUM DOLOR**).
     - **Dynamic Loop Control:** Set `loop = false` on mobile to catch the `ended` trigger, and safely restored `loop = true` on desktop to maintain ambient video looping.

---

## 📸 Visual Verification

Below is a series of screenshots capturing the updates:

````carousel
![Logo Only (100ms)](C:/Users/Jakob/.gemini/antigravity-ide/brain/44492b2e-eadd-4fb0-a424-6a7c58e6b217/load_100ms_1784228895462.png)
<!-- slide -->
![Title & Category Building (450ms)](C:/Users/Jakob/.gemini/antigravity-ide/brain/44492b2e-eadd-4fb0-a424-6a7c58e6b217/load_450ms_1784228896642.png)
<!-- slide -->
![Fully Loaded Page (1200ms)](C:/Users/Jakob/.gemini/antigravity-ide/brain/44492b2e-eadd-4fb0-a424-6a7c58e6b217/load_1200ms_1784228899062.png)
<!-- slide -->
![Staggered Scroll Entrance in Block 3](C:/Users/Jakob/.gemini/antigravity-ide/brain/44492b2e-eadd-4fb0-a424-6a7c58e6b217/stagger_scroll_trigger_1784231132342.png)
<!-- slide -->
![Desktop Footer Legal Links](C:/Users/Jakob/.gemini/antigravity-ide/brain/44492b2e-eadd-4fb0-a424-6a7c58e6b217/project_footer_links_1784273283725.png)
<!-- slide -->
![Desktop Landing Page Footer](C:/Users/Jakob/.gemini/antigravity-ide/brain/44492b2e-eadd-4fb0-a424-6a7c58e6b217/desktop_footer_links_1784273699146.png)
<!-- slide -->
![Mobile Landing Page Footer](C:/Users/Jakob/.gemini/antigravity-ide/brain/44492b2e-eadd-4fb0-a424-6a7c58e6b217/mobile_footer_links_1784273708116.png)
<!-- slide -->
![Mobile Burger Menu Footer](C:/Users/Jakob/.gemini/antigravity-ide/brain/44492b2e-eadd-4fb0-a424-6a7c58e6b217/mobile_burger_menu_footer_1784273715681.png)
<!-- slide -->
![Mobile Initial Load Coin Video](C:/Users/Jakob/.gemini/antigravity-ide/brain/44492b2e-eadd-4fb0-a424-6a7c58e6b217/initial_mobile_load_1784274086174.png)
<!-- slide -->
![Mobile Birdshot Row Highlighted](C:/Users/Jakob/.gemini/antigravity-ide/brain/44492b2e-eadd-4fb0-a424-6a7c58e6b217/birdshot_active_1784274120940.png)
````
