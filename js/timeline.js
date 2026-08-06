const timelineData=[

    {
    age:3,
    image:"assets/images/birthday/age3.jpeg"
    },
    
    {
    age:5,
    image:"assets/images/birthday/age5.jpeg"
    },
    
    {
    age:8,
    image:"assets/images/birthday/age8.jpeg"
    },
    
    {
    age:14,
    image:"assets/images/birthday/age14.jpeg"
    },
    
    {
    age:18,
    image:"assets/images/birthday/age18.jpeg"
    },
    
    {
    age:20,
    image:"assets/images/birthday/age20.jpeg"
    },
    
    {
    age:21,
    image:"assets/images/birthday/age21.jpeg"
    },
    
    {
    age:22,
    image:"assets/images/birthday/age22.jpeg"
    }
];

function animateAge(element,target){

    let current=0;

    const timer=setInterval(()=>{

        current++;

        element.innerText=current;

        if(current>=target){

            clearInterval(timer);

        }

    },70);

}

//timeline

const timelineContainer=document.getElementById("timelineContainer");

timelineData.forEach(item=>{

const page=document.createElement("section");

page.className="age-page";

page.innerHTML=`

<div class="photo-wrapper">

<img src="${item.image}">

</div>

<div class="age">

${item.age}

</div>

`;

timelineContainer.appendChild(page);

});

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

            const age=entry.target.querySelector(".age");

            const value=parseInt(age.innerText);

            age.innerText="0";

            animateAge(age, value);

// If this is the last photo (22 years)
if (value === 22) {

    setTimeout(() => {

        unlockNext("birthdayTimeline", "birthdayFinal");

    }, 2500);

}

        }

    });

},{
    threshold:.6
});


document.querySelectorAll(".age-page").forEach(page=>{

    observer.observe(page);

});