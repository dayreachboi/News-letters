function validateEmail() {
  var email = document.getElementById("emailInput").value;
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(email)) {
    window.location.href ="success%20page/index.html";
  } else {
    document.getElementById("errorMsg").style.display = "block";
    emailInput.style.borderColor = "red"
    emailInputField.style.color = "red"
  }
}
