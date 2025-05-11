const quizData = [
    {
        question: "What is the standard for Packaged Drinking Water?",
        options: [
            "IS 14543",
            "IS 13428",
            "IS 15410",
            "IS 10500"
        ],
        correct: "IS 14543"
    },
    {
        question: "Which standard pertains to Packaged Natural Mineral Water?",
        options: [
            "IS 13428",
            "IS 15410",
            "IS 1165",
            "IS 7803"
        ],
        correct: "IS 13428"
    },
    {
        question: "What is the standard for Edible Salt?",
        options: [
            "IS 15410",
            "IS 10501",
            "IS 1166",
            "IS 2362"
        ],
        correct: "IS 15410"
    },
    {
        question: "Which standard specifies Drinking Water?",
        options: [
            "IS 10500",
            "IS 2062",
            "IS 2830",
            "IS 1165"
        ],
        correct: "IS 10500"
    },
    {
        question: "What is the standard for Canned Fruits and Vegetables?",
        options: [
            "IS 2346",
            "IS 2062",
            "IS 1166",
            "IS 1786"
        ],
        correct: "IS 2346"
    },
    {
        question: "Which standard relates to Milk Powder?",
        options: [
            "IS 1165",
            "IS 10500",
            "IS 10501",
            "IS 1608"
        ],
        correct: "IS 1165"
    },
    {
        question: "What is the standard for Margarine?",
        options: [
            "IS 10501",
            "IS 7803",
            "IS 1166",
            "IS 13428"
        ],
        correct: "IS 10501"
    },
    {
        question: "Which standard specifies Condensed Milk?",
        options: [
            "IS 1166",
            "IS 14543",
            "IS 15410",
            "IS 2362"
        ],
        correct: "IS 1166"
    },
    {
        question: "What is the standard for Cocoa Butter?",
        options: [
            "IS 7803",
            "IS 2346",
            "IS 1165",
            "IS 302-1"
        ],
        correct: "IS 7803"
    },
    {
        question: "Which standard pertains to Spices and Condiments?",
        options: [
            "IS 2362",
            "IS 2062",
            "IS 1786",
            "IS 2346"
        ],
        correct: "IS 2362"
    },
    {
        question: "What is the standard for Hot Rolled Low, Medium, and High Tensile Structural Steel?",
        options: [
            "IS 2062",
            "IS 2830",
            "IS 1786",
            "IS 1079"
        ],
        correct: "IS 2062"
    },
    {
        question: "Which standard is for Carbon Steel Cast Billet Ingots?",
        options: [
            "IS 2830",
            "IS 1786",
            "IS 432",
            "IS 2062"
        ],
        correct: "IS 2830"
    },
    {
        question: "What is the standard for High Strength Deformed Steel Bars?",
        options: [
            "IS 1786",
            "IS 1079",
            "IS 2062",
            "IS 432"
        ],
        correct: "IS 1786"
    },
    {
        question: "Which standard covers Hot Rolled Carbon Steel Sheet?",
        options: [
            "IS 1079",
            "IS 2062",
            "IS 961",
            "IS 1239"
        ],
        correct: "IS 1079"
    },
    {
        question: "What is the standard for Mild Steel and Medium Tensile Steel Bars?",
        options: [
            "IS 432",
            "IS 15914",
            "IS 1608",
            "IS 1852"
        ],
        correct: "IS 432"
    },
    {
        question: "Which standard is for Steels for Cold Heading?",
        options: [
            "IS 15914",
            "IS 2062",
            "IS 1786",
            "IS 1239"
        ],
        correct: "IS 15914"
    },
    {
        question: "What is the standard for Structural Steel (High Tensile)?",
        options: [
            "IS 961",
            "IS 1852",
            "IS 432",
            "IS 1786"
        ],
        correct: "IS 961"
    },
    {
        question: "Which standard pertains to Steel Tubes and Fittings?",
        options: [
            "IS 1239",
            "IS 1852",
            "IS 1608",
            "IS 2062"
        ],
        correct: "IS 1239"
    },
    {
        question: "What is the standard for Rolling and Cutting Tolerances?",
        options: [
            "IS 1852",
            "IS 1608",
            "IS 2062",
            "IS 1786"
        ],
        correct: "IS 1852"
    },
    {
        question: "Which standard deals with Mechanical Testing of Metals?",
        options: [
            "IS 1608",
            "IS 2062",
            "IS 1786",
            "IS 432"
        ],
        correct: "IS 1608"
    },
    {
        question: "What is the standard for Safety of Audio, Video, and Similar Electronic Apparatus?",
        options: [
            "IS 616",
            "IS 302-1",
            "IS 694",
            "IS 13703"
        ],
        correct: "IS 616"
    },
    {
        question: "Which standard is for Safety of Household Electrical Appliances?",
        options: [
            "IS 302-1",
            "IS 694",
            "IS 9000",
            "IS 16242"
        ],
        correct: "IS 302-1"
    },
    {
        question: "What is the standard for PVC Insulated Cables?",
        options: [
            "IS 694",
            "IS 1293",
            "IS 2418",
            "IS 13703"
        ],
        correct: "IS 694"
    },
    {
        question: "Which standard pertains to Plugs and Socket-Outlets?",
        options: [
            "IS 1293",
            "IS 302-1",
            "IS 9000",
            "IS 13703"
        ],
        correct: "IS 1293"
    },
    {
        question: "What is the standard for Basic Environmental Testing Procedures?",
        options: [
            "IS 9000",
            "IS 10322",
            "IS 13703",
            "IS 616"
        ],
        correct: "IS 9000"
    },
    {
        question: "Which standard is for Luminaries (General Requirements)?",
        options: [
            "IS 10322",
            "IS 302-2-30",
            "IS 16242",
            "IS 694"
        ],
        correct: "IS 10322"
    },
    {
        question: "What is the standard for Safety of Room Heaters?",
        options: [
            "IS 302-2-30",
            "IS 616",
            "IS 16242",
            "IS 13703"
        ],
        correct: "IS 302-2-30"
    },
    {
        question: "Which standard deals with Uninterruptible Power Systems?",
        options: [
            "IS 16242",
            "IS 13703",
            "IS 694",
            "IS 1293"
        ],
        correct: "IS 16242"
    },
    {
        question: "What is the standard for Low Voltage Fuses?",
        options: [
            "IS 13703",
            "IS 2418",
            "IS 9000",
            "IS 616"
        ],
        correct: "IS 13703"
    },
    {
        question: "Which standard pertains to Tubular Fluorescent Lamps?",
        options: [
            "IS 2418",
            "IS 694",
            "IS 302-1",
            "IS 9000"
        ],
        correct: "IS 2418"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit-answer');
const progressContainer = document.getElementById('progress-container');
const homeButton = document.getElementById('back-to-home');


function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];

    if (currentQuestion) {
       
        progressContainer.innerHTML = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;

        
        questionContainer.innerHTML = `<h2>${currentQuestion.question}</h2>`;
        optionsContainer.innerHTML = '';

        
        currentQuestion.options.forEach(option => {
            const optionElement = document.createElement('div');
            optionElement.textContent = option;
            optionElement.classList.add('option');

            
            optionElement.addEventListener('click', () => {
               
                document.querySelectorAll('.option').forEach(opt => {
                    opt.classList.remove('selected');
                });

                
                optionElement.classList.add('selected');
                selectedAnswer = option;
            });

            optionsContainer.appendChild(optionElement);
        });
    } else {
        console.log("No more questions!");
    }
}


function checkAnswer() {
    if (!selectedAnswer) {
        resultContainer.innerHTML = '<p>Please select an option!</p>';
        return;
    }

    const correctAnswer = quizData[currentQuestionIndex].correct;
    const options = document.querySelectorAll('.option');

    
    options.forEach(option => {
        if (option.textContent === selectedAnswer) {
            if (selectedAnswer === correctAnswer) {
                option.classList.add('correct'); 
                resultContainer.innerHTML = '<p>Correct!</p>';
                score++;
            } else {
                option.classList.add('wrong'); 
                resultContainer.innerHTML = `<p>Wrong! The correct answer was: ${correctAnswer}</p>`;
            }
        }

        
        if (option.textContent === correctAnswer) {
            option.classList.add('correct');
        }
    });

    
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
            resultContainer.innerHTML = '';
            selectedAnswer = null; 
        } else {
            showFinalScore();
        }
    }, 5000);
}


function showFinalScore() {
    questionContainer.innerHTML = `<h2>Your score is ${score} out of ${quizData.length}</h2>`;
    optionsContainer.innerHTML = '';
    submitButton.style.display = 'none';
    progressContainer.innerHTML = ''; 
}


loadQuestion();


submitButton.addEventListener('click', checkAnswer);
