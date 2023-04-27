
// Kysymykset
let questionArray = [
    {
        q: "Mikä maa on saanut eniten Euroviisu voittoja vuoteen 2023 mennessä?",
        a: [
            { text: "Ruotsi", isCorrect: false },
            { text: "Iso-Britannia", isCorrect: false },
            { text: "Irlanti", isCorrect: true },
            { text: "Ranska", isCorrect: false }

        ]
    },
    {
        q: "Minkä yhtyeen kappaleiden pohjalta on tehty elokuva 'Mamma Mia!?",
        a: [
            { text: "Queen", isCorrect: false, isSelected: false },
            { text: "The Rolling Stones", isCorrect: false },
            { text: "E-Type", isCorrect: false },
            { text: "ABBA", isCorrect: true }
        ]
    },
    {
        q: "Kenen kappale on 'Stairway to Heaven?'",
        a: [
            { text: "Red Hot Chili Peppers", isCorrect: false },
            { text: "Metallica", isCorrect: false },
            { text: "Led Zeppelin", isCorrect: true },
            { text: "AC/DC", isCorrect: false }
        ]
    },
    {
        q: "Mikä näistä ei ole kosketinsoitin?",
        a: [
            { text: "Haitari", isCorrect: false, isSelected: false },
            { text: "Flyygeli", isCorrect: false },
            { text: "Piano", isCorrect: false },
            { text: "Ksylofoni", isCorrect: true }

        ]
    },
    {
        q: "Miten jatkuu 'Päivänsäde ja menninkäinen'-laulun sanat: 'Hämärä jo ____ hiipi, Päivänsäde kultasiipi juuri aikoi lentää eestä sen.",
        a: [
            { text: "Luokse", isCorrect: false, isSelected: false },
            { text: "Metsään", isCorrect: false },
            { text: "Maille", isCorrect: true },
            { text: "Ei mikään näistä", isCorrect: false }

        ]

    }

];

let questions = document.getElementById("question");
let answerBtns = document.getElementById("answer-buttons");
let nextBtn = document.getElementById("next-button");
let info = document.getElementById("info");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Seuraava";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questionArray[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1;
    questions.innerHTML = questionNum + ". " + currentQuestion.q;

    currentQuestion.a.forEach(answer => {
        let button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtns.appendChild(button);
        if (answer.isCorrect) {
            button.dataset.correct = answer.isCorrect;
        }
        button.addEventListener("click", selectAnswer)

    });
}


function resetState() {
    nextBtn.style.display = "none";
    info.style.display = "none";
    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild);
    }
}

function selectAnswer(e) {
    let selectBtn = e.target;
    let isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect) {
        selectBtn.classList.add("correct");
        score++;
    } else {
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerBtns.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextBtn.style.display = "block";

    info.innerHTML = "Vastauksesi on " + (isCorrect ? "oikein" : "väärin") + ".";
    info.style.display = "block";

}

function showScore() {
    resetState();
    questions.innerHTML = "Sait " + score + "/" + questionArray.length + " vastausta oikein";
    nextBtn.innerHTML = "Tee testi uudestaan";
    nextBtn.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questionArray.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex < questionArray.length) {
        handleNextButton();
    } else {
        startQuiz();
    }


});

startQuiz();

