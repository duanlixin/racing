<template>
  <div id="app">
    <div
      v-for="(item, index) in list"
      :key="index"
    >
      <div
        class="item"
        :class="getCurrentStyle(index)"
        @click="go(index, item.name)"
      >
        {{ item.text }}
      </div>
    </div>
    <router-view />
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
        { name: 'countdown', text: '倒计时' },
        { name: 'swiper', text: '轮播图' },
        { name: 'animation', text: '动画' },
      ],
    }
  },
  computed: {

  },
  methods: {
    getCurrentStyle(index) {
      return {
        clicked: index === this.currentIndex,
      }
    },
    go(index, name) {
      this.currentIndex = index;
      console.log(name)
      this.$router.push({ name });
    },
  },
};
</script>

<style>
body {
  margin: 10px;
  padding: 0;
  width: 100%;
  height: 100%;
  color: #fff;

  background-image: url('./src/assets/bg.png');
  background-repeat: no-repeat;
  background-size: cover;
}
.item {
  padding-bottom: 10px;
  cursor: pointer;
}
.clicked {
  color: orange;
}
</style>
