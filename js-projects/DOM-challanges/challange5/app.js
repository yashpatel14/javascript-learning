const images = [
    {
        id: 1,
        url: "https://images.unsplash.com/photo-1733503711059-acde98cd7fdf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "A beautiful sunrise over the mountains",
        title: "Mountain Sunrise"
    },
    {
        id: 2,
        url: "https://images.unsplash.com/photo-1740471230719-60fc0bfd42e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "A scenic beach with golden sand and blue water",
        title: "Beach View"
    },
    {
        id: 3,
        url: "https://fastly.picsum.photos/id/437/200/300.jpg?grayscale&hmac=BhrHrSRh9Fvo9GUfT1c4AiHl5vNzBDd0LjR5AY2vaZY",
        alt: "A forest path covered with autumn leaves",
        title: "Autumn Forest"
    },
    {
        id: 4,
        url: "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
        alt: "A city skyline at night with glowing lights",
        title: "City Lights"
    },
    {
        id: 5,
        url: "https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4",
        alt: "A close-up shot of a blooming red rose",
        title: "Red Rose"
    }
];

let currentIndex = 0;


function updateSlider() {
    const slideImage = document.getElementById("carouselTrack");
    const caption = document.getElementById("caption");

    
    slideImage.innerHTML = "";

    
    const imgElement = document.createElement("img");
    imgElement.src = images[currentIndex].url;
    imgElement.alt = images[currentIndex].alt;
    imgElement.title = images[currentIndex].title;
    imgElement.classList.add("carousel-slide");

    slideImage.appendChild(imgElement);

    caption.innerText = images[currentIndex].title;
}

document.getElementById("nextButton").addEventListener("click", nextSlide);
document.getElementById("prevButton").addEventListener("click", prevSlide);
document.getElementById("autoPlayButton").addEventListener("click", toggleAutoPlay);


function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length; // Loop to first image after last
    updateSlider();
}


function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; 
    updateSlider();
}


let autoPlayInterval;
function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 1000); 
    document.getElementById("autoPlayButton").innerText = "Stop Auto Play";
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
    document.getElementById("autoPlayButton").innerText = "Start Auto Play";
}

function toggleAutoPlay() {
    if (autoPlayInterval) {
        stopAutoPlay();
        autoPlayInterval = null;
    } else {
        startAutoPlay();
    }
}


updateSlider();
