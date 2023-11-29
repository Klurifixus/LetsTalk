document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevents the default form submission

        // Perform your validation here
        // Example: Check if the terms checkbox is checked
        const termsChecked = document.getElementById('terms').checked;
        if (!termsChecked) {
            alert("Please agree to the terms of use.");
            return;
        }

        // You can add more validation as needed

        // Handle the form data
        const formData = new FormData(form);
        // Assuming you have a server-side script to handle the submission
        // You can use fetch API to send formData to your server
        fetch('signup.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data); // Handle the response data
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});