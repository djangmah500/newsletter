window.addEventListener("load", function () {
  document.getElementById("emailDisplay").innerText =
    localStorage.getItem("subscribedEmail");

  console.log(localStorage.getItem("subscribedEmail"));
});

function dismissMessage() {
  window.location.href = "/";
}
