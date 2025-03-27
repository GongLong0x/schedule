<!-- java -jar 011eff052fdeba3c217ac64cf4eebf5e_55eebc299f8e0e5ab47fd7c0b2aa2336_8.jar --spring.datasource.url=jdbc:mysql:/
/127.0.0.1:3306/schedule --spring.datasource.username=root --spring.datasource.password=123456 -->
<template>
    <div>
        <div class="div_header">
           
        </div>
        <div class="login-container">
            <h2>登录</h2>
            <form @submit.prevent="handleSubmit">
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
                <span style="float: left;"> <router-link to="/Register" style="font-size: 13px; color: #f14b8e;"> 注册/Register </router-link> </span>
                <span style="float: right;"><router-link to="/ResetPassword" style="font-size: 13px; color: #3399ff;"> 找回密码/ResetPassword</router-link> </span>
            </div>

            </form>
            <p v-if="error" class="error-message">{{ error }}</p>
        </div>
    </div>
</template>

<script>
import request from '@/utils/request';
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      username: '',
      password: '',
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
        const response = await request.post('/api/schedule/login', {
          username: this.username,
          password: this.password
        });

        // 假设后端返回的数据结构为 { success: boolean, message: string }
        if (response.data.success) {
          alert('登录成功！');
          // 这里可以添加跳转到其他页面的逻辑
          // 例如：this.$router.push('/dashboard');
          //this.$router.push('baidu.com');
          window.location.href = 'https://www.baidu.com';
        } else {
          this.error = response.data.message || '登录失败，请检查用户名和密码';
        }
      } catch (error) {
        this.error = '请求失败：' + error.message;
      }
    }
  }
};
</script>

<style scoped>


.login-container {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
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