document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('container');

  // Overlay buttons
  const overlaySignUp = document.getElementById('signUp');
  const overlaySignIn = document.getElementById('signIn');

  overlaySignUp.addEventListener('click', () => container.classList.add("right-panel-active"));
  overlaySignIn.addEventListener('click', () => container.classList.remove("right-panel-active"));

  // Sign In form submit
  const signinForm = document.getElementById('signin-form');
  signinForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signinForm.querySelector('input[type="email"]').value.trim();
    const password = signinForm.querySelector('input[type="password"]').value.trim();

    if(email === "" || password === "") {
      alert("Please enter both email and password");
      return;
    }

    container.style.transition = "opacity 0.5s ease";
    container.style.opacity = 0;

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 500);
  });
});
