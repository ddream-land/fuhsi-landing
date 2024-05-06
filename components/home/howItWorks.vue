<template>
	<section class="m-auto 2xl:w-[70%] md:w-[80%] w-[90%] py-12 pt-24 overflow-hidden">
		<div class="md:text-4xl text-2xl font-bold mb-8">{{ $t('home.howItWorks') }}</div>
		<div class="bg-[#161616] md:p-20 p-4 grid md:grid-cols-3 grid-cols-1 md:gap-x-12 md:gap-y-24">
			<div class="md:w-[23vw] w-full">
				<NuxtImg src="/img/home/one.png" class="w-8/12 h-auto bottom-scroll-animation"/>
			</div>
			<div class="flex flex-col justify-center sm:col-span-2 pr-6 right-scroll-animation">
				<div class="wtit">Idea</div>
				<div class="text-[#cccccc] text-base mt-6 md:mb-4 mb-8">Bring forth any creative idea that flashes through your mind. Whether a brief description or a set of keywords, they are the keys to unlock this magical journey. No technical background is needed—just your imagination.</div>
			</div>


			<div class="flex flex-col justify-center sm:col-span-2 md:pl-12 left-scroll-animation">
				<div class="wtit">AI Design</div>
				<div class="text-[#cccccc] text-base mt-6 md:mb-4 mb-8">AI will suggest design elements such as the game's visual style, interface layout, and narrative interactions based on your creativity. AI will generate multiple design proposals for you to choose from or provide further feedback on, ensuring the final design meets your expectations precisely.</div>
			</div>
			<NuxtImg src="/img/home/two.png" class="md:w-[23vw] w-full h-auto bottom-scroll-animation"/>


			<NuxtImg src="/img/home/three.png" class="md:w-[23vw] w-full h-auto bottom-scroll-animation"/>
			<div class="flex flex-col justify-center sm:col-span-2 pr-6 right-scroll-animation">
				<div class="wtit">AI Dev</div>
				<div class="text-[#cccccc] text-base mt-6 md:mb-4 mb-8">Once the design is confirmed, the AI development phase will commence. In this stage, artificial intelligence will take on the heavy lifting of coding, transforming the design concepts into actual game code.</div>
			</div>


			<div class="flex flex-col justify-center sm:col-span-2 md:pl-12 left-scroll-animation">
				<div class="wtit">AI Iteration</div>
				<div class="text-[#cccccc] text-base mt-6 md:mb-4 mb-8">After the first playable version of the game is completed, AI can use self-learning or your feedback to improve and optimize the game. Whether adjusting difficulty balance, enhancing user experience, or adding new content, AI can respond quickly, continuously elevating the quality of the game.</div>
			</div>
			<NuxtImg src="/img/home/four.png" class="md:w-[23vw] w-full h-auto bottom-scroll-animation"/>


			<NuxtImg src="/img/home/five.png" class="md:w-[23vw] w-full h-auto bottom-scroll-animation"/>
			<div class="flex flex-col justify-center sm:col-span-2 pr-6 right-scroll-animation">
				<div class="wtit">AI Testing</div>
				<div class="text-[#cccccc] text-base mt-6 md:mb-4 mb-8">During the AI testing phase, artificial intelligence will conduct comprehensive testing of the game. AI can simulate different gaming scenarios, locate and fix issues and bugs, ensuring game stability and fluidity.</div>
			</div>


			<div class="flex flex-col justify-center sm:col-span-2 md:pl-12 left-scroll-animation">
				<div class="wtit">Game Delivery</div>
				<div class="text-[#cccccc] text-base mt-6 md:mb-4 mb-8">Games that pass testing will be directly run on cloud platforms for players to experience or share. Moreover, AI can also provide subsequent updates and maintenance services as needed, ensuring a continuously optimized gaming experience.</div>
			</div>
			<div class="md:w-[23vw] w-full">
				<NuxtImg src="/img/home/six.png" class="md:ml-4 w-7/12 h-auto bottom-scroll-animation"/>
			</div>
			
		</div>
	</section>
</template>

<style lang="scss" scoped>
.wtit{
	position: relative; font-size: 28px; z-index: 1; width: fit-content;
	&:after{
		content: ""; display: block; position: absolute; left: -8px; bottom: 0; width: calc(100% + 40px); height: 16px; background-color: #575757; z-index: -1;
	}	
}
</style>