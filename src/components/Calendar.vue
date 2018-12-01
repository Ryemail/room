<template>
    <div class="calendar">
        <header>
            <div>上周</div>
            <div class="currWeek">本周</div>
            <div>下周</div>
        </header>
        <section class="weekConationer">
            <ul class="week" v-for="(item1,index) in dates" :key="index">
                <li class="weekName">
                    {{ item1.week }}
                </li>
                <li class="weekSolt">
                    <div @click="dayClick" :class="{acitve: isActive}" v-for="(item,index) in weekTime" :key="index" :data-time="item1.currDate">
                        {{ item }}
                    </div>
                </li>
            </ul>
        </section>
    </div>
</template>
<script>
export default {
  name: "calendar",
  data() {
    return {
      weekTime: [
        //显示的时间段
        "08:00-09:00",
        "09:00-10:00",
        "10:00-11:00",
        "11:00-12:00",
        "14:00-15:00",
        "15:00-16:00",
        "16:00-17:00",
        "17:00-18:00",
        "18:00-19:00",
        "19:00-20:00",
        "20:00-21:00",
        "21:00-22:00"
      ],
      weekChinesize: [
        //汉化数字为文字
        "星期天",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六"
      ],
      dates: [],
      isActive: false
    };
  },
  created() {
    console.log(this.calender());
  },
  methods: {
    /* 渲染时间 */
    calender(times = new Date()) {
      let currentDate = new Date(times);
      let timesStamp = currentDate.getTime();
      let currenDay = currentDate.getDay();
      let dates = [];
      for (let i = 0; i < 7; i++) {
        let currDate = new Date(
            timesStamp + 24 * 60 * 60 * 1000 * (i - ((currenDay + 6) % 7))
          )
            .toLocaleDateString()
            .replace(/\//g, "-"),
          weekIndex = new Date(currDate).getDay();
        dates.push({ week: this.weekChinesize[weekIndex], currDate });
      }
      this.dates = dates;
      return dates;
    },
    /* 点击时间 */
    dayClick(){
        this.isActive = !this.isActive;
        alert('ddd')
    }

  }
};
</script>
<style lang="less" scoped>
@color: #0085ff;
.calendar {
  header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 30px 15px;
  }
  .currWeek {
    color: @color;
  }
  .week {
    display: flex;
    justify-content: flex-start;
    .weekName {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 16%;
    }
    .weekSolt {
      width: 84%;
    }
    li {
      width: 100%;
      overflow: hidden;
      padding: 30px 0;
      div {
        float: left;
        width: 33%;
        font-size: 30px; /*no*/
        margin-bottom: 15px;
      }
      div.acitve{
          color: @color;
      }
    }
  }
}
</style>

