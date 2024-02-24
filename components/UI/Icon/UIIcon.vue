<template>
    <svg>
        <use :xlink:href="`/assets/svg/icon.svg#${name}`"></use>
    </svg>
</template>

<script setup lang="ts">
import {type PropType} from "vue";
import {type IconTypes} from "~/components/UI/Icon/Icon.types";

defineProps({
    name: {
        type: String as PropType<IconTypes>,
        required: true,
    },
})
</script>