<template>
    <div class="gd-container flex flex-col lg:flex-row">
        <div class="avatar-left w-full lg:w-[308px] p-2">
            <div class="flex">
                <Icon name="line-md:menu" class="md:text-2xl text-lg cursor-pointer" @click="asdRef.showDrawer()"/>
                <div class="flex-1">
                    <div class="flex items-center justify-center pt-1">
                        <NuxtImg src="/img/logo-ico-black.png" alt="Logo" class="h-[21px]" />
                        <div class="font-bold md:text-xl text-base pl-4">FUHSI</div>
                    </div>
                    <div class="text-center md:text-xl text-lg tracking-widest font-bold">Avatar Studio</div>
                </div>
            </div>
        </div>
        <main class="flex-1" style="z-index:1">
            <slot />
        </main>
        <div class="w-full lg:w-[221px]">right</div>
    </div>
    <el-backtop :right="30" :bottom="40" />

    <AvatarSettingDrawer ref="asdRef"/>
</template>
<script setup>
const asdRef = ref(null);
onMounted(() => {
    const body = document.body;
    body.classList.remove("dark");
})
// const route = useRoute();
// watch(() => route.path, (val) => {
//     // console.log(route.path);
// }, { immediate: true, deep: true })

</script>
<style scoped>
.gd-container { min-height: 100vh;}
.skicy{
    background-color: #0579f2;
}
.avatar-left{
    
}
.avatar-right{
    
}
</style>
