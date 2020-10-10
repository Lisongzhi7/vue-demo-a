<template>
  <div id="app">
      <div class="head">
        <div class="fd-head">
          <div class="fd-zuo-box">
            <div class="fd-zuo-a">
              <img src="http://xlsb.luokangyuan.com/timg.jpg"/>
            </div>
            <div class="fd-zuo-b">
              <span>Sloth blog</span>
            </div>
          </div>
          <div class="fd-you-box">
            <router-link to="/home"><span class="fd-icon"><i class="el-icon-house"></i>树懒首页</span></router-link>
            <router-link to="/blog"><span class="fd-icon"><i class="el-icon-document"></i>技术文章</span></router-link>
            <router-link to="/codeCard"><span class="fd-icon"><i class="el-icon-monitor"></i>代码卡片</span></router-link>
            <router-link to="/aboutMe"> <span class="fd-icon"><i class="el-icon-user"></i>关于我</span></router-link>
          </div>
        </div>
      </div>
      <div class="center">
        <router-view></router-view>
      </div>
      <div class="bottom">
        蜀ICP备18020377号
      </div>
  </div>
</template>

<script>
export default {
    name: 'App',
  methods: {

    handleScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 100) {
        this.showNav = true;
      } else if (scrollTop < 100) {
        this.showNav = false;
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
}

</script>

<style>
  *, html, body {
    margin: 0;
    padding: 0;
  }
#app{
  height: 100%;
  width: 100%;
    display: flex;
    flex-direction: column;
  align-items: center;
}
  .head{
    height: 60px;
    width: 100%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
  .fd-head{
    height: 60px;
    width: 1100px;
    display: flex;
    flex-direction: row;
  }
  .fd-zuo-box{
    height: 60px;
    width: 250px;
    display: flex;
    flex-direction: row;
  }
  .fd-zuo-a{
    height: 60px;
    width: 60px;
  }
  .fd-zuo-a img{
    height: 60px;
    width: 60px;
    border-radius: 30px;
  }
  .fd-zuo-b{
height: 60px;
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  .fd-zuo-b span{
    font-size: 24px;
  }
  .fd-you-box{
    height: 60px;
    flex: 1;
    display: flex;
    align-items: center;
    font-size: 18px;
    justify-content: flex-end;
  }
  .fd-icon{
    margin-right: 10px;
  }
  .bottom{
    display: flex;
    width: 100%;
    height: 60px;
    background: black;
    color: white;
    justify-content: center;
    align-items: center;
  }
  .router-link-active span{
    color: coral;
  }
  a {

    text-decoration: none;

  }
</style>
