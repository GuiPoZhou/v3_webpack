import request from '@/utils/request'

// 查询列表
export function listData(query) {
  return request({
    // url: '/v1/base/instrumentUseRecord/apparatusList',
    url: '/resources/equipmentInstrument/list',
    method: 'get',
    params: query
  })
}

// 查询列表
export function listAllData(query) {
  return request({
    // url: '/v1/base/instrumentUseRecord/apparatusList',
    url: '/resources/equipmentInstrument/listAll',
    method: 'get',
    params: query
  })
}
