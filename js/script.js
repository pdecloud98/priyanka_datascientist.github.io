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

    setTimeout(type, isDeleting ? 50 : 100);
}

type();
