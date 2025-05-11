const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const restartButton = document.getElementById('restart');

const quizQuestions = [
  {
    question: "Cili nga këto materiale është më i riciklueshmi?",
    answers: {
      a: "Plastika",
      b: "Qelqi",
      c: "Letra"
    },
    correctAnswer: "b"
  },
  {
    question: "Çfarë ndodh me mbeturinat që nuk riciklohen?",
    answers: {
      a: "Digjen ose groposen",
      b: "Dërgohen për eksport",
      c: "Transformohen në ujë"
    },
    correctAnswer: "a"
  },
  {
    question: "Cila ngjyrë përdoret për kosha të mbeturinave plastike?",
    answers: {
      a: "E gjelbër",
      b: "E verdhë",
      c: "Blu"
    },
    correctAnswer: "b"
  }
];

function buildQuiz() {
  const output = [];
  quizQuestions.forEach((q, i) => {
    const answers = [];
    for (let letter in q.answers) {
      answers.push(
        `<label>
          <input type="radio" name="question${i}" value="${letter}" />
          ${letter}: ${q.answers[letter]}
        </label><br>`
      );
    }
    output.push(
      `<div class="question"><strong>${q.question}</strong></div>
       <div class="answers">${answers.join('')}</div><hr>`
    );
  });
  quizContainer.innerHTML = output.join('');
}

function showResults() {
  const answerContainers = quizContainer.querySelectorAll('.answers');
  let numCorrect = 0;

  quizQuestions.forEach((q, i) => {
    const selected = (answerContainers[i].querySelector(`input[name=question${i}]:checked`) || {}).value;
    if (selected === q.correctAnswer) {
      numCorrect++;
      answerContainers[i].style.color = 'green';
    } else {
      answerContainers[i].style.color = 'red';
    }
  });

  resultsContainer.innerHTML = `Ju keni marrë ${numCorrect} nga ${quizQuestions.length} përgjigje saktë.`;
  restartButton.style.display = 'inline-block';
  submitButton.style.display = 'none';
}

function restartQuiz() {
  location.reload();
}

buildQuiz();
submitButton.addEventListener('click', showResults);
restartButton.addEventListener('click', restartQuiz);
const exitButton = document.getElementById('exit');
exitButton.addEventListener('click', () => {
  window.location.href = 'Konkurse mjedisore.html'; // kjo është faqja ku do të çojë
});

