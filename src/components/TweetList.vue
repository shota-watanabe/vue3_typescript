<script setup lang="ts">
import { defineProps } from 'vue'
type Tweet = {
  id: number
  description: string
}
type Props = {
  tweets: Tweet[]
}

const deleteTweet = (id: number) => {
  console.log('delete')
}

// Propsで受け取る宣言
defineProps<Props>()
</script>

<template>
  <!-- :keyにtweet.idを入れることでid順に並べてくれる -->
  <li v-for="tweet in tweets" :key="tweet.id" class="tweet-list">
    <span>{{ tweet.description }}</span>
    <button @click="deleteTweet(tweet.id)" class="delete-button">delete</button>
  </li>
</template>

<style scoped>
.delete-button {
  color: #fff;
  font-weight: bold;
  background-color: #c99a68;
  border-color: 2px;
  border: none;
}

.delete-button:hover {
  background-color: #ac783f;
}

.tweet-list {
  /* 箇条書きの部分をなくす */
  list-style: none;
  margin-bottom: 12px;
  border-radius: 2px;
  font-size: 12px;
  display: flex;
  /* 端に寄せる */
  justify-content: space-between;
  background-color: rgb(204, 219, 233);
  padding: 8px 20px;
  width: 300px;
}
</style>
