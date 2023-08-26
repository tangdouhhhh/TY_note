<template>
  <div id="app">
    <button :disabled="!isLoading" @click="mock">mock</button>
    <HelloWorld />
  </div>
</template>

<script>
import { reqGetBannerList } from './api/index.js'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      // 请求是否发送完
      isLoading: true,
    }
  },
  methods: {
    async mock() {      
      this.isLoading = false
      console.log(this.isLoading);
      const res = await reqGetBannerList()
      if(res.status === 200){
        this.isLoading = true
      }
      console.log(res);
      console.log(this.isLoading);
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
