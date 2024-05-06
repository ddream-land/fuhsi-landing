<template>
    <div class="gd-container">
        <header class="fixed w-full z-10" :class="{ 'skicy': scrollTop > 500 }">
            <MainHeader />
        </header>
        <main class="pt-28 mmm" style="z-index:1">
            <slot />
        </main>
        <footer>
            <MainFooter />
        </footer>
    </div>
    <el-backtop :right="30" :bottom="40" />
</template>
<script setup>
const scrollTop = ref(0);
onMounted(() => {
    window.addEventListener('scroll', function() {
        scrollTop.value = window.pageYOffset || document.documentElement.scrollTop;
    });
})
const route = useRoute();
watch(() => route.path, (val) => {
    // console.log(route.path);
}, { immediate: true, deep: true })

</script>
<style scoped>
.gd-container { display: grid; grid-template-rows: 1fr auto; min-height: 100vh; }
.skicy{
    background-color: #0579f2;
}
</style>
