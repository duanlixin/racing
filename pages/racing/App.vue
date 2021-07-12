<template>
<div id="app">
asdfasdfasdfasdf
</div>

</template>

<script>

export default {
  name: "App",
  data() {
    return {
      currentIndex: 0,
      list: [
        { name: 'home', text: '返回首页' },
        { name: 'random', text: '随机数组' },
        { name: 'swiper', text: '轮播图' },
        { name: 'animation', text: '动画' },
      ],
    }
  },
  computed: {

  },
  methods: {
    getCurrentStyle(index) {
      console.log(index, this.currentIndex)
      return {
        clicked: index === this.currentIndex,
      }
    },
    go(index, name) {
      this.currentIndex = index;
      this.$router.push({ name });
    },
  },
};
</script>

<style>

</style>
