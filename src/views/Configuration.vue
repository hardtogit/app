<template>
   <div id="configuration">
       <el-row>
           <el-col :span="6">
               <el-input
                       placeholder="请输入事件名称"
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
                   size="mini"
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
                        label: '事件名称',
                        path: '上海市普陀区金沙江路 1518 弄'
                    },{
                        label: '回调函数',
                        path: '上海市普陀区金沙江路 1518 弄'
                    }, {
                        label: '完整事件名称',
                        path: '上海市普陀区金沙江路 1517 弄'
                    }, {
                        label: '队列名称',
                        path: '上海市普陀区金沙江路 1517 弄'
                    }, {
                        label: 'supervisor进程名称',
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
                this.tableData[2].path='RABBIT_WORK_'+searchData;
                this.tableData[3].path='route_work_'+strArr.join('_');
                this.tableData[4].path='RABBIT_QUEUE_WORK_'+searchData
            },
            twoMapping:function(searchData){
                var strArr=searchData.split('_');
                strArr.forEach(function(item,i){
                    strArr[i]=item.toLowerCase();
                });
                this.tableData[0].path=searchData;
                this.tableData[1].path='\\BaodApplication\\Service\\'+strArr[0].substring(0,1).toUpperCase()+strArr[0].substring(1)+strArr[3].substring(0,1).toUpperCase()+strArr[3].substring(1)+"."+strArr[1]+strArr[2].substring(0,1).toUpperCase()+strArr[2].substring(1);
                this.tableData[2].path='RABBIT_WORK_'+searchData;
                this.tableData[3].path='route_work_'+strArr.join('_');
                this.tableData[4].path='RABBIT_QUEUE_WORK_'+searchData
            },
            threeMapping:function(searchData){
                var strArr=searchData.split('_');
                strArr.forEach(function(item,i){
                    strArr[i]=item.toLowerCase();
                });
                this.tableData[0].path=searchData;
                this.tableData[1].path='\\BaodSupervise\\Service\\'+strArr[1].substring(0,1).toUpperCase()+strArr[1].substring(1)+'.'+strArr[2];
                this.tableData[2].path='RABBIT_WORK_'+searchData;
                this.tableData[3].path='route_work_'+strArr.join('_');
                this.tableData[4].path='RABBIT_QUEUE_WORK_'+searchData
            },
            handleSearch:function(){
                const searchData=this.searchData;
                var str=searchData.replace(/_/g,'');
                var reg=/[A-Z]/g;
                if(str.match(reg).length!=str.length){
                    this.$message('事件名称必须全部采用大写字母');
                    return false;
                };
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
<style scoped type="text/less">
 .table{
     margin-top: 10px;
 }
</style>