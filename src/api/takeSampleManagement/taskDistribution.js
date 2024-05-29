import request from '@/utils/request'

//采样任务分配列表
export function getTaskDistributionList(query) {
    return request({
        url: '/v1/sampleTask/list',
        method: 'get',
        params: query,
    })
}
//选择人员列表
export function userList(query) {
    return request({
        url: '/v1/sampleTaskUser/userList',
        method: 'get',
        params: query,
    })
}
//选择小组列表
export function userGroupList(query) {
    return request({
        url: '/resources/v1/team/listAll',
        method: 'get',
        params: query,
    })
}
//任务分配里面的保存
export function getTaskDistributionSave(data) {
    return request({
        url: '/v1/sampleTask',
        method: 'post',
        data
    })
}
//任务分配详情
export function getTaskDistributionDetail(taskId) {
    return request({
        url: '/v1/sampleTask/' + taskId,
        method: 'get',
    })
}
//任务分配修改
export function getTaskDistributionEdit(data,taskId) {
    return request({
        url: '/v1/sampleTask/' + taskId,
        method: 'put',
        data
    })
}

//区域设置列表编辑数据
export function getTaskDistributionSampleInfo(entrustAgreementId) {
    return request({
        url: '/v1/sampleTask/sampleInfo/' + entrustAgreementId,
        method: 'get',
    })
}

