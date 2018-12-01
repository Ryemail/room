<template>
    <div id="myBespeak">
        <ul class="tab">
            <li v-for="(item,index) in tab" :key="index" @click="toggleTabs(index)" :class="{active:index == nowIndex}">{{ item.tabName }}</li>
        </ul>
        <div class="tabConent">
			<keep-alive>
				<transition name="fade">
					<bespeakYes v-show="nowIndex === 0"></bespeakYes>
				</transition>
			</keep-alive>
			<keep-alive>
				<transition name="fade">
					<bespeakNo v-show="nowIndex === 1"></bespeakNo>
				</transition>
			</keep-alive>
        </div>
    </div>
</template>
<script>
import bespeakYes from "@/components/bespeak/BespeakYes";
import bespeakNo from "@/components/bespeak/BespeakNo";
export default {
  name: "myBespeak",
  data() {
    return {
      tab: [
        {
          tabName: "选项一"
        },
        {
          tabName: "选项二"
        }
      ],
      nowIndex: 0
    };
  },
  created() {
    /*  */
  },
  components: {
    bespeakYes,
    bespeakNo
  },
  methods: {
    toggleTabs(index) {
      this.nowIndex = index;
      console.log("ddd");
    }
  }
};
</script>
<style lang="less" scoped>
@color: #0085ff;
.tab {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  li {
    padding: 30px 15px;
  }
  li.active {
    color: @color;
  }
}
</style>
 

