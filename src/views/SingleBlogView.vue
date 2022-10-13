<script setup lang="ts">
    import router from "../router";
    import blogs from "../assets/blogs.json";
    const route = router.currentRoute;
</script>

<template>
    <div>
        {{ blogs[parseInt(route.params.blog as string)].description }}
        <!-- p*3>Lorem200*5 -->
    </div>
</template>
