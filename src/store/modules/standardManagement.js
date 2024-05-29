/*
 * @Autor: 焦政
 * @Date: 2021-02-05 14:03:17
 * @Description:
 */
/*
 * @Autor: 焦政
 * @Date: 2021-02-05 14:03:17
 * @Description: 标准管理数据管理
 */
const standardManagement = {
    state: {
        projectType: '',//项目类型  common 项目分组管理 take 采样项目分组
        detectCategory: '',//检测类别
        isAdd: true,//当前操作检测项目 是新增还是修改 true 新增  false 修改
        groupId: '',//组ID 如果是修改组ID必须传
    },
    mutations: {
        set_projecttype: (state, projectType) => {
            state.projectType = projectType
        },
        set_detectCategory: (state, detectCategory) => {
            console.log(detectCategory)
            state.detectCategory = detectCategory
        },
        set_isadd: (state, isAdd) => {
            state.isAdd = isAdd
        },
        set_groupId: (state, groupId) => {
            state.groupId = groupId
        }
    },
}
export default standardManagement
