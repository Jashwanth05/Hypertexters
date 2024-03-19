document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // You can add your server-side validation here.
    // For this example, we'll just check if the username and password are not empty.
    
    if (username.trim() === "" || password === "") {
        document.getElementById("message").textContent = "Please enter both username and password.";
    } else {
        document.getElementById("message").textContent = "Login successful!";
        // Perform any further actions (e.g., redirect to a different page) upon successful login.
    }
});



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));