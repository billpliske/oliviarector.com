<script setup>
import { ref, computed } from 'vue';

const movies = ['Jaws', 'Raiders of the Lost Ark', 'Ghostbusters', 'Star Wars', 'Empire Strikes Back', 'Grease', 'The Matrix'];

const getRandomMovies = () => {
  const shuffledMovies = movies.sort(() => 0.5 - Math.random());
  return shuffledMovies.slice(0, 3);
};

const scrambleString = (str) => {
  const chars = str.split('');
  for (let i = chars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }
  return chars.join('');
};

const selectedMovies = getRandomMovies();
const scrambledMovies = selectedMovies.map(movie => scrambleString(movie));

const userGuesses = ref(['', '', '']);

const resultMessage = ref('');

const checkGuesses = () => {
  let correctCount = 0;
  selectedMovies.forEach((movie, index) => {
    if (userGuesses.value[index].toLowerCase() === movie.toLowerCase()) {
      correctCount++;
    }
  });
  resultMessage.value = `You got ${correctCount} out of 3 correct.`;
};
</script>

<template>
  <div class="wrapper">
    <div>
      <ol>
        <li v-for="(scrambledMovie, index) in scrambledMovies"
            :key="index">{{ scrambledMovie.replace(/\s+/g, '').toLowerCase() }}</li>
      </ol>
      <div v-for="(scrambledMovie, index) in scrambledMovies"
           :key="index">
        <label :for="'input' + (index + 1)">{{ index + 1 }}.</label>
        <input v-model="userGuesses[index]"
               :id="'input' + (index + 1)" />
      </div>
      <button @click="checkGuesses">Enter</button>
      <p>{{ resultMessage }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>