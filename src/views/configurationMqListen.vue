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
            <el-col >
                <el-table
                        border
                        :data="tableData"
                        stripe
                        size="mini"
                        style="width: 100%">
                    <el-table-column
                            prop="event_key"
                            label="事件名称"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="route_key"
                            label="队列名称">
                    </el-table-column>
                    <el-table-column
                            prop="receive_fun"
                            label="回调函数">
                    </el-table-column>
                    <el-table-column
                            prop="forward"
                            label="是否转发"
                            width="100"
                            :formatter="formatter">
                    </el-table-column>
                    <el-table-column
                            prop="bind_key"
                            label="监听事件名称">
                    </el-table-column>
                    <el-table-column
                            prop="remark"
                            label="备注">
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import Fetch from '../request/Fetch'
    export default {
        name: 'HelloWorld',
        data () {
            return {
                searchData: '',
                tableData:[

                ]
            }
        },
        methods:{
            handleSearch:function(){
            },
            formatter:function(a,b,c,d){
                if(c==0){
                    return "不转发"
                }else{
                    return "转发"
                }
            }
        },
        mounted(){
            let $this=this;
            Fetch.configurationMqListenList().then(function(response){
                $this.tableData=response.response
            });
        }
    }
</script>
<style scoped type="text/less">
    .table{
        margin-top: 10px;
    }
</style>