
// Kysymykset ja vastaukset
let questionArray = [
    {
        q: "Mikä maa on saanut eniten Euroviisu voittoja vuoteen 2023 mennessä?",
        a: [
            { text: "Ruotsi", isCorrect: false },
            { text: "Iso-Britannia", isCorrect: false },
            { text: "Irlanti", isCorrect: true },
            { text: "Ranska", isCorrect: false }

        ],
        rightanswer: "<br><br>Irlanti on voittanut Euroviisut 7 kertaa vuoteen 2023 mennessä.<br>Ruotsi on voittanut 6 kertaa ja Ranska sekä Iso-Britannia 5 kertaa."
    },
    {
        q: "Minkä yhtyeen kappaleiden pohjalta on tehty elokuva 'Mamma Mia!?",
        a: [
            { text: "Queen", isCorrect: false, isSelected: false },
            { text: "The Rolling Stones", isCorrect: false },
            { text: "E-Type", isCorrect: false },
            { text: "ABBA", isCorrect: true }
        ],
        rightanswer: "<br><br>Mamma Mia!-musikaali on tehty ABBA:n kappaleiden ympärille."
    },
    {
        q: "Kenen kappale on 'Stairway to Heaven?'",
        a: [
            { text: "Red Hot Chili Peppers", isCorrect: false },
            { text: "Metallica", isCorrect: false },
            { text: "Led Zeppelin", isCorrect: true },
            { text: "AC/DC", isCorrect: false }
        ],
        rightanswer: "<br><br>Stairway to Heaven on Led Zeppelin-yhtyeen kappale, joka julkaistiin vuonna 1971 yhtyeen neljännellä albumilla."
    },
    {
        q: "Mikä näistä ei ole kosketinsoitin?",
        a: [
            { text: "Haitari", isCorrect: false, isSelected: false },
            { text: "Flyygeli", isCorrect: false },
            { text: "Piano", isCorrect: false },
            { text: "Ksylofoni", isCorrect: true }

        ],
        rightanswer: "<br><br>Haitari, flyygeli ja piano ovat kosketinsoittimia.<br>Ksylofoni on lyömäsoitin."
    },
    {
        q: "Miten jatkuu 'Meksikon Pikajuna'-laulun sanat: 'Pikajuna Meksikon, halki kiitää yö jo on. Valokeilat _______ rataa kiiltävää.",
        a: [
            { text: "valaisevat", isCorrect: false, isSelected: false },
            { text: "halkaisevat", isCorrect: false },
            { text: "lakaisevat", isCorrect: true },
            { text: "Ei mikään näistä", isCorrect: false }

        ],
        rightanswer: "<br><br>Reino Helismaan säveltämässä kappaleessa lauletaan: 'valokeilat lakaisevat rataa kiiltävää'."

    }

];

//Määritellään elementtejä
let questions = document.getElementById("question");
let answerBtns = document.getElementById("answer-buttons");
let nextBtn = document.getElementById("next-button");
let info = document.getElementById("info");

//Määritetään kysymys-array ja pisteiden laskun alkavan nollasta, kun visa aloitetaan
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Seuraava";
    displayQuestion();
}

function displayQuestion() {
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
        info.innerHTML = "Oikein! " + questionArray[currentQuestionIndex].rightanswer;
    } else {
        selectBtn.classList.add("incorrect");
        info.innerHTML = "Väärin! " + questionArray[currentQuestionIndex].rightanswer;
    }
    Array.from(answerBtns.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextBtn.style.display = "block";

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
        displayQuestion();
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

