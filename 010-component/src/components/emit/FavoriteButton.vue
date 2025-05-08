<script setup>
import { defineProps, defineEmits } from 'vue'
    
    const props = defineProps({
        isFavorited: {
        type: Boolean,
        required: true
        }
    })

    const emit = defineEmits(['toggle-favorite'])

    const toggleFavorite = () => {
        emit('toggle-favorite')
    }

</script>

<template>
    <button @click="toggleFavorite">
        <span> {{ isFavorited ? '❤️' : '🖤' }} </span>
    </button>
</template>
