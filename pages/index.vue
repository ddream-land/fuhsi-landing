<template>
    <section>
        <HomeBanner/>
        <HomeHowItWorks id="howItWorks"/>
        <!-- <HomeOurInvestors id="ourInvestors"/> -->
        <HomeEcosystem id="ecosystem"/>
        <HomeFounderAndAdvisors />
        <HomeBackers />
    </section>
</template>

<script setup lang="ts">

// 设置SEO
useHead({
    titleTemplate: (productCategory: any) => {
        const baseTitle = "galgame.ai";
        return `${baseTitle}${productCategory ? " - " + productCategory : ""}`;
    },
});
definePageMeta({
    layout: "default"
})
const myReveal = ref(null);
onMounted(() => {
    if (process.client && !myReveal.value){
        import('scrollreveal').then(module => {
            const ScrollReveal = module.default;
            myReveal.value = ScrollReveal();
            myReveal.value.reveal('.bottom-scroll-animation', {
                  reset: true,
                  delay: 100,
                  distance: '50px',
                  origin: 'bottom',
                  opacity: 0,
                  easing: 'ease-in-out',
                  interval: 300,
            });
            myReveal.value.reveal('.left-scroll-animation', {
                  reset: true,
                  delay: 100,
                  distance: '50px',
                  origin: 'left',
                  opacity: 1,
                  easing: 'ease-in-out',
                  interval: 300,
            });
            myReveal.value.reveal('.right-scroll-animation', {
                  reset: true,
                  delay: 100,
                  distance: '50px',
                  origin: 'right',
                  opacity: 1,
                  easing: 'ease-in-out',
                  interval: 300,
            });
        })
    }
});
onBeforeUnmount(() => {
    !!myReveal.value && myReveal.value.destroy();
})

</script>

<style scoped lang="scss">
</style>
