<template>
  <h2 class="title">动画1-向上，向下，向左，向右飞出</h2>
  <div class="content">
    <div class="animation-wrapper">
      <div class="box top">向上飞</div>
      <div class="box middle">
        <div class="box left">向左飞</div>
        <div class="box right">向右飞</div>
      </div>
      <div class="box bottom">向下飞</div>
    </div>
    <button class="btn" @click="fly">开始动画</button>
  </div>
  <h2 class="title">动画2-变大变小</h2>
  <div class="content">
    <div class="animation-wrapper">
      <div class="box big">变大变小</div>
    </div>
    <button class="btn" @click="big">开始动画</button>
  </div>
  <h2 class="title">动画3-从左飞到右</h2>
  <div class="content">
    <div class="animation-wrapper">
      <div class="box left-to-right"></div>
    </div>
    <button class="btn" @click="leftToright">开始动画</button>
  </div>
  <h2 class="title">动画4-从小变大消失</h2>
  <div class="content">
    <div class="animation-wrapper">
      <div class="box big-disappear">变大变小</div>
    </div>
    <button class="btn" @click="bigDisappear">开始动画</button>
  </div>
  <h2 class="title">动画5-从下飞到上</h2>
  <div class="content">
    <div class="animation-wrapper">
      <div class="box fly-top">从下飞到上</div>
    </div>
    <button class="btn" @click="flyTop">开始动画</button>
  </div>
  <h2 class="title">动画6-从隐藏到显示</h2>
  <div class="content">
    <div class="animation-wrapper">
      <div class="box hide-to-show">从隐藏到显示</div>
    </div>
    <button class="btn" @click="hideToshow">开始动画</button>
  </div>
  <h2 class="title">动画7-缩小向上飞出</h2>
  <div class="content">
    <div class="animation-wrapper">
      <div class="box zoom-small-fly">缩小向上飞出</div>
    </div>
    <button class="btn" @click="zoomSmallFly">开始动画</button>
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  name: "Animation",
  data() {
    return {
    };
  },

  methods: {
    fly() {
      const tl = gsap.timeline();

      tl.to('.top', { y: -200, duration: 1 }, 0);
      tl.to('.left', { x: -300, duration: 1 }, 0);
      tl.to('.right', { x: 300, duration: 1 }, 0);
      tl.to('.bottom', { y: 300, duration: 1 }, 0);
    },
    big() {
      const tl = gsap.timeline({ repeat: -1 });

      tl.fromTo('.big', { scale: 0.85, duration: 0.4 }, { duration: 0.4, scale: 1.2 })
    },
    leftToright () {
      const tl = gsap.timeline();

      tl.to('.left-to-right', { left: 0, duration: 1 })
    },
    bigDisappear() {
      const tl = gsap.timeline();

      tl.fromTo('.big-disappear', { scale: 1 }, { duration: 1, scale: 1.4, opacity: 0 })
    },
    flyTop() {
      const tl = gsap.timeline();

      tl.to('.fly-top', { top: 40, duration: 1 })
    },
    hideToshow() {
      const tl = gsap.timeline();

      tl.to('.hide-to-show', { opacity: 1, duration: 1 })
    },
    zoomSmallFly() {
      const tl = gsap.timeline();

      tl.to('.zoom-small-fly', { scale: 0.8, duration: 0.4 })
      tl.to('.zoom-small-fly', { y: -600, duration: 1 })
    },
  },
};
</script>

<style scoped>
.title {
  margin-top: 50px;
  margin-left: 20px;
}
.content {
  margin-top: 30px;
  margin-left: 20px;
}
.code {
  margin: 20px;
}
.animation-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 500px;
  height: 500px;

  overflow: hidden;
  border: 2px solid red;
}

.box {
  width: 100px;
  height: 100px;

  border: 2px solid green;
}
.middle {
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: none;
}
.left-to-right {
  position: absolute;
  height: 200px;
  width: 500px;
  box-sizing: border-box;
  left: -500px;
}
.fly-top {
  position: absolute;
  box-sizing: border-box;
  top: 500px;
}
.hide-to-show {
  opacity: 0;
}
.zoom-small-fly {
  /* position: absolute; */
}
</style>
