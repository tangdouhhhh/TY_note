<template>
  <div>
    bar
    <router-link :to="{
      name:'child',
      params:{id:1}
    }">跳转</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Bar_',
  data() {
    return {
      
    }
  }
}

</script>
<style  lang="scss" scoped></style>