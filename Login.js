// Toggle between Login and Registration forms
const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

// Toggle forms visibility
loginBtn.addEventListener("click", () => {
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
  loginBtn.classList.add("active");
  registerBtn.classList.remove("active");
});

registerBtn.addEventListener("click", () => {
  registerForm.classList.add("active");
  loginForm.classList.remove("active");
  registerBtn.classList.add("active");
  loginBtn.classList.remove("active");
});

// Redirect to home.html on form submission
loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission
  window.location.href = "homepage.html"; // Redirect to home.html
});

registerForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission
  window.location.href = "homepage.html"; // Redirect to home.html
});
