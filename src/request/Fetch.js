/**
 * Created by XiangGuo on 2018/6/5.
 * Email 413401168@qq.com.
 * Use auto
 */
const ROOT_URL='/mobile_api/'
import config from './config'
const Fetch = (url, type, data, headers) => {
    return new Promise((resolve, reject) => {
        let options = {
            credentials:"include",
            method: type || 'GET'
        }
        let _headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
        }

        options.headers = Object.assign({
            'Accept-Language': 'zh-CN',
            'Cache-Control': 'no-cache',
            //  'Access-Control-Allow-Origin': '*',
            //  'Postman-Token': '6905a27a-4950-8d13-e455-81550f5784f7'
        }, _headers, headers || {})
        if (type && type.toUpperCase() === 'POST' && data) {
            if (data.hasOwnProperty('file')){
                options.body=data.data;
                delete options.headers
            }else {
                options.headers ={
                    'Accept-Language': 'zh-CN',
                    'Cache-Control': 'no-cache',
                    'Content-Type': 'application/json;charset=utf-8',
                };
                options.body =JSON.stringify(data)
            }
        } else if (type && type.toUpperCase() === 'GET') {
            url = data
                ? url + '?' + transferObjectToFormat(data)
                : url
        }
        // return json format result in default
        fetch(ROOT_URL + url, options)
            .then((response) => {
                return response.json();
                // const result = response.json()
                // if (result.code == '0000') {
                //   // 未登录
                //   // utils.PubSub.emit('noLogin')
                // }

            })
            .then(
                response => {resolve({response})},
                error => resolve({error})
            )
    })
}
config(Fetch);
export default Fetch







