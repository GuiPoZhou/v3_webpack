import request from '@/utils/request'
//已完成和已退回的接口都在这里
//数据列表（已完成和已退回）1
export function getSampleListDetail(query) {
    return request({
        url: '/v1/detectManage/resultEnter/sampleListDetail',
        method: 'get',
        params: query,
    })
}
export function getSampleListDetailMultiple(query) {
  return request({
    url: '/v1/detectManage/resultEnter/sampleListDetailMultipleStandard',
    method: 'get',
    params: query,
  })
}
export function getSampleListDetail1(query) {
  return request({
    url: '/v1/detectManage/resultEnter/sampleItemList',
    method: 'get',
    params: query,
  })
}
//结果详情（已完成）同上
//修改（已退回）同上
// 审批记录
export function  getAuditRecordList(id) {
    return request({
      url: '/v1/detectSampleItemAudit/auditRecordList/'+id,
      method: 'get'
    })
  }



