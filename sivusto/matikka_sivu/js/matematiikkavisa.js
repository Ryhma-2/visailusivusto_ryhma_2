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
discounts   = [20, 25, 30, 40];
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
let choice5 = document.getElementById('choice5of1');
let choices = [choice1, choice2, choice3, choice4, choice5];

// Määritellään oikea vastaus satunnaiseen kohtaan
let correctAnswerIndex = Math.floor(Math.random() * choices.length);
choices[correctAnswerIndex].textContent = `${finalPrice} €`;

// Määritellään väärät vastaukset ja se, etteivät ne toistu koodissa
let usedOptions = [finalPrice];
for (let i = 0; i < choices.length; i++) {
  if (i !== correctAnswerIndex) {
    let incorrectOption;
    do {
      incorrectOption = finalPrice - getRandomNumber(5, finalPrice -5 );
    } while (usedOptions.includes(incorrectOption));
    choices[i].textContent = `${incorrectOption} €`;
    usedOptions.push(incorrectOption);
  }
}

// Tarkistetaan onko käyttäjä vastannut oikein ja jos on, talletaan se muuttujaan totalScore
document.getElementById("next1").addEventListener("click", checkAnswer1);
function checkAnswer1() {
  let answer = document.querySelector('input[name="q1"]:checked');
  console.log("answer value: ", answer.value);
  console.log("correctAnswerIndex value: ", correctAnswerIndex);
  if (answer.value == correctAnswerIndex) {
  totalScore++;
} else {
  totalScore += 0;
}
  document.getElementById("total").innerHTML = totalScore;
}


// KYSYMYS 2 vaihtoehdot ja muu laskenta
let choice6     = document.getElementById('choice1of2');
let choice7     = document.getElementById('choice2of2');
let choice8     = document.getElementById('choice3of2');
let choice9     = document.getElementById('choice4of2');
let choice10    = document.getElementById('choice5of2');
let choices2   = [choice6, choice7, choice8, choice9, choice10];

// Määritellään oikea vastaus satunnaiseen kohtaan
let correctAnswerIndex2 = Math.floor(Math.random() * choices2.length);
choices2[correctAnswerIndex2].textContent = `${badSongs} kpl`;

// Määritellään väärät vastaukset ja se, etteivät ne toistu koodissa
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

// Tarkistetaan onko käyttäjä vastannut oikein ja jos on, talletaan se muuttujaan totalScore
document.getElementById("next2").addEventListener("click", checkAnswer2);
function checkAnswer2() {
  let answer = document.querySelector('input[name="q2"]:checked');
  console.log("answer value: ", answer.value);
  console.log("correctAnswerIndex value: ", correctAnswerIndex2);
  if (answer.value == correctAnswerIndex2) {
  totalScore++;
} else {
  totalScore += 0;
}
  document.getElementById("total").innerHTML = totalScore;
}

// KYSYMYS 3 vaihtoehdot ja muu laskenta
let choice11    = document.getElementById('choice1of3');
let choice12    = document.getElementById('choice2of3');
let choice13    = document.getElementById('choice3of3');
let choice14    = document.getElementById('choice4of3');
let choice15    = document.getElementById('choice5of3');
let choices3    = [choice11, choice12, choice13, choice14, choice15];

// Määritellään oikea vastaus satunnaiseen kohtaan
let correctAnswerIndex3 = Math.floor(Math.random() * choices3.length);
choices3[correctAnswerIndex3].textContent = `${perimeter} m`;

// Määritellään väärät vastaukset ja se, etteivät ne toistu koodissa
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

// Tarkistetaan onko käyttäjä vastannut oikein ja jos on, talletaan se muuttujaan totalScore
document.getElementById("next3").addEventListener("click", checkAnswer3);
function checkAnswer3() {
  let answer = document.querySelector('input[name="q3"]:checked');
  console.log("answer value: ", answer.value);
  console.log("correctAnswerIndex value: ", correctAnswerIndex3);
  if (answer.value == correctAnswerIndex3) {
  totalScore++;
} else {
  totalScore += 0;
}
  document.getElementById("total").innerHTML = totalScore;
}

//KYSYMYS 4 vaihtoehdot ja muu laskenta
let choice16    = document.getElementById('choice1of4');
let choice17    = document.getElementById('choice2of4');
let choice18    = document.getElementById('choice3of4');
let choice19    = document.getElementById('choice4of4');
let choice20    = document.getElementById('choice5of4');
let choices4    = [choice16, choice17, choice18, choice19, choice20];

// Määritellään oikea vastaus satunnaiseen kohtaan
let correctAnswerIndex4 = Math.floor(Math.random() * choices4.length);
choices4[correctAnswerIndex4].textContent = `${days} päivää`;

// Määritellään väärät vastaukset ja se, etteivät ne toistu koodissa
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

// Tarkistetaan onko käyttäjä vastannut oikein ja jos on, talletaan se muuttujaan totalScore
document.getElementById("next4").addEventListener("click", checkAnswer4);
function checkAnswer4() {
  let answer = document.querySelector('input[name="q4"]:checked');
  console.log("answer value: ", answer.value);
  console.log("correctAnswerIndex value: ", correctAnswerIndex4);
  if (answer.value == correctAnswerIndex4) {
  totalScore++;
} else {
  totalScore += 0;
}
  document.getElementById("total").innerHTML = totalScore;
}


// KYSYMYS 5 vaihtoehdot ja muu laskenta
let choice21    = document.getElementById('choice1of5');
let choice22    = document.getElementById('choice2of5');
let choice23    = document.getElementById('choice3of5');
let choice24    = document.getElementById('choice4of5');
let choice25    = document.getElementById('choice5of5');
let choices5    = [choice21, choice22, choice23, choice24, choice25];

// Määritellään oikea vastaus satunnaiseen kohtaan
let correctAnswerIndex5 = Math.floor(Math.random() * choices5.length);
choices5[correctAnswerIndex5].textContent = `${greenOdds} %`;

// Määritellään väärät vastaukset ja se, etteivät ne toistu koodissa
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

// Tarkistetaan onko käyttäjä vastannut oikein ja jos on, talletaan se muuttujaan totalScore
document.getElementById("next5").addEventListener("click", checkAnswer5);
function checkAnswer5() {
  let answer = document.querySelector('input[name="q5"]:checked');
  console.log("answer value: ", answer.value);
  console.log("correctAnswerIndex value: ", correctAnswerIndex5);
  if (answer.value == correctAnswerIndex5) {
  totalScore++;
} else {
  totalScore += 0;
}
  document.getElementById("total").innerHTML = totalScore;
}

document.getElementById("total").innerHTML = totalScore;
