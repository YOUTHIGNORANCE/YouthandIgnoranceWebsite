// --- CONFIGURATION ---
// If the images sit in the same GitHub repo, leave this as "./images/"
// If they live somewhere else, paste the full folder URL below (keep the slash at the end!)
const IMAGE_FOLDER_URL = "./images/"; 

const gallery = [
    '1.png',
    '2.jpg',
    '3.png',
    '4.jpg'
];

const imgElement = document.getElementById('stage-image');
let currentIndex = 0;

// 1. Preloader (uses the master folder URL)
gallery.forEach(filename => {
    const preloadedImage = new Image();
    preloadedImage.src = IMAGE_FOLDER_URL + filename;
});

// 2. The Engine
function stepForward() {
    imgElement.style.opacity = 0;

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % gallery.length;
        
        // Combines your master URL with the specific file name
        imgElement.src = IMAGE_FOLDER_URL + gallery[currentIndex];
        
        imgElement.style.opacity = 1;
    }, 400); 
}

setInterval(stepForward, 3600);