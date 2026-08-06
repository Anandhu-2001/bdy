const container = document.querySelector(".hearts");

function createHeart(){

    const heart=document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(15+Math.random()*25)+"px";

    heart.style.animationDuration=(8+Math.random()*7)+"s";

    container.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },15000);

}

setInterval(createHeart,400);