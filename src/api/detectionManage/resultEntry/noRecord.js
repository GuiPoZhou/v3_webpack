import request from '@/utils/request'

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
//录入结果列表1
export function getRecordResultList(query, data) {
  return request({
    url: '/v1/detectManage/resultEnter/waiting/itemList',
    method: 'post',
    params: query,
    data,
  })
}
//录入结果列表-多指标
export function getRecordResultMultipleStandardList(query, data) {
  return request({
    url: '/v1/detectManage/resultEnter/waiting/itemListMultipleStandard',
    method: 'post',
    params: query,
    data: {
      ...query,
      ...data,
    },
  })
}
//仪器列表1
export function getInstrumentList(query) {
  return request({
    url: '/v1/detectSampleItemInstrument/instrumentList',
    method: 'get',
    params: query,
  })
}
export function getInstrumentListNew(query) {
  return request({
    url: '/v1/detectManage/resultEnter/selectInstrumentList',
    method: 'get',
    params: query,
  })
}
//仪器列表1
export function getInstrumentList1(query) {
  return request({
    url: '/v1/detectSampleItemInstrument/authorInstrumentList',
    method: 'get',
    params: query,
  })
}
//检测方法列表
export function getDetectCategoryList(query) {
  return request({
    url: '/v1/detectSampleItemDetectCategory/detectCategoryList',
    method: 'get',
    params: query,
  })
}
//录入结果保存&提交1
export function saveResult(data) {
  return request({
    url: '/v1/detectManage/resultEnter/waiting/saveResult',
    method: 'post',
    data,
  })
}
//录入结果保存&提交---多指标
export function saveResultMultipleStandard(data) {
  return request({
    url: '/v1/detectManage/resultEnter/waiting/saveResultMultipleStandard',
    method: 'post',
    data,
  })
}
//修改历史记录列表
export function getResultHis(resultId) {
  return request({
    url: '/v1/detectManage/resultEnter/waiting/getResultHis/' + resultId,
    method: 'get',
  })
}

// 获取结果录入的模板
export function getResultTemplate(type, id) {
  let url = ''
  if (type == 1) {
    url = `/v1/detectManage/resultEnter/waiting/exportExcel?sampleIdList=${id}`
  } else if (type == 2) {
    url = `/v1/detectManage/resultEnter/waiting/exportExcel?itemIdList=${id}`
  } else if (type == 3){
    url = `/v1/detectManage/resultEnter/waiting/exportExcel?sampleItemIdList=${id}`
  }
  return request({
    url: url,
    method: 'get',
  })
}
// 结果录入保存(单条)
export function saveResultData(data) {
  return request({
    url: '/v1/detectManage/resultEnter/saveResult',
    method: 'post',
    data,
  })
}
// 结果录入保存(批量)
export function saveResultByBatch(data) {
  return request({
    url: '/v1/detectManage/resultEnter/saveResultByBatch',
    method: 'post',
    data,
  })
}
// 添加仪器设备
export function addItemInstrument(data) {
  return request({
    url: '/v1/detectManage/resultEnter/addItemInstrument',
    method: 'post',
    data,
  })
}
// 修改检测方法
export function updateItemMethod(data) {
  return request({
    url: '/entrustInspection/updateItemMethod',
    method: 'post',
    data,
  })
}
