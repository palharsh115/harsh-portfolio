const words = [
    "DEV", "WEB DEVELOPER", "APP DEVELOPER", "CI/CD", "CLOUD", "HOSTINGER",
    "DATABASE", "MONGODB", "REACT", "NODEJS", "JAVASCRIPT", "HTML", "CSS", "PYTHON",
    "GITHUB", "GITLAB", "API", "SOFTWARE ENGINEER", "PROGRAMMER", "TECH ENTHUSIAST",
    "TECHNOLOGY", "INNOVATION", "DESIGN", "FRONTEND", "BACKEND", "FULLSTACK",
    "DEVELOPER", "ENGINEER", "TECH", "PROGRAMMING", "CODING", "TECHNOLOGIST",
    "TECHNICAL", "DIGITAL", "WEB", "APPLICATION", "SOFTWARE", "SYSTEMS",
    "ARCHITECTURE", "DEVOPS", "AGILE", "SCRUM", "TECH STACK", "DATABASES",
    "CLOUD COMPUTING", "MACHINE LEARNING", "AI", "ARTIFICIAL INTELLIGENCE",
];

const container = document.getElementById('rotating-words-container');
const landing = document.getElementById('landing');
const landingRect = landing.getBoundingClientRect();

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

function animateWord(span) {
    // Random position within landing section
    const x = randomInRange(0, landingRect.width - 120);
    const y = randomInRange(0, landingRect.height - 40);
    span.style.left = `${x}px`;
    span.style.top = `${y}px`;
    span.style.opacity = '0';

    // Fade in
    setTimeout(() => {
        span.style.transition = "opacity 1.2s";
        span.style.opacity = '1';
    }, 100);

    // Fade out and move again
    setTimeout(() => {
        span.style.opacity = '0';
        setTimeout(() => {
            animateWord(span); // Repeat at new position
        }, 1200);
    }, 2200);
}

function startContinuousWords() {
    container.innerHTML = '';
    words.forEach((word, i) => {
        const span = document.createElement('span');
        span.className = 'word-anim';
        span.textContent = word;
        span.style.position = 'absolute';
        span.style.opacity = '0';
        container.appendChild(span);
        setTimeout(() => animateWord(span), i * 250); // Stagger start
    });

    // Show name card after 1 second with fade animation
    const nameCard = document.getElementById('name-card');
    if (nameCard) {
        nameCard.classList.remove('visible');
        nameCard.classList.add('hidden');
        setTimeout(() => {
            nameCard.classList.remove('hidden');
            nameCard.classList.add('visible');
        }, 1000);
    }
}

window.addEventListener('DOMContentLoaded', startContinuousWords);
window.addEventListener('resize', startContinuousWords);

// Add to your scripts.js (at the end or after DOMContentLoaded)
function handleAboutFadeIn() {
    const about = document.querySelector('.about-flex');
    if (!about) return;
    function onScroll() {
        const rect = about.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            about.classList.add('visible');
            window.removeEventListener('scroll', onScroll);
        }
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
}
document.addEventListener('DOMContentLoaded', handleAboutFadeIn);

document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll('.section-animate');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, { threshold: 0.18 });

  sections.forEach(section => observer.observe(section));
});

// Prevent default form submission and use AJAX
function showNotification(message) {
  const card = document.getElementById('notification-card');
  const msg = document.getElementById('notification-message');
  msg.textContent = message;
  card.style.display = 'block';
  card.classList.add('show');
  setTimeout(() => {
    card.classList.remove('show');
    setTimeout(() => {
      card.style.display = 'none';
    }, 600); // Wait for transition to finish
  }, 7000); // Show for 7 seconds
}


function handleContactWhatsApp(event) {
  event.preventDefault(); // Stop normal form submission

  const name = document.getElementById('contact-name').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const message = document.getElementById('contact-message').value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // 🔁 Format message for WhatsApp
  const text = `👤 Name: ${name}%0A📧 Email: ${email}%0A📝 Message: ${message}`;
  const phoneNumber = "9917668808"; // <-- Replace with your own number

  // ✅ Build WhatsApp link
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;

  // 🚀 Open WhatsApp
  window.open(whatsappURL, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', handleContactWhatsApp);
  }


  if (res.ok) {
    showNotification('Thank you! Your message has been sent.');
    this.reset();
  } else {
    showNotification('There was an error sending your message.');
  }
});
