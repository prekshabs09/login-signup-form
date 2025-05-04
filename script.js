// Signup form validation
document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const error = document.getElementById("signupError");
  
    if (!validateEmail(email)) {
      error.textContent = "Please enter a valid email.";
      return;
    }
  
    if (password.length < 6) {
      error.textContent = "Password must be at least 6 characters.";
      return;
    }
  
    if (password !== confirmPassword) {
      error.textContent = "Passwords do not match.";
      return;
    }
  
    error.textContent = "Signup successful! (Not connected to backend)";
  });
  
  // Login form validation
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;
    const error = document.getElementById("loginError");
  
    if (!validateEmail(email)) {
      error.textContent = "Invalid email format.";
      return;
    }
  
    if (password.length < 6) {
      error.textContent = "Password must be at least 6 characters.";
      return;
    }
  
    error.textContent = "Login successful! (Not connected to backend)";
  });
  
  // Helper function to validate email format
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }