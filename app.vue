<template>
    <PageLoading />
  
    <NuxtLayout>
        <NuxtPage :page-key="$route.fullPath" />
    </NuxtLayout>
</template>

<script setup lang="ts">
onMounted(() => {
  const body = document.body;
  body.classList.add("dark");
});
</script>
