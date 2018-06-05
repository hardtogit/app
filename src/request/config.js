/**
 * Created by XiangGuo on 2018/6/5.
 * Email 413401168@qq.com.
 * Use auto
 */
const requests = (Fetch) => {
    // 获取
    Fetch.configurationKvList = () => { return Fetch('configure/configs/', 'GET') }
    Fetch.configurationKvPlatFormList = () => { return Fetch('configure/config_platforms/', 'GET') }
    Fetch.configurationMqList = () => { return Fetch('configure/generals/', 'GET') }
    Fetch.configurationMqPlatFormList = () => { return Fetch('configure/general_platforms/', 'GET') }
    Fetch.configurationMqListenList = () => { return Fetch('configure/monitors/', 'GET') }
}
export default requests