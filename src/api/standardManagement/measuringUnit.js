import request from '@/utils/request'//项目方法分页列表
export function listAllUnit(query) {
  return request({
    url: '/standard/v1/measuringUnits/getMeasuringUnitList',
    method: 'get',
    params: query,
  })
}
export function getItemDefaultUnit(query) {
	return request({
		url: '/standard/v1/measuringUnits/getItemDefaultUnit',
		method: 'get',
		params: query,
	})
}
