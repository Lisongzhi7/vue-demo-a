<template>
<div class="home">
<div class="fd-head">
  <el-carousel :interval="4000" arrow="always" height="400px">
    <el-carousel-item v-for="(item,index) of imgList">
      <img :src="item.img">
    </el-carousel-item>
  </el-carousel>
</div>
<div class="fd-center"></div>
<div class="fd-bottom"></div>
</div>
</template>

<script>
    export default {
        name: "Home",
      data(){
          return{
            imgList:[{
              img:'http://xlsb.luokangyuan.com/24.jpg'
            }]
          }
      }
    }
</script>

<style scoped>
.home{
  height: 100%;
  width: 100%;
  background: #fab6b6;
  display: flex;
  flex-direction: column;
}
  .fd-head{
    height: 100%;
    width: 1100px;
    background: #cf9236;
  }
</style>
