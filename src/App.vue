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
      <div :class="{'link':true,'active':meanItem==1}"  ><i class="el-icon-search"></i>  配置查询 <i @click="toggleSubMean(1)" :class="{'el-icon-arrow-right':meanItem!=1,'el-icon-arrow-down':meanItem==1}"></i></div>
        <div :class="{'subMean':true,'active':meanItem==1}">
            <router-link to="/configuration" class="subLink" active-class="active" title="配置查询" > 配置查询</router-link>
            <router-link to="/configurationKv" class="subLink" active-class="active" title="KV配置列表" > KV配置列表</router-link>
            <router-link to="/configurationKvPlatForm" class="subLink" active-class="active" title="KV配置列表(平台版)" > KV配置列表(平台版)</router-link>
            <router-link to="/configurationMq" class="subLink" active-class="active" title="MQ普通队列配置列表" > MQ普通队列配置列表</router-link>
            <router-link to="/configurationMqPlatForm" class="subLink" active-class="active" title="MQ普通队列配置列表(平台版)" > MQ普通队列配置列表(平台版)</router-link>
            <router-link to="/configurationMqListen" class="subLink" active-class="active" title="MQ监听队列配置列表" > MQ监听队列配置列表</router-link>
        </div>
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
            ifShow:true,
            meanItem:1
        }
    },
    methods:{
        toggleMean:function(){
            this.ifShow=!this.ifShow
        },
        toggleSubMean:function(item){
            if(this.meanItem==item){
                this.meanItem=1000;
            }else{
                this.meanItem=item
            }
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
    z-index:100;
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
      transition-property: transform;
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
    transition-property: left;
    font-size: 14px;
    .subMean{
        width: 180px;
        padding-left: 20px;
        height: 0;
        overflow:hidden;
        &.active{
            height: auto;
         }
    }
      &.active{
           left: 0;
       }
    .el-icon-arrow-right,.el-icon-arrow-down{
        float: right;
        top: 4px;
        position: relative;
        cursor: pointer;
    }
  }
  #container{
    padding-top:50px;
    padding-left: 0px;
    transition-duration:.5s;
    transition-property: padding-left;
      &.active{
           padding-left: 200px;
       }
  }
  .link,.subLink{
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
  .subLink{
      padding: 4px 15px;
      margin: 2px auto;
      font-size: 12px;
      cursor: pointer;
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
      &:hover{
       color: #fff;
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
