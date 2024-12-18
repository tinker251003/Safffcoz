let errorCount = 0;

function validateForm(event) {
    event.preventDefault();

    // Clear previous error messages
    const errorMessages = document.querySelectorAll('.error');
    errorMessages.forEach((msg) => msg.remove());

    let isValid = true;

    // Validate Full Name
    const fullName = document.getElementById('fullName');
    if (fullName.value.trim() === '') {
        showError('Full Name is required');
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email');
    if (email.value.trim() === '') {
        showError('Email is required');
        isValid = false;
    } else if (!email.value.includes('@')) {
        showError('Please enter a valid email address');
        isValid = false;
    }

    // Validate Phone Number
    const phone = document.getElementById('phone');
    if (phone.value.trim() === '') {
        showError('Phone Number is required');
        isValid = false;
    } else if (phone.value.length < 10) {
        showError('Phone Number must be at least 10 digits');
        isValid = false;
    }

    // Validate Gender
    const gender = document.getElementById('gender');
    if (gender.value === '') {
        showError('Please select a gender');
        isValid = false;
    }

    // Validate Message
    const message = document.getElementById('message');
    if (message.value.trim() === '') {
        showError('Message is required');
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        document.getElementById('contactForm').reset();
    }

    return isValid;
}

function showError(message) {
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error');
    errorMessage.textContent = message;

    errorMessage.style.top = `${20 + errorCount * 60}px`;
    errorCount++;

    document.body.appendChild(errorMessage);

    setTimeout(() => {
        errorMessage.remove();
        errorCount--;
    }, 3000);
}
