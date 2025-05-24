<template>
  <div class="Home">
    <!-- 导航区域 -->
    <div class="shortcut">
      <div class="navigation">
        <ul class="fr">
          <li class="shortcut_btn" v-for="(nav, index) in navItems" :key="index">
            <div class="dt">
              <span v-if="nav.route"><router-link :to="nav.route">{{ nav.text }}</router-link></span>
              <a v-else href="">{{ nav.text }}</a>
            </div>
            <div class="spacer" v-if="index < navItems.length - 1"></div>
          </li>
        </ul>
        <ul class="fl">
          <li class="" style="float: right;">
            <div class="dt">
              <i class="icon icon-bianzubeifen"></i>
              <span v-if="!isLoggedIn"><router-link to="/Login">登录</router-link></span>
              <el-dropdown v-else>
                <span class="el-dropdown-link">
                  {{ username }}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>个人中心</el-dropdown-item>
                  <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </li>
        </ul>
      </div>
    </div>


    <div class="home-body">
      <!-- 添加日程表单 -->
      <div class="form-container">
        <h2>添加新日程</h2>
        <form @submit.prevent="submitSchedule">
          <div class="form-group">
            <label for="categoryId">日程分类</label>
            <select id="categoryId" v-model="formData.categoryId" required>
              <option value="1">工作</option>
              <option value="2">学习</option>
              <option value="3">生活</option>
            </select>
          </div>

          <div class="form-group">
            <label for="title">日程主题</label>
            <input type="text" id="title" v-model="formData.title" required>
          </div>

          <div class="form-group">
            <label for="startTime">开始时间</label>
            <input type="datetime-local" id="startTime" v-model="formData.startTime" required step="60">
          </div>

          <div class="form-group">
            <label for="endTime">结束时间</label>
            <input type="datetime-local" id="endTime" v-model="formData.endTime" required step="60">
          </div>

          <div class="form-group">
            <label for="remindTime">提醒时间</label>
            <input type="datetime-local" id="remindTime" v-model="formData.remindTime" required step="60">
          </div>

          <div class="form-group">
            <label for="description">日程描述</label>
            <textarea id="description" v-model="formData.description" rows="4" required></textarea>
          </div>

          <button type="submit">提交</button>
          <button type="button" @click="resetForm">重置</button>

          <div v-if="message" :class="messageClass">{{ message }}</div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import request from '../utils/request.js';

import { RouterLink } from 'vue-router';
import { mapState } from 'vuex';
import { Dropdown, DropdownMenu, DropdownItem } from 'element-ui';

export default {
  name: 'SubEvent',
  components: {
    [Dropdown.name]: Dropdown,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem
  },
  data() {
    return {
      navItems: [
        { text: '首页', route: '/' },
        { text: '待办清单', route: '/ToDoList' },
        { text: '添加待办', route: '/SubEvent' }
      ],
      formData: {
        categoryId: '1',
        title: '',
        startTime: '',
        endTime: '',
        remindTime: '',
        description: ''
      },
      message: '',
      messageClass: '',
    };
  },
  computed:{
    ...mapState({
      isLoggedIn: state => state.isAuthenticated,
      username: state => state.user?.username || '用户'
    }),
  },
  methods: {
    submitSchedule() {
      // 验证提醒时间不能小于当前时间
      const now = new Date();
      const remindTime = new Date(this.formData.remindTime);
      if (remindTime < now) {
        this.message = '提醒时间不能小于当前日期';
        this.messageClass = 'error';
        return;
      }
      // 格式化时间，确保秒数为0
      const formatTime = (timeStr) => {
        if (!timeStr) return '';
        const date = new Date(timeStr);
        date.setSeconds(0);
        return date.toISOString().replace('T', ' ').substring(0, 19);
      };
      const payload = {
        ...this.formData,
        categoryId: parseInt(this.formData.categoryId), // 确保 categoryId 为整数
        startTime: formatTime(this.formData.startTime),
        endTime: formatTime(this.formData.endTime),
        remindTime: formatTime(this.formData.remindTime)
      };

      // 发送请求
      request.post('/api/schedule/addSchedule', payload)
        .then(response => {
          if (response.data.code === '0') {
            this.message = '日程添加成功';
            this.messageClass = 'success';
            this.resetForm();
          } else {
            this.message = response.data.message || '添加日程失败';
            this.messageClass = 'error';
          }
        })
        .catch(error => {
          this.message = '请求失败: ' + error.message;
          this.messageClass = 'error';
        });
    },
    resetForm() {
      this.formData = {
        categoryId: '1',
        title: '',
        startTime: '',
        endTime: '',
        remindTime: '',
        description: ''
      };
    },
    async logout() {
      await this.$store.dispatch('logout')
      this.$router.push('/login')
    },
  }
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}
div {
    display: block;
    unicode-bidi: isolate;
}
.Home {
    width: 100%;
    height: 100%;
}
.icon, .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
.shortcut {
    background-color: #f5f5f5;
    color: #777;
    height: 30px;
    line-height: 27px;
    width: 100%;
}
.navigation {
    display: flex;
    width: 100%;
    height: 100%;
}
.shortcut .dt {
  display: flex;
    line-height: 36px;
    padding: 0px 8px;
    height: 36px;
    box-sizing: border-box;
}
.shortcut_btn {
    position: relative;
}
li {
    list-style: none;
    display: list-item;
}
ul {
    margin-left: 20px;
}
.fr {
    width: 100%;
    height: 100%;
    margin-left: 20%;
    margin-top: 0px;
    margin-bottom: 0px;
}
.fl {
    margin-top: 0px;
    margin-bottom: 0px;
    width: 20%;
    height: 100%;
}
.shortcut li {
    float: left;
}
.shortcut li.spacer {
    overflow: hidden;
    margin: 14px 8px 0;
    width: .5px;
    height: 8px;
    background-color: rgba(0,0,0,.2);
}

.home-body {
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 25px;
  padding: 20px;
}
.form-container {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}
input, select, textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}
button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
}
button:hover {
  background-color: #45a049;
}
button[disabled] {
  background-color: #cccccc;
  cursor: not-allowed;
}
.error {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}
.success {
  color: green;
  font-size: 14px;
  margin-top: 5px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
</style>