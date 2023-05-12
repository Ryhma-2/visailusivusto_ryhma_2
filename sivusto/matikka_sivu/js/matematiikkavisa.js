// Määritellään aktiivinen kysymys, next -nappia painamalla seuraavasta kysymyksestä tulee aktiivinen. CSS:ssä määritelty että sivulla näkyy vain aktiivinen sivu
questions                   = document.querySelectorAll('.question');
let currentQuestionIndex    = 0;

nextButtons = document.querySelectorAll('[id^="next"]');
nextButtons.forEach((button) => {
  button.addEventListener('click', () => {
    questions[currentQuestionIndex].classList.remove('active');
    
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      questions[currentQuestionIndex].classList.add('active');
    }
  });
});

// Määritellään muuttuja, johon tallentuu oikeat vastaukset ja kysymysten lukumäärä
totalScore = 0;

// Satunnaislukugeneraattori (suoraan w3-schoolsista) 
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


// Määritellään kaikissa kysymyksissä käytettävät muuttujat alkuun

// KYSYMYS 1  
prices      = [20, 30, 40, 50, 60, 70, 80];
discounts   = [20, 25, 40, 75];
let priceIndex      = getRandomNumber(0, prices.length -1);
let discountIndex   = getRandomNumber(0, discounts.length -1);
let price       = prices[priceIndex]
let discount    = discounts[discountIndex]
let finalPrice  = price - (price * (discount / 100));

// Asetetaan satunnaisesti valittu hinta ja alennus% näkymään sivulla
let priceOriginal = document.getElementById('priceOriginal');
priceOriginal.textContent = price;
let discountPercent = document.getElementById('discount');
discountPercent.textContent = discount;

// KYSYMYS 2
let hitSongs        = getRandomNumber(20, 40);
let neutralSongs    = getRandomNumber(50, 70)
let totalSongs      = getRandomNumber(300, 400);
let badSongs        = totalSongs - neutralSongs - hitSongs;

// Asetetaan satunnaisesti valitut kappalemäärät näkymään sivulla
document.getElementById("hits").innerHTML = hitSongs;
document.getElementById("songs").innerHTML = totalSongs;
document.getElementById("neutral").innerHTML = neutralSongs;

// KYSYMYS 3
let height      = getRandomNumber (5, 10);
let width       = getRandomNumber (2, 6);
let perimeter   = 2 * (height + width);

// Asetetaan alkutiedot näkymään sivulla
document.getElementById("length").innerHTML = height;
document.getElementById("width").innerHTML = width;

// KYSYMYS 4
let pace        = getRandomNumber (3,8);
let bookLength  = pace * getRandomNumber (30, 65);
let days        = bookLength / pace;

// Asetetaan alkutiedot näkymään sivulla
document.getElementById("booklength").innerHTML = bookLength;
document.getElementById("pace").innerHTML = pace;

// KYSYMYS 5
let blues       = getRandomNumber(1, 47);
let greens      = getRandomNumber(1, 50 - blues);
let reds        = 50 - blues - greens;
let greenOdds   = greens * 2; // Tämä kaava käy vain silloin kun objekteja yhteensä 50

// Asetetaan alkutiedot näkymään sivulla
document.getElementById("red").innerHTML = reds;
document.getElementById("blue").innerHTML = blues;
document.getElementById("green").innerHTML = greens;


// KYSYMYS 1 vaihtoehdot ja muu laskenta
let choice1 = document.getElementById('choice1of1');
let choice2 = document.getElementById('choice2of1');
let choice3 = document.getElementById('choice3of1');
let choice4 = document.getElementById('choice4of1');
let choices1 = [choice1, choice2, choice3, choice4];

// Määritellään oikea vastaus satunnaiseen kohtaan
let correctAnswerIndex1 = Math.floor(Math.random() * choices1.length);
choices1[correctAnswerIndex1].textContent = `${finalPrice} €`;

// Määritellään väärät vastaukset ja se, etteivät ne toistu vaihtoehdoissa
let usedOptions1 = [finalPrice];
for (let i = 0; i < choices1.length; i++) {
  if (i !== correctAnswerIndex1) {
    let incorrectOption;
    do {
      incorrectOption = finalPrice - getRandomNumber(5, finalPrice -5 );
    } while (usedOptions1.includes(incorrectOption));
    choices1[i].textContent = `${incorrectOption} €`;
    usedOptions1.push(incorrectOption);
  }
}

// Asetetaan event-listener "kuuntelemaan" mitä vaihtoehtoa käyttäjä painaa
let radioButtons1 = document.querySelectorAll('input[name="q1"]');
for (let i = 0; i < radioButtons1.length; i++) {
  radioButtons1[i].addEventListener('click', function() {
    document.getElementById("next1").classList.remove("hidden");
    checkAnswer1();
  });
}

let currentQuestionNumber = 1; 
// Tarkistetaan oliko vastaus oikein ja jos oli, lisätään 1 piste muuttujaan "totalScore"
function checkAnswer1() {

  // Luodaan edistymispalkin funktio
 
  let currentQuestionNumber = 1;
  let totalNumberOfQuestions = 5; 
  let progressBarWidth = (currentQuestionNumber / totalNumberOfQuestions) * 100;
  document.querySelector('.progress-bar').style.width = `${progressBarWidth}%`;

  let answer1 = document.querySelector('input[name="q1"]:checked');

  if (answer1.value == correctAnswerIndex1) {
    totalScore++;
    choices1[correctAnswerIndex1].parentNode.classList.add('correct');
  } else {
    //totalScore += 0;
    answer1.parentNode.classList.add('incorrect');
    choices1[correctAnswerIndex1].parentNode.classList.add('correct');
  }
  document.getElementById("total").innerHTML = totalScore;
  //document.getElementById("next1").classList.remove("hidden");

  // varmistetaan että käyttäjä ei voi vaihtaa vastausta
  for (let i = 0; i < radioButtons1.length; i++) {
    radioButtons1[i].disabled = true;
  }
}


// KYSYMYS 2 vaihtoehdot ja muu laskenta
let choice6     = document.getElementById('choice1of2');
let choice7     = document.getElementById('choice2of2');
let choice8     = document.getElementById('choice3of2');
let choice9     = document.getElementById('choice4of2');
let choices2   = [choice6, choice7, choice8, choice9];

// Määritellään oikea vastaus satunnaiseen kohtaan
let correctAnswerIndex2 = Math.floor(Math.random() * choices2.length);
choices2[correctAnswerIndex2].textContent = `${badSongs} kpl`;

// Määritellään väärät vastaukset ja se, etteivät ne toistu vaihtoehdoissa
let usedOptions2 = [badSongs];
for (let i = 0; i < choices2.length; i++) {
  if (i !== correctAnswerIndex2) {
    let incorrectOption;
    do {
      incorrectOption = getRandomNumber(1, 330);
    } while (usedOptions2.includes(incorrectOption) || incorrectOption == badSongs);
    choices2[i].textContent = `${incorrectOption} kpl`;
    usedOptions2.push(incorrectOption);
  }
}

// Asetetaan event-listener "kuuntelemaan" mitä vaihtoehtoa käyttäjä painaa
let radioButtons2 = document.querySelectorAll('input[name="q2"]');
for (let i = 0; i < radioButtons2.length; i++) {
  radioButtons2[i].addEventListener('click', function() {
    checkAnswer2();
  });
}

// Tarkistetaan oliko vastaus oikein ja jos oli, lisätään 1 piste muuttujaan "totalScore"
function checkAnswer2() {

  // Luodaan edistymispalkin funktio
  let currentQuestionNumber = 2; 
  let totalNumberOfQuestions = 5; 
  let progressBarWidth = (currentQuestionNumber / totalNumberOfQuestions) * 100;
  document.querySelector('.progress-bar').style.width = `${progressBarWidth}%`;

  let answer2 = document.querySelector('input[name="q2"]:checked');

  if (answer2.value == correctAnswerIndex2) {
    totalScore++;
    answer2.parentNode.classList.add('correct');
  } else {
    //totalScore += 0;
    answer2.parentNode.classList.add('incorrect');
    choices2[correctAnswerIndex2].parentNode.classList.add('correct');
  }
  document.getElementById("total").innerHTML = totalScore;
  document.getElementById("next2").classList.remove("hidden");

  // varmistetaan että käyttäjä ei voi vaihtaa vastausta
  for (let i = 0; i < radioButtons2.length; i++) {
    radioButtons2[i].disabled = true;
  }
}


// KYSYMYS 3 vaihtoehdot ja muu laskenta
let choice11    = document.getElementById('choice1of3');
let choice12    = document.getElementById('choice2of3');
let choice13    = document.getElementById('choice3of3');
let choice14    = document.getElementById('choice4of3');
let choices3    = [choice11, choice12, choice13, choice14];

// Määritellään oikea vastaus satunnaiseen kohtaan
let correctAnswerIndex3 = Math.floor(Math.random() * choices3.length);
choices3[correctAnswerIndex3].textContent = `${perimeter} m`;

// Määritellään väärät vastaukset ja se, etteivät ne toistu vaihtoehdoissa
let usedOptions3 = [perimeter];
for (let i = 0; i < choices3.length; i++) {
  if (i !== correctAnswerIndex3) {
    let incorrectOption;
    do {
      incorrectOption = getRandomNumber(10, 32);
    } while (usedOptions3.includes(incorrectOption) || incorrectOption == perimeter);
    choices3[i].textContent = `${incorrectOption} m`;
    usedOptions3.push(incorrectOption);
  }
}

// Asetetaan event-listener "kuuntelemaan" mitä vaihtoehtoa käyttäjä painaa
let radioButtons3 = document.querySelectorAll('input[name="q3"]');
for (let i = 0; i < radioButtons3.length; i++) {
  radioButtons3[i].addEventListener('click', function() {
    checkAnswer3();
  });
}

// Tarkistetaan oliko vastaus oikein ja jos oli, lisätään 1 piste muuttujaan "totalScore"
function checkAnswer3() {

  // Luodaan edistymispalkin funktio
  let currentQuestionNumber = 3; 
  let totalNumberOfQuestions = 5; 
  let progressBarWidth = (currentQuestionNumber / totalNumberOfQuestions) * 100;
  document.querySelector('.progress-bar').style.width = `${progressBarWidth}%`;

  let answer3 = document.querySelector('input[name="q3"]:checked');

  if (answer3.value == correctAnswerIndex3) {
    totalScore++;
    choices3[correctAnswerIndex3].parentNode.classList.add('correct');
  } else {
    //totalScore += 0;
    answer3.parentNode.classList.add('incorrect');
    choices3[correctAnswerIndex3].parentNode.classList.add('correct');
  }
  document.getElementById("total").innerHTML = totalScore;
  document.getElementById("next3").classList.remove("hidden");

  // varmistetaan että käyttäjä ei voi vaihtaa vastausta
  for (let i = 0; i < radioButtons3.length; i++) {
    radioButtons3[i].disabled = true;
  }
}


//KYSYMYS 4 vaihtoehdot ja muu laskenta
let choice16    = document.getElementById('choice1of4');
let choice17    = document.getElementById('choice2of4');
let choice18    = document.getElementById('choice3of4');
let choice19    = document.getElementById('choice4of4');
let choices4    = [choice16, choice17, choice18, choice19];

// Määritellään oikea vastaus satunnaiseen kohtaan
let correctAnswerIndex4 = Math.floor(Math.random() * choices4.length);
choices4[correctAnswerIndex4].textContent = `${days} päivää`;

// Määritellään väärät vastaukset ja se, etteivät ne toistu vaihtoehdoissa
let usedOptions4 = [days];
for (let i = 0; i < choices4.length; i++) {
  if (i !== correctAnswerIndex4) {
    let incorrectOption;
    do {
      incorrectOption = getRandomNumber(25, 65);
    } while (usedOptions4.includes(incorrectOption) || incorrectOption == days);
    choices4[i].textContent = `${incorrectOption} päivää`;
    usedOptions4.push(incorrectOption);
  }
}

// Asetetaan event-listener "kuuntelemaan" mitä vaihtoehtoa käyttäjä painaa
let radioButtons4 = document.querySelectorAll('input[name="q4"]');
for (let i = 0; i < radioButtons4.length; i++) {
  radioButtons4[i].addEventListener('click', function() {
    checkAnswer4();
  });
}

// Tarkistetaan oliko vastaus oikein ja jos oli, lisätään 1 piste muuttujaan "totalScore"
function checkAnswer4() {

  // Luodaan edistymispalkin funktio
  let currentQuestionNumber = 4; 
  let totalNumberOfQuestions = 5; 
  let progressBarWidth = (currentQuestionNumber / totalNumberOfQuestions) * 100;
  document.querySelector('.progress-bar').style.width = `${progressBarWidth}%`;

  let answer4 = document.querySelector('input[name="q4"]:checked');

  if (answer4.value == correctAnswerIndex4) {
    totalScore++;
    choices4[correctAnswerIndex4].parentNode.classList.add('correct');
  } else {
    //totalScore += 0;
    answer4.parentNode.classList.add('incorrect');
    choices4[correctAnswerIndex4].parentNode.classList.add('correct');
  }
  document.getElementById("total").innerHTML = totalScore;
  document.getElementById("next4").classList.remove("hidden");

  // varmistetaan että käyttäjä ei voi vaihtaa vastausta
  for (let i = 0; i < radioButtons4.length; i++) {
    radioButtons4[i].disabled = true;
  }
}


// KYSYMYS 5 vaihtoehdot ja muu laskenta
let choice21    = document.getElementById('choice1of5');
let choice22    = document.getElementById('choice2of5');
let choice23    = document.getElementById('choice3of5');
let choice24    = document.getElementById('choice4of5');
let choices5    = [choice21, choice22, choice23, choice24];

// Määritellään oikea vastaus satunnaiseen kohtaan
let correctAnswerIndex5 = Math.floor(Math.random() * choices5.length);
choices5[correctAnswerIndex5].textContent = `${greenOdds} %`;

// Määritellään väärät vastaukset ja se, etteivät ne toistu vaihtoehdoissa
let usedOptions5 = [greenOdds];
for (let i = 0; i < choices5.length; i++) {
  if (i !== correctAnswerIndex5) {
    let incorrectOption;
    do {
      incorrectOption = getRandomNumber(1, 100);
    } while (usedOptions5.includes(incorrectOption) || incorrectOption == greenOdds);
    choices5[i].textContent = `${incorrectOption} %`;
    usedOptions5.push(incorrectOption);
  }
}

// Asetetaan event-listener "kuuntelemaan" mitä vaihtoehtoa käyttäjä painaa
let radioButtons5 = document.querySelectorAll('input[name="q5"]');
for (let i = 0; i < radioButtons5.length; i++) {
  radioButtons5[i].addEventListener('click', function() {
    checkAnswer5();
  });
}

// Tarkistetaan oliko vastaus oikein ja jos oli, lisätään 1 piste muuttujaan "totalScore"
function checkAnswer5() {

  // Luodaan edistymispalkin funktio
  let currentQuestionNumber = 5; 
  let totalNumberOfQuestions = 5; 
  let progressBarWidth = (currentQuestionNumber / totalNumberOfQuestions) * 100;
  document.querySelector('.progress-bar').style.width = `${progressBarWidth}%`;

  let answer5 = document.querySelector('input[name="q5"]:checked');

  if (answer5.value == correctAnswerIndex5) {
    totalScore++;
    choices5[correctAnswerIndex5].parentNode.classList.add('correct');
  } else {
    //totalScore += 0;
    answer5.parentNode.classList.add('incorrect');
    choices5[correctAnswerIndex5].parentNode.classList.add('correct');
  }
  document.getElementById("total").innerHTML = totalScore;
  document.getElementById("next5").classList.remove("hidden");

  // varmistetaan että käyttäjä ei voi vaihtaa vastausta
  for (let i = 0; i < radioButtons5.length; i++) {
    radioButtons5[i].disabled = true;
  }


// Tulostetaan tsemppiviestit käyttäjälle oikeiden vastausten lukumäärän perusteella
let excellent = '<div><img src="./matikka_sivu/images/excellent.jpg" style="width: 400px; height: 300px;"><p class = "source">img source: http://www.quickmeme.com/meme/36ghko</p></div>';
let notBad = '<div><img src="./matikka_sivu/images/notbad.jpg" style="width: 400px; height: 300px;"><p class = "source">img source: https://www.bbc.com/news/technology-20237531</p></div>';
let seriously = '<div><img src="./matikka_sivu/images/serious.jpg" style="width: 400px; height: 300px;"><p class = "source">img source: https://knowyourmeme.com/memes/are-you-serious-face-seriously</p></div>';


if (totalScore>=4) {
  document.getElementById("resultMessage").innerHTML = excellent;
} else if (totalScore<4 && totalScore>=2) {
  document.getElementById("resultMessage").innerHTML = notBad;
} else if (totalScore<2) {
  document.getElementById("resultMessage").innerHTML = seriously;
}


// Tulostetaan oikeiden vastausten määrä näkyviin
document.getElementById("total").innerHTML = totalScore;
}