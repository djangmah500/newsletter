
document.getElementById("emailDisplay").innerText = localStorage.getItem("subscribedEmail");
var urlParams = new URLSearchParams(window.location.search);
        var email = urlParams.get('email');
        if (email) {
            document.getElementById("emailDisplay").textContent = email;}