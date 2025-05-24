<template>
    <div class="to-do-list">
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

        <div class="main-body">
            <div class="left-area">
            </div>

            <div class="right-area">
                <div class="container">
                    <h1 class="todo-list-head">我的待办清单-{{ new Date(selectDate).toLocaleDateString() }}</h1>
                    
<!--                     <div class="input-container">
                        <input type="text" id="task-input" placeholder="添加新任务..." autofocus v-model="newTask">
                        <button id="add-btn" @click="addTask">
                            <i class="icon icon-tianjiajiahaowubiankuang icon-add"></i>
                        </button>
                    </div> -->

                    <ul id="task-list">
                        <li v-for="(task, index) in tasks" :key="index">
                            <input 
                                type="checkbox" 
                                class="task-checkbox"
                                v-model="task.completed"
                                @change="saveTasks"
                            >
                            <span class="task-text" :class="{ completed: task.completed }">
                                {{ task.title }}
                            </span>
                            <button class="delete-btn" @click="removeTask(index)">删除</button>
                        </li>
                        <li v-if="tasks.length==0" class="no-tasks">
                            暂无当日日程安排
                        </li>
                    </ul>
                </div>

                <div class="detail-container">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import request from '../utils/request.js';
import { mapState } from 'vuex';
import { Dropdown, DropdownMenu, DropdownItem } from 'element-ui';

export default {
    name: 'ToDoList',
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
            tasks: [],
            newTask: '',
            selectDate: new Date().toISOString().split('T')[0], // 默认今天
            currentPage: 1 // 当前页码
        }
    },
    computed:{
        ...mapState({
            isLoggedIn: state => state.isAuthenticated,
            username: state => state.user?.username || '用户'
        })
    },
    mounted() {
        if(this.$route.query.date){
            this.selectDate = this.$route.query.date;
        }
        this.loadTasks();
    },
    methods: {
        async logout() {
            await this.$store.dispatch('logout')
            this.$router.push('/login')
        },
        addTask() {
            if (this.newTask.trim() === '') return;
            this.tasks.push({
                text: this.newTask.trim(),
                completed: false,
                date: this.selectDate 
            });
            this.newTask = '';
            this.saveTasks();
        },
        async removeTask(index) {
            const taskToRemove = this.tasks[index];
            const taskId = taskToRemove.id;
            alert(taskId);
            try {
                // 发送删除请求到后端
                const response = await request.delete(`/api/schedule/deleteSchedule/${taskId}`);
                alert(response.data.message);
                if (response.data.code=="0") {
                    // 后端删除成功，从前端数组中移除该任务
                    this.tasks.splice(index, 1);
                    this.saveTasks();
                } else {
                    // 后端返回错误状态码，给出提示
                    alert('删除任务失败，请稍后重试');
                }
            } catch (error) {
                // 请求出错，给出提示
                console.error('删除任务时发生错误:', error);
                alert('删除任务时发生错误，请稍后重试');
            }
            //this.tasks.splice(index, 1);
            //this.saveTasks();
        },
        saveTasks() {
            try {
                localStorage.setItem('tasks', JSON.stringify(this.tasks));
            } catch (error) {
                console.error('保存任务到本地存储时出错:', error);
            }
        },
        async loadTasks() {
            try {
                const response = await request.get('/api/schedule/searchSchedule', {
                    params: {
                        size: 8,
                        current: this.currentPage,
                        startTime: this.selectDate,
                        endTime: '',
                        keyword:''
                    }
                });
                //alert(response.data.data.records);
                if (response.data.code === '0' && response.data.success) {
                    // 假设接口返回的数据结构中有一个名为 list 的数组包含日程信息
                    this.tasks = response.data.data.records || [];
                    //alert(tasks);
                } else {
                    console.error(response.data.message);
                }
            } catch (error) {
                console.error('请求出错:', error);
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /* 原有的 CSS 代码保持不变 */
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Arial', sans-serif;
    }
    div{
        display: block;
        unicode-bidi: isolate;
    }

    .to-do-list{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .icon, .iconfont {
        font-family:"iconfont" !important;
        font-size:16px;
        font-style:normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }

    .shortcut{
        background-color: #f5f5f5;
        color: #777;
        height: 30px;
        line-height: 27px;
        width: 100%;
    }

    .navigation{
        display: flex;
        width: 100%;
        height: 100%;
    }

    .shortcut .dt{
        display: flex;
        line-height: 36px;
        padding: 0px 8px;
        height: 36px;
        box-sizing: border-box;
    }
    .shortcut_btn{
        position: relative;
    }
    li{
        list-style: none;
        display: list-item;
    }
    .fr{
        width: 100%;
        height: 100%;
        margin-left: 20%;
        margin-top: 0px;
        margin-bottom: 0px;
    }
    .fl{
        margin-top: 0px;
        margin-bottom: 0px;
        width: 20%;
        height: 100%;
    }
    .shortcut li{
        float: left;
    }
    .shortcut li.spacer{
        overflow: hidden;
        margin: 14px 8px 0;
        width: .5px;
        height: 8px;
        background-color: rgba(0,0,0,.2);
    }

    .main-body{
        width: 100%;
        flex: 1;
        display: flex;
    }

    .left-area{
        width: 20%;
        height: 100%;
        background-color: #f5f5f5; /* 改为浅灰色 */
    }

    .right-area{
        width: 80%;
        height: 100%;
        background-color: #f5f5f5;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }

    .container {
        width: 75%;
        height: 100%;
        background-color: #fff9e6;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        padding: 20px;
    }
    
    h1 {
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
    
    .input-container {
        display: flex;
        margin-bottom: 20px;
    }
    
    #task-input {
        flex: 1;
        padding: 0 4px;
        font-size: 16px;
        border: none; /* 边框不显示 */
        outline: none; /* 点击时不显示 */
        border-bottom: 1px solid; 
        box-shadow: none;
        margin-right: 12px;
        border-radius: 0;
        background-color: transparent;
    }

    #task-input:focus {
        border-bottom-color: #ffd700; /* 聚焦时金色下划线 */
    }
    
    #add-btn {
        width: 32px;
        height: 32px;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        color: #fff;
        font-size: 32px;
    }
    
    #add-btn:hover {
        font-size: 35px;
    }

    .icon-add{
        border-radius: 50%;
        font-size: 100%;
        background-color: #ffd700; /* 改为金色 */
        color: #fff; /* 白色图标 */
    }

    .container
    ul{
        list-style-type: none;
        padding: 0;
    }
    
    .container
    li{
        border-radius: 4px;
        padding: 12px 15px;
        border-bottom: 1px solid #eee;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: white;
        margin-bottom: 12px;
        border-left: 4px solid #ffd700; /* 添加金色左边框 */
    }
    
    .container li:hover {
        background-color: #fffdf0; /* 悬停时轻微变色 */
        transform: translateX(2px);
        transition: all 0.2s ease;
    }
    
    .task-text {
        flex: 1;
        margin-left: 10px;
    }
    
    .completed {
        text-decoration: line-through;
        color: #888;
    }
    
    .delete-btn {
        background-color: #f44336;
        color: white;
        border: none;
        border-radius: 4px;
        padding: 5px 10px;
        cursor: pointer;
        margin-left: 10px;
    }
    
    .delete-btn:hover {
        background-color: #d32f2f;
    }
    
    .task-checkbox {
        width: 16px;
        height: 16px;
        cursor: pointer;
        border: 1px solid;
        border-radius: 50%;
        appearance: none;
        -webkit-appearance: none; /* Safari兼容 */
    }

    .task-checkbox:checked {
        background-color: #4CAF50; /* 绿色背景表示选中 */
        border-color: #4CAF50;
    }

    .detail-container{
        width: 25%;
        height: 100%;
        background-color: #f5f5f5; /* 改为浅灰色 */
        padding-top: 10%;
    }

    .todo-list-head{
        font-size: 20px;
        line-height: 32px;
        margin: 0 0 12px 0;
    }

    .no-tasks {
        text-align: center;
        color: #888;
        font-style: italic;
        border-left: none !important;
        justify-content: center !important;
    }
    .el-dropdown-link {
        cursor: pointer;
        color: #409EFF;
    }
</style>