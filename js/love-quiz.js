const quiz = [

    {
    question:"Where did we first meet?",
    options:["Lulu Mall","Beach","Temple","College"],
    answer:0
    },
    
    {
    question:"What was our first selfie location?",
    options:["cafe","Lulu Mall","Park","Restaurant"],
    answer:0
    },
    
    {
    question:"when is my birthday?",
    options:["1 october","19 december","25 december","15 january"],
    answer:1
    },
    
    {
    question:"which food do i love most?",
    options:["mandhi","kerala parotta","chicken curry","rithu"],
    answer:3
    },
    
    {
    question:"Who is the cutest?",
    options:["kannama","kannama","kannama"],
    answer:[0,1,2]
    }
    
    ];
    
    let current=0;
    let score=0;
    
    const quizBox=document.getElementById("quizBox");
    
    function renderDots(){

        let dots = `<div class="quiz-progress">`;

        quiz.forEach((_, i) => {

            const state = i < current ? "done" : i === current ? "active" : "";

            dots += `<span class="${state}"></span>`;

        });

        return dots + `</div>`;

    }

    function loadQuestion(){

        const q=quiz[current];

        let html=renderDots() + `
        <div class="question">
        Question ${current+1} / ${quiz.length}<br><br>
        ${q.question}
        </div>
        `;
    
        q.options.forEach((option,index)=>{

            html+=`
            <button class="option"
            onclick="selectAnswer(${index}, this)">
            ${option}
            </button>
            `;

        });

        quizBox.innerHTML=html;

    }
    function isCorrect(answer, index){

        return Array.isArray(answer) ? answer.includes(index) : index === answer;

    }

    function selectAnswer(index, button){

        const answer = quiz[current].answer;

        const correct = isCorrect(answer, index);

        if(correct){
            score++;
        }

        const buttons = quizBox.querySelectorAll(".option");

        buttons.forEach((btn, i) => {

            btn.disabled = true;

            if(isCorrect(answer, i)){
                btn.classList.add("correct");
            }else if(btn === button){
                btn.classList.add("wrong");
            }

        });

        setTimeout(() => {

            current++;

            if(current < quiz.length){

                loadQuestion();

            }else{

                showResult();

            }

        }, 700);

    }
    
    function showResult(){
    
        quizBox.style.display="none";
    
        resultBox.style.display="block";
    
        let percent=(score/quiz.length)*100;
    
        let fill=0;
    
        const interval=setInterval(()=>{
    
            fill++;
    
            meterFill.style.width=fill+"%";
    
            meterText.innerHTML=fill+"%";
    
            if(fill>=100){
    
                clearInterval(interval);
    
                resultMessage.innerHTML=`
    
                You scored ${score}/${quiz.length}.<br><br>
    
                But love isn't measured by correct answers.<br>
    
                You'll always be <b>100%</b> in my heart ❤️
    
                `;
    
                continueBtn.style.display="inline-block";
    
            }
    
        },20);
    
    }
    
    // continueBtn.onclick=function(){
    
    //     document.getElementById("birthdayTimeline").scrollIntoView({
    
    //         behavior:"smooth"
    
    //     });
    
    // }

    continueBtn.onclick = function(){

        unlockNext("love-quiz", "birthdayTimeline");
    
    }
    
    loadQuestion();