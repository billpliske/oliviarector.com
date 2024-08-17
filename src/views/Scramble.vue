<script setup>
import { ref, computed } from 'vue';

const correctGuessesList = ref([]);
const submitted = ref(false); // Track if the form is submitted

const movies = ['drivers license', 'good 4 u', 'deja vu', 'traitor', 'happier', 'favorite crime', 'vampire', 'jealousy jealousy', 'All I Want', 'brutal', '1 step forward 3 steps back', 'enough for you', 'bad idea right', 'hope ur ok', 'get him back', 'Cant Catch Me Now', 'all american bitch', 'the grudge', 'lacy', 'love is embarrassing', 'obsessed', 'making the bed', 'ballad of a homeschooled girl', 'logical', 'Wondering', 'pretty isnt pretty', 'so american', 'teenage dream', 'Just for a Moment', 'The Rose Song', 'Start of Something New', 'stranger', 'I Think I Kinda You Know', 'Out of the Old', 'scared of my guitar', 'girl ive always been'];

const getRandomMovies = () => {
  const shuffledMovies = movies.sort(() => 0.5 - Math.random());
  return shuffledMovies.slice(0, 10);
};

const scrambleString = (str) => {
  const chars = str.split('');
  for (let i = chars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }
  return chars.join('');
};

const selectedMovies = ref([]);
const scrambledMovies = ref([]);

selectedMovies.value = getRandomMovies();
scrambledMovies.value = selectedMovies.value.map(movie => scrambleString(movie));

const initializeGame = () => {
  selectedMovies.value = getRandomMovies();
  scrambledMovies.value = selectedMovies.value.map(movie => scrambleString(movie));
};

initializeGame(); // Call it initially to start the game

const userGuesses = ref(Array(selectedMovies.value.length).fill(''));

const resultMessage = ref('');

const checkGuesses = () => {
  let correctCount = 0;
  let correctGuesses = [];

  selectedMovies.value.forEach((movie, index) => {
    const userGuess = userGuesses.value[index];
    if (userGuess && userGuess.toLowerCase() === movie.toLowerCase()) {
      correctCount++;
      correctGuesses.push({ index, title: movie });
    }
  });

  correctGuessesList.value = correctGuesses;
  submitted.value = true; // Mark as submitted
};

const handleTryAgain = () => {
  correctGuessesList.value = [];
  submitted.value = false;
  initializeGame(); // Reinitialize game to get new movies and scramble them
  userGuesses.value = Array(selectedMovies.value.length).fill(''); // Reset user guesses
  resultMessage.value = ''; // Clear the result message
};
</script>

<template>
  <div class="wrapper">
    <div class="grid">
      <div>
        <h1>Song scramble</h1>
        <p>Unscramble the song titles below and submit. <em> For your answers, make sure to put in spaces!</em></p>
        <div class="list-container">
          <ol>
            <li v-for="(scrambledMovie, index) in scrambledMovies"
                :key="index">{{ scrambledMovie.replace(/\s+/g, '').toLowerCase() }}</li>
          </ol>
        </div>
      </div>
      <div>
        <div class="guesses"
             v-if="!submitted">
          <div v-for="(scrambledMovie, index) in scrambledMovies"
               :key="index">
            <div class="input-container">
              <label :for="'input' + (index + 1)">{{ index + 1 }}.</label>
              <input v-model="userGuesses[index]"
                     :id="'input' + (index + 1)" />
            </div>
          </div>
        </div>
        <div class="results"
             v-else>
          <p>You got <span>{{ correctGuessesList.length }}</span> out of <span>10</span> correct.</p>
          <p v-if="correctGuessesList.length > 0">Correct guesses:</p>
          <ul>
            <li v-for="(guess, index) in correctGuessesList"
                :key="index">
              {{ guess.index + 1 }}. {{ guess.title }}
            </li>
          </ul>
          <button @click="handleTryAgain"
                  class="submit-button">Try Again!</button>
        </div>
      </div>
    </div>
    <button @click="checkGuesses"
            class="submit-button"
            v-if="!submitted">Submit</button>

  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  max-width: 1500px;
  padding: 10px;
}

h1 {
  font-size: 45px;
  letter-spacing: -1px;
  line-height: 52px;
}

p {
  color: white;
  margin-bottom: 20px;
  overflow-wrap: break-word;

  em {
    color: #999;
  }
}

.list-container {
  display: flex;
  justify-content: start;
  margin-bottom: 20px;
  padding: 0 10px;

  ol {
    column-count: 2;
    column-gap: 20px;
    padding: 0;
    margin: 0;
    list-style-position: inside;

    li {
      overflow-wrap: break-word;
      word-break: break-all;
      text-indent: -16px;
      padding-left: 16px;
      line-height: 19px;
      margin-bottom: 5px;
    }

    li::marker {
      color: #792edb;
      font-weight: 700;
      font-variation-settings: "wdth" 100, "wght" 700;
    }
  }
}

.guesses {
  padding: 0 10px;

  div {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    width: 100%;

    label {
      margin-right: 10px;
      width: 20px;
    }

    input {
      flex-grow: 1;
      font-size: 18px;
      padding: 5px;
      width: 100%;
    }
  }
}



.results {
  margin-top: 30px;
  padding: 10px;


  p:first-of-type {
    background-color: #514B88;
    color: white;
    font-size: 40px;
    font-variation-settings: "wdth" 100, "wght" 700;
    line-height: 45px;
    padding: 20px;
    width: fit-content;

    span {
      color: gold;
    }
  }

  p:last-of-type {
    font-size: 24px;
    margin: 20px 0 0 0;
  }

  li {
    font-size: 20px;
  }
}

.submit-button {
  margin: 30px 0 0 10px;
}

/******** Large screens ************/

@media (min-width: 821px) {

  .wrapper {
    padding: 40px;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 20px;
  }

  .list-container {
    display: block;
    width: fit-content;

    ol {
      column-count: 1;
    }
  }

  .guesses {
    margin: 20px 0 0 20px;
  }

  .results {
    padding: 20px;


    p:first-of-type {
      font-size: 40px;
    }
  }
}
</style>