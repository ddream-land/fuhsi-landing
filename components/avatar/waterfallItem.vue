<template>
    <div class="wf-item">
        <NuxtImg :src="props.item.src" class="rounded-[15px] w-full h-auto" @load="emits('waterRefresh')" loading="lazy"/>
    </div>
</template>
<script setup>
const emits = defineEmits([ 'waterRefresh' ])
const props = defineProps({
    item: {
        type: Object,
        default: () => new Object
    }
})
</script>
<style lang="scss" scoped>
.wf-item{
   
}
</style>