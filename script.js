//your JS code here. If required.
// Function to set a cookie
function setCookie(name, value, days) {
  let date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  let expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get a cookie value by name
function getCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Apply saved preferences on page load
window.onload = function() {
  const savedFontSize = getCookie("fontSize");
  const savedFontColor = getCookie("fontColor");

  if (savedFontSize) {
    document.body.style.fontSize = savedFontSize + "px";
    document.getElementById("fontsize").value = savedFontSize;
  }

  if (savedFontColor) {
    document.body.style.color = savedFontColor;
    document.getElementById("fontcolor").value = savedFontColor;
  }
};

// Handle save button click
document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page reload on submit

  const fontSize = document.getElementById("fontsize").value;
  const fontColor = document.getElementById("fontcolor").value;

  setCookie("fontSize", fontSize, 365);
  setCookie("fontColor", fontColor, 365);

  // Apply changes immediately
  document.body.style.fontSize = fontSize + "px";
  document.body.style.color = fontColor;
});

