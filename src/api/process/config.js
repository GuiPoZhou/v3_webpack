import request from '@/utils/request'

// 获取待办列表
export function  getTodoList(query) {
  return request({
    url: '/v1/dynamicProcess/todoList',
    method: 'post',
    data: query
  })
}
// 获取审批列表详情
export function getProcessInfo(executionId,businessCode){
    return request({
        url:`/v1/dynamicProcess/viewPDF/${executionId}/${businessCode}`,
        method:'get'
    })
}

// 获取我已审批列表
export function  getDoneList(query) {
  return request({
    url: '/v1/dynamicProcess/doneList',
    method: 'post',
    data: query
  })
}

// 获取我已审批列表
export function  getMySubmitList(query) {
  return request({
    url: '/v1/dynamicProcess/mySubmitList',
    method: 'post',
    data: query
  })
}

// 获取任务详细信息
export function  getTaskDetail(id, needFlow) {
  return request({
    url: '/v1/dynamicProcess/getTaskDetail/'+id,
    method: 'get',
    params: {
      needFlow: needFlow
    }
  })
}

// 提交任务
export function complete(completeData) {
  return request({
    url: '/v1/dynamicProcess/complete',
    method: 'post',
    data: completeData
  })
}

// 撤回任务
export function cancelApply(completeData) {
  return request({
    url: '/v1/dynamicProcess/cancelApply',
    method: 'post',
    data: completeData
  })
}

// 重置审批
export function resetProcess(completeData) {
  return request({
    url: '/v1/dynamicProcess/resetProcess',
    method: 'post',
    data: completeData
  })
}

// 获取页面配置
export function  getBusinessConfig(businessCategoy) {
  return request({
    url: '/template/execution/run/getBusinessConfig/' + businessCategoy,
    method: 'get'
  })
}


// 获取模块下拉数据
export function  getBusinessCategoryOptions(type) {
  return request({
    url: '/v1/dynamicProcess/getBusinessCategoryOptions/' + type,
    method: 'get'
  })
}

// 获取状态下拉数据
export function  getStatusOptions(type) {
  return request({
    url: '/v1/dynamicProcess/getStatusOptions/' + type,
    method: 'get'
  })
}
// 样品处理的申请查询
export function sampleHandaccept(query) {
  return request({
    url: '/sampleManage/v1/sampleHandleRecord/queryPrehandleRecordByRecordId',
    method: 'get',
    params: query
  })
}
// 处理的申请查询
export function handlingaccept(query) {
  return request({
    url: '/sampleManage/v1/sampleHandleRecord/queryHandleRecordByRecordId',
    method: 'get',
    params: query
  })
}
// 样品处理的申请通过
export function smplehandlingPass(data) {
  return request({
    url: '/sampleManage/v1/sampleHandleRecord/preSubmitRecord',
    method: 'post',
    data: data
  })
}
// 样品处理的申请不通过
export function smplehandlingReturn(data) {
  return request({
    url: '/sampleManage/v1/sampleHandleRecord/backPreRecord',
    method: 'post',
    data: data
  })
}
// 处理的申请通过
export function handlingPass(data) {
  return request({
    url: '/sampleManage/v1/sampleHandleRecord/submitRecord',
    method: 'post',
    data: data
  })
}
// 处理的申请不通过
export function handlingReturn(data) {
  return request({
    url: '/sampleManage/v1/sampleHandleRecord/backRecord',
    method: 'post',
    data: data
  })
}
// 借阅/打印申请通过
export function borrowPrintPass(data) {
  return request({
    url: '/fileManage/common/passAudit',
    method: 'post',
    data: data
  })
}
// 借阅/打印申请不通过
export function borrowPrintReturn(data) {
  return request({
    url: '/fileManage/common/returnAudit',
    method: 'post',
    data: data
  })
}
// 化学药品订单审批
export function completeBuyOrder(data) {
	return request({
		url: "/material/v1/buyOrder/completeBuyOrder",
		method: "post",
		data
	})
}
// 化学药品申请审批
export function completeBuyApply(data) {
	return request({
		url: "/material/v1/buyApply/completeBuyApply",
		method: "post",
		data
	})
}
// 化学药品验收入库审批
export function completeAudit(data) {
	return request({
		url: "/material/v1/storeIn/completeAudit",
		method: "post",
		data
	})
}
// 化学药品退货申请流程
export function completeRefundAudit(data) {
	return request({
		url: "/material/v1/storeRefund/completeRefundAudit",
		method: "post",
		data
	})
}
// 化学药品出库流程
export function completeOutAudit(data) {
	return request({
		url: "/material/v1/storeOut/completeOutAudit",
		method: "post",
		data
	})
}
// 化学药品退库流程
export function completStoreOutReturnAudit(data) {
	return request({
		url: "/material/v1/storeOutReturn/completStoreOutReturnAudit",
		method: "post",
		data
	})
}

// 低值易耗品订单审批
export function completeCheapBuyOrder(data) {
	return request({
		url: "/materialCheap/v1/buyOrder/completeBuyOrder",
		method: "post",
		data
	})
}
// 低值易耗品申请审批
export function completeCheapBuyApply(data) {
	return request({
		url: "/materialCheap/v1/buyApply/completeBuyApply",
		method: "post",
		data
	})
}
// 低值易耗品验收入库审批
export function completeCheapAudit(data) {
	return request({
		url: "/materialCheap/v1/storeIn/completeAudit",
		method: "post",
		data
	})
}
// 低值易耗品退货申请流程
export function completeCheapRefundAudit(data) {
	return request({
		url: "/materialCheap/v1/storeRefund/completeRefundAudit",
		method: "post",
		data
	})
}
// 低值易耗品出库流程
export function completeCheapOutAudit(data) {
	return request({
		url: "/materialCheap/v1/storeOut/completeOutAudit",
		method: "post",
		data
	})
}
// 低值易耗品退库流程
export function completCheapStoreOutReturnAudit(data) {
	return request({
		url: "/materialCheap/v1/storeOutReturn/completStoreOutReturnAudit",
		method: "post",
		data
	})
}



