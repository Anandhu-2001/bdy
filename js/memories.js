const memories = [

    {
        title: "Our First temple vist ❤️",
        date: "5 December 2025",
        image: "assets/images/memories/temple.jpeg",
        description: "I still remember how happy I felt standing next to you."
    },

    {
        title: "Our walkway moments ❤️",
        date: "12 August 2025",
        image: "assets/images/memories/walkway.jpeg",
        description: "Every road became beautiful because you were beside me."
    },

    {
        title: "our first onam together ❤️",
        date: "4 September 2025",
        image: "assets/images/memories/onam.jpeg",
        description: "Sometimes the smallest moments become the biggest memories."
    },

    {
        title: "onam celebration 🎉",
        date: "4 September 2025 ",
        image: "assets/images/memories/onam2.jpeg",
        description: "Celebrating with you made every festival unforgettable."
    },

    {
        title: "cute moments ❤️",
        date: "10 December 2025",
        image: "assets/images/memories/danzzcam.jpeg",
        description: "Just being silly and dancing around with you is one of my favorite kinds of happy."
    },

    {
        title: "Our first gym session together ❤️",
        date: "3 april 2026",
        image: "assets/images/memories/gym.jpeg",
        description: "Who knew lifting weights together could feel this fun with you around."
    },

    {
        title: "chill out time in jew street ❤️",
        date: "10 april 2026",
        image: "assets/images/memories/jewstreet.jpeg",
        description: "Wandering through those old lanes with you, we didn't need anywhere else to be."
    },

    {
        title: "agnal sister wedding ❤️",
        date: "18 may 2026",
        image: "assets/images/memories/wedding.jpeg",
        description: "Celebrating your sister's big day with you made it feel even more special."
    }

];

const memoriesContainer = document.getElementById("memoriesContainer");

memories.forEach((memory, index) => {

    const card = document.createElement("div");

    card.className = index % 2 === 0
        ? "memory-card"
        : "memory-card reverse";

    card.innerHTML = `

        <div class="memory-image">

            <img src="${memory.image}" alt="${memory.title}">

        </div>

        <div class="memory-content">

            <span class="memory-date">❤️ ${memory.date}</span>

            <h3>${memory.title}</h3>

            <p>${memory.description}</p>

        </div>

    `;

    memoriesContainer.appendChild(card);

});