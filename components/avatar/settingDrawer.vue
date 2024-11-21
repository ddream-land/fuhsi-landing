<template>
    <el-drawer v-model="drawerVisible" direction="ltr" :before-close="handleClose" destroy-on-close >
        <div class="flex items-center justify-center">
            <NuxtImg src="/img/logo-ico-black.png" alt="Logo" class="h-[28px]" />
            <div class="font-bold md:text-2xl text-lg pl-4">FUHSI</div>
        </div>
        <div class="asd-i18n flex py-2 md:py-4">
            <div class="flex-1 text-center cursor-pointer hover:font-bold" @click="setLocale('en-US')">En</div>
            <div class="bg-[#000000] w-[1px]"></div>
            <div class="flex-1 text-center cursor-pointer hover:font-bold" @click="setLocale('zh-CN')">中</div>
        </div>
        <div class="p-4 text-base">{{$t('avatar.moreCreativeTools')}}</div>
    </el-drawer>
</template>
<script setup>
const { setLocale } = useI18n()

const drawerVisible = ref(false);
const handleClose = (done) => {
    done()
}
const showDrawer = () => {
    drawerVisible.value = true;
}

defineExpose({
    showDrawer
})
</script>
<style lang="scss">
.el-drawer.ltr{
    @apply 2xl:w-[16.5%] xl:w-[20%] md:w-[25%] w-[60%] #{!important};
} 
</style>
<style lang="scss" scoped>
.asd-i18n{
    width: 60%; background-color: #d9d9d9; border-radius: 14px; overflow: hidden; margin: 20px auto;
}
</style>
