<template>
  <div class="login">
    <div class="main_box">
      <img class="title_img" src="../images/title.jpg" alt="" />
      <p>账号登录</p>
      <div>
        <img src="../images/u12.png" alt="" />
        <input class="logIpt" v-model="username" />
      </div>
      <div>
        <img src="../images/u14.png" alt="" />
        <input class="logIpt" v-model="password" />
      </div>
      <el-button class="logBtn" type="primary" @click="logBtn"
        >马上登录</el-button
      >
      <el-checkbox class="logCheck" v-model="checked">记住密码</el-checkbox>
      <span class="wangji">忘记密码？</span>
      <span class="zhaohui">立即找回</span>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      checked: "",
    };
  },
  methods: {
    logBtn() {
      if (this.username === "" || this.password === "") {
        this.$message({
          message: "用户名和密码不能为空",
          type: "warning",
        });
      }else{
        // this.$http.post('/login', {
        //   username: this.username,
        //   password: this.password
        // }).then(res => {
        //   console.log( res )
        // })
        this.$router.push("/home");
        this.$message({
          message: '恭喜你，登录成功',
          type: 'success'
        });
      }
      
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  background: url("../images/login.jpg");
  background-size: 100% 100%;
  position: relative;
}
.title_img {
  width: 170px;
  height: 170px;
  border-radius: 50%;
  position: absolute;
  left: 120px;
  top: -100px;
  z-index: 999;
}
.main_box {
  /* margin: 0 auto; */
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -200px !important;
  margin-top: -150px !important;
  width: 400px;
  height: 300px;
  background: rgb(250, 214, 236);
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  /* align-items: center; */
  p {
    text-align: center;
    line-height: 70px;
    color: rgb(107, 104, 104);
  }
  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 70%;
    margin: 3px auto;
    border-bottom: 1px solid rgb(170, 170, 170);
    img {
      width: 15px;
      height: 17px;
    }
    .logIpt {
      width: 256px;
      height: 37px;
      border: none;
      outline: none;
      background: rgb(247, 217, 247);
      padding-left: 10px;
    }
  }
  .logBtn {
    border-radius: 8px;
    height: 45px;
    width: 70%;
    margin: 0 auto;
    margin-top: 30px;
  }
  .logCheck {
    margin-left: 15%;
    margin-top: 7px;
  }
  .wangji {
    font-size: 14px;
    color: rgb(148, 144, 144);
    position: absolute;
    right: 121px;
    bottom: 42px;
    cursor: pointer;
  }
  .zhaohui {
    font-size: 14px;
    position: absolute;
    right: 62px;
    bottom: 42px;
    color: rgb(55, 206, 233);
    cursor: pointer;
  }
}
</style>
