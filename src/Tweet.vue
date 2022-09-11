<script setup lang="ts">
import { ref } from 'vue'
// ref リアクティブ（動的）な値にする
const tweets = ref([
  { id: 0, description: 'Hello, world!' },
  { id: 1, description: 'this is the second tweet' },
])
const inputtingDescription = ref<String>('')

const postTweet = () => {
  const tweet = { id: Math.random(), description: inputtingDescription.value.toString() }
  tweets.value.push(tweet)
  inputtingDescription.value = ''
  console.log('post...', tweets.value)
}

const deleteTweet = (id: number) => {
  // tは渡ってきたツイートのオブジェクト
  // そのidが引数で渡ってきたidでないものを返す
  // 削除ボタンを押したツイート以外のツイートすべてを返す関数
  // 実質 deleteと同じようになる
  tweets.value = tweets.value.filter(t => t.id !== id)
}
</script>

<template>
  <div class="container">
    <h1>Tweeter</h1>
    <div class="form-container">
      <input v-model="inputtingDescription" />
      <button class="save-button" @click="postTweet">post</button>
    </div>
    <div class="tweet-container">
      <!-- 切り替えのコストが、v-ifは高く、v-showは低い
      基本的にはv-ifを使う -->
      <p v-if="tweets.length <= 0">No tweets have been added</p>
      <ul>
        <!-- :keyにtweet.idを入れることでid順に並べてくれる -->
        <li v-for="tweet in tweets" :key="tweet.id" class="tweet-list">
          <span>{{ tweet.description }}</span>
          <button @click="deleteTweet(tweet.id)" class="delete-button">delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

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
}

.delete-button {
  color: #fff;
  font-weight: bold;
  background-color: #c99a68;
  border-color: 2px;
  border: none;
}

.save-button:hover {
  background-color: #37bdbd;
}

.delete-button:hover {
  background-color: #ac783f;
}

input {
  margin-bottom: 16px;
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