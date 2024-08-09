<script setup>
import { ref, onMounted } from 'vue';

// Define 20 questions about states and their capitals
const questions = [
  { question: "What is the capital of Alabama?", options: ["Montgomery", "Juneau", "Phoenix", "Little Rock"], answer: "Montgomery" },
  { question: "What is the capital of Alaska?", options: ["Juneau", "Montgomery", "Phoenix", "Little Rock"], answer: "Juneau" },
  { question: "What is the capital of Arizona?", options: ["Phoenix", "Montgomery", "Juneau", "Little Rock"], answer: "Phoenix" },
  { question: "What is the capital of Arkansas?", options: ["Little Rock", "Montgomery", "Juneau", "Phoenix"], answer: "Little Rock" },
  { question: "What is the capital of California?", options: ["Sacramento", "Montgomery", "Juneau", "Phoenix"], answer: "Sacramento" },
  { question: "What is the capital of Colorado?", options: ["Denver", "Montgomery", "Juneau", "Phoenix"], answer: "Denver" },
  { question: "What is the capital of Connecticut?", options: ["Hartford", "Montgomery", "Juneau", "Phoenix"], answer: "Hartford" },
  { question: "What is the capital of Delaware?", options: ["Dover", "Montgomery", "Juneau", "Phoenix"], answer: "Dover" },
  { question: "What is the capital of Florida?", options: ["Tallahassee", "Montgomery", "Juneau", "Phoenix"], answer: "Tallahassee" },
  { question: "What is the capital of Georgia?", options: ["Atlanta", "Montgomery", "Juneau", "Phoenix"], answer: "Atlanta" },
  { question: "What is the capital of Hawaii?", options: ["Honolulu", "Montgomery", "Juneau", "Phoenix"], answer: "Honolulu" },
  { question: "What is the capital of Idaho?", options: ["Boise", "Montgomery", "Juneau", "Phoenix"], answer: "Boise" },
  { question: "What is the capital of Illinois?", options: ["Springfield", "Montgomery", "Juneau", "Phoenix"], answer: "Springfield" },
  { question: "What is the capital of Indiana?", options: ["Indianapolis", "Montgomery", "Juneau", "Phoenix"], answer: "Indianapolis" },
  { question: "What is the capital of Iowa?", options: ["Des Moines", "Montgomery", "Juneau", "Phoenix"], answer: "Des Moines" },
  { question: "What is the capital of Kansas?", options: ["Topeka", "Montgomery", "Juneau", "Phoenix"], answer: "Topeka" },
  { question: "What is the capital of Kentucky?", options: ["Frankfort", "Montgomery", "Juneau", "Phoenix"], answer: "Frankfort" },
  { question: "What is the capital of Louisiana?", options: ["Baton Rouge", "Montgomery", "Juneau", "Phoenix"], answer: "Baton Rouge" },
  { question: "What is the capital of Maine?", options: ["Augusta", "Montgomery", "Juneau", "Phoenix"], answer: "Augusta" },
  { question: "What is the capital of Maryland?", options: ["Annapolis", "Montgomery", "Juneau", "Phoenix"], answer: "Annapolis" }
];

// State variables
const selectedQuestions = ref([]);
const userAnswers = ref(Array(10).fill(null));
const resultMessage = ref('');
const quizSubmitted = ref(false);

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
  selectedQuestions.value.forEach((question, index) => {
    if (userAnswers.value[index] === question.answer) {
      correctCount++;
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
};
</script>

<template>
  <div class="wrapper">
    <h1>Quiz</h1>
    <form @submit.prevent="checkAnswers"
          v-if="!quizSubmitted">
      <div v-for="(question, index) in selectedQuestions"
           :key="index"
           class="question">
        <p>{{ index + 1 }}. {{ question.question }}</p>
        <div v-for="option in question.options"
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
      <button type="submit">Submit</button>
    </form>
    <div v-else>
      <div class="result-message"
           v-html="resultMessage"></div>
      <button @click="resetQuiz">Try Again</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.question {
  margin-bottom: 20px;
}

.result-message {
  font-size: 1.2em;
  margin-bottom: 20px;
}

.correct-count {
  font-weight: bold;
  color: green;
}</style>