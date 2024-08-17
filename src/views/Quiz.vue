<script setup>
import { ref, onMounted } from 'vue';

// Define 20 questions about states and their capitals
const questions = [
  { question: "What was the first Disney show she appeared in?", options: ["High School Musical", "Bizaardvark", "KC Undercover", "Fast Layne"], answer: "Bizaardvark" },
  { question: "When is Olivia's birthday?", options: ["February 24, 2004", "February 20, 2003", "March 12, 2003", "October 12, 2002"], answer: "February 20, 2003" },
  { question: "What's her middle name?", options: ["Madison", "Lee", "Isabel", "Jade"], answer: "Isabel" },
  { question: "What was the first song she released?", options: ["good 4 u", "deja vu", "drivers license", "brutal"], answer: "drivers license" },
  { question: "What was her character's name in High School Musical?", options: ["Jessica", "Nini", "Chandler", "Annabelle"], answer: "Nini" },
  { question: "The first time Olivia was on TV, it was for:", options: ["performing at the state fair", "a commercial for Sour Patch Kids", "a Disney TV show", "an old Navy commercial"], answer: "an old Navy commercial" },
  { question: "In what state did Olivia grow up?", options: ["California", "Arizona", "Colorado", "Pennsylvania"], answer: "California" },
  { question: "What was the second song she released from the 'Sour' album?", options: ["deja vu", "good 4 u", "drivers license", "vampire"], answer: "deja vu" },
  { question: "How many Grammy Awards did she win in 2022?", options: ["1", "5", "2", "3"], answer: "3. Best New Artist, Best Pop Vocal Album, and Best Pop Solo Performance" },
  { question: "What was the first single she released from the album 'Guts'?", options: ["bad idea right?", "lacy", "get him back", "vampire"], answer: "vampire" },
];

// State variables
const selectedQuestions = ref([]);
const userAnswers = ref(Array(10).fill(null));
const resultMessage = ref('');
const quizSubmitted = ref(false);
const correctAnswers = ref([]);

// Function to randomly select 10 questions
const getRandomQuestions = () => {
  const shuffledQuestions = questions.sort(() => 0.5 - Math.random());
  return shuffledQuestions.slice(0, 10);
};

// On component mount, select 10 random questions
onMounted(() => {
  selectedQuestions.value = getRandomQuestions();
});

// Function to check the answers
const checkAnswers = () => {
  let correctCount = 0;
  correctAnswers.value = [];
  selectedQuestions.value.forEach((question, index) => {
    if (userAnswers.value[index] === question.answer) {
      correctCount++;
      correctAnswers.value.push({ number: index + 1, question: question.question, answer: question.answer });
    }
  });
  resultMessage.value = `You got <span class="correct-count">${correctCount}</span> out of 10 correct.`;
  quizSubmitted.value = true;
};

// Function to reset the quiz
const resetQuiz = () => {
  selectedQuestions.value = getRandomQuestions();
  userAnswers.value = Array(10).fill(null);
  resultMessage.value = '';
  quizSubmitted.value = false;
  correctAnswers.value = [];
};
</script>

<template>
  <div class="wrapper">
    <h1 v-if="!quizSubmitted">Quiz</h1>
    <form @submit.prevent="checkAnswers"
          v-if="!quizSubmitted">
      <div v-for="(question, index) in selectedQuestions"
           :key="index"
           class="question">
        <p>{{ index + 1 }}. {{ question.question }}</p>
        <div class="options"
             v-for="option in question.options"
             :key="option">
          <label>
            <input type="radio"
                   :name="'question' + index"
                   :value="option"
                   v-model="userAnswers[index]" />
            {{ option }}
          </label>
        </div>
      </div>
      <button class="submit-button"
              type="submit">Submit</button>
    </form>
    <div v-else>
      <div class="result-message"
           v-html="resultMessage"></div>
      <div class="correct-answers">
        <h2>Correct Answers:</h2>
        <ul>
          <li v-for="answer in correctAnswers"
              :key="answer.number">
            {{ answer.number }}. {{ answer.question }} - <strong>{{ answer.answer }}</strong>
          </li>
        </ul>
      </div>
      <button class="submit-button"
              @click="resetQuiz">Try Again</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  padding: 20px;
}

h1 {
  color: #514B88;
  font-size: 40px;
  letter-spacing: -1px;
  line-height: 52px;
  margin-bottom: 10px;
}

.question {
  p {
    font-size: 20px;
    font-variation-settings: "wdth" 100, "wght" 700;
    margin: 20px 0 10px 0;
    line-height: 25px;
  }
}

.options {
  font-size: 16px;

}

.result-message {
  font-size: 1.2em;
  margin-bottom: 20px;
}

.correct-count {
  font-weight: bold;
  color: green;
}

.result-message {
  color: #514B88;
  font-size: 30px;
  font-variation-settings: "wdth" 100, "wght" 700;
  line-height: 34px;
}

strong {
  color: #514B88;
  font-variation-settings: "wdth" 100, "wght" 700;
}

.submit-button {
  margin: 30px 0;
}

/******** Large screens ************/

@media (min-width: 821px) {

  .wrapper {
    padding: 40px;
  }
}
</style>