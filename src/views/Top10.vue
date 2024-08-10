<script setup>
import { ref, onMounted } from 'vue';
import draggable from 'vuedraggable';

const songs = ref([
  { title: 'Song 1', imageUrl: 'https://via.placeholder.com/50', rank: 1 },
  { title: 'Song 2', imageUrl: 'https://via.placeholder.com/50', rank: 2 },
  { title: 'Song 3', imageUrl: 'https://via.placeholder.com/50', rank: 3 },
  { title: 'Song 4', imageUrl: 'https://via.placeholder.com/50', rank: 4 },
  { title: 'Song 5', imageUrl: 'https://via.placeholder.com/50', rank: 5 },
  { title: 'Song 6', imageUrl: 'https://via.placeholder.com/50', rank: 6 },
  { title: 'Song 7', imageUrl: 'https://via.placeholder.com/50', rank: 7 },
  { title: 'Song 8', imageUrl: 'https://via.placeholder.com/50', rank: 8 },
  { title: 'Song 9', imageUrl: 'https://via.placeholder.com/50', rank: 9 },
  { title: 'Song 10', imageUrl: 'https://via.placeholder.com/50', rank: 10 },
]);

const shuffledSongs = ref([]);

const isSubmitted = ref(false);
const correctCount = ref(0);
const correctPositions = ref([]);

onMounted(() => {
  shuffledSongs.value = [...songs.value].sort(() => Math.random() - 0.5);
  // Debugging: Log the shuffledSongs array to ensure it is populated correctly
  console.log('shuffledSongs:', shuffledSongs.value);
});

const handleSubmit = () => {
  correctCount.value = 0;
  correctPositions.value = [];

  shuffledSongs.value.forEach((song, index) => {
    if (song.rank === index + 1) {
      correctCount.value++;
      correctPositions.value.push(`#${index + 1}: ${song.title}`);
    }
  });

  isSubmitted.value = true;
};

const handleTryAgain = () => {
  shuffledSongs.value = [...songs.value].sort(() => Math.random() - 0.5);
  isSubmitted.value = false;
  correctCount.value = 0;
  correctPositions.value = [];
};
</script>

<template>
  <div class="wrapper">
    <h1>Top 10 Songs</h1>
    <div v-if="!isSubmitted">
      <draggable v-model="shuffledSongs"
                 class="grid">
        <template #item="{ element, index }">
          <div class="grid-item">
            <div class="number">{{ index + 1 }}</div>
            <div class="draggable-item">
              <img :src="element.imageUrl"
                   :alt="element.title" />
              <p>{{ element.title }}</p>
            </div>
          </div>
        </template>
      </draggable>
      <button @click="handleSubmit"
              class="submit-button">Submit</button>
    </div>
    <div v-else>
      <p>Good job! You got {{ correctCount }} correct.</p>
      <ul>
        <li v-for="position in correctPositions"
            :key="position">{{ position }}</li>
      </ul>
      <button @click="handleTryAgain"
              class="submit-button">Try Again!</button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin-top: 50px;
}

.grid {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.grid-item {
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  border: 1px solid #ccc;
  margin: 5px 0;
  padding: 0 10px;
}

.number {
  width: 30px;
  text-align: left;
}

.draggable-item {
  display: flex;
  align-items: center;
  height: 50px;
  margin-left: 10px;
}

.draggable-item img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.submit-button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}</style>