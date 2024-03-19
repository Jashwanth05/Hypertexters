
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('showMeet');
    } else {
      entry.target.classList.remove('showMeet');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hiddenMeet');
hiddenElements.forEach((el) => observer.observe(el));




document.getElementById("login-formMeet").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("usernameMeet").value;
    const password = document.getElementById("passwordMeet").value;
    
    // You can add your server-side validation here.
    // For this example, we'll just check if the username and password are not empty.
    
    if (username.trim() === "" || password === "") {
        document.getElementById("messageMeet").textContent = "Please enter both username and password.";
    } else {
        document.getElementById("messageMeet").textContent = "Login successful!";
        // Perform any further actions (e.g., redirect to a different page) upon successful login.
    }
});