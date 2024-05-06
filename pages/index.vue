<template>
    <section>
        <HomeBanner/>
        <HomeHowItWorks id="howItWorks"/>
        <!-- <HomeOurInvestors id="ourInvestors"/> -->
        <HomeEcosystem id="ecosystem"/>
    </section>
</template>

<script setup lang="ts">

// 设置SEO
useHead({
    titleTemplate: (productCategory: any) => {
        const baseTitle = "fuhsi.ai";
        return `${baseTitle}${productCategory ? " - " + productCategory : ""}`;
    },
});
onMounted(() => {
    if (process.client){
        import('scrollreveal').then(module => {
            const ScrollReveal = module.default;
            ScrollReveal().reveal('.bottom-scroll-animation', {
                  delay: 100,
                  distance: '50px',
                  origin: 'bottom',
                  opacity: 0,
                  easing: 'ease-in-out',
                  interval: 300,
            });
            ScrollReveal().reveal('.left-scroll-animation', {
                  delay: 100,
                  distance: '50px',
                  origin: 'left',
                  opacity: 0,
                  easing: 'ease-in-out',
                  interval: 300,
            });
            ScrollReveal().reveal('.right-scroll-animation', {
                  delay: 100,
                  distance: '50px',
                  origin: 'right',
                  opacity: 0,
                  easing: 'ease-in-out',
                  interval: 300,
            });
        })
    }
});

</script>

<style scoped lang="scss">
</style>
