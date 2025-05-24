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
    <!-- 日历区域 -->
    <div class="month-zone">
      <div class="sideBar_sideBarBox_Ivm66">
        
          <div class="create_schedule" @click="generateEvent()">
            <span style="background-color: rgba(0,87,255,0.06); border-radius: 25%; font-size: 25px; padding: 10px;">创建新日程</span>
          </div>
        
        <div class="sidebar-create" style="text-align: center;">佳茗日历就是好！</div>
        
        <!-- 迷你日历 -->
        <div class="mini-date-picker">
          <div class="calendar-date-header calendar-month-header mini-date-header">
            <div class="calendar-month-header-text">
              <span class="calendar-month-header-year mini-calendar-month-header-txt">{{ currentYear }}年</span>
              <span class="calendar-month-header-month mini-calendar-month-header-txt">{{ currentMonth + 1 }}月</span>
            </div>
            <div class="calendar-date-header-zone">
              <div class="calendar-date-header-zone" @click="prevMonth">
                <i class="iconfont icon-shanjiantou-zuo" style="font-size:16px"></i>
              </div>
              <div class="date-time" @click="goToToday">
                <i class="iconfont icon-rect"></i>
              </div>
              <div class="calendar-date-header-zone" @click="nextMonth">
                <i class="iconfont icon-shanjiantou-you" style="font-size:16px"></i>
              </div>
            </div>
          </div>
          <div class="calendar-month mini-calendar-month">
            <div class="calendar-month-week">
              <div class="weekday mini-calendar-week over-time" v-for="day in weekDays" :key="day">{{ day }}</div>
            </div>
            <div class="calendar-month-body">
              <div class="min-months" v-for="(day, index) in miniCalendarDays" :key="index" @click="selectDate(day)">
                <div class="mini-calendar-day body-day" :class="{ 
                  'over-time': !day.isCurrentMonth,
                  'selected': day.isSelected
                }">
                  <span class="mini-calendar-day-text">{{ day.date }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 主日历 -->
      <div class="simple-month-zone">
        <div class="big-calendar simple-month">
          <div class="big-calendar-header">
            <div class="big-calendar-header-left">
              <div class="calendar-month-header">
                <div class="big-calendar-header-month">{{ currentYear }}年{{ currentMonth + 1 }}月</div>
                <div class="calendar-month-header-zone">
                  <div>
                    <div class="calendar-month-header-btn left-btn" @click="prevMonth">
                      <i class="iconfont icon-left"></i>
                    </div>
                  </div>
                  <div>
                    <div class="month-time over-time" @click="goToToday">今天</div>
                  </div>
                  <div>
                    <div class="calendar-month-header-btn right-btn" @click="nextMonth">
                      <i class="iconfont icon-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="calendar-month">
            <div class="calendar-month-week">
              <div class="weekday big-calendar-week" v-for="day in weekDaysFull" :key="day">{{ day }}</div>
            </div>
            <div class="calendar-month-body">
              <div class="months" v-for="(day, index) in calendarDays" :key="index" @click="selectDate(day)">
                <div class="big-calendar-day">
                  <div class="day-header">
                    <div class="big-calendar-day-num">
                      <span style="width: 40px;" :class="{
                        'selected': day.isToday || day.isSelected,
                        'not-month': !day.isCurrentMonth,
                        'normal': true
                      }">{{ day.date }}</span>
                    </div>
                    <div class="big-calendar-day-lunar" :class="{ 'term-day': day.isTerm }">
                      {{ day.lunarDate }}
                    </div>
                  </div>
                  <div v-if="day.isCurrentMonth && day.events && day.events.length > 0" class="event-indicator">
                    <div v-for="(event, i) in day.events" :key="i" class="event-dot" :style="{ backgroundColor: event.color }">{{ event.title }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lunisolar from 'lunisolar';
import { RouterLink } from 'vue-router';
//import { generateCodeFrame } from 'vue-template-compiler';
//import { Dropdown, DropdownMenu, DropdownItem } from 'element-ui'
import { mapState } from 'vuex';
import { Dropdown, DropdownMenu, DropdownItem } from 'element-ui';

export default {
  name: 'Home',
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
      weekDays: ['日', '一', '二', '三', '四', '五', '六'],
      weekDaysFull: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      currentDate: new Date(),
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth(),
      today: new Date(),
      selectedDate: null,
      events: [
        { date: '2025-04-15', title: '会议', color: '#ff6b6b' },
        { date: '2025-04-20', title: '生日', color: '#48dbfb' },
        { date: '2025-04-25', title: '截止日期', color: '#1dd1a1' }
      ]
    }
  },
  computed: {
    ...mapState({
      isLoggedIn: state => state.isAuthenticated,
      username: state => state.user?.username || '用户'
    }),
    miniCalendarDays() {
      return this.generateCalendarDays(true);
    },
    calendarDays() {
      return this.generateCalendarDays(false);
    },
    isLoggedIn() {
      return this.$store.getters.isAuthenticated
    },
    username() {
      return this.$store.state.user?.username || '用户'
    },
  },
  methods: {
    async logout() {
      await this.$store.dispatch('logout')
      this.$router.push('/login')
    },
    generateEvent(){
      this.$router.push({name:"SubEvent"});
    },

    generateCalendarDays(isMini) {
      const year = this.currentYear;
      const month = this.currentMonth;
      
      // 获取当月第一天
      const firstDay = new Date(year, month, 1);
      // 获取当月第一天是星期几 (0-6)
      const firstDayOfWeek = firstDay.getDay();
      
      // 获取上个月最后几天
      const prevMonthLastDay = new Date(year, month, 0).getDate();
      
      // 获取当月最后一天
      const lastDay = new Date(year, month + 1, 0);
      // 获取当月总天数
      const daysInMonth = lastDay.getDate();
      // 获取当月最后一天是星期几
      const lastDayOfWeek = lastDay.getDay();
      
      // 计算需要显示的总天数 (6行 x 7天)
      const totalDays = 42; // 迷你日历5行，主日历6行
      
      const days = [];
      
      // 添加上个月的最后几天
      for (let i = firstDayOfWeek - 1; i >= 0; i--) {
        const date = prevMonthLastDay - i;
        const lunar = this.getLunarDate(year, month - 1, date);
        days.push({
          year,
          month: month - 1,
          date,
          isCurrentMonth: false,
          isToday: false,
          isSelected: this.isSelectedDate(year, month - 1, date),
          lunarDate: lunar.dayCn,
          isTerm: lunar.isTerm,
          term: lunar.term || '',
          fullDate: `${year}-${this.pad(month)}-${this.pad(date)}`
        });
      }
      
      // 添加当月的天数
      for (let i = 1; i <= daysInMonth; i++) {
        const isToday = 
          i === this.today.getDate() && 
          month === this.today.getMonth() && 
          year === this.today.getFullYear();
        
        const lunar = this.getLunarDate(year, month, i);
        const dateStr = `${year}-${this.pad(month + 1)}-${this.pad(i)}`;
        
        days.push({
          year,
          month,
          date: i,
          isCurrentMonth: true,
          isToday: isToday,
          isSelected: this.isSelectedDate(year, month, i),
          lunarDate: lunar.dayCn,
          isTerm: lunar.isTerm,
          term: lunar.term || '',
          fullDate: dateStr,
          events: this.getEventsForDate(dateStr)
        });
      }
      
      // 添加下个月的前几天
      const remainingDays = totalDays - days.length;
      for (let i = 1; i <= remainingDays; i++) {
        const lunar = this.getLunarDate(year, month + 1, i);
        days.push({
          year,
          month: month + 1,
          date: i,
          isCurrentMonth: false,
          isToday: false,
          isSelected: this.isSelectedDate(year, month + 1, i),
          lunarDate: lunar.dayCn,
          isTerm: lunar.isTerm,
          term: lunar.term || '',
          fullDate: `${year}-${this.pad(month + 2)}-${this.pad(i)}`
        });
      }
      
      return days;
    },
    
    getLunarDate(year, month, day) {
      try {
          const dateObj = new Date(year, month, day);
          const lsr = lunisolar(dateObj);
          
          // 获取农历日（1-30）
          const lunarDay = lsr.lunar.day;
          
          // 手动将数字转换为中文（初一、初二...三十）
          const dayCn = this.numberToLunarDay(lunarDay);
          
          // 获取节气（如果有）
          const term = lsr.solarTerm?.name || '';
          
          return {
          dayCn: term || dayCn, // 优先显示节气
          isTerm: !!term,
          term: term
          };
      } catch (error) {
          console.error('农历转换失败:', error);
          return { dayCn: '初一', isTerm: false, term: '' };
      }
      },

      // 辅助方法：数字转农历日
    numberToLunarDay(day) {
      const lunarDays = [
          '初一', '初二', '初三', '初四', '初五', 
          '初六', '初七', '初八', '初九', '初十',
          '十一', '十二', '十三', '十四', '十五',
          '十六', '十七', '十八', '十九', '二十',
          '廿一', '廿二', '廿三', '廿四', '廿五',
          '廿六', '廿七', '廿八', '廿九', '三十'
      ];
      return lunarDays[day - 1] || '初一';
    },
    
    getEventsForDate(dateStr) {
      dateStr=dateStr;
      return null;
      /* return this.events.filter(event => event.date === dateStr); */
    },
    
    isSelectedDate(year, month, day) {
      if (!this.selectedDate) return false;
      return (
        year === this.selectedDate.getFullYear() &&
        month === this.selectedDate.getMonth() &&
        day === this.selectedDate.getDate()
      );
    },
    
    selectDate(day) {
      this.selectedDate = new Date(day.year, day.month, day.date);
      
      // 如果选择的日期不是当前月份，切换到那个月份
      if (!day.isCurrentMonth) {
        this.currentYear = day.year;
        this.currentMonth = day.month;
      }
      
      //console.log('Selected date:', this.selectedDate);
      // 这里可以添加处理选择日期的逻辑，比如显示事件详情等
      this.$router.push({
        path:'/ToDoList',
        query:{
          date: `${day.year}-${day.month+1}-${this.pad(day.date)}`
        }
      })
    },
    
    prevMonth() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    
    nextMonth() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    
    goToToday() {
      this.currentYear = this.today.getFullYear();
      this.currentMonth = this.today.getMonth();
      this.selectedDate = new Date();
    },
    
    pad(num) {
      return num < 10 ? `0${num}` : num;
    }
  },
  mounted() {
    this.selectedDate = new Date();
  }
}
</script>


<style scoped>
.create_schedule{
  height: 10%; 
  
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  padding: 0 30px;
}

  /* 节气特殊样式 */
.term-day {
  color: #ff4757;
  font-weight: bold;
}
/* 保持原有的样式不变 */
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

/* calendar */
.simple-month-zone {
    width: 80%;
    flex: 1;
    height: 100%;
}
.big-calendar-header {
    display: flex;
    padding: 20px 24px;
    align-items: center;
    justify-content: space-between;
}
.big-calendar-header-month {
    font-size: 18px;
    width: 188px;
    font-weight: 500;
    font-family: PingFang SC;
}
.calendar-month-header {
    margin-bottom: 0;
}
.calendar-month-header-btn {
    width: 32px;
    text-align: center;
    border: 1px solid rgba(0, 33, 133, .08);
    box-sizing: border-box;
    height: 32px;
    cursor: pointer;
}
.calendar-month-header-btn.left-btn {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
}
.calendar-month-header-btn.right-btn {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
}
.calendar-month-header, .calendar-month-header-zone {
    display: flex;
    font-size: 14px;
    align-items: center;
    color: #1f2233;
}
.calendar-month-header-zone {
    height: 32px;
    line-height: 32px;
    font-weight: 400;
    cursor: pointer;
}
.calendar-month-header .month-time.over-time {
    color: #cbccd2;
    border: 1px solid rgba(0,33,133,.08);
    border-right: none;
    border-left: none;
}

/* table head */
.calendar-month-body {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    overflow: hidden;
    width: 100%;
    flex: 1;
}
.calendar-month {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background-image: url(../assets/calendar_bgi.png);
}
.calendar-month .calendar-month-week {
    display: flex;
    border-top: 1px solid rgba(0,20,92,.04);
    box-shadow: 0 2px 6px 0 rgba(0,49,173,.04);
}
.calendar-month .calendar-month-week .weekday {
    width: 14.28%;
}
.big-calendar-week {
    color: #525564;
    font-size: 14px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    box-sizing: border-box;
} 
/* day */
.calendar-month-body .months {
    width: 14.28%;
    height: 13.5vh;
}
.big-calendar .months {
    box-sizing: border-box;
    border: 1px solid rgba(0,20,92,.08);
    border-top: none;
    border-left: none;
    position: relative;
}
.big-calendar-day {
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
}
.big-calendar-day .day-header {
    /*display: flex;*/
    justify-content: space-between;
    align-items: center;
    padding: 2px 8px 2px 2px;
    overflow: hidden;
}
.big-calendar-day-num {
    margin-top: 20px;
    color: #1f2233;
    font-size: 30px;
    height: 40px;
    line-height: 40px;
    /* display: flex; */
    text-align: center;
}
.big-calendar-day-lunar {
    color: #999da8;
    font-size: 15px;
    text-align: center;
    margin-top: 10px;
}
.big-calendar-day-num .normal {
    font-family: DIN-Medium;
    width: 26px;
    display: inline-block;
    text-align: center;
}
.big-calendar-day-num .not-month {
    color: #999da8;
}
.big-calendar-day-num .selected {
    color: #fff !important;
    background-color: #0e62ff;
    border-radius: 50%;
}
/* 左侧区域 */
.month-zone {
    width: 100%;
    flex: 1;
    display: flex;
}
.sideBar_sideBarBox_Ivm66 {
    width: 20%;
    height: 93vh;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    background-image: url(../assets/witch.jpg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left bottom;
    background-color: #f7f8fb;
    background-blend-mode: darken;
}

/* 左侧小日历 */
.calendar-date-header {
    display: flex;
    justify-content: space-between;
    line-height: 20px;
    padding: 12px 16px 8px;
    font-size: 12px;
    font-weight: 500;
}
.mini-calendar-week {
    text-align: center;
    height: 15px;
    line-height: 15px;
    width: 32px;
}
.over-time {
    color: #999da8;
}
.calendar-month-body .min-months {
    width: 14.28%;
    margin-top: 10px;
}

.sidebar-create {
    font-size: 25px;
}

/* 之前的样式保持不变，新增以下样式 */

.event-indicator {
display: flex;
justify-content: center;
flex-wrap: wrap;
padding: 2px;
}

.event-dot {
width: 6px;
flex: 1;
margin: 1px;
}

.mini-calendar-day.selected {
color: #fff !important;
background-color: #0e62ff;
border-radius: 50%;
}



.mini-calendar-day{
text-align: center;
cursor: pointer;
}

/* 节气样式 */
.term-day {
color: #ff4757;
font-weight: bold;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
</style>