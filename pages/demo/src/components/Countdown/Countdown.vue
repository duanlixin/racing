<template>
  <h2 class="title">
    倒计时
  </h2>
  <div class="content">
    <div class="count-title f22">
      计时
    </div>
    <div class="time-wrapper center">
      <div
        id="minute"
        class="f48"
      >
        {{ minute }}
      </div>
      <div class="unit f30">
        :
      </div>
      <div
        id="second"
        class="f48"
      >
        {{ second }}
      </div>
      <div class="unit f30">
        .
      </div>
      <div
        id="millisecond"
        class="f48"
      >
        {{ millisecond }}
      </div>
    </div>

    <button
      class="btn"
      @click="start"
    >
      开始
    </button>
    <button
      class="btn"
      @click="stop"
    >
      停止
    </button>
    <span v-show="isStarted">
      <button
        class="btn"
        @click="pause"
      >
        暂停
      </button>
      <button
        class="btn"
        @click="resume"
      >
        恢复
      </button>
    </span>
  </div>
</template>

<script>
import gsap from 'gsap';
import { mySetInterval, clearMysetInterval } from './requestAnimationFrameInterval';
export default {
  name: 'Countdown',
  data() {
    return {
      minute: '00',
      second: '00',
      millisecond: '000',
      secondCounter: 0,
      minuteCounter: 0,
      timer: null,
      isStarted: false,
    };
  },

  mounted() {
    const tl = gsap.timeline();
    this.tl = tl;
  },

  methods: {
    setTime({ minute, second, millisecond, secondCounter, minuteCounter }) {
      this.minute = minute;
      this.second = second;
      this.millisecond = millisecond;

      this.secondCounter = secondCounter;
      this.minuteCounter = minuteCounter;
    },
    startTimer() {
      this.isStarted = true;

      this.startSecond();
      this.startMillisecond();
    },
    stopTimer() {
      clearMysetInterval(this.timer); // 停止秒计时器
    },
    startSecond() {

      clearMysetInterval(this.timer); // 先清理

      this.timer = mySetInterval(() => {
        this.secondCounter = this.secondCounter + 1; // 秒累加
        this.second = String(this.secondCounter % 60).padStart(2, '0'); // 秒对 60 取模

        if (this.second === '00') { // 当是 00 时，表示需要进位到分钟
          this.minuteCounter = this.minuteCounter + 1; // 分累加
          this.minute = String(this.minuteCounter % 60).padStart(2, '0'); // 分对 60 取模
        }
         // 当是 00 时，且minuteCounter > 59 时，表示需要进位到小时
        if (this.minute === '00' && this.minuteCounter > 59) {
          this.stop(); // 调动停止方法
        }

      }, 1000);
    },
    startMillisecond() {
      const millisecond = { value: 0 };

      this.tl.resume(); // 恢复毫秒动画

      this.tl.to(millisecond, { // 毫秒动画
        duration: 1,
        repeat: -1,
        value: 999,
        onUpdate: () => {
          this.millisecond = millisecond.value.toFixed(0).padStart(3, '0')
        },
      }, 0);
    },
    pauseMillisecond() {
      this.tl.pause(); // 暂停毫秒动画
    },
    resumeMillisecond() {
      this.tl.resume(); // 恢复毫秒动画
    },
    pauseSecond() {
      this.stopTimer(); // 停止秒计时器
    },
    resumeSecond() {
      this.startTimer(); // 启动秒计时器
    },
    start() { // 开始
      this.setTime({ minute: '00', second: '00', millisecond: '000', secondCounter: 0, minuteCounter: 0 });
      this.startTimer();
    },
    stop() { // 停止
      this.isStarted = false;

      this.setTime({ minute: '59', second: '59', millisecond: '999', secondCounter: 60, minuteCounter: 60 }); // 设置显示时间

      this.pauseMillisecond(); // 停止毫秒动画
      this.stopTimer(); // 停止秒计时器
    },
    pause() { // 暂停
      this.pauseSecond();
      this.pauseMillisecond();
    },
    resume() { // 恢复
      this.resumeSecond();
      this.resumeMillisecond();
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
.time-wrapper {
  display: flex;
  flex-direction: row;
}
</style>
