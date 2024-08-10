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
const dragOverIndex = ref(null);

onMounted(() => {
  shuffledSongs.value = [...songs.value].sort(() => Math.random() - 0.5);
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

const onDragStart = () => {
  dragOverIndex.value = null;
};

const onDragEnd = () => {
  dragOverIndex.value = null;
};

const onDragOver = (event) => {
  dragOverIndex.value = event.newIndex;
};

const checkMove = (evt) => {
  dragOverIndex.value = evt.relatedContext.index;
  return true;
};
</script>

<template>
  <div class="wrapper">
    <h1>Top 10 Songs</h1>
    <div v-if="!isSubmitted">
      <draggable v-model="shuffledSongs"
                 class="grid"
                 ghost-class="ghost"
                 :move="checkMove"
                 @start="onDragStart"
                 @end="onDragEnd"
                 @change="onDragOver">
        <template #item="{ element, index }">
          <div :class="['grid-item', { 'drag-over': dragOverIndex === index }]"
               :style="{ order: Math.floor(index / 5) + (index % 5) * 2 }">
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

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin-top: 50px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  width: 100%;
  max-width: 600px;
}

.grid-item {
  display: flex;
  align-items: center;
  height: 50px;
  border: 1px solid #ccc;
  padding: 0 10px;
  transition: background-color 0.3s ease;
}

.grid-item.drag-over {
  background-color: rgba(0, 123, 255, 0.5);
}

.ghost {
  opacity: 0.4;
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
}
</style>