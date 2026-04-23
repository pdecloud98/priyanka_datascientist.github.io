const text = ["Data Analyst", "Data Scientist", "ML Enthusiast"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
    if (index >= text.length) index = 0;

    currentText = text[index];

    if (!isDeleting) {
        document.getElementById("typing").innerText =
            currentText.substring(0, charIndex++);
    } else {
        document.getElementById("typing").innerText =
            currentText.substring(0, charIndex--);
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index++;
    }

    setTimeout(type, 1500);
}

type();
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
