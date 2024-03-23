
const valMessage = document.querySelector("#valMessage");
const pw1 = document.querySelector("#pw1");
const pw2 = document.querySelector("#pw2");

function checkSame() {
  if (pw2.value !== pw1.value) {
    valMessage.textContent = "That does not match your password!";
    pw2.style.backgroundColor = "#fff0f3";
    pw2.value = "";
    pw2.focus();
    pw2.style.borderRightColor = "red";
  } else {
    valMessage.textContent = "";
    pw2.style.backgroundColor = "#eee";
    pw2.style.color = "#000";
    pw2.style.borderRightColor = "green";
  }
}

pw2.addEventListener("focusout", checkSame);
