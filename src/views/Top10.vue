<script setup>
import { ref, computed, onMounted } from 'vue';
import draggable from 'vuedraggable';
import guts from '@/assets/guts.png'
import gutsspilled from '@/assets/guts-spilled.png'
import highschool from '@/assets/high-school-musical.png'
import sour from '@/assets/sour.png'
import spotify from '@/assets/spotify.png'

const songs = ref([
  { title: 'drivers license', imageUrl: sour, rank: 1 },
  { title: 'good 4 u', imageUrl: sour, rank: 2 },
  { title: 'deja vu', imageUrl: sour, rank: 3 },
  { title: 'traitor', imageUrl: sour, rank: 4 },
  { title: 'happier', imageUrl: sour, rank: 5 },
  { title: 'favorite crime', imageUrl: sour, rank: 6 },
  { title: 'vampire', imageUrl: guts, rank: 7 },
  { title: 'jealousy, jealousy', imageUrl: sour, rank: 8 },
  { title: 'All I Want', imageUrl: highschool, rank: 9 },
  { title: 'brutal', imageUrl: sour, rank: 10 },
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

const resultMessage = computed(() => {
  if (correctCount.value === 0) return "Oh no!";
  if (correctCount.value <= 3) return "Good try!";
  if (correctCount.value <= 6) return "Pretty good!";
  if (correctCount.value <= 8) return "Very impressive!";
  if (correctCount.value === 9) return "Holy cow!";
  if (correctCount.value === 10) return "You were perfect!";
  return "Good job!";
});
</script>

<template>
  <div class="wrapper">
    <div class="headline">
      <h4>Olivia Rodrigo's</h4>
      <h1>Top 10</h1>
      <h3>Streamed</h3>
      <h2>Songs</h2>
      <h5>All-time rankings by</h5>
      <img class="spotify"
           :src="spotify"
           alt="Spotify logo" />
    </div>
    <div v-if="!isSubmitted">
      <p class="intro">Fix the song order! Just drag & submit.</p>
      <draggable v-model="shuffledSongs"
                 class="grid"
                 ghost-class="ghost"
                 :move="checkMove"
                 @start="onDragStart"
                 @end="onDragEnd"
                 @change="onDragOver">
        <template #item="{ element, index }">

          <div :class="['grid-item', { 'drag-over': dragOverIndex === index }]">
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
    <div class="result"
         v-else>
      <p class="message">{{ resultMessage }}</p>
      <p>You got {{ correctCount }} correct.</p>
      <ul class="correct">
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
  display: block;
  font-family: 'Open Sans Variable', sans-serif;
  height: calc(100vh - 70px);
  margin-top: 70px;
  padding: 20px;

  div {
    justify-content: start;
    align-content: start;
  }
}

.headline {
  font-family: 'Open Sans Variable', sans-serif;
  font-weight: 800;
  font-variation-settings: "wdth" 100, "wght" 800;
  text-transform: uppercase;
  letter-spacing: -1px;
  line-height: 26px;

  h1 {
    display: inline-block;
    font-size: 28px;
    letter-spacing: -2px;
    line-height: 26px;
  }

  h2 {
    display: inline-block;
    font-size: 28px;
    letter-spacing: -3px;
    line-height: 26px;
    margin-left: 9px;
  }

  h3 {
    font-size: 28px;
    display: inline-block;
    line-height: 26px;
    margin-left: 9px;
  }

  h4 {
    font-size: 21px;
    font-weight: 300;
    font-variation-settings: "wdth" 75, "wght" 300;
    letter-spacing: 6px;
    line-height: 26px;
  }

  h5 {
    display: inline-block;
    font-size: 15px;
    font-variation-settings: "wdth" 75, "wght" 500;
    font-weight: 500;
    letter-spacing: 2px;
    line-height: 26px;
    margin: 0px 0 20px 0px;
  }
}

.spotify {
  width: 100px;
  position: relative;
  left: 6px;
  top: 6px;
}

.intro {
  color: #7165e6;
  font-size: 17px;
  font-weight: 500;
  font-variation-settings: "wdth" 75, "wght" 500;
  letter-spacing: 1px;
  line-height: 21px;
  margin-bottom: 10px;
  position: relative;
  top: 0px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 17px;
  width: 100%;
}

.grid-item {
  align-items: center;
  background-color: #514B88;
  display: flex;
  height: 35px;
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
  background-color: rgb(45, 14, 89);
  border-radius: 50%;
  font-size: 18px;
  font-variation-settings: "wdth" 95, "wght" 700;
  font-weight: 700;
  height: 30px;
  text-align: center;
  width: 30px;
}

.draggable-item {
  align-items: center;
  display: flex;
  font-size: 20px;
  font-variation-settings: "wdth" 100, "wght" 700;
  font-weight: 700;
  height: 50px;
  line-height: 25px;
  margin-left: 10px;

  &:hover {
    cursor: grab;
  }
}

.draggable-item img {
  width: 35px;
  height: 35px;
  margin-right: 10px;
}


.result {
  font-size: 20px;
  margin-top: 10px;
  font-weight: 500;

  font-variation-settings: "wdth" 95,
  "wght" 500 p {
    margin-bottom: 10px;
  }
}

.message {
  color: white;
  font-size: 46px;
  font-weight: 700;
  font-variation-settings: "wdth" 95, "wght" 700;
  line-height: 55px;
}

.correct {
  margin-top: 20px;
}

/******** Large screens ************/

@media (min-width: 821px) {
  .wrapper {
    display: grid;
    grid-template-columns: 400px 1fr;
    margin-top: 70px;
    max-width: 1200px;
  }

  .spotify {
    width: 245px;
  }

  .headline {
    text-transform: normal;
    letter-spacing: -1px;
    line-height: 60px;

    h1 {
      display: block;
      font-size: 98px;
      letter-spacing: -3px;
      line-height: 62px;
    }

    h2 {
      font-size: 96px;
      letter-spacing: -3px;
      line-height: 32px;
    }

    h3 {
      font-size: 62px;
      line-height: 74px;
    }

    h4 {
      font-size: 27px;
      font-weight: 300;
      font-variation-settings: "wdth" 75, "wght" 300;
      letter-spacing: 6px;
      line-height: 45px;
    }

    h5 {
      display: block;
      font-variation-settings: "wdth" 95, "wght" 500;
      letter-spacing: 7px;
      line-height: 6px;
      margin: 9px 0 0 6px;
    }
  }

  .spotify {
    left: 6px;
    top: 13px;
    width: 245px;
  }

  .intro {
    font-size: 18px;
    font-variation-settings: "wdth" 95, "wght" 500;
    margin: 10px 0;
    top: 0px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width: 100%;
    max-width: 1600px;
  }

  .grid-item {
    height: 80px;
  }


  .number {
    font-size: 20px;
    height: 35px;
    width: 35px;
  }

  .draggable-item img {
    width: 80px;
    height: 80px;
    margin-right: 10px;
  }

  .result {
    padding: 50px;
  }

}
</style>