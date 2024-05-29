import request from '@/utils/request'

//结果显示数量（顶部导航栏）1
export function getResultNum(query) {
    return request({
        url: '/v1/detectManage/resultEnter/resultNum',
        method: 'get',
        params: query,
    })
}
//数据列表-按样品1
export function getSampleList(query) {
    return request({
        url: '/v1/detectManage/resultEnter/sampleList',
        method: 'get',
        params: query,
    })
}
//数据列表-按项目1
export function getItemList(query) {
    return request({
        url: '/v1/detectManage/resultEnter/itemList',
        method: 'get',
        params: query,
    })
}

//接收/交回任务-按样品
export function getSampleListResult(data) {
    return request({
        url: '/v1/detectManage/resultEnter/sampleTaskList',
        method: 'post',
        data,
    })
}
//接收/交回任务-按项目
export function getItemListResult(data) {
    return request({
        url: '/v1/detectManage/resultEnter/itemTaskList',
        method: 'post',
        data,
    })
}
//接收任务
export function receiveTask(data) {
    return request({
        url: '/v1/detectManage/resultEnter/receiveTask',
        method: 'put',
        data
    })
}
//交回任务
export function returnTask(data) {
    return request({
        url: '/v1/detectManage/resultEnter/returnTask',
        method: 'put',
        data
    })
}



