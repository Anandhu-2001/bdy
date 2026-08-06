const button = document.getElementById("startBtn");

const hero = document.getElementById("hero");

const music = document.getElementById("bgMusic");

const petals = document.getElementById("petals");

button.addEventListener("click", function(){

    // Disable multiple clicks

    button.disabled = true;

    // Glow Button

    button.classList.add("glow");

    // Play Music

    music.volume = 0.4;

    music.play();

    // Falling Petals

    createPetals();

    // Fade Hero

    setTimeout(()=>{

        hero.classList.add("fade-out");

    },1500);

    // Scroll

    setTimeout(()=>{

        unlockNext("hero","how-we-met");
    
    },2000);

});

function createPetals() {

    const petals = document.getElementById("petals");

    // Create 250 petals
    for (let i = 0; i < 250; i++) {

        const petal = document.createElement("div");

        petal.className = "petal";

        petal.innerHTML = "🌸";

        // Random position across the screen
        petal.style.left = Math.random() * 100 + "vw";

        // Random delay so they don't all fall together
        petal.style.animationDelay = Math.random() * 1 + "s";

        // Different speeds
        petal.style.animationDuration = (4 + Math.random() * 4) + "s";

        // Different sizes
        petal.style.fontSize = (16 + Math.random() * 24) + "px";

        petals.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, 9000);
    }

}
// document.getElementById("nextStory").addEventListener("click", function () {

//     document.getElementById("beautiful-moments").scrollIntoView({
//         behavior: "smooth"
//     });

// });
document.getElementById("nextStory").addEventListener("click", () => {

    unlockNext("how-we-met", "beautiful-moments");

});

// document.getElementById("nextReasons").onclick = function () {
//     document.getElementById("love-quiz").scrollIntoView({
//         behavior: "smooth"
//     });
// }; 
document.getElementById("nextReasons").addEventListener("click", () => {

    unlockNext("beautiful-moments", "love-quiz");

});

// document.getElementById("continueBtn").onclick = function () {
//     document.getElementById("birthdayTimeline").scrollIntoView({
//         behavior: "smooth"
//     });
// };


const progressFill = document.getElementById("progressFill");

function updateProgress() {

    const scrollable = document.documentElement.scrollHeight - window.innerHeight;

    const percent = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;

    progressFill.style.width = Math.min(100, Math.max(0, percent)) + "%";

}

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("load", updateProgress);

window.addEventListener("load", () => {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.3
    });

    document.querySelectorAll(".memory-card, .photo-card, .story-card, .quiz-container, .reveal-heading").forEach(card => {
        observer.observe(card);
    });

});

