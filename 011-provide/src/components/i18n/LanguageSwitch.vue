<script setup>
import { inject } from 'vue'

const toggleLanguage = inject('toggleLanguage')
const currentLang = inject('currentLang')
</script>

<template>
  <div class="language-switch">
    <button @click="toggleLanguage">
      語言切換（目前：{{ currentLang }}）
    </button>
  </div>
</template>