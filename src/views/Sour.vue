<script setup>
import { ref } from 'vue';

// Step 1: Create a data set of 20 images
const images = [
  { src: 'image1.jpg', value: true },
  { src: 'image2.jpg', value: true },
  { src: 'image3.jpg', value: true },
  { src: 'image4.jpg', value: true },
  { src: 'image5.jpg', value: true },
  { src: 'image6.jpg', value: true },
  { src: 'image7.jpg', value: true },
  { src: 'image8.jpg', value: true },
  { src: 'image9.jpg', value: true },
  { src: 'image10.jpg', value: true },
  { src: 'image11.jpg', value: true },
  { src: 'image12.jpg', value: true },
  { src: 'image13.jpg', value: false },
  { src: 'image14.jpg', value: false },
  { src: 'image15.jpg', value: false },
  { src: 'image16.jpg', value: false },
  { src: 'image17.jpg', value: false },
  { src: 'image18.jpg', value: false },
  { src: 'image19.jpg', value: false },
  { src: 'image20.jpg', value: false }
];

// Step 2: Randomly choose 10 images to display
const selectedImages = ref([]);
const resetImages = () => {
  selectedImages.value = images.sort(() => 0.5 - Math.random()).slice(0, 10).map(image => ({
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

  // Calculate the percentage score based on correctly identified true items
  const percentageScore = (correctlyIdentified / totalTrueItems) * 100 - (incorrectChecks / totalItems) * 100;

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
    <div v-if="!result"
         class="image-grid">
      <div v-for="(image, index) in selectedImages"
           :key="index"
           class="image-item"
           @click="toggleImage(index)">
        <img :src="image.src"
             :alt="'Image ' + (index + 1)" />
        <div v-if="image.selected"
             class="checkmark">✔️</div>
      </div>
    </div>
    <button v-if="!result"
            @click="submit">Submit</button>
    <div v-if="result">
      <pre>{{ result }}</pre>
      <button @click="tryAgain">Try Again</button>
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

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
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

.checkmark {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  color: green;
}
</style>