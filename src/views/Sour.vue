<script setup>
import { ref } from 'vue';
import pretzels from '@/assets/sour/pretzels.png';
import donuts from '@/assets/sour/donuts.png';
import grapes from '@/assets/sour/grapes.png';
import mm from '@/assets/sour/mm.png';
import potatochips from '@/assets/sour/potato-chips.png';
import fries from '@/assets/sour/fries.png';
import icecream from '@/assets/sour/icecream.png';
import grapefruit from '@/assets/sour/grapefruit.png';
import lemons from '@/assets/sour/lemons.png';
import sourpatch from '@/assets/sour/sour-patch.png';
import lemondrops from '@/assets/sour/lemon-drops.png';
import vinegar from '@/assets/sour/vinegar.png';
import warheads from '@/assets/sour/warheads.png';
import check from '@/assets/check.png';

// Step 1: Create a data set of 20 images
const images = [
  { src: warheads, value: true },
  { src: vinegar, value: true },
  { src: lemondrops, value: true },
  { src: sourpatch, value: true },
  { src: lemons, value: true },
  { src: grapefruit, value: true },
  { src: pretzels, value: false },
  { src: donuts, value: false },
  { src: grapes, value: false },
  { src: mm, value: false },
  { src: potatochips, value: false },
  { src: fries, value: false },
  { src: icecream, value: false },
];

// Step 2: Randomly choose 10 unique images to display
const selectedImages = ref([]);
const resetImages = () => {
  const uniqueImages = new Set();
  while (uniqueImages.size < 10) {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    uniqueImages.add(randomImage);
  }
  selectedImages.value = Array.from(uniqueImages).map(image => ({
    ...image,
    selected: false
  }));
};
resetImages();

// Step 3: Toggle state for each image
const toggleImage = (index) => {
  selectedImages.value[index].selected = !selectedImages.value[index].selected;
};

// Step 4: Submit button to check user's selections
const result = ref(null);

const submit = () => {
  const totalItems = selectedImages.value.length;
  const totalTrueItems = selectedImages.value.filter(image => image.value).length;
  const correctlyIdentified = selectedImages.value.filter(image => image.selected && image.value).length;
  const incorrectChecks = selectedImages.value.filter(image => image.selected && !image.value).length;
  const totalSelectedItems = selectedImages.value.filter(image => image.selected).length;

  // Calculate precision and recall
  const precision = correctlyIdentified / totalSelectedItems;
  const recall = correctlyIdentified / totalTrueItems;

  // Calculate the final score as the harmonic mean of precision and recall
  const percentageScore = (2 * precision * recall) / (precision + recall) * 100;

  let grade;
  if (percentageScore >= 90) {
    grade = 'A';
  } else if (percentageScore >= 80) {
    grade = 'B';
  } else if (percentageScore >= 70) {
    grade = 'C';
  } else if (percentageScore >= 60) {
    grade = 'D';
  } else {
    grade = 'F';
  }

  result.value = `
    Total Items: ${totalItems}
    Total True Items: ${totalTrueItems}
    Correctly Identified: ${correctlyIdentified}
    Incorrect Checks: ${incorrectChecks}
    Percentage Score: ${percentageScore.toFixed(2)}%
    Grade: ${grade}
  `;
};

// Step 5: Try again button to reset the game
const tryAgain = () => {
  result.value = null;
  resetImages();
};
</script>

<template>
  <div class="wrapper">
    <h1>Sour</h1>
    <p>Click on the images you think are sour, and Submit.</p>
    <div v-if="!result"
         class="image-grid">
      <div v-for="(image, index) in selectedImages"
           :key="index"
           class="image-item"
           @click="toggleImage(index)">
        <img :src="image.src"
             :alt="'Image ' + (index + 1)" />
        <div v-if="image.selected"
             class="checkmark"><span style="color: white"><img :src="check"
                 alt="checkmarked" /></span>
        </div>
      </div>
    </div>
    <button class="submit-button"
            v-if="!result"
            @click="submit">Submit</button>
    <div v-if="result">
      <pre>{{ result }}</pre>
      <button class="submit-button"
              @click="tryAgain">Try Again</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  padding: 20px;
}

h1 {
  color: #514B88;
  font-size: 50px;
  font-variation-settings: "wdth" 100, "wght" 800;
  line-height: 50px;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
  margin-top: 20px;
  width: 100%;
}

.image-item {
  position: relative;
  cursor: pointer;
}

.image-item img {
  width: 100%;
  height: auto;
}

.submit-button {
  margin-top: 20px;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 6px);
  // transform: translate(-50%, -50%);
  font-size: 2rem;
  background-color: rgba(35, 32, 60, 0.7);
  display: grid;
  justify-content: center;
  align-content: center;

  img {
    width: 70px;
    display: grid;
    justify-content: center;
    align-content: center;
  }
}

/******** Large screens ************/

@media (min-width: 821px) {
  .wrapper {
    padding: 40px;
  }

  .checkmark {
    img {
      width: 100px;
    }
  }

  .image-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 20px;
    width: 100%;
  }
}
</style>