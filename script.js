const quizData = [
    {
        question: 'What animal represents Hufflepuff house?',
        a: 'Ravenclaw eagle',
        b: 'lion',
        c: ' Badger',
        d: 'Snake',
        correct: 'c'
    }, {
        question: 'Which type of insect is Ronald Weasley most afraid of?',
        a: 'Spider',
        b: 'Snake',
        c: 'Dog',
        d: 'Rat',
        correct: 'a'
    }, {
        question: 'Which of these is NOT one of the Unforgivable Curses?',
        a: 'Cruciatus Curse',
        b: 'Imperius Curse',
        c: 'Sectumsempra',
        d: 'Avada Kedavra',
        correct: 'c'
    }, {
        question: 'What is the model of the first broom Harry ever receives?',
        a: 'Cleansweep One',
        b: 'Nimbus 2000',
        c: 'Hoover',
        d: 'Firebolt',
        correct: 'b'
    }, {
        question: 'Which professor teaches flying lessons?',
        a: 'Professor Grubbly-Plank',
        b: 'Sybill Trelawney',
        c: 'Charity Burbage',
        d: 'Madam Hooch',
        correct: 'd'
    }, {
        question: 'Who guards the entrance to the Gryffindor common room?',
        a: 'The Grey Lady',
        b: 'The Fat Friar',
        c: 'The Bloody Baron',
        d: 'The Fat Lady',
        correct: 'd'
    }, {
        question: 'What does one say to close the Marauder’s Map and make it blank again?',
        a: 'Mischief Managed',
        b: 'Nothing to See Here',
        c: 'All Done',
        d: 'Hello Professor',
        correct: 'a'
    }, {
        question: 'How many Weasley siblings are there?',
        a: '8',
        b: '7',
        c: '4',
        d: '6',
        correct: 'b'
    }, {
        question: 'How do you summon a Patronus?',
        a: 'Patronia Paternus',
        b: 'Expelliarmus Patronicha',
        c: 'Expecto Patronum',
        d: 'Accio Patronus',
        correct: 'c'
    }, {
        question: 'Who has given Harry Potter the Invisibility cloak?',
        a: 'Dumbledore',
        b: 'Mad-eye Moody',
        c: 'Professor Snape',
        d: 'Dobby',
        correct: 'a'
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselctAnswers();

    const currentQuizData = quizData[currentQuiz];
    
    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected(){

    let answer = undefined;

    answerEls.forEach((answerEl)=> {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselctAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h2>You answered correctly
            ${score}/${quizData.length} questions.</h2> 
            
            <button onclick = "location.reload()">Reload</button>
        `;
        }

    }
});