<template>
	<section class="m-auto md:w-[70%] w-[90%] md:pt-36 pt-20 md:pb-40 pb-14">
		<div class="md:text-4xl text-2xl font-bold mb-4">Available tools</div>

       	<div class="mt-8 eco-item bottom-scroll-animation">
       		<div class="md:absolute w-44 h-44 ico flex items-center justify-center cursor-pointer transition-[transform] ease-in-out hover:-translate-y-2">
       			<NuxtImg src="/img/home/eco-ico11.png" />
       		</div>
   			<div class="text-2xl text-[#111111] font-bold md:ml-48 px-6 py-7 tit">AI Creates Character Images</div>
   			<div class="con py-8 md:pr-12 md:ml-[89px] md:pl-32">
   				<div class="text-2xl">Avatar Studio</div>
   				<div class="text-[#cccccc] text-base mt-4">Utilizing advanced AI Art technology, anyone can create high-quality, personalized characters without the need for complex drawing skills. This meets the needs of game design, digital art creation, or simply curiosity and the desire to create.</div>
   			</div>
       	</div>

       	<div class="mt-8 eco-item bottom-scroll-animation r">
       		<div class="md:absolute w-44 h-44 ico flex items-center justify-center cursor-pointer transition-[transform] ease-in-out hover:-translate-y-2">
       			<NuxtImg src="/img/home/eco-ico22.png" />
       		</div>
   			<div class="text-2xl text-[#111111] font-bold md:mr-48 px-6 py-7 tit md:text-right">AI Creates Personalized Human Voices</div>
   			<div class="con py-8 md:pl-12 md:mr-[75px] md:pr-32">
   				<div class="flex items-center">
   					<div class="text-2xl flex-1">Voice Studio</div>
   					<!-- <div class="imgico flex items-center justify-center ml-4 cursor-pointer transition-[transform] hover:scale-105">
   						<NuxtImg src="/img/home/eco-ico1.png" />
   					</div>
   					<div class="imgico flex items-center justify-center ml-4 cursor-pointer transition-[transform] hover:scale-105">
   						<NuxtImg src="/img/home/eco-ico2.png" />
   					</div>
   					<div class="imgico flex items-center justify-center ml-4 cursor-pointer transition-[transform] hover:scale-105">
   						<NuxtImg src="/img/home/eco-ico3.png" />
   					</div>
   					<div class="imgico flex items-center justify-center ml-4 cursor-pointer transition-[transform] hover:scale-105">
   						<NuxtImg src="/img/home/eco-ico4.png" />
   					</div> -->
   				</div>
   				<div class="text-[#cccccc] text-base mt-4">Sound has the ability to connect hearts and evoke emotions. Therefore, we are dedicated to providing an intuitive, user-friendly platform that enables everyone to effortlessly create, edit, and share customized AI voices. From realistic human voices to fantastical sound effects, your creativity will know no bounds.</div>
   			</div>
       	</div>

       	<div class="mt-12 eco-item bottom-scroll-animation">
       		<div class="md:absolute w-44 h-44 ico flex items-center justify-center cursor-pointer transition-[transform] ease-in-out hover:-translate-y-2">
       			<NuxtImg src="/img/home/eco-ico33.png" />
       		</div>
   			<div class="text-2xl text-[#111111] font-bold md:ml-48 px-6 py-7 tit">AI Generates Game Storylines</div>
   			<div class="con py-8 md:pr-12 md:ml-[89px] md:pl-32">
   				<div class="text-2xl">Plot Studio</div>
   				<div class="text-[#cccccc] text-base mt-4">An intuitive, easy-to-use tool that, with just simple commands or prompts, enables AI to provide unique story concepts, plot developments, and character designs. Unleash your creative potential. Bring more fascinating stories and gaming experiences to the world!</div>
   			</div>
       	</div>


       	<div class="mt-16 md:text-4xl text-2xl font-bold mb-4">Engine</div>

       	<div class="mt-8 eco-item bottom-scroll-animation">
       		<div class="md:absolute w-44 h-44 ico flex items-center justify-center cursor-pointer transition-[transform] ease-in-out hover:-translate-y-2">
       			<NuxtImg src="/img/home/eco-ico44.png" />
       		</div>
   			<div class="text-2xl text-[#111111] font-bold md:ml-48 px-6 py-7 tit">AI-Native Interactive Narrative Game Engine</div>
   			<div class="con py-8 md:pr-12 md:ml-[89px] md:pl-32">
   				<div class="text-2xl">FuHsi Saga Engine</div>
   				<div class="text-[#cccccc] text-base mt-4">By deeply integrating AI technology, the FuHsi Saga Engine offers a user-friendly, intuitive platform that, leveraging the power of artificial intelligence, enables anyone to easily create and experience their unique games, and share this joy with the world. With the assistance of AI, games can dynamically adjust storylines and outcomes in real time based on player decisions and preferences, delivering an exclusive and unparalleled gaming experience to each player.</div>
   			</div>
       	</div>
       
	</section>
</template>

<style lang="scss" scoped>
.eco-item{
	position: relative;
	&.r{
		.ico{
			right: 0; left: auto;
		}
	}
	.ico{
		left: 0; top: 0; background: linear-gradient(180deg, #1a1a1a 0%, #1d1d1d 100%); border: 1px solid; border-image-source: linear-gradient(180deg, #161616 0%, #1d1d1d 100%); border-radius: 2px; z-index: 2;
	}
	.tit{
		text-shadow: -1px -1px 0 #666666, 1px -1px 0 #666666, -1px 1px 0 #666666, 1px 1px 0 #666666, 0 0 5px #000;
	}
	.imgico{
		width: 40px; height: 40px; background: linear-gradient(222.1deg, rgba(138, 255, 212, 0.12) 11.5%, rgba(138, 255, 212, 0.06) 110.51%); border-radius: 1px;
	}
	.con{
		background: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.02) 100%); border: 1px solid; border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%); border-radius: 2px; z-index: 1;
	}
}
</style>