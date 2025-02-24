
const nameInput = document.getElementById("nameInput");
const jobInput = document.getElementById("jobInput");
const ageInput = document.getElementById("ageInput");
const bioInput = document.getElementById("bioInput");


nameInput.addEventListener('keyup', () => {
    const nameValue = nameInput.value.trim(); 
    const nameDisplay = document.getElementById("nameDisplay");

    if (nameDisplay) { 
        nameDisplay.innerText = nameValue ? nameValue : 'Not provided';
    }
});

jobInput.addEventListener('keyup', () => {
    const jobValue = jobInput.value.trim(); 
    const jobDisplay = document.getElementById("jobDisplay");

    if (jobDisplay) { 
        jobDisplay.innerText = jobValue ? jobValue : 'Not provided';
    }
});

ageInput.addEventListener('keyup', () => {
    const ageValue = ageInput.value; 
    const ageDisplay = document.getElementById("ageDisplay");

    if (ageDisplay) { 
        ageDisplay.innerText = ageValue ? ageValue : 'Not provided';
    }
});

bioInput.addEventListener('keyup', () => {
    const bioValue = bioInput.value; 
    const bioDisplay = document.getElementById("bioDisplay");

    if (bioDisplay) { 
        bioDisplay.innerText = bioValue ? bioValue : 'Not provided';
    }
});