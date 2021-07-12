<template>
  <h2 class="title">
    轮播图
  </h2>
  <div class="content">
    <div class="code">
      数据数组
    </div>
    <div class="code">
      {{ array }}
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          v-for="(pic, index) in array"
          :key="index"
          class="swiper-slide"
        >
          <img :src="pic">
        </div>
      </div>
    </div>
    <div class="code">
      当前的索引 {{ currentIndex }}
    </div>
    <button
      v-show="isShowPre"
      class="btn"
      @click="pre"
    >
      前一个
    </button>
    <button
      v-show="isShowNext"
      class="btn"
      @click="next"
    >
      后一个
    </button>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css';
export default {
  name: "Swiper",
  data() {
    return {
      currentIndex: 1,
      array: [
        'https://mat1.gtimg.com/sports/nba/logo/1602/15.png',
        'https://mat1.gtimg.com/sports/nba/logo/1602/17.png',
        'https://mat1.gtimg.com/sports/nba/logo/1602/18.png',
        'https://mat1.gtimg.com/sports/nba/logo/1602/2.png',
        'https://mat1.gtimg.com/sports/nba/logo/1602/4.png',
      ],
    };
  },
  computed: {
    isShowPre() { // 当前索引不是第一个时，显示
      return this.currentIndex !== 0;
    },
    isShowNext() { // 当前索引不是最后一个时，显示
      return this.currentIndex !== this.array.length - 1;
    },
  },
  mounted () {
      this.initSwiper();
  },
  methods: {
    initSwiper () {
      const vm = this;
      const swiper = new Swiper('.swiper-container', {
        centeredSlides: true, // 设定为true时，active slide会居中
        slidesPerView: 'auto', // 'auto'则自动根据slides的宽度来设定数量
        initialSlide: vm.currentIndex, // 初始化索引
        on: {
          slideChange() { // 滑动时，实时改变索引
            vm.currentIndex = this.activeIndex;
          },
        },
      })

      this.swiper = swiper;
    },

    pre() { // 滑前一个
      this.swiper.slideTo(this.currentIndex - 1, 500, true);
    },
    next() { // 滑后一个
      this.swiper.slideTo(this.currentIndex + 1, 500, true);
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
.swiper-container {
  margin: 0;
  border: 2px solid red;
  width: 240px;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
