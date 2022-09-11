<script setup lang="ts">
import { ref } from 'vue'
const inputtingName = ref<string>('')
const inputtingAge = ref<number>(0)

const emit = defineEmits(['register'])

const register = () => {
  const person = { id: Math.random(), name: inputtingName.value, age: inputtingAge.value }
  emit('register', person)
}
</script>

<template>
  <div class="form-container">
    <div class="input-container">
      <div class="input-column">
        <span>name:</span>
        <input class="input" v-model="inputtingName" />
      </div>
      <div class="input-column">
        <span>age:</span>
        <input class="input" v-model="inputtingAge" type="number" />
      </div>
    </div>
    <button class="register" @click="register">register</button>
  </div>
</template>

<style scoped>
.form-container {
  display: flex;
  /* 主軸の方向を縦にする */
  flex-direction: column;
  /* 中央横並び */
  align-items: center;
  background-color: rgb(255, 241, 226);
  padding: 24px 0;
  width: 400px;
  margin-bottom: 12px;
  border-radius: 4px;
}

input {
  width: 120px;
  margin-bottom: 8px;
}

.input-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50px;
  margin-bottom: 20px;
}

.input-column {
  width: 200px;
  display: flex;
  justify-content: space-between;
}

span {
  font-size: 20px;
  font-weight: bold;
}
</style>
