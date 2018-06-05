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
                        style="width: 100%">
                    <el-table-column
                            prop="config_key"
                            label="键"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="config_value"
                            label="值">
                    </el-table-column>
                    <el-table-column
                            prop="config_remark"
                            label="备注">
                    </el-table-column>
                </el-table>
                <el-pagination
                        :page-size="20"
                        :pager-count="11"
                        layout="prev, pager, next"
                        :total="1000">
                </el-pagination>
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

            }
        },
        mounted(){
            let $this=this;
            Fetch.configurationKvList().then(function(response){
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