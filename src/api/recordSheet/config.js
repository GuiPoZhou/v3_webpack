import request from '@/utils/request'

// 获取任务详细信息
export function  queryEquipmentList4RecordSheet(query) {
  return request({
    url: '/v1/dynamicRecordSheet/queryEquipmentList4RecordSheet',
    method: 'get',
		params: query
  })
}
