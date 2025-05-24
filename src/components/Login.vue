<!-- java -jar 011eff052fdeba3c217ac64cf4eebf5e_55eebc299f8e0e5ab47fd7c0b2aa2336_8.jar --spring.datasource.url=jdbc:mysql:/
/127.0.0.1:3306/schedule --spring.datasource.username=root --spring.datasource.password=123456 -->


<!-- 数据交互实例 -->
<!-- <template>
    <div>
      <button @click="testService" :disabled="isLoading">测试服务</button>
      <p v-if="responseMessage">{{ responseMessage }}</p>
    </div>
</template>
  
  <script>
  import request from '@/utils/request';
  export default {
    data() {
      return {
        responseMessage: '', // 存储接口返回的消息
        isLoading: false, // 加载状态
      };
    },
    methods: {
        async testService() {
            this.isLoading = true; // 开始加载
            this.responseMessage = ''; // 清空之前的消息

            request.get('/api/schedule/test')
            .then(response => {
                this.responseMessage = response.data;
            })
            .catch(error => {
                this.responseMessage = '请求失败：' + error.message;
            });
        },
    },
  };
  </script> -->

<template>
    <div class="page">
        <div class="div_header">
           
        </div>
        <div class="login-container">
            <h2 style="text-align: center; ">登录</h2>
            <form @submit.prevent="handleLogin">
            <div class="form-group">
                <label for="username">用户名</label>
                <input
                type="text"
                id="username"
                v-model="username"
                required
                placeholder="请输入用户名"
                />
            </div>
            <div class="form-group">
                <label for="password">密码</label>
                <input
                type="password"
                id="password"
                v-model="password"
                required
                placeholder="请输入密码"
                />
            </div>
            <button type="submit">登录</button>

            <div style="height: 20px; line-height: 20px; font-size: 12px; padding: 10px 15px;">
                <span style="float: left;"> <router-link to="/Register" style="font-size: 13px; color: #f14b8e;"> 注册 </router-link> </span>
                <span style="float: right;"><router-link to="/ResetPassword" style="font-size: 13px; color: #3399ff;"> 找回密码</router-link> </span>
            </div>

            </form>
            <p v-if="error" class="error-message">{{ error }}</p>
        </div>
    </div>
</template>
  
<script>
  import request from '@/utils/request';

  export default {
    data() {
      return {
        username: '',
        password: '',
        loading: false,
        error: ''
      }
    },
    methods: {
      async handleLogin() {
            // 清除之前的错误信息
            this.error = '';
            this.loading = true;

            // 前端验证
            if (!this.username || !this.password) {
              this.error = '用户名和密码不能为空';
              this.loading = false;
              return;
            }

            try {
              const response = await request.post('/api/schedule/login', {
                username: this.username,
                password: this.password
              });

              if (response.data.success) {
                //alert("success!");
                // 1. 提交 mutation 更新登录状态
                 this.$store.commit('SET_USER', {
                  username: this.username,
                  token: response.data.data.token // 假设返回中有token
                });
                
                // 2. 存储 token 到本地存储
                localStorage.setItem('authToken', response.data.data.token);
                
                localStorage.setItem('authName',this.username);
                
                 // 3. 设置 axios 默认授权头
                 request.defaults.headers.common['Authorization'] = `Bearer ${response.data.data.token}`;
                
                // 4. 显示成功提示（使用 Element UI）
                //this.$message.success('登录成功！');
                
                // 5. 跳转到首页或重定向页面
                const redirectPath = this.$route.query.redirect || '/';
                this.$router.push(redirectPath); 
                
              } else {
                this.error = response.data.message || '登录失败，请检查用户名和密码';
              }
            } catch (error) {
              console.error('登录错误:', error);
              this.error = error.response?.data?.message || 
                          '登录请求失败，请检查网络连接';
            } finally {
              this.loading = false;
            }
      }
    }
  }
</script>
  
<style scoped>
  .page{
    width: 100%;
    min-height: 100vh; /* 使用视口高度确保覆盖整个屏幕 */
    background: 
      linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), /* 半透明白色叠加层 */
      url(../assets/bgi.png) center/cover no-repeat fixed; /* 固定背景图 */

  }
  .login-container {
    max-width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid ;
    border-radius: 5px;
    position: fixed;
    left: 20%;
  }
  
  .div_header{
    width: 100%;
    height: 100px;
    border-bottom: 1px,solid,#d3d3d3;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    float: left;
    display: block;
    margin-left: 4px;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #218838;
  }
  
  .error-message {
    color: red;
    margin-top: 10px;
  }
</style> 