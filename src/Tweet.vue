<script setup lang="ts">
import { ref } from 'vue'
import TweetPostForm from './components/TweetPostForm.vue'
import TweetList from './components/TweetList.vue'
// ref リアクティブ（動的）な値にする
const tweets = ref([
  { id: 0, description: 'Hello, world!' },
  { id: 1, description: 'this is the second tweet' },
])

const postTweet = (description: string) => {
  // description: description を省略した形
  const tweet = { id: Math.random(), description }
  tweets.value.push(tweet)
}

const deleteTweet = (id: number) => {
  // tは渡ってきたツイートのオブジェクト
  // そのidが引数で渡ってきたidでないものを返す
  // 削除ボタンを押したツイート以外のツイートすべてを返す関数
  // 実質 deleteと同じようになる
  tweets.value = tweets.value.filter((t) => t.id !== id)
}
</script>

<template>
  <div class="container">
    <h1>Tweeter</h1>
    <!-- @子で定義したイベント="親で定義したイベント" -->
    <TweetPostForm @post-tweet="postTweet" />
    <div class="tweet-container">
      <!-- 切り替えのコストが、v-ifは高く、v-showは低い
      基本的にはv-ifを使う -->
      <p v-if="tweets.length <= 0">No tweets have been added</p>
      <ul>
        <TweetList :tweets="tweets" @delete-tweet="deleteTweet" />
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
</style>
