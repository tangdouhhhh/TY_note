<template>
  <div>
    <router-link replace to="/bar">跳转bar</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      age: 1
    }
  }
}

</script>
<style  lang="scss" scoped></style>