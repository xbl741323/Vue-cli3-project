import { request } from 'network/request.js'

export function getHomeMultidatab() {
    return request({
        url: '/home/multidata'
    })
}