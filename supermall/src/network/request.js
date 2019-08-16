import axios from 'axios'

//利用instance中自带的promise进行封装
export function request(config) {
    //1.创建axios的实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000/api/v1'
    })

    instance.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err)
    })
    //2.2响应拦截
    instance.interceptors.response.use(res => {
        // console.log(res)
        return res.data
    }, err => {
        console.log(err)
    })

    //3.发送真正的网路请求
    return instance(config)
}



