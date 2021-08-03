<template>
  <div id="start" />
</template>

<script>
const { fetchInfo, redirectToLoginV2 } = window.TencentSports.mlogin;

export default {
  name: "App",
  data() {
    return {
    }
  },
  mounted() {
    this.login();
  },

  methods: {
    login() {
      fetchInfo(({ isLogin, isStrong }) => {
        if (!(isLogin && isStrong)) { // 未登录
          redirectToLoginV2({});
          return;
        }
        // this.getData();
      });
    },
    getData() {
      // https://axios-http.com/docs/intro 文档地址
      this.axios(
        {
          method: 'get',
          url: 'https://matchweb.sports.qq.com/active/f1Entrance',
          params: {
            isRetry: 0,
            teamName: '梅赛德斯'
          },
          withCredentials: true
        }
      ).then((response) => {
        console.log(response.data)
      })
    }
  },
};
</script>

<style>

</style>
