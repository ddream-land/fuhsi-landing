<script setup>
const { locale, locales, setLocale, t } = useI18n()
const availableLocales = computed(() => {
    return locales.value.filter(i => i.code !== locale.value)
})
// console.log(locale, locales)
const onLanguageChange = (lang) => {
    setLocale(lang);
};

const navigation = [
  // { name: 'home.howItWorks', id: 'howItWorks' },
  // { name: 'home.investors', id: 'ourInvestors'},
  // { name: 'home.ecosystem', id: 'ecosystem'},
  // { name: 'home.docs', href: '/'},
  { name: 'home.axeTestnetLive', href: '/', ico: true}
]

const route = useRoute()
const isOpen = ref(false)

const path = computed(() => route.fullPath)

const jumpToHash = (id) => {
    if (isOpen.value === true){
        isOpen.value = false;
    }
    const dom = document.getElementById(id);
    if (!dom){
        return;
    }
    dom.scrollIntoView({behavior: "smooth", inline: "center"});
    
    let fn = () => {
        if (window.scrollY === dom.offsetTop) {
            window.scrollBy(0, 1)
            window.removeEventListener('scroll', fn);
        }
    }
    window.addEventListener('scroll', fn);
}

</script>

<template>
    <div class="bg-[#111111] md:h-24 h-20 flex justify-between items-center">
        <NuxtLink to="/">
            <div class="flex items-center px-1 2xl:ml-64 xl:ml-48 lg:ml-32 md:ml-16 ml-4">
                <NuxtImg src="/img/logo.png" alt="Logo" class="h-[28px]" />
            </div>
        </NuxtLink>

        <div class="flex items-center">
            <!-- 导航菜单 -->
            <nav class="hidden lg:flex mr-4">
                <template v-for="item in navigation" :key="item.name">
                    <div v-if="!!item.id" @click="jumpToHash(item.id)" class="hover:text-gray-300 hover:underline md:text-lg text-base flex items-center 2xl:px-6 xl:px-4 md:px-2 cursor-pointer">
                        {{ $t(item.name) }}
                    </div>
                    <NuxtLink v-else :to="item.href" :class="['hover:text-gray-300 md:text-lg text-base flex items-center 2xl:px-6 xl:px-4 md:px-2', { 'active': path === item.href }]" :aria-current="path === item.href ? 'page' : undefined">
                        {{ $t(item.name) }}
                        <NuxtImg v-if="item.ico" class="w-11 inline-block ml-2" src="/img/beta.png"/>     
                    </NuxtLink>
                </template>
            </nav>

            <el-dropdown @command="onLanguageChange">
                <Icon name="gis:earth-euro-africa-o" size="20" class="md:mr-36 mr-12 cursor-pointer hover:text-[#8affd4]"/>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item v-for="lol in locales" :key="lol.code" :command="lol.code" :disabled="locale === lol.code">{{ lol.name }}</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>


        <!-- 移动端菜单按钮 -->
        <button @click="isOpen = !isOpen" class="lg:hidden mr-4">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
        </button>

        <!-- 移动端菜单 -->
        <div v-if="isOpen" class="absolute top-full left-0 w-full bg-[#111111] z-10 lg:hidden">
            <template v-for="item in navigation" :key="item.name">
                <div v-if="!!item.id" @click="jumpToHash(item.id)" class="text-base flex justify-center items-center py-2 border-b">
                    {{ $t(item.name) }}
                </div>
                <NuxtLink v-else :to="item.href" :class="['text-base flex justify-center items-center py-2 border-b', { 'active': path === item.href }]" :aria-current="path === item.href ? 'page' : undefined">
                    {{ $t(item.name) }}
                    <NuxtImg v-if="item.ico" class="w-11 inline-block ml-2" src="/img/beta.png"/>     
                </NuxtLink>
            </template>
        </div>
    </div>
</template>

