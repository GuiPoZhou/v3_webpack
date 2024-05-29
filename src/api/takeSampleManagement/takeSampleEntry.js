import request from '@/utils/request'

//获取待录入列表
export function getWaitEntryList(query) {
	return request({
		url: '/sampling/envSampleTaskWaiting/list',
		method: 'get',
		params: query,
	})
}

// 获取被退回列表
export function getBeReturnList(query) {
	return request({
		url: '/sampleTask/v1/sampleInfo/returnedlist',
		method: 'get',
		params: query,
	})
}

// 获取已提交列表
export function getSubmittedList(query) {
	return request({
		url: '/sampleTask/v1/sampleInfo/submittedlist',
		method: 'get',
		params: query,
	})
}

// 获取检测类别列表
export function getTestCateList(entrustId, param) {
	return request({
		url: `/sampleTask/v1/sampleInfo/getSampleDetectList/${entrustId}`,
		method: 'get',
		params: param
	})
}

// 采样录入频次列表
export function getSampleRatePickList(query) {
	return request({
		url: '/sampleTask/v1/sampleInfo/getSampleRatePickList',
		method: 'get',
		params: query,
	})
}

// 采样录入 - 录入 - 提交操作
export function submitEnter(ratePickId, idGroup) {
	return request({
		url: `/sampleTask/v1/sampleInfo/${ratePickId}/submit?idGroup=` + idGroup,
		method: 'post',
	})
}

// 采样录入 - 录入 - 批量提交操作
export function multipleSubmit(data) {
	return request({
		url: `/sampleTask/v1/sampleInfo/multipleSubmit`,
		method: 'post',
		data: data
	})
}

// 获取质控样列表
export function getQualityControlList(query) {
	return request({
		url: `/qualctrl/samplingQualityCtrlManageEditQualityCtrl/`,
		method: 'get',
		params: query,
	})
}

// 获取质控样详情
export function getQualityControlDetail(query) {
	return request({
		url: `/sampleTask/v1/sampleInfo/getQualityControlDetail`,
		method: 'get',
		params: query,
	})
}

// 上传附件
export function uploadFile(query) {
	return request({
		url: 'sampleTask/v1/sampleInfo/upload',
		method: 'post',
		data: query,
	})
}

// 获取附件列表
export function getUploadFile(entrustId, detectType) {
	return request({
		url: `/sampleTask/v1/sampleInfo/getUploadFile?entrustId=${entrustId}&detectType=${detectType}`,
		method: 'get',
	})
}

// 删除附件
export function removeFile(fileId) {
	return request({
		url: `/sampleTask/v1/sampleInfo/removeFile/${fileId}`,
		method: 'delete',
	})
}

// 审批历史记录
export function getHisList(ratePickId) {
	return request({
		url: `/sampleTask/v1/approveHis/getHisList/${ratePickId}`,
		method: 'get',
	})
}






//获取记录单表单配置
export function getRecordSheetConfig(checkId) {
	return request({
		url: '/elnRecord/template/' + checkId,
		method: 'get'
	})
}

//获取记录单表单数据
export function getRecordSheetDetail(executionTemplateId, executionId) {
	return request({
		url: '/v1/dynamicRecordSheet/' + executionTemplateId + '?executionId=' + executionId,
		method: 'get'
	})
}

//获取记录单表单数据
export function saveRecordSheetData(executionTemplateId, executionId, dynamicFormData, saveFlag, idGroup, sharedFormScope) {
	return request({
		url: 'v1/dynamicRecordSheet/' + executionTemplateId + '/save?executionId=' + executionId + '&saveFlag=' + saveFlag + '&idGroup=' + idGroup + '&sharedFormScope=' + sharedFormScope,
		method: 'post',
		data: dynamicFormData
	})
}


//获取记录单表单数据
export function resetRecordSheetData(executionTemplateId, executionId, dynamicFormData) {
	return request({
		url: 'v1/dynamicRecordSheet/' + executionTemplateId + '/reset?executionId=' + executionId,
		method: 'get',
	})
}



// 根据选择的频次和质控类型查询 待添加 平行&穿透质控 列表
export function getSampleToBeAddedList(query) {
	return request({
		url: '/qualctrl/parallelSampleToBeAddedList',
		method: 'get',
		params: query
	})
}

// 质控编辑查询检测项目
export function qualityControlEditQueryDetectItems(id) {
	return request({
		url: `/qualctrl/qualityControlEditQueryDetectItems/${id}`,
		method: 'get'
	})
}

//保存质控样（现场平行、现场穿透）
export function savePickQualCtrlPallel(data) {
	return request({
		url: '/qualctrl/savePickQualCtrlPallel',
		method: 'post',
		data
	})
}


// 根据委托ID和检测类别查询 待添加 空白质控 列表
export function getBlankSampleToBeAddedList(query) {
	return request({
		url: '/qualctrl/blankSampleToBeAddedList',
		method: 'get',
		params: query
	})
}


// 保存空白质控样
export function savePickQualCtrlBlank(data) {
	return request({
		url: '/qualctrl/savePickQualCtrlBlank',
		method: 'post',
		data
	})
}
