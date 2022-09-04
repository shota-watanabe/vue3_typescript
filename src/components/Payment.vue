<script setup lang="ts">
import { ref, reactive } from 'vue'
// ref形式のstring変数
// この値が変わったらテンプレートが再読み込みされ、反映される
const itemName1 = ref<string>('Desk')
const itemName2 = 'Bike'

// オブジェクトそのものをリアクティブにしたいときは、reactiveを使う
const item1 = reactive({
  name: 'Desk',
  price: 40000
})

const price1 = 40000
const price2 = 20000

const url1 = 'https://www.amazon.co.jp/YEARCOLOR-%E3%82%B7%E3%83%B3%E3%83%97%E3%83%AB%E3%83%AF%E3%83%BC%E3%82%AF%E3%83%87%E3%82%B9%E3%82%AF-%E3%82%B2%E3%83%BC%E3%83%9F%E3%83%B3%E3%82%B0%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB-%E8%80%90%E8%8D%B7%E9%87%8D135KG-%E3%81%97%E3%81%A3%E3%81%8B%E3%82%8A%E3%81%97%E3%81%9F%E6%A7%8B%E9%80%A0/dp/B0B7667976/?_encoding=UTF8&pd_rd_w=guOEN&content-id=amzn1.sym.79ec8dbb-a6ed-4b2c-b8a2-e2dc98848cba&pf_rd_p=79ec8dbb-a6ed-4b2c-b8a2-e2dc98848cba&pf_rd_r=BS3RH2WYYAWDQ1Y6X0C5&pd_rd_wg=Womz2&pd_rd_r=3bf35fc8-ba80-44d1-8c8c-134dc3929d04&ref_=pd_gw_ci_mcx_mr_hp_atf_m'

const buy = (itemName: string) => {
  alert('Are you dure to buy ' + itemName + '?')
}

const input = (event: any) => {
  // 入力した値を表示させる
  // console.log('event.target.value:', event.target.value)
  // vueがテンプレートを読み込むタイミングは、定義しているリアクティブな値が変わったときのみ
  // refへの代入 refはオブジェクトで渡ってくる オブジェクトのプロパティには値を代入できる
  item1.name = event.target.value
}

const inputPrice = (event: any) => {
  // 入力した値を表示させる
  // console.log('event.target.value:', event.target.value)
  // vueがテンプレートを読み込むタイミングは、定義しているリアクティブな値が変わったときのみ
  // refへの代入 refはオブジェクトで渡ってくる オブジェクトのプロパティには値を代入できる
  item1.price = event.target.value
}
</script>

<template>
  <div class="container">
    <h1>最近の支出</h1>
    <input @input="input"/>
    <input @input="inputPrice"/>
    <div class="payment">
      <label>{{ item1.name }}</label>
      <label>{{ item1.price }} yen</label>
      <!-- v-bind:href -->
      <a :href=url1>bought at...</a>
      <!-- v-on:click -->
      <button @click="buy(item1.name)">BUY</button>
    </div>
    <div class="payment">
      <label>{{ itemName2 }}</label>
      <label>{{ price2 }} yen</label>
      <button @click="buy(itemName2)">BUY</button>
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
  align-items: center;
  height: 80px;
  width: 400px;
  background-color: aliceblue;
  margin-bottom: 8px;
}

input {
  margin-bottom: 8px;
}

label {
  font-size: 20px;
  font-weight: bold;
}
</style>