import Waterfall from 'vue3-waterfall-plugin'

export default defineNuxtPlugin((nuxt) => {
	nuxt.vueApp.component('Waterfall', Waterfall);
})