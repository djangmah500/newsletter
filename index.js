function validateEmail() {
    // Get the email input element
    var emailInput = document.getElementById('email');
    // Get the value entered by the user
    var email = emailInput.value;
    
    // Regular expression for email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Check if the entered email matches the regex pattern
    if (emailRegex.test(email)) {
      // If valid, display a success message
      alert('Thank you for subscribing to our newsletter!');
    } else {
      // If invalid, display an error message
      alert('Please enter a valid email address.');
    }
  }
  
  function subscribe() {
    var email = document.getElementById("emailInput").value;
    localStorage.setItem("subscribedEmail", email);
    window.location.href = "subscribe.html";
}
