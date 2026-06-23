const IMAGE_FOLDER_URL = "./images/"; 

const gallery = [
    '1.svg',  // <-- Updated to your vector starting point
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg'
];

const imgElement = document.getElementById('stage-image');
let currentIndex = 0;

gallery.forEach(filename => {
    const preloadedImage = new Image();
    preloadedImage.src = IMAGE_FOLDER_URL + filename;
});

function stepForward() {
    imgElement.style.opacity = 0;

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % gallery.length;
        imgElement.src = IMAGE_FOLDER_URL + gallery[currentIndex];
        imgElement.style.opacity = 1;
    }, 400); 
}

// 4100ms = exactly 4.1 seconds per cycle 
setInterval(stepForward, 4100);