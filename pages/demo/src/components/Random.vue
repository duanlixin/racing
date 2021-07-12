<template>
  <h2 class="title">
    随机数组
  </h2>
  <div class="content">
    <div class="code">
      数组值
    </div>
    <div class="code">
      {{ array }}
    </div>
    <button
      class="btn"
      @click="random"
    >
      随机输出数组
    </button>
    <button
      class="btn"
      @click="reset"
    >
      恢复数组初值
    </button>
  </div>
</template>

<script>
const defaultArray = [1, 2, 3, 4];

export default {
  name: "Randow",

  data() {
    return {
      array: [...defaultArray]
    };
  },
  methods: {
    random() {
      return this.array.sort(() => 0.5 - Math.random());
    },
    reset() {
      this.array = [...defaultArray];
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
</style>
