<template>
   <div class="header">
        <div>
            <div class="left"><i class="el-icon-arrow-left"></i>返回</div>
            <div class="center">{{ header.name }}</div>
            <div class="right"><i :class="header.icon"></i></div>
        </div>     
    </div> 
</template>
<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  props: {
    header: Object
  }
};
</script>

<style lang="less">
.header > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 15px;
  color: #fff;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#0af),
    to(#0085ff)
  );
  background-image: -webkit-linear-gradient(left, #0af, #0085ff);
  background-image: linear-gradient(90deg, #0af, #0085ff);
}
</style>
