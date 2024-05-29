import request from '@/utils/request'
import qs from 'qs'

// 查询协议列表
export function listData(query) {
  return request({
    url: '/handover/v1/sampleHandover/getHandoverList',
    method: 'get',
    params: query
  })
}

//根据样品编码查询样品
export function getSampleByCode(sampleCode) {
  return request({
    url: '/handover/v1/sampleHandover/scanCode/'+sampleCode,
    method: 'get',
  })
}


//根据协议编码查询样品
export function getSampleByEntrustCode(query) {
  return request({
    url: '/handover/v1/sampleHandover/manualEntry',
    method: 'get',
    params: query
  })
}


//交接保存
export function handoverSave(data) {
  return request({
    url: '/handover/v1/sampleHandover/saveHandover',
    method: 'post',
    data: data
  })
}


//交接保存
export function listRecord(query) {
  return request({
    url: '/handover/v1/sampleHandover/getHandoverLogList',
    method: 'get',
    params: query,
  })
}

//删除交接记录
export function deleteRecord(query) {
  return request({
    url: '/handover/v1/sampleHandover/delHandover',
    method: 'delete',
    params: query,
  })
}

//获取交接详情
export function getRecordDetail(handoverId) {
  return request({
    url: '/handover/v1/sampleHandover/getHandoverLogDetail/'+handoverId,
    method: 'get',
  })
}

//删除交接详情
export function deleteRecordDetail(detailId) {
  return request({
    url: '/handover/v1/sampleHandover/delLogDetail/'+detailId,
    method: 'delete',
  })
}


// 根据委托协议id查询样品接收详情
export function listHandoverDetail(entrustId,query) {
  return request({
    url: '/handover/v1/sampleHandover/getHandoverDetail/'+entrustId,
    method: 'get',
	params: query
  })
}


export function  getBusinessConfig(businessCategoy) {
  return request({
    url: '/template/execution/run/getBusinessConfig/' + businessCategoy,
    method: 'get'
  })
}

export function  handoverPrint(id,query) {
  return request({
    url: '/handover/v1/sampleHandover/handoverPrint/'+id,
    method: 'get',
    params: query
  })
}












