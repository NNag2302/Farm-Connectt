function validateForm() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (username === "" || password === "") {
      alert("Please fill in both fields.");
      return false;
    }
  
    // You can add custom logic or redirect here
    alert("Login attempted for user: " + username);
    return false; // Prevent form submission for now
  }
  