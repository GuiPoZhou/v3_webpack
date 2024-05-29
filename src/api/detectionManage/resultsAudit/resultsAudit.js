import request from '@/utils/request'

// 结果审核-待审批-按样品列表
export function  getSampleList(query) {
  return request({
    url: '/v1/detectSampleItemAudit/sampleList',
    method: 'get',
    params: query
  })
}

// 按项目列表
export function  getItemList(query) {
  return request({
    url: '/v1/detectSampleItemAudit/itemList',
    method: 'get',
    params: query
  })
}

//审批列表
export function auditResultEntry(data) {
  return request({
    url: '/v1/detectSampleItemAudit/auditResultEntry',
    method: 'post',
    data
  })
}

// 仪器信息
export function  getEquipmentList(query) {
  return request({
    url: '/v1/detectSampleItemAudit/equipmentList',
    method: 'get',
    params: query
  })
}

// 修改记录
export function  getResultHistoryList(query) {
  return request({
    url: '/v1/detectSampleItemAudit/resultHistoryList',
    method: 'get',
    params: query
  })
}

// 审批记录
export function  getAuditRecordList(id) {
  return request({
    url: '/v1/detectSampleItemAudit/auditRecordList/'+id,
    method: 'get'
  })
}



// 审批确认
export function  passAudit(query) {
  return request({
    url: '/v1/detectSampleItemAudit/passAudit',
    method: 'post',
    params: query
  })
}

// 审批取消
export function  returnAudit(query) {
  return request({
    url: '/v1/detectSampleItemAudit/returnAudit',
    method: 'post',
    params: query
  })
}



// 结果审核-已审批列表
export function  getAuditedList(query) {
  return request({
    url: '/v1/detectSampleItemAudit/auditedList',
    method: 'get',
    params: query
  })
}


// 撤回审批前置
export function  checkListData(data) {
  return request({
    url: '/v1/detectSampleItemAudit/checkListData',
    method: 'post',
    data
  })
}

// 撤回审批
export function  recallAudit(query) {
  return request({
    url: '/v1/detectSampleItemAudit/recallAudit',
    method: 'post',
    params: query
  })
}

