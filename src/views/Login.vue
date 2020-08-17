<template>
  <div class="login">
    <!-- 头部logo -->
    <div class="header">
      <a href="index.html">
        <img :src="img[0].src" alt />
      </a>
    </div>

    <!-- 登录框banner -->
    <div class="main" :style="{backgroundImage:'url(' + img[8].src + ')'}">
      <div class="wrapper">
        <!-- 登录框盒子 -->
        <div class="login_box">
          <!-- 登录框盒子顶部tab -->
          <div class="login_tab">
            <button
              type="button"
              :class="[(tabActive[0].isactive || tabActive[1].isactive)?'active':'','login_tab1']"
              @click="swithcTab(0)"
            >帐号登录</button>
            <span class="line"></span>
            <button
              type="button"
              :class="[tabActive[2].isactive?'active':'','login_tab2']"
              @click="swithcTab(2)"
            >扫码登录</button>
          </div>
          <!--登录框 输入表单form1(账号登陆) -->
          <form action="#" class="form1" v-show="tabActive[0].isactive">
            <div
              :class="[errorElements[0].isactive?'err-border':'','input_wrapper input_wrapper1']"
            >
              <input type="text" class="name" placeholder="邮箱/手机号码/小米ID" v-model="uname" />
            </div>
            <div
              :class="[errorElements[1].isactive?'err-border':'','input_wrapper input_wrapper2']"
            >
              <input type="password" class="pwd" placeholder="密码" v-model="pwd" />
            </div>

            <div class="msg" v-show="errorElements[2].isactive">
              <img :src="img[1].src" alt />
              <span>{{errorElements[2].name}}</span>
            </div>
            <div class="btn-wrapper">
              <button type="button" @click="unameLogin">登录</button>
            </div>

            <div class="other_panel">
              <!-- 手机登录和注册 -->
              <div>
                <div class="sms_link">
                  <a href="javascript:void(0);" id="phone_login" @click="swithcTab(1)">手机短信登录/注册</a>
                </div>
                <div class="register_link">
                  <a href="register.html">立即注册</a>
                  <span>|</span>
                  <a href>忘记密码？</a>
                </div>
              </div>
              <!-- 其他登录方式 -->
              <div class="other_link">
                <fieldset>
                  <legend>其他方式登录</legend>
                </fieldset>
                <div class="link_icon">
                  <a class="qq">
                    <img :src="img[2].src" alt />
                  </a>
                  <a class="weibo">
                    <img :src="img[3].src" alt />
                  </a>
                  <a class="zfb">
                    <img :src="img[4].src" alt />
                  </a>
                  <a class="weixin">
                    <img :src="img[5].src" alt />
                  </a>
                </div>
              </div>
            </div>
          </form>
          <!--登录框 输入表单form2，手机登陆，默认隐藏-->
          <form action="#" class="form2" v-show="tabActive[1].isactive">
            <div
              :class="[errorElements[0].isactive?'err-border':'','input_wrapper input_wrapper1']"
            >
              <label class="label">+86</label>
              <input type="text" class="name" placeholder="手机号码" v-model="phone" />
            </div>
            <div
              :class="[errorElements[1].isactive?'err-border':'','input_wrapper input_wrapper2']"
            >
              <input type="password" class="pwd" placeholder="短信验证码" v-model="code.value" />
              <label
                class="label"
                @click="getCode"
                :style="{color:code.active?'blue':'#a0a0a0'}"
              >{{code.content}}{{code.seconds}}</label>
            </div>
            <div class="msg" v-show="errorElements[2].isactive">
              <img :src="img[1].src" alt />
              <span>{{errorElements[2].name}}</span>
            </div>
            <div class="btn-wrapper">
              <button type="button" @click="loginByPhone">登录</button>
            </div>

            <div class="other_panel">
              <!-- 手机登录和注册 -->
              <div>
                <div class="sms_link">
                  <a href="javascript:void(0);" id="uname_login" @click="swithcTab(0)">用户名密码登录</a>
                </div>
                <div class="register_link">
                  <a href>收不到验证码？</a>
                </div>
              </div>
              <!-- 其他登录方式 -->
              <div class="other_link">
                <fieldset>
                  <legend>其他方式登录</legend>
                </fieldset>
                <div class="link_icon">
                  <a class="qq">
                    <img :src="img[2].src" alt />
                  </a>
                  <a class="weibo">
                    <img :src="img[3].src" alt />
                  </a>
                  <a class="zfb">
                    <img :src="img[4].src" alt />
                  </a>
                  <a class="weixin">
                    <img :src="img[5].src" alt />
                  </a>
                </div>
              </div>
            </div>
          </form>

          <!-- 扫码登陆tab内容框（默认隐藏） -->
          <div class="login_qr" v-show="tabActive[2].isactive">
            <img :src="img[6].src" alt />
            <p>
              使用
              <span>小米商城APP</span>扫一扫
              <br />小米手机可打开「设置」>「小米帐号」扫码登录
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 页脚 -->
    <div class="footer">
      <div class="footer_link">
        <ul>
          <li>
            <a href class="active">简体</a> |
          </li>
          <li>
            <a href>繁体</a> |
          </li>
          <li>
            <a href>English</a> |
          </li>
          <li>
            <a href>常见问题</a> |
          </li>
          <li>
            <a href>隐私政策</a>
          </li>
        </ul>
      </div>
      <p class="copyright">
        小米公司版权所有-京ICP备10046444-
        <a>
          <img :src="img[7].src" alt />京公网安备11010802020134号
        </a>-京ICP证110507号
      </p>
    </div>
  </div>
</template>
<script>
import { login, phoneLogin } from "../util/api/getProduct";
import { validate, setError } from "../util/validate";
export default {
  data() {
    return {
      uname: null,
      pwd: null,
      phone: null,
      code: { value: null, content: "获取验证码", seconds: "", active: true },
      img: [
        { src: "logo.png" },
        { src: "err.png" },
        { src: "qq.png" },
        { src: "wb.png" },
        { src: "zfb.png" },
        { src: "wechat.png" },
        { src: "erweima.png" },
        { src: "police.png" },
        { src: "banner.jpg" },
      ],
      tabActive: [
        { name: "tab1", isactive: true },
        { name: "tab2", isactive: false },
        { name: "tab3", isactive: false },
      ],
      errorElements: [
        { name: "wrapper1", isactive: false },
        { name: "wrapper2", isactive: false },
        { name: "", isactive: false },
      ],
    };
  },
  mounted() {
    for (let i of this.img) {
      i.src = require("../assets/images/login/" + i.src);
    }
  },
  methods: {
    unameLogin() {
      if (validate(this.uname) === 1) {
        setError(
          this.errorElements,
          this.errorElements[0],
          this.errorElements[1],
          this.errorElements[2],
          "请输入帐号"
        );
      } else if (validate(this.pwd) === 1) {
        setError(
          this.errorElements,
          this.errorElements[1],
          this.errorElements[0],
          this.errorElements[2],
          "请输入密码"
        );
      } else {
        login(this.uname, this.pwd).then((res) => {
          if (res == 0) {
            setError(
              this.errorElements,
              this.errorElements[0],
              this.errorElements[1],
              this.errorElements[2],
              "账号或者密码错误"
            );
          } else {
            this.$store.commit("login", res[0]);
            this.$router.push({ name: "Home" });
          }
        });
      }
    },
    loginByPhone() {
      if (validate(this.phone) === 1) {
        setError(
          this.errorElements,
          this.errorElements[0],
          this.errorElements[1],
          this.errorElements[2],
          "请输入手机号"
        );
      } else if (validate(this.phone, /^1[3-9]\d{9}$/) === 2) {
        setError(
          this.errorElements,
          this.errorElements[0],
          this.errorElements[1],
          this.errorElements[2],
          "手机号格式不正确"
        );
      } else if (validate(this.code.value) === 1) {
        setError(
          this.errorElements,
          this.errorElements[1],
          this.errorElements[0],
          this.errorElements[2],
          "请输入验证码"
        );
      } else {
        phoneLogin(this.phone, this.code.value).then((res) => {
          if (res == 0) {
            setError(
              null,
              this.errorElements[1],
              this.errorElements[0],
              this.errorElements[2],
              "验证码错误"
            );
          } else {
            this.$store.commit("login", res[0]);
            this.$router.push({ name: "Home" });
          }
        });
      }
    },
    getCode() {
      if (!this.code.active) {
        return false;
      }
      this.code.active = false;
      this.code.content = "再次发送";
      this.code.seconds = "(60)";
      var count = 60;
      var timer = setInterval(() => {
        count--;
        this.code.seconds = "(" + count + ")";
        if (count == 0) {
          this.code.active = true;
          this.code.content = "重新发送";
          this.code.seconds = "";
          clearInterval(timer);
        }
      }, 1000);
    },
    swithcTab(i) {
      for (let j of this.tabActive) {
        j.isactive = false;
      }
      this.tabActive[i].isactive = true;
      setError(this.errorElements);
    },
  },
};
</script>
<style scoped>
/* 输入错误提示--登陆页和注册页通用样式 */

.login .msg {
  color: #ff6700;
  width: 348px;
  margin: 0 auto;
}

.login .msg img {
  width: 14px;
  height: 14px;
  vertical-align: middle;
  margin-top: -2px;
}

.login .header {
  width: 1130px;
  height: 98px;
  margin: 0 auto;
}

.login .main {
  height: 588px;
  background-position: -568px 0px;
}

.login .wrapper {
  width: 1130px;
  height: 100%;
  margin: 0 auto;
}

.login .login_box {
  float: right;
  width: 410px;
  height: 558px;
  background-color: #fff;
  margin-top: 32px;
}

.login .login_tab {
  height: 31px;
  padding: 27px 0 24px;
  font-size: 24px;
  font-family: arial, "Hiragino Sans GB", "Microsoft YaHei", "微軟正黑體",
    "儷黑 Pro", sans-serif;
  color: #666;
  text-align: center;
  /* display: flex;
    justify-content: center;
    align-items: center; */
}

.login .login_tab button {
  font-size: 24px;
  background-color: #fff;
  border: 0;
  cursor: pointer;
}

.login .login_tab button.active {
  color: #f56600;
}

.login .login_tab button:hover {
  color: #f56600;
}

.login .login_tab .line {
  width: 2px;
  height: 29px;
  color: #e0e0e0;
  margin: 0 42px 0 36px;
  border: 1px solid #e0e0e0;
}

/* 用户名密码登陆表单输入框 ----默认显示*/

.login .login_box form .input_wrapper {
  width: 348px;
  height: 50px;
  /* background: #e8f0fe; */
  display: block;
  margin: 0 auto;
  border: 1px solid #ddd;
}

.login .login_box form .input_wrapper input {
  box-sizing: border-box;
  border: 0;
  line-height: 22px;
  padding: 13px 16px 13px 14px;
  width: 100%;
}

.login .login_box form .input_wrapper input::-webkit-input-placeholder {
  color: #b0b0b0;
}

.login .login_box form .input_wrapper1 {
  margin-bottom: 14px;
}

.login .login_box form .input_wrapper2 {
  margin-bottom: 14px;
}

.login .login_box form .btn-wrapper {
  padding-top: 14px;
}

.login .login_box form button[type="button"] {
  background-color: #ff6700;
  width: 348px;
  height: 50px;
  line-height: 50px;
  display: block;
  border: 0;
  margin: 0 auto;
  margin-bottom: 10px;
  text-align: center;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
}

/* 手机登陆表单form2---默认隐藏 */

.login .login_box .form2 .input_wrapper1 input {
  box-sizing: border-box;
  width: 80%;
  height: 50px;
  line-height: 50px;
}

.login .login_box .form2 .input_wrapper1 label {
  box-sizing: border-box;
  display: inline-block;
  border-right: 1px solid #ddd;
  width: 20%;
  height: 50px;
  line-height: 50px;
  text-align: center;
}

.login .login_box .form2 .input_wrapper2 input {
  box-sizing: border-box;
  width: 68%;
  height: 50px;
  line-height: 50px;
}

.login .login_box .form2 .input_wrapper2 label {
  box-sizing: border-box;
  display: inline-block;
  color: #003ab5;
  border-left: 1px solid #ddd;
  width: 32%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
}

/* 二维码登陆框---默认隐藏 */

.login .login_box .login_qr {
  /* display: none; */
  padding-top: 120px;
  text-align: center;
}

.login .login_box .login_qr p {
  margin: 15px 0;
  color: #757575;
}

.login .login_box .login_qr p span {
  color: #ff6700;
}

.login .login_box .other_panel {
  width: 348px;
  margin: 0 auto;
}

.login .login_box .other_panel .sms_link {
  float: left;
}

.login .login_box .other_panel .sms_link a {
  color: #ff6700;
}

.login .login_box .other_panel .register_link {
  float: right;
}

.login .login_box .other_panel .register_link a,
.login .login_box .other_panel .register_link span {
  color: #999;
}

.login .login_box .other_panel .other_link {
  clear: both;
  padding-top: 143px;
}

.login .login_box .other_panel .other_link fieldset {
  height: 30px;
  border: none;
  border-top: 1px solid #e0e0e0;
}

.login .login_box .other_panel .other_link legend {
  color: #bbb;
  text-align: center;
}

.login .login_box .other_panel .link_icon {
  text-align: center;
}

.login .login_box .other_panel .link_icon a {
  display: inline-block;
  width: 30px;
  height: 30px;
  font-size: 14px;
  margin: 0 15px;
  border-radius: 50%;
}

.login .login_box .link_icon a img {
  width: 30px;
  height: 30px;
}

.login .login_box .link_icon a:nth-child(4) img {
  width: 32px;
  height: 32px;
}

/* 页脚 */

.login .footer {
  color: #757575;
  padding-top: 100px;
  text-align: center;
}

.login .footer_link ul li {
  display: inline-block;
}

.login .footer_link ul li a {
  color: #757575;
  padding: 0 9px;
}

.login .footer_link ul li a.active {
  color: #333;
}

.login .footer p {
  padding: 10px;
  margin-bottom: 16px;
}
</style>