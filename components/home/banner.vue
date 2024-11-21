<template>
	<div class="relative md:gap-x-40 bg-contain bg-no-repeat bg-center overflow-hidden" style="background-image: url('/img/home/bnr-bgw.png')">
		<div class="flex flex-col items-center justify-center md:h-[604px] z-10">
			<div class="text-center">
				<div class="md:flex items-center">
					<div class="md:text-6xl text-4xl tracking-tighter my-4 ml-12 mr-16">idea to game</div>
					<div class="md:text-6xl text-4xl font-bold mt-2">Made possible</div>
				</div>
				<div class="text-[#ccc] mt-8">Create your own customized game</div>

				<button class="bnr-btn cursor-pointer mt-12 mb-4 bg-cover bg-no-repeat bg-center text-black hover:text-slate-700 text-xl font-bold w-[349px] h-[82px]" style="background-image: url('/img/home/btn-ngw.png')">Start Building</button>
			</div>
			<div class="w-[80%] 2xl:w-[1000px] text-center mx-auto md:mt-12 mt-6 md:text-3xl text-xl !leading-normal" style="background-image: linear-gradient(to right, #18A9CC , #60EFE5);-webkit-background-clip: text;background-clip: text;color: transparent;">To build a community-owned film-level UGC interactive storytelling game platform to fulfill every fantasies </div>
		</div>
		<div class="flex flex-col justify-center z-10">
			<!-- <NuxtImg src="/img/home/bnr-coinnew.png" class="w-[341px] h-auto coin1 md:ml-12"/> -->

			<!-- <div class="flex">
				<div>
					<NuxtImg src="/img/home/bnr-coin1.png" class="w-[233px] h-auto coin1"/>
				</div>
				<div class="ml-16 mt-12">
					<NuxtImg src="/img/home/bnr-coin2.png" class="w-[80px] h-auto coin2"/>
				</div>
			</div>
			<div class="flex pl-24">
				<div class="mt-16">
					<NuxtImg src="/img/home/bnr-coin3.png" class="w-[74px] h-auto coin3"/>
				</div>
				<div class="ml-28">
					<NuxtImg src="/img/home/bnr-coin4.png" class="w-[178px] h-auto coin4"/>
				</div>
			</div> -->
		</div>
		<div class="lines" >
			<div v-for="i in 8"></div>
		</div>

	</div>
</template>
<script setup>

</script>
<style lang="scss" scoped>
.bnr-btn{
	position: relative; 
	&:hover{
		&:before{
			transform: translate(-18px, 18px);
		}
		&:after{
			transform: translate(18px, -18px);
		}
	}
	&:before{
		content: ""; position: absolute; left: 0; bottom: 0; display: block; width: 18px; height: 18px; background-color: #fff; transition: transform 300ms; transform: translate(-4px, 4px);
	}
	&:after{
		content: ""; position: absolute; right: 0; top: 0; display: block; width: 18px; height: 18px; background-color: #fff; transition: transform 300ms; transform: translate(4px, -4px);
	}
}

@keyframes raindrop {
  0% {
    opacity: 0; width: 1px;
    transform: translateY(0%);
  }
  50% {
    opacity: 1; width: 1px;
    transform: translateY(-75%);
  }
  100% {
    opacity: 0; width: 1px;
    transform: translateY(-150%);
  }
}
.coin1{
	animation: float 3s ease-in-out infinite;
}
.coin2{
	animation: float 5s ease-in-out infinite 1s;
}
.coin3{
	animation: float 3.5s ease-in-out infinite 0.5s;
}
.coin4{
	animation: float 4s ease-in-out infinite 1.5s;
}

@keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
}

.lines{
	&>div{
		position: absolute; display: block; z-index: 0;
	  	background-image: linear-gradient(to bottom, #fff, rgba(0, 224, 161, 0));
	  	animation: raindrop 3s linear infinite; 

		&:nth-child(1) {
	        top: 400px; left: 170px; height: 97px; animation-delay: 0.5s;
	    }
	    &:nth-child(2) {
	        top: 230px; left: 287px; height: 177px; animation-delay: 1.5s;
	    }
	    &:nth-child(3) {
	        top: 521px; left: 325px; height: 109px; animation-delay: 2s;
	    }
	    &:nth-child(4) {
	        top: 558px; left: 935px; height: 177px; animation-delay: 2.5s;
	    }
	    &:nth-child(5) {
	        top: 409px; left: 870px; height: 69px; animation-delay: 3s;
	    }
	    &:nth-child(6) {
	        top: 629px; left: 1364px; height: 177px; animation-delay: 3.5s;
	    }
	    &:nth-child(7) {
	        top: 164px; left: 1595px; height: 148px; animation-delay: 4s;
	    }
	    &:nth-child(8) {
	        top: 491px; left: 1709px; height: 177px; animation-delay: 4.5s;
	    }
	    &:nth-child(9) {
	        top: 420px; left: 1516px; height: 177px; animation-delay: 5s;
	    }
	    &:nth-child(10) {
	        top: 300px; left: 1050px; height: 177px; animation-delay: 5.5s;
	    }
	}
}

</style>