<template>
    <button @click="$emit('update:modelValue', !modelValue)"
            class="p-0.5 border-1 border-blue-200 hover:ring-2 rounded-md flex items-center justify-between text-blue-500">
        <i-mdi-heart v-if="modelValue"/>
        <i-mdi-heart-outline v-else/>
        {{ modelValue ? 'Watched' : 'Watch' }}
    </button>
</template>

<script setup>
defineProps({
    modelValue: Boolean
})
defineEmits(['update:modelValue'])
</script>
