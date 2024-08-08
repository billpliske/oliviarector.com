<script setup>
import { useRouter } from 'vue-router'
import { useStore } from '@/stores/store';

const router = useRouter()
const store = useStore()

const props = defineProps(['userEmail'])

</script>

<template>
	<div class="header">
		<div class="inner-header">
			<h3>Olivia is 10!</h3>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.header {
	background-color: #121212;
	position: fixed;
	right: 0;
	top: 0;
	width: 100%;
	z-index: 3;
}

.inner-header {
	position: relative;
	height: 70px;
	display: grid;
	justify-content: start;
	align-content: center;
	margin-left: 70px;
}

h3 {
	text-transform: uppercase;
	letter-spacing: 3px;
	font-weight: 800;
}
</style>
