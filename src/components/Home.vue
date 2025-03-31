<template>
    <div class="Home">
      <!-- banner area -->
      <div id="banner" class="banner" style="font-size: 30px;text-align: center;">
            zhangjiaming shi 大 SB
      </div>
      <!-- navigate area -->
      <div id="shortcut">
        <div class="navigation">
            <ul class="fr">
                <li class="shortcut_btn">
                    <div class="dt">
                        <a href="">我的订单</a>
                    </div>
                </li>
                <li class="spacer"></li>
                <li class="shortcut_btn">
                    <div class="dt">
                        <a href="">我的订单</a>
                    </div>
                </li>
                <li class="spacer"></li>
                <li class="shortcut_btn">
                    <div class="dt">
                        <a href="">我的订单</a>
                    </div>
                </li>
                <li class="spacer"></li>
                <li class="shortcut_btn">
                    <div class="dt">
                        <a href="">我的订单</a>
                    </div>
                </li>
            </ul>
        </div>
      </div>
      <!-- simple month zone -->
       <div class="simple-month-zone">
        <div class="big-calendar simple-month">
            <div class="big-calendar-header">
                <div class="big-calendar-header-left">
                    <div class="calendar-month-header">
                        <div class="big-calendar-header-month">
                            2025
                            <!--  -->
                            年
                            <!--  -->
                            3
                            <!--  -->
                            月
                        </div>
                        <div class="calendar-month-header-zone">
                            <div>
                                <div class="calendar-month-header-btn left-btn">
                                    <i class="iconfont icon-appreciate"></i>
                                </div>
                            </div>
                            <div>
                                <div class="month-time over-time">
                                    今天
                                </div>
                            </div>
                            <div>
                                <div class="calendar-month-header-btn right-btn">
                                    <i class="iconfont icon-appreciate"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="calendar-month">
                <div class="calendar-month-week">
                    <div class="weekday big-calendar-week">周日</div>
                    <div class="weekday big-calendar-week">周一</div>
                    <div class="weekday big-calendar-week">周二</div>
                    <div class="weekday big-calendar-week">周三</div>
                    <div class="weekday big-calendar-week">周四</div>
                    <div class="weekday big-calendar-week">周五</div>
                    <div class="weekday big-calendar-week">周六</div>
                </div>
                <div class="calendar-month-body">
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class="selected not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div class="schedule-list-other"></div>
                        </div>
                    </div>
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class="selected not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div class="schedule-list-other"></div>
                        </div>
                    </div>
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class=" not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div class="schedule-list-other"></div>
                        </div>
                    </div>
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class=" not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div class="schedule-list-other"></div>
                        </div>
                    </div>
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class="selected not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div class="schedule-list-other"></div>
                        </div>
                    </div>
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class="selected not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div class="schedule-list-other"></div>
                        </div>
                    </div>
                    <div class="months" id="months-7">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class="selected not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div class="schedule-list-other"></div>
                        </div>
                    </div>
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class="selected not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class="selected not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class=" not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class=" not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class="selected not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class="selected not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class="selected not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class="selected not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class="selected not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class=" not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class=" not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class="selected not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class="selected not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class="selected not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class="selected not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class="selected not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class=" not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class=" not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class="selected not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class="selected not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class="selected not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class="selected not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class="selected not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class=" not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class=" not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class="selected not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class="selected not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class="selected not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class="selected not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class="selected not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class=" not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class=" not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class="selected not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class="selected not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="months" id="months-1">
                        <div class="big-calendar-day">
                            <div class="day-header">
                                <div class="big-calendar-day-num"><span class="selected not-month normal">23</span></div>
                                <div class="big-calendar-day-lunar">廿六</div>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>


    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    div{
        display: block;
        unicode-bidi: isolate;
    }
    .Home{
        height: 95vh;
        width: 100%;
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
    .banner{
        background-color: red;
        height: 18vh;
    }
    #shortcut{
        height: 7vh;
    }
    #shortcut .navigation{
        height: 36px;
        line-height: 36px;
        color: #505259;
    }
    #shortcut .dt{
        line-height: 36px;
        padding: 0px 8px;
        height: 36px;
        box-sizing: border-box;
    }
    .shortcut_btn{
        position: relative;
        z-index: 21;
    }
    li{
        list-style: none;
        display: list-item;
    }
    ul{
        display: block;
        list-style-type: disc;
        margin-left: 20px;
    }
    .fr{
        float: right;
    }
    #shortcut li{
        float: left;
    }
    #shortcut li.spacer{
        overflow: hidden;
        margin: 14px 8px 0;
        width: .5px;
        height: 8px;
        background-color: rgba(0,0,0,.2);
    }

    /* calendar */
    .simple-month-zone{
        flex: 1;
    }
    .big-calendar-header{
        display: flex;
        padding: 20px 24px;
        align-items: center;
        justify-content: space-between;
    }
    .big-calendar-header-month{
        font-size: 18px;
        width: 188px;
        font-weight: 500;
        font-family: PingFang SC;
    }
    .calendar-month-header{
        margin-bottom: 0;
    }
    .calendar-month-header-btn{
        width: 32px;
        text-align: center;
        border: 1px solid rgba(0, 33, 133, .08);
        box-sizing: border-box;
        height: 32px;
    }
    .calendar-month-header-btn.left-btn{
        border-top-left-radius: 2px;
        border-bottom-left-radius: 2px;
    }
    .calendar-month-header-btn.right-btn{
        border-top-right-radius: 2px;
        border-bottom-right-radius: 2px;
    }
    .calendar-month-header,.calendar-month-header-zone{
        display: flex;
        font-size: 14px;
        align-items: center;
        color: #1f2233;
    }
    .calendar-month-header-zone{
        height: 32px;
        line-height: 32px;
        font-weight: 400;
        cursor: pointer;
    }
    .calendar-month-header .month-time.over-time{
        color: #cbccd2;
        border: 1px solid rgba(0,33,133,.08);
        border-right: none;
        border-left: none;
    }
    
    /* table head */
    .calendar-month-body{
        display: -webkit-flex;
        display: flex;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
        overflow: hidden;
        width: 100%;
        flex: 1;
    }
    .calendar-month{
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    .calendar-month
    .calendar-month-week{
        display: flex;
        border-top: 1px solid rgba(0,20,92,.04);
        box-shadow: 0 2px 6px 0 rgba(0,49,173,.04);
    }
    .calendar-month
    .calendar-month-week
    .weekday{
        width: 14.28%;
    }
    .big-calendar-week{
        color: #525564;
        font-size: 14px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        box-sizing: border-box;
    } 
    /* day */
    .calendar-month-body
    .months{
        width: 14.28%;
        height: 11.6vh;
    }
    .big-calendar .months{
        box-sizing: border-box;
        border: 1px solid rgba(0,20,92,.08);
        border-top: none;
        border-left: none;
        position: relative;
    }
    .big-calendar-day{
        box-sizing: border-box;
        cursor: pointer;
        position: relative;
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .big-calendar-day
    .day-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2px 8px 2px 2px;
        overflow: hidden;
    }
    .big-calendar-day-num{
        color: #1f2233;
        font-size: 18px;
        height: 26px;
        line-height: 26px;
        display: flex;
        align-items: center;
    }
    .big-calendar-day-lunar{
        color: #999da8;
        font-size: 12px;
    }
    .big-calendar-day-num
    .normal{
        font-family: DIN-Medium;
        width: 26px;
        display: inline-block;
        text-align: center;
    }
    .big-calendar-day-num
    .not-month{
        color: #999da8;
    }
    .big-calendar-day-num
    .selected{
        color: #fff !important;
        background-color: #0e62ff;
        border-radius: 50%;
    }
    .schedule-list-other{
        flex: 1;
    }
  </style>
  