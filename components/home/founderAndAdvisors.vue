<template>
	<section class="m-auto md:w-[70%] w-[90%] pt-16 pb-8">
		<div class="md:text-4xl text-2xl font-bold mb-4">Founder and Advisors</div>
		<div class="grid md:grid-cols-5 grid-cols-2 2xl:gap-24 md:gap-8 gap-4 md:mt-16 mt-8">
			<div v-for="itm in list" class="text-center pb-4">
       			<NuxtImg :src="itm.img" class="object-cover w-full rounded-sm bottom-scroll-animation" style="aspect-ratio: 1 / 1;"/>
				<div class="mt-4">{{itm.name}}</div>
				<div class="mt-4 text-xs">{{itm.desc}}</div>
			</div>
		</div>
       	
	</section>
</template>
<script setup>
const list = [
	{ img: '/img/home/backers/adrianwang.png', name: 'Adrian Wang', desc: 'ceo' },
	{ img: '/img/home/backers/tonywang.webp', name: 'Tony Wang', desc: 'Co-founder of Agora' },
	{ img: '/img/home/backers/fanzhang.jpg', name: 'Fan Zhang', desc: 'Co-founder of Sequoia China' },
	{ img: '/img/home/backers/rubylu.png', name: 'Ruby Lu', desc: 'Founder of Atypical Ventures' },
	{ img: '/img/home/backers/yuzhushi.jpg', name: 'Yuzhu Shi', desc: 'Founder of Giant Network' },
]
</script>
<style lang="scss" scoped>

</style>