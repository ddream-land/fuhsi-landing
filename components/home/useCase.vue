<template>
	<section class="m-auto md:w-[70%] w-[90%] md:pt-24 pt-20 overflow-hidden">
		<div class="md:text-4xl text-2xl font-bold mb-16">Use Case</div>
		<div class="grid grid-cols-1 md:grid-cols-2 md:gap-x-12 2xl:gap-x-20">
   			<div class="rounded-md cover mb-8 left-scroll-animation">
   				<NuxtImg src="/img/home/usecase/use_1.png" class="w-full rounded-md" style="aspect-ratio: 5 / 3;"/>
			</div>
   			<div class="rounded-md cover mb-8 right-scroll-animation">
   				<NuxtImg src="/img/home/usecase/use_2.png" class="w-full rounded-md" style="aspect-ratio: 5 / 3;"/>
			</div>
		</div>
		<div class="px-2 pt-8 pb-16 text-center text-[#e1e1e1]">Our <b class="text-white text-lg">Game Creation Multi-Agent System (GCMAS)</b> transforms user-input tags into comprehensive <b class="text-white text-lg">game designs and settings</b>. This AI-driven system generates all necessary resources to produce a fully automated visual novel game.Powered by Google Cloud Platform's <b class="text-white text-lg">Gemini large language model</b>, our GCMAS streamlines the entire game creation process.</div>

		<div class="grid grid-cols-1 md:grid-cols-2 md:gap-x-12 2xl:gap-x-20">
   			<div class="rounded-md cover mb-8 left-scroll-animation">
   				<NuxtImg src="/img/home/usecase/use_3.png" class="w-full rounded-md" style="aspect-ratio: 5 / 3;"/>
			</div>
   			<div class="rounded-md cover mb-8 right-scroll-animation">
   				<NuxtImg src="/img/home/usecase/use_4.png" class="w-full rounded-md" style="aspect-ratio: 5 / 3;"/>
			</div>
		</div>
		<div class="px-2 pt-8 pb-16 text-center text-[#e1e1e1]">Once users complete their game design or settings, our <b class="text-white text-lg">Game Creation Resource Generator (GCRG)</b> initiates a task to produce all necessary game assets. These include <b class="text-white text-lg">background music, scene images, NPC portraits with varied emotions and outfits, and character CGs,</b> all essential for rendering a fully AI-driven visual novel game.We plan to deploy the GCRG on Google Cloud Platform's <b class="text-white text-lg">GPU instances</b>. Specifically, we're considering G2 VMs equipped with 2 L4 GPUs, 6 vCPUs, and 48GB RAM, unless a more suitable configuration is identified.</div>

		<div class="grid grid-cols-1 md:grid-cols-3 md:gap-x-28 2xl:gap-x-44 px-8 2xl:px-20">
			<div class="rounded-md cover mb-4 left-scroll-animation">
	   			<NuxtImg src="/img/home/usecase/use_5.png" class="w-full rounded-md" style="aspect-ratio: 0.46 / 1;"/>
			</div>
			<div class="rounded-md cover mb-4">
	   			<NuxtImg src="/img/home/usecase/use_6.png" class="w-full rounded-md" style="aspect-ratio: 0.46 / 1;"/>
			</div>
			<div class="rounded-md cover mb-4 right-scroll-animation">
	   			<NuxtImg src="/img/home/usecase/use_7.png" class="w-full rounded-md" style="aspect-ratio: 0.46 / 1;"/>
			</div>
		</div>
		<div class="px-2 pt-12 pb-16 text-center text-[#e1e1e1]">During gameplay, players interact with NPCs as the plot unfolds, making choices that influence the story's progression. Our <b class="text-white text-lg">Game Driver (GD)</b> dynamically manages multiple aspects of the game, including: <b class="text-white text-lg">advancing the plot based on player interactions, maintaining and evolving player-NPC relationships, controlling the status of dynamic quests, leading the story towards one of unlimited possible endings.</b><br/> The GD is powered by Google Cloud Platform's <b class="text-white text-lg">Gemini large language model</b>, enabling a sophisticated and responsive gaming experience.</div>

		<div class="grid grid-cols-1 md:grid-cols-3 md:gap-x-28 2xl:gap-x-44 px-8 2xl:px-20">
			<div class="mb-4 left-scroll-animation">
				<div class="rounded-md cover">
	   				<NuxtImg src="/img/home/usecase/use_8.png" class="w-full rounded-md" style="aspect-ratio: 0.46 / 1;"/>
   				</div>
   				<div class="text-xl font-bold mt-6">CGs by level-up</div>
			</div>
			<div class="mb-4">
				<div class="rounded-md cover">
	   				<NuxtImg src="/img/home/usecase/use_9.png" class="w-full rounded-md" style="aspect-ratio: 0.46 / 1;"/>
   				</div>
   				<div class="text-xl font-bold mt-6">CGs by Gacha</div>
			</div>
			<div class="mb-4 right-scroll-animation">
				<div class="rounded-md cover">
   					<NuxtImg src="/img/home/usecase/use_10.png" class="w-full rounded-md" style="aspect-ratio: 0.46 / 1;"/>
				</div>
   				<div class="text-xl font-bold mt-6">Costume Change</div>
   				<div class="text-xl font-bold">by AI</div>
			</div>
		</div>
		<div class="px-2 pt-12 pb-16 text-center text-[#e1e1e1]">During gameplay, players interact with NPCs as the plot unfolds, making choices that influence the story's progression. Our <b class="text-white text-lg">Game Driver (GD)</b> dynamically manages multiple aspects of the game, including: <b class="text-white text-lg">advancing the plot based on player interactions, maintaining and evolving player-NPC relationships, controlling the status of dynamic quests, leading the story towards one of unlimited possible endings.</b>
The GD is powered by Google Cloud Platform's <b class="text-white text-lg">Gemini large language model</b>, enabling a sophisticated and responsive gaming experience.</div>
	</section>
</template>

<style lang="scss" scoped>
.cover{
    cursor: pointer; overflow: hidden; 
    &:hover{
        &>img{
            transform: scale(1.2) !important;
        }
    }
    &>img{
        width: 100%; max-width: 200%; height: 100%; object-fit: cover; transition: transform 300ms !important;
    }
}
</style>