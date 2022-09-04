<script setup lang="ts">

</script>

<template>
  <div class="container">
    <h1>最近の支出</h1>
    <div class="payment">
      <label>カレーライス</label>
      <label>400円</label>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  /* 縦並びにする */
  flex-direction: column;
  align-items: center;
}

.payment {
  display: flex;
  /* 各アイテムを均等に配置し
  最初のアイテムは先頭に寄せ、
  最後のアイテムは末尾に寄せる */
  justify-content: space-between;
  height: 80px;
  width: 400px;
  background-color: aliceblue;
}

.label {
  font-size: 20px;
  font-weight: bold;
}
</style>