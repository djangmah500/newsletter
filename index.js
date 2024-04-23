function validateEmail() {
  // Get the email input element
  var emailInput = document.getElementById("emailInput");
  // Get the value entered by the user
  var email = emailInput.value.trim(); // Trim any leading or trailing whitespace
  let validator = document.getElementById("validator");

  // Regular expression for Gmail-style email validation
  var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  // Check if the entered email matches the regex pattern
  if (emailRegex.test(email)) {
    // If valid, display a success message
    validator.textContent = "";
    console.log("It match");
  } else {
    // If invalid, display an error message
    validator.textContent = "Valid email required";
    console.log("It does not match");
  }

  if (emailInput.value === "") {
    validator.textContent = "";
  }
}

function subscribe() {
  var email = document.getElementById("emailInput").value;
  localStorage.setItem("subscribedEmail", email);
  window.location.href = "subscribe.html";
}
