<script setup lang="ts">
    import router from "../router";
    import plants from "../assets/plants.json";
    const route = router.currentRoute;
</script>

<template>
    <div>
        {{ plants[parseInt(route.params.plant as string)].text }}
        <!-- p*3>Lorem200*5 -->
    </div>
</template>
