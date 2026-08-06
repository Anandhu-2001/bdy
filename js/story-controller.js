const sectionIds = [
    "hero",
    "how-we-met",
    "beautiful-moments",
    "love-quiz",
    "birthdayTimeline",
    "birthdayFinal"
];

let unlocked = 0;

// Unlock a section and smoothly scroll to it
function unlockNext(currentId, nextId) {

    const nextIndex = sectionIds.indexOf(nextId);

    if (nextIndex > unlocked) {
        unlocked = nextIndex;
    }

    document.getElementById(nextId).scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    if (nextId === "birthdayFinal") {
        window.dispatchEvent(new Event("birthdayFinalReveal"));
    }

}

// Prevent scrolling into locked sections
window.addEventListener("scroll", () => {

    const nextLocked = sectionIds[unlocked + 1];

    if (!nextLocked) return;

    const lockedSection = document.getElementById(nextLocked);

    if (!lockedSection) return;

    if (window.scrollY >= lockedSection.offsetTop - 100) {

        window.scrollTo({
            top: lockedSection.offsetTop - window.innerHeight,
            behavior: "auto"
        });

    }

});