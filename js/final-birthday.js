let started = false;

const birthdayFinal = document.getElementById("birthdayFinal");

function startCelebration() {

    if (started) return;

    started = true;

    const content = document.querySelector("#birthdayFinal .birthday-content");

    if (content) {
        content.classList.add("show");
    }

    const container = document.getElementById("fireworks");

    if (container && typeof Fireworks !== "undefined") {

        const FireworksClass = Fireworks.default || Fireworks;

        const fireworks = new FireworksClass(container, {

            autoresize: true,

            opacity: 0.25,

            acceleration: 1.05,

            friction: 0.97,

            gravity: 1.4,

            particles: 90,

            traceLength: 4,

            traceSpeed: 12,

            explosion: 6,

            intensity: 28,

            flickering: 50,

            lineStyle: "round",

            hue: { min: 320, max: 50 }

        });

        fireworks.start();

    }

    setTimeout(typeMessage, 6500);

}

function checkCelebration() {

    if (started || !birthdayFinal) return;

    const rect = birthdayFinal.getBoundingClientRect();

    const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

    const ratio = visibleHeight / window.innerHeight;

    if (ratio >= 0.35) {
        startCelebration();
    }

}

if (birthdayFinal) {

    const finalObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                startCelebration();
            }

        });

    }, { threshold: 0.35 });

    finalObserver.observe(birthdayFinal);

    window.addEventListener("scroll", checkCelebration, { passive: true });

    window.addEventListener("birthdayFinalReveal", startCelebration);

    checkCelebration();

}

// =============================
// TYPEWRITER EFFECT
// =============================

const text = "I Love You Today, Tomorrow and Forever ❤️";

let index = 0;

function typeMessage() {

    const typing = document.getElementById("typing");

    if (!typing) return;

    typing.classList.add("typing-active");

    if (index < text.length) {

        typing.textContent += text.charAt(index);

        index++;

        setTimeout(typeMessage, 90);

    } else {

        typing.classList.remove("typing-active");

    }

}
