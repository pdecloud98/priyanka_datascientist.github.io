// const text = ["Data Analyst", "Data Scientist", "ML Enthusiast"];
// let index = 0;
// let charIndex = 0;
// let currentText = "";
// let isDeleting = false;

// function type() {
//     if (index >= text.length) index = 0;

//     currentText = text[index];

//     if (!isDeleting) {
//         document.getElementById("typing").innerText =
//             currentText.substring(0, charIndex++);
//     } else {
//         document.getElementById("typing").innerText =
//             currentText.substring(0, charIndex--);
//     }

//     if (!isDeleting && charIndex === currentText.length) {
//         isDeleting = true;
//         setTimeout(type, 1000);
//         return;
//     }

//     if (isDeleting && charIndex === 0) {
//         isDeleting = false;
//         index++;
//     }

//     setTimeout(type, 1500);
// }

// type();
const canvas = document.getElementById("particles");
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
// const roles = ["ML Engineer", "Data Scientist", "Data Analyst"];
// let i = 0, j = 0, current = "", deleting = false;

// function typeEffect() {
//     current = roles[i];

//     if (!deleting) {
//         document.getElementById("typing").innerText = current.substring(0, j++);
//     } else {
//         document.getElementById("typing").innerText = current.substring(0, j--);
//     }

//     if (!deleting && j === current.length) {
//         deleting = true;
//         setTimeout(typeEffect, 1500);
//         return;
//     }

//     if (deleting && j === 0) {
//         deleting = false;
//         i = (i + 1) % roles.length;
//     }

//     setTimeout(typeEffect, deleting ? 60 : 120);
// }

// typeEffect();
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

typeEffect();
