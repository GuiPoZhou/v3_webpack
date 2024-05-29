import request from '@/utils/request'

//按委托查询待分包项目
export function getEntrustWaitList(query, entrustAgreementIds) {
  return request({
    url: `/v1/entrustPackage/entrustWaitList/` + entrustAgreementIds,
    method: 'get',
    params: query,
  })
}
//按项目查询待分包项目
export function getItemWaitList(query) {
    return request({
      url: `/v1/entrustPackage/itemWaitList`,
      method: 'get',
      params: query,
    })
  }
