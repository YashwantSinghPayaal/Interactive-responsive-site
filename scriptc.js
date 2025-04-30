const quizQuestions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Rome"],
        correct:2
    },
    {
        question: "Which Planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct:1 
    },
    {
        question: "Which is the highest peak in the world?",
        answers: ["Mt Everest", "Nanda Devi", "Kailash", "Mt Kilamejaro"],
        correct:0
    }
];

let currentQuestion = 0;
function loadQuestion() {
    const q = quizQuestions[currentQuestion];
    document.getElementById('question').innerText = q.question;
    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';
    q.answers.forEach((answer, index) => {
        const btn = document.createElement('button');
        btn.innerText = answer;
        btn.onclick = ()=> checkAnswer(index);
        answersDiv.appendChild(btn);
    });
}

function checkAnswer(index) {
    const result = document.getElementById('result');
    if (index === quizQuestions[currentQuestion].correct) {
        result.innerText = "Correct!";
    }else{
        result.innerText = "Wrong! Try again.";
    }
    currentQuestion = (currentQuestion + 1) % quizQuestions.length;
    setTimeout(() => {
        result.innerText = '';
        loadQuestion();
    }, 1000);
}

loadQuestion();

//Carousel
let currentImage = 0;
const images = document.querySelectorAll('.carousel img');

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

function nextImage() {
    currentImage = (currentImage + 1) % images.length;
    showImage(currentImage);
}

function prevImage() {
    currentImage = (currentImage - 1 + images.length) % images.length;
    showImage(currentImage);
}

async function fetchJoke(){
    const res = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await res.json();
    document.getElementById('joke').innerText = `${data.setup} - ${data.punchline}`;
}