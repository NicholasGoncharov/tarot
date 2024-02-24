<template>
    <Header />
    <main>
        <slot></slot>
    </main>
</template>

<style scoped>
* {
    font-family: 'JockeyOne';
}
</style>

<script setup lang="ts">
import Header from "~/components/Header.vue";
</script>