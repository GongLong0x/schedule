<!-- java -jar 011eff052fdeba3c217ac64cf4eebf5e_55eebc299f8e0e5ab47fd7c0b2aa2336_8.jar --spring.datasource.url=jdbc:mysql:/
/127.0.0.1:3306/schedule --spring.datasource.username=root --spring.datasource.password=123456 -->


<template>
    <div>
        <div class="div_header">
            <h1>注册新用户</h1>
        </div>
        <form id="signInForm" @submit.prevent="handleSubmit">
            <div class="field-input " title="输入昵称/Input your name">
                <i class="iconfont icon-pepole"></i>
                <input type="text" name="username" id="username" v-model="username" class="field-input-default" placeholder="昵称/Name（必填，输入真实姓名，系统定期清除非真实用户）">
                <span id="chineseNameTips" class="tips-default"></span>
            </div>
            <div class="field-input" title="输入密码/Input your Password">
                <i class="iconfont icon-lock"></i>
                <input type="text" name="password" id="password" v-model="password" class="field-input-default" placeholder="密码/Password（必填，输入您的用户密码，请不要轻易泄露）">
                <span id="phoneTips" class="tips-default"></span>
            </div>
            <div class="field-input" title="输入手机号码/Input your Mobile Phone">
                
                <i class="iconfont icon-system-phonebook"></i>
                <input type="text" name="phoneNumber" id="phoneNumber" v-model="phoneNumber" class="field-input-default ac_input" placeholder="手机号码/Mobile Phone（选填，输入真实手机号码）" value="" autocomplete="off">
                <span id="workUnitTips" class="tips-default" style="color: green; display: block; height: 12px; margin-top: -25px;"></span>
                <span id="workUnitLogoTips" class="tips-default" style="color: green; margin-top: -8px;"></span>
            </div>
            <div class="field-input field-input-email" title="输入常用邮箱/Input your Email">
                
                <i class="iconfont icon-mail"></i>
                <input type="text" name="email" id="email" v-model="email" class="field-input-default" placeholder="邮箱/Email（选填，输入真实邮箱，用于接收账号激活邮件）">
                <span id="emailTips" class="tips-default"></span>
            </div>
            <p v-if="error" class="error-message">{{ error }}</p>
            <div class="field-input">
                <input type="submit" value="同意协议并注册/Submit" name="submit" id="submit" class="btn-submit">
                <p class="field-protocol">
                    <a href="registerProtocol.html" target="_blank">《服务协议》、</a><a href="http://www.cac.gov.cn/2015-02/04/c_1114246561.htm" target="_blank">《互联网用户账号管理规定》</a>
                </p>
            </div>
            <input type="hidden" value="1742389292860" name="signRnd">
            <input type="hidden" value="###undefined#" id="cookieInput" name="signInCookie">
        </form>
    </div>
</template>


<script>
import request from '@/utils/request';


export default {
  data() {
    return {
      username: '',
      password: '',
      phoneNumber: '',
      email:'',
      error: ''
    };
  },
  methods: {
    async handleSubmit() {
      // 简单的前端验证
      if (!this.username || !this.password) {
        this.error = '用户名和密码不能为空';
        return;
      }

      try {
        const response = await request.post('/api/schedule/register', {
          username: this.username,
          password: this.password,
          phoneNumber: this.phoneNumber,
          email: this.email
        });

        // 假设后端返回的数据结构为 { success: boolean, message: string }
        if (response.data.success) {
          alert('注册成功！');
          // 这里可以添加跳转到其他页面的逻辑
          // 例如：this.$router.push('/dashboard');
          //this.$router.push('baidu.com');
          window.location.href = 'https://www.baidu.com';
        } else {
          this.error = response.data.message || '注册失败';
        }
      } catch (error) {
        this.error = '请求失败：' + error.message;
      }
    }
  }
};
</script>

<style scoped>
.icon, .iconfont {
  font-family:"iconfont" !important;
  font-size:28px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

.div_header{
  text-align: center;
  width: 100%;
  height: 100px;
  border-bottom: 1px,solid,#d3d3d3;
}

#signInForm{
    margin: 2px auto;
    width: 100%;
    text-align: center;
    position: absolute;
    left: 0%;
}

.field-input{
    position: relative;
    width: 100%;
    height: 84px;
}

.btn-submit {
    background-color: #399;
    border: 0;
    height: 50px;
    width: 508px;
    /* text-algin: center; */
    padding-top: 14px;
    padding-bottom: 15px;
    font-size: 16px;
    color: white;
    border-radius: 4px;
    padding-top: 14px;
    margin-left: 0;
    cursor: pointer;
}

.field-protocol {
    font-size: 12px;
    color: #434c4c;
    margin-top: 8px;
    margin-bottom: 8px;
}

p>a {
    color: #434c4c;
    text-decoration: none;
}

.field-input-default {
    margin-bottom: 35px;
    border-bottom: 1px solid #a7b1b1 !important;
}

input[type=text] {
    width: 454px;
    height: 42px;
    border: 0;
    font-size: 16px;
    color: #a7b1b1 !important;
    padding-left: 10px;
    padding-bottom: 0;
}

input:focus{
	outline: none;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>


