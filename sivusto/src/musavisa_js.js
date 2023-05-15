
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
        rightanswer: "<br><br>Haitari, flyygeli ja piano luokitellaan kosketinsoittimiksi.<br>Ksylofoni on lyömäsoitin."
    },
    {
        q: "Miten jatkuu 'Meksikon Pikajuna'-laulun sanat: 'Pikajuna Meksikon, halki kiitää yö jo on. Valokeilat _______ rataa kiiltävää.",
        a: [
            { text: "valaisevat", isCorrect: false, isSelected: false },
            { text: "halkaisevat", isCorrect: false },
            { text: "lakaisevat", isCorrect: true },
            { text: "Ei mikään näistä", isCorrect: false }

        ],
        rightanswer: "<br><br>Reino Helismaan säveltämässä kappaleessa lauletaan: 'Valokeilat lakaisevat rataa kiiltävää'."

    }

];

// Määritellään elementtejä html koodista
let questions = document.getElementById("question");
let answerBtns = document.getElementById("answer-buttons");
let nextBtn = document.getElementById("next-button");
let info = document.getElementById("info");

// Määritetään kysymys-array ja pisteiden laskun alkavan nollasta, kun visa aloitetaan
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

    // Luodaan muuttuja, johon tallennetaan nykyinen kysymys
    let currentQuestion = questionArray[currentQuestionIndex];

    // Luodaan muuttuja, johon tallennetaan kysymyksen numero ja numero sekä kysymys päivittyy visan edetessä
    let questionNum = currentQuestionIndex + 1;
    questions.innerHTML = questionNum + ". " + currentQuestion.q;

    // Vastaukset laitetaan loopin läpi ja muokataan vastausvaihtoehdot kysymyksen mukaan
    currentQuestion.a.forEach(answer => {
        let button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtns.appendChild(button);

        if (answer.isCorrect) {
            button.dataset.correct = answer.isCorrect;
        }

        // Kutsutaan selectAnswer funktio
        button.addEventListener("click", selectAnswer)

    });
}

// Tyhjennetään oikeat vastaukset-kenttä ja piilotetaan "seuraava"-nappi uuteen kysymykseen siirryttäessä
function resetState() {
    nextBtn.style.display = "none";
    info.style.display = "none";
    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild);
    }
}

function selectAnswer(e) {

    // Määritellään valittu vastausnappi
    let selectBtn = e.target;
    let isCorrect = selectBtn.dataset.correct === "true";

    // Tarkistetaan onko valittu vastaus oikein ja tulostetaan "Oikein" tai "Väärin" sekä oikea vastaus
    if (isCorrect) {
        selectBtn.classList.add("correct");
        score++;
        info.innerHTML = "Oikein! " + questionArray[currentQuestionIndex].rightanswer;
    } else {
        selectBtn.classList.add("incorrect");
        info.innerHTML = "Väärin! " + questionArray[currentQuestionIndex].rightanswer;
    }

    nextBtn.style.display = "block";
    info.style.display = "block";
}

function showScore() {
    // Tyhjätään aikaisempi teksti sivulta kutsumalla resetState funktio
    resetState();

    //Visan tulokset
    questions.innerHTML = "Sait " + score + "/" + questionArray.length + " vastausta oikein";

    //Muokataan "seuraava"-napin tekstiä
    nextBtn.innerHTML = "Tee testi uudestaan";

    nextBtn.style.display = "block";
}

function handleNextButton() {

    // Jos kysymyksiä on vielä jäljellä, näytetään seuraava kysymys. Muuten näytetään tulos
    currentQuestionIndex++;
    if (currentQuestionIndex < questionArray.length) {
        displayQuestion();
    } else {
        showScore();
    }
}

// Kun visa on suoritettu loppuun, "seuraava"-nappi vie takaisin testin alkuun uudelleen pelattavaksi
nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex < questionArray.length) {
        handleNextButton();
    } else {
        startQuiz();
    }


});

// Funktio jolla visa alkaa
startQuiz();
