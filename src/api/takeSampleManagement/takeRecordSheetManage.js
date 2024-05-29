import request from '@/utils/request'

//获取记录单管理列表
export function getRecordSheetList(query) {
	return request({
		url: 'template/execution/list',
		method: 'get',
		params: query,
	})
}

// 修改记录单状态
export function updateStatus(query) {
	return request({
		url: 'template/execution/updateStatus',
		method: 'post',
		data: query,
	})
}

// 记录单复制
export function copy(id) {
	return request({
		url: `/template/execution/copy/${id}`,
		method: 'get',
	})
}

// 记录单删除
export function remove(id) {
	return request({
		url: `/template/execution/remove/${id}`,
		method: 'get',
	})
}
