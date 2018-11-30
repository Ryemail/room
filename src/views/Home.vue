<template>
  <div class="home">
    <!-- 头部 -->
    <Header :header="title"></Header>
    <div class="select_style">
      <el-select v-model="value" placeholder="请选择" class="select">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <!-- 预约室列表 -->
    <section class="boardroom_list" id="boardroom_list">
		<router-link v-for="(v,i) in msg" :key="i" :to="'/detail?v='+i">
			<div class="boardroom_item">
				<div class="item_left">
					<div>33333333333333333333332</div>
					<div class="item_left_b">3422222222222225</div>
				</div>
				<div class="item_right">
					<span class="tips"><i class="el-icon-service"></i> 50</span>
					<i class="el-icon-arrow-right"></i>
				</div>
			</div>
		</router-link>
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "Home",
  data() {
    return {
      title: {
        name: "预约列表",
        icon: "el-icon-bell"
      },
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      msg: [4, 4, 3, 2, 3, 3, 3, 3, 3, 3, 23, 34, 232]
    };
  },
  components: {
    Header
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>
<style lang="less">
.select_style {
  margin: 0 auto;
  padding: 10px;
  width: 90%;
  height: 100%;
  .select {
    width: 100%;
  }
  .el-input--suffix .el-input__inner {
    border-radius: 50px;
    outline: none;
  }
}
.boardroom_list {
  background: #fff;
  .boardroom_item {
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
    margin: 0 10px;
    border-bottom: 1px solid #e6e6e6;
    .item_right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 30%;
      text-align: right;
      .tips {
        border-radius: 50px;
        font-size: 13px;
        background: #0af;
        color: #fff;
        padding: 3px 10px;
        margin-right: 5px;
      }
    }
    .item_left {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: flex-start;
      color: #000;
      div {
        padding: 4px;
      }
      .item_left_b {
        color: #ccc;
      }
    }
  }
}
</style>
