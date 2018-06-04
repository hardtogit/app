<template>
  <div id="app">
    <header id="header">
        <el-col :span="6" class="title"><i :class="{'el-icon-menu toggleIcon':true,'active':ifShow}" @click="toggleMean"> </i> 后台管理系统</el-col>
        <el-col :span="6" :offset="12" class="userInfo"><img class="author" src='./assets/48.jpg' alt=""><span  v-popover:popover class="name">周扬之 <i class="el-icon-arrow-down"></i></span></el-col>
        <el-popover
                ref="popover"
                placement="bottom"
                width="120"
                trigger="click"
                popper-class="myPopover"
        >
            <ul class="mean">
                <li><i class="el-icon-back"></i>退出</li>
            </ul>
        </el-popover>
    </header>
    <nav id="nav" :class="{'active':ifShow}">
      <!--<router-link class="link" active-class="active"  to="/home"><i class="el-icon-menu"></i> 首页</router-link>-->
      <router-link class="link" active-class="active" to="/configuration"><i class="el-icon-search"></i>  配置查询</router-link>
    </nav>
      <section id="container" :class="{'active':ifShow}">
        <router-view/>
      </section>
  </div>
</template>

<script>
export default {
  name: 'App',
    data(){
        return{
            ifShow:true
        }
    },
    methods:{
        toggleMean:function(){
            this.ifShow=!this.ifShow
        }
    }
}
</script>
<style scoped  lang="less"  type="text/less">
  #header {
    height: 50px;
    position: fixed;
    background-color: #378cbe;
    width: 100%;
    left: 0;
    top: 0;
  .title{
      line-height: 50px;
      padding-left: 15px;
      color: #fff;
      font-size: 18px;
  }
      .userInfo{
          height: 100%;
          text-align: right;
          padding-right: 15px;
          line-height: 50px;
          color: #fff;
          display:flex;
          align-items:center;
          justify-content:flex-end;
          .author{
              display: block;
              border-radius: 50%;
              margin-right: 10px;
              height: 44px;
          }
          .name{
              cursor:pointer;
          }
      };
  }
  .mean{
      list-style: none;
      li{
          cursor:pointer;
      }
  }
  .toggleIcon{
      cursor: pointer;
      transition-duration:.5s;
      &.active{
           transform: scale(1.4);
       }
  }
  #nav{
    position: fixed;
    top: 50px;
    bottom: 0;
    left: -200px;
    width: 200px;
    padding-top: 10px;
    background: #222d32;
    transition-duration:.5s;
    font-size: 14px;
      &.active{
           left: 0;
       }
  }
  #container{
    padding-top:50px;
    padding-left: 0px;
    transition-duration:.5s;
      &.active{
           padding-left: 200px;
       }
  }
  .link{
    display: block;
    position: relative;
    padding: 10px 30px;
    text-decoration: none;
    color: #aaa;
    &.active{
      color:#fff;
      &:after{
           content: "";
           display: block;
           position: absolute;
           left: 0;
           top: 0;
           bottom: 0;
           width: 2px;
           background: #327eab;
       }
     }
  }
</style>
