// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}


setTimeout(function() {
  // After 0.8 seconds, hide Desktop1 and show Desktop2 with the slide-up animation
  const desktop1 = document.querySelector('.Desktop1');
  const desktop2 = document.querySelector('.Desktop2');
  desktop1.style.opacity = '0';
  desktop1.style.visibility = 'hidden';
  desktop2.style.opacity = '1';
  desktop2.style.visibility = 'visible';
  desktop2.classList.add('slide-up'); // Add the slide-up class to apply the animation
}, 500);

function voiceinput(microphoneId) {
  const searchInput = document.querySelector('.input-box input');
  const microphoneIcon = document.getElementById('vsi');
  const ellipseDiv = document.querySelector('.Ellipse1');

  // Hide the search bar
  searchInput.style.display = 'none';

  // Show the ellipse div
  ellipseDiv.style.display = 'block';

  if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();

    recognition.onresult = function(event) {
      const result = event.results[0][0].transcript.trim().toLowerCase();
      const soundWaves = document.querySelector(".Ellipse1");
      const soundWaves2 = document.querySelector(".Ellipse2");

      if (microphoneId === 'vsi') {
        // Animation for bx bx-microphone
        soundWaves.style.animation = "soundWave 1s";
        setTimeout(() => {
          soundWaves.style.animation = "";
        }, 1000);
      } else if (microphoneId === 'vsi2') {
        // Animation for bx bx-microphone2
        soundWaves2.style.animation = "soundWave 1s";
        setTimeout(() => {
          soundWaves2.style.animation = "";
        }, 1000);
      }

      switch (result) {
        case 'home':
          window.location.href = 'home.html';
          break;
        case 'about_us':
          window.location.href = 'contactUs.html';
          break;
        case 'tech news':
          window.location.href = 'news (1).html';
          break;
        case 'login':
          window.location.href = 'loginPage.html';
          break;
        case 'gadget review':
          window.location.href ='gadgets (1).html'
        default:
          alert('Command not recognized.');
      }
    };

    recognition.start();
  } else {
    alert('Web Speech API is not supported in this browser.');
  }
}
  function handleHover() {
    var educationFirst = document.querySelector(".EducationFirst");
    var constructFirst = document.querySelector(".ConstructFirst");

    educationFirst.classList.toggle("slide-out");
    constructFirst.classList.toggle("slide-out");
  }

  // Event listener to handle hovering/mouse movement
  var frame1 = document.querySelector(".Frame1");
  frame1.addEventListener("mouseover", handleHover);
  frame1.addEventListener("mouseout", handleHover);

  function handleHovers() {
    var agriculturefirst = document.querySelector(".agriculturefirst");
    var healthfirst = document.querySelector(".healthfirst");

    agriculturefirst.classList.toggle("slide-out");
    healthfirst.classList.toggle("slide-out");
  }

  var Frame2 = document.querySelector(".Frame2");
  Frame2.addEventListener("mouseover", handleHovers);
  Frame2.addEventListener("mouseout", handleHovers);
  function search () {
    let searchs=document.getElementById("search").value.toUpperCase();
if (searchs.includes("NEWS")) {
    window.location.href="news.html"
}
else if (searchs.includes("MEET")) {
    window.location.href="meet.html"
}else if (searchs.includes("GADGETS")){
    window.location.href="gadgets.html"
}
}
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

function addShadowEffect() {
  const rectangle4 = document.querySelector('.Rectangle4Agri');
  rectangle4.style.boxShadow = '0px 8px 8px  black';
}

function removeShadowEffect() {
  const rectangle4 = document.querySelector('.Rectangle4Agri');
  rectangle4.style.boxShadow = 'none';
}

function clearDefaultText() {
  const textInput = document.getElementById('textInput');
  if (textInput.value === 'Type here................') {
    textInput.value = '';
  }
}

function setDefaultText() {
  const textInput = document.getElementById('textInput');
  if (textInput.value === '') {
    textInput.value = 'Type here................';
  }
}

function animateRectangle3() {
  const rectangle3 = document.getElementById('rect3');
  let width = 0;
  const targetWidth = 1520;
  const animationDuration = 2000; // 2000ms = 2 seconds

  const animationFrame = () => {
    width += 5;
    rectangle3.style.width = width + 'px';
    if (width < targetWidth) {
      requestAnimationFrame(animationFrame);
    }
  };

  requestAnimationFrame(animationFrame);
}
