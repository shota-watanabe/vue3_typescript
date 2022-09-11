<script setup lang="ts">
import { ref } from 'vue'
const inputtingDescription = ref<string>('')

const emit = defineEmits(['post-tweet'])
const postTweet = () => {
  emit('post-tweet', inputtingDescription.value)
}
</script>

<template>
  <div class="form-container">
    <input v-model="inputtingDescription" />
    <button class="save-button" @click="postTweet">post</button>
  </div>
</template>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: aliceblue;
  padding: 24px 0;
  width: 400px;
  margin-bottom: 12px;
  border-radius: 4px;
}

.save-button {
  color: #fff;
  font-weight: bold;
  background-color: #68c9c9;
  border-color: 2px;
  border: none;
  margin-top: 12px;
}

.save-button:hover {
  background-color: #37bdbd;
}
</style>
