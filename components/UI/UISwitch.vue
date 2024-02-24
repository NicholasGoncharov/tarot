<template>
    <label class="relative flex h-full max-h-6 w-full max-w-12 cursor-pointer items-center rounded-full bg-[#E9E9E9] transition-all duration-300 has-[:disabled]:cursor-default has-[:checked]:bg-[#E6B5FD]" >
        <input
            v-model="checked"
            :value="checked"
            :disabled="disabled"
            type="checkbox"
            class="peer sr-only"
            @click="() => checked = !checked" />

        <span
            class="absolute z-10 m-0.5 h-5 w-5 translate-x-0 rounded-full bg-white transition-transform peer-[:checked]:translate-x-6"></span>
    </label>
</template>

<script setup lang="ts">
const checked = defineModel<Boolean>('checked', {
    default: false
})

const props = defineProps({
    disabled: {
        type: Boolean,
        default: false
    }
})

</script>