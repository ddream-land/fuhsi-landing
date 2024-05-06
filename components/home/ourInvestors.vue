<template>
	<div class="ovt">
		<div class="m-auto md:w-[70%] w-[90%] md:pt-24 pt-20">
			<div class="md:text-4xl text-2xl font-bold">Our Investors</div>
		</div>
        <section ref="contentRef" class="ovt-sup md:pt-20 pt-10">
            <div ref="innerRef1" class="ovt-sup-inner" :style="{ transform: 'translateX(' + left1 + 'px)' }">
                <div class="ovt-item flex items-center justify-center" v-for="i in 10" @mouseenter="activeNum = i" @mouseleave="activeNum = null">
                	<NuxtImg v-show="activeNum === i" :src="`/img/home/icos/ico${i}_active.png`" />
                	<NuxtImg v-show="activeNum !== i || activeNum === null" :src="`/img/home/icos/ico${i}.png`" />
                </div>
            </div>
            <div ref="innerRef2" class="ovt-sup-inner" :style="{ transform: 'translateX(' + left2 + 'px)' }">
                <div class="ovt-item flex items-center justify-center" v-for="i in 10" @mouseenter="activeNum = i" @mouseleave="activeNum = null">
                	<NuxtImg v-show="activeNum === i" :src="`/img/home/icos/ico${i}_active.png`" />
                	<NuxtImg v-show="activeNum !== i || activeNum === null" :src="`/img/home/icos/ico${i}.png`" />
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
const timer = ref(null);
const stop = ref(false);
const activeNum = ref(null);
const left1 = ref(0);
const left2 = ref(0);
const innerRef1 = ref(null);
const innerRef2 = ref(null);
onMounted(() => {
	startCarousel();
})
onBeforeUnmount(() => {
	if (!!timer.value){
        clearInterval(timer.value)
    }
})
const startCarousel = () => {
    timer.value = setInterval(() => {
        if (activeNum.value !== null){
            return;
        }
       
        if (Math.abs(left1.value) > innerRef1.value.clientWidth){
            left1.value = 0;
        } else {
            left1.value -= 0.5;
        }
        if (Math.abs(left2.value) > innerRef2.value.clientWidth){
            left2.value = 0;
        } else {
            left2.value -= 0.5;
        }
    }, 10)
}

</script>
<style lang="scss" scoped>
.ovt{
    width: calc(100vw - 10px); overflow: hidden; 
    .ovt-sup{
        display: flex; position: relative; white-space: nowrap; cursor: pointer;
        .ovt-sup-inner{
            display: flex; will-change: transform;
            .ovt-item{
            	width: 280px; height: 100px; background-color: #161616; margin: 0 10px;
            }
        }
    }
}
</style>
