<template>
   <div id="configuration">
       <el-row>
           <el-col :span="6">
               <el-input
                       placeholder="请输入查询关键字"
                       clearable
                       v-model="searchData">
                   <el-button slot="append" icon="el-icon-search" v-on:click="handleSearch"></el-button>
               </el-input>
           </el-col>
       </el-row>
       <el-row class="table">
           <el-col :span="18">
           <el-table
                   border
                   :data="tableData"
                   stripe
                   style="width: 100%">
               <el-table-column
                       prop="label"
                       label="属性名"
                       width="180">
               </el-table-column>
               <el-table-column
                       prop="path"
                       label="配置路径"
                       >
               </el-table-column>
           </el-table>
            </el-col>
       </el-row>

   </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data () {
            return {
                searchData: '',
                tableData:[
                    {
                        label: '时间名称',
                        path: '上海市普陀区金沙江路 1518 弄'
                    },{
                        label: '回调函数',
                        path: '上海市普陀区金沙江路 1518 弄'
                    }, {
                        label: '队列名称',
                        path: '上海市普陀区金沙江路 1517 弄'
                    }, {
                        label: 'supervisor进程名称',
                        path: '上海市普陀区金沙江路 1517 弄'
                    }, {
                        label: '平台事件',
                        path: '上海市普陀区金沙江路 1517 弄'
                    }, {
                        label: '回调函数',
                        path: '上海市普陀区金沙江路 1517 弄'
                    }
                ]
            }
        },
        methods:{
            oneMapping:function(searchData){
                var strArr=searchData.split('_');
                strArr.forEach(function(item,i){
                    strArr[i]=item.toLowerCase();
                });
                this.tableData[0].path=searchData;
                this.tableData[1].path='\\BaodApplication\\Service\\'+strArr[0].substring(0,1).toUpperCase()+strArr[0].substring(1)+"."+strArr[1]+strArr[2].substring(0,1).toUpperCase()+strArr[2].substring(1);
            },
            twoMapping:function(searchData){

            },
            threeMapping:function(searchData){

            },
            handleSearch:function(){
                const searchData=this.searchData;
                if(searchData.indexOf('PLATFORM')!=-1){
                    this.twoMapping(searchData)
                }else if(searchData.indexOf('SUPERVISE')!=-1){
                    this.threeMapping(searchData)
                }else{
                    this.oneMapping(searchData)
                }
            }

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped type="text/less">
 .table{
     margin-top: 10px;
 }
</style>