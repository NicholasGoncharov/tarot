<template>
    <header class="flex justify-between items-center max-h-24 h-full shadow-header px-12 py-8 rounded-b-32">
        <NuxtLink class="flex items-center w-32 text-4xl" to="/">
            <UIIcon name="site" class="w-12 h-12" />
            <span class="pl-2">Tarot</span>
        </NuxtLink>

        <div class="flex justify-evenly *:font-sans *:text-[20px]">
            <NuxtLink to="/cards">Расклады</NuxtLink>
            <NuxtLink class="pl-2" to="/mager">Старшие Арканы</NuxtLink>
            <NuxtLink class="pl-2" to="/minor">Младшие Арканы</NuxtLink>
        </div>

        <div class="flex border-x px-2">
            <div class="flex w-12 h-6">
                <UISwitch />
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import UISwitch from "~/components/UI/UISwitch.vue";
</script>