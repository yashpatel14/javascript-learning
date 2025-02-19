function addReview() {
    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;
    const reviewList = document.getElementById('reviewList');

    if (name.trim() === "" || review.trim() === "") {
                alert("Please enter both name and review.");
                return;
    }

    const createDiv = document.createElement('div')
    createDiv.classList.add('review')

    let timestamp = Date.now();
    let date = new Date(timestamp);
    let formattedTime = date.toLocaleString();
    createDiv.setAttribute('data-time', timestamp);

    let stars = '★'.repeat(selectedRating) + '☆'.repeat(5 - selectedRating);

    createDiv.innerHTML= `<strong>${name}</strong>
             <p class="review-text">${review}</p>
             <p class="stars">${stars}</p>
             <p class="timestamp">${formattedTime}</p>
             <div class="icons">
                 <i class="fas fa-edit" onclick="editReview(this, ${timestamp})"></i>
                 <i class="fas fa-trash-alt delete" onclick="deleteReview(this)"></i>
             </div>`

    reviewList.insertBefore(createDiv, reviewList.children[1]);
        document.getElementById('name').value = "";
    document.getElementById('review').value = "";
    selectedRating = 0;
            document.querySelectorAll('.rating i').forEach(star => star.classList.remove('active'));
    
}


function editReview(icon, timestamp) {
    let reviewDiv = icon.parentElement.parentElement;
    let reviewText = reviewDiv.querySelector('.review-text');
    let currentTime = Date.now();

    if (currentTime - timestamp > 60000) {
        alert("You can only edit within 1 minute.");
        return;
    }
    
    let newReview = prompt("Edit your review:", reviewText.innerText);
    if (newReview !== null) {
        reviewText.innerText = newReview;
    }
}

function deleteReview(icon) {
    let reviewDiv = icon.parentElement.parentElement;
    // console.log(icon.parentElement.parentElement);
    reviewDiv.remove();
}

let selectedRating = 0;
function rateStar(stars) {
    selectedRating = stars;
    document.querySelectorAll('.rating i').forEach((star, index) => {
        star.classList.toggle('active', index < stars);
    });
}
