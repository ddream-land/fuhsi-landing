<template>
	<section class="m-auto md:w-[70%] w-[90%] pt-16 pb-32">
		<div class="md:text-4xl text-2xl font-bold mb-4">Backers</div>
		<div class="grid md:grid-cols-4 grid-cols-2 2xl:gap-48 md:gap-16 gap-4 mt-12">
			<div v-for="itm in list" class="text-center pb-4">
       			<NuxtImg :src="itm.img" class="object-cover w-full rounded-sm bottom-scroll-animation" style="aspect-ratio: 1 / 1;"/>
				<div class="mt-4">{{itm.name}}</div>
			</div>
		</div>
       	
	</section>
</template>
<script setup>
const list = [
	{ img: '/img/home/backers/uphonest_capital_logo.jpg', name: 'UpHonest Capital' },
	{ img: '/img/home/backers/grandventures.jpg', name: 'Grand Ventures' },
	{ img: '/img/home/backers/agoraventures.jpg', name: 'Agora Ventures' },
	{ img: '/img/home/backers/giantnetwork.jpg', name: 'Giant Network' },
]
</script>
<style lang="scss" scoped>

</style>