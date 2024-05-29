import request from '@/utils/request'

//获取记录单配置管理列表
export function getRecordConfigList(query) {
	return request({
		url: '/sampleTask/v1/recordSingleConfiguration/list',
		method: 'get',
		params: query,
	})
}

//获取记录单配置管理详情
export function getRecordConfigDetails(id) {
	return request({
		url: `/sampleTask/v1/recordSingleConfiguration/${id}`,
		method: 'get',
	})
}

//记录单配置启用停止
export function RecordConfigStartAndStop(query) {
	return request({
		url: '/sampleTask/v1/recordSingleConfiguration/revStopUsing',
		method: 'post',
		data: query,
	})
}

//记录单配置删除
export function RecordConfigDelete(id) {
	return request({
		url: `/sampleTask/v1/recordSingleConfiguration/${id}`,
		method: 'delete',
	})
}

//获取选择检测类别列表
export function getCategoryList(query) {
	return request({
		url: '/standard/v1/detectCategorys/getCategoryList',
		method: 'get',
		params: query,
	})
}

// 获取选择模板列表
export function getTempName(query) {
	return request({
		url: '/sampleTask/v1/recordSinglePrinting/getList',
		method: 'get',
		params: query,
	})
}

// 获取选择记录单列表
export function getRecordList(subBusinessCode) {
	return request({
		url: `/v1/dynamicRecordSheet/getRecordSheetConfig?subBusinessCode=${subBusinessCode}`,
		method: 'get',
	})
}

// 新增记录单配置
export function addRecordList(query) {
	return request({
		url: '/sampleTask/v1/recordSingleConfiguration',
		method: 'post',
		data: query,
	})
}

// 修改记录单配置
export function editRecordList(id, query) {
	return request({
		// url: `/sampleTask/v1/recordSingleConfiguration/${id}`,
		url: '/sampleTask/v1/recordSingleConfiguration/' + id,
		method: 'put',
		data: query,
	})
}



//获取采样记录配置列表
export function sampleRecordConfigsList(query) {
	return request({
		url: '/sampleRecordConfigs',
		method: 'get',
		params: query,
	})
}

//采样记录配置-获取指定类别未添加配置中的项目列表
export function getUnUsedItemsList(id,query) {
	return request({
		url: `/sampleRecordConfigs/${id}/getUnUsedItems`,
		method: 'get',
		params: query,
	})
}





//采样记录配置-编辑详情
export function sampleRecordConfigsInfo(id) {
	return request({
		url: `/sampleRecordConfigs/${id}`,
		method: 'get',
	})
}

//采样记录配置-获取未添加配置中的类别对应项目数
export function getUnUsedDetectTypesList(query) {
	return request({
		url: '/sampleRecordConfigs/getUnUsedDetectTypes',
		method: 'get',
		params: query,
	})
}

//采样记录配置-保存
export function sampleRecordConfigsSave(id,data) {
	return request({
		url: `/sampleRecordConfigs/${id}`,
		method: 'post',
		data: data
	})
}

//采样记录配置-获取指定类别未添加配置中的项目列表-所有
export function getAllUnUsedItemsSave(id,query) {
	return request({
		url: `/sampleRecordConfigs/${id}/getAllUnUsedItems`,
		method: 'get',
		params: query,
	})
}

























