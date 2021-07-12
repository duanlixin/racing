<template>
  <p>首页</p>
</template>

<script>
const defaultArray = [1, 2, 3, 4];

export default {
  name: "Home",
  beforeRouteEnter (to, from, next) {
    next(vm => {
      const name = to.hash.split('#/')[1];
      vm.$router.push({ name });
    })
  },

};
</script>

<style scoped>

</style>
