const canvas = document.getElementById("particles");

if (canvas) {
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  for (let i = 0; i < 80; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2,
      dx: Math.random() - 0.5,
      dy: Math.random() - 0.5
    });
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "#4f46e5";
      ctx.fill();

      p.x += p.dx;
      p.y += p.dy;
    });

    requestAnimationFrame(animateParticles);
  }

  animateParticles();
}
const roles = [
  "Full Stack Data Analyst",
  "ML Engineer",
  "Data Scientist",
  "Business Analyst"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typedText = document.getElementById("typed-role");

function typeEffect() {

  if (!typedText) return; // safety check

  const currentRole = roles[roleIndex];

  if (!deleting) {
    typedText.textContent = currentRole.substring(0, charIndex++);
    
    if (charIndex > currentRole.length) {
      deleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    typedText.textContent = currentRole.substring(0, charIndex--);
    
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, deleting ? 40 : 80);
}

window.onload = typeEffect;
