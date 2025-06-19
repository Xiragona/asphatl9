document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstname').value.trim();
    const lastName = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const birthday = document.getElementById('birthday').value.trim();
    const country = document.getElementById('country').value.trim();
    const genderMale = document.getElementById('male').checked;
    const genderFemale = document.getElementById('female').checked;
    const terms = document.getElementById('terms').checked;
    if (!firstName || !lastName || !email || !birthday || !country || (!genderMale && !genderFemale) || !terms) {
        alert('Please fill in all the required fields and agree to the terms and conditions.');
        return;
    }


    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    const birthdayPattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/\d{4}$/;
    if (!birthdayPattern.test(birthday)) {
        alert('Please enter a valid birthday in the format DD/MM/YYYY.');
        return;
    }
    alert('Form submitted successfully!');

});
