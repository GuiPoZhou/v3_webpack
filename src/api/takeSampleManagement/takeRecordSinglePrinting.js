import request from '@/utils/request'

//获取记录单打印管理列表
  export function getRecordSinglePrinting(query) {
  return request({
    url: '/sampleTask/v1/recordSinglePrinting/list',
    method: 'get',
    params: query,
  })
}


//记录单打印单启用暂停
export function RecordSinglePrintStartAndStop(query) {
  return request({
    url: '/sampleTask/v1/recordSinglePrinting/revStopUsing',
    method: 'post',
    data: query,
  })
}

// 新增记录单模板
export function AddrecordSinglePrinting(query) {
  return request({
    url: '/sampleTask/v1/recordSinglePrinting',
    method: 'post',
    data: query,
  })
}

// 删除记录单模板
export function DelrecordSinglePrinting(id) {
  return request({
    url: `/sampleTask/v1/recordSinglePrinting/${id}`,
    method: 'delete',
  })
}

// 记录单模板详情
export function getRecordSingleDetail(id) {
  return request({
    url: `/sampleTask/v1/recordSinglePrinting/${id}`,
    method: 'get',
  })
}


// 修改记录单模板
export function getRecordSingleEdit(id,data) {
  return request({
    url: `/sampleTask/v1/recordSinglePrinting/${id}`,
    method: 'put',
    data:data
  })
}







// 打印模板设计-首页列表
export function samplePrintTemplatesList(query) {
  return request({
    url: '/samplePrintTemplates',
    method: 'get',
    params: query,
  })
}

// 新增记录单模板
export function samplePrintTemplatesAdd(query) {
  return request({
    url: '/samplePrintTemplates',
    method: 'post',
    data: query,
  })
}

// 采样记录列表
export function getExecutionTemplateList(query) {
  return request({
    url: `/samplePrintTemplates/getExecutionTemplateList`,
    method: 'get',
    params: query
  })
}

// 采样记录详情
export function samplePrintTemplatesInfo(id) {
  return request({
    url: `/samplePrintTemplates/${id}`,
    method: 'get',
  })
}

// 修改采样记录
export function samplePrintTemplatesEdit(id,data) {
  return request({
    url: `/samplePrintTemplates/${id}`,
    method: 'put',
    data:data
  })
}

//删除采样记录
export function del(id) {
  return request({
    url: `/samplePrintTemplates/${id}`,
    method: 'delete',
  })
}

// 下载导入模板
export function getImportTemplate(id) {
  return request({
    url: `/samplePrintTemplates/${id}/downLoadTemplate`,
    method: "get",
    responseType: 'blob'
  })
}

