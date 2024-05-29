import request from '@/utils/request'

//获取待审批列表
export function getStayAuditList(query) {
	return request({
		url: '/sampleTask/v1/sampleInfo/tobeauditlist',
		method: 'get',
		params: query,
	})
}

//获取已审批列表
export function getHasAuditList(query) {
	return request({
		url: '/sampleTask/v1/sampleInfo/auditedlist',
		method: 'get',
		params: query,
	})
}

// 审批通过
export function auditPass(query) {
	return request({
		url: '/sampleTask/v1/sampleInfo/auditPass',
		method: 'post',
		data: query,
	})
}

// 审批退回
export function auditSendBack(query) {
	return request({
		url: '/sampleTask/v1/sampleInfo/auditSendBack',
		method: 'post',
		data: query,
	})
}

// 撤回审批结果
export function auditUndo(query) {
	return request({
		url: '/sampleTask/v1/sampleInfo/auditUndo',
		method: 'post',
		data: query,
	})
}
