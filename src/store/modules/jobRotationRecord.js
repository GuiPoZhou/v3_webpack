/*
 * @Autor: yangxinming
 * @Date: 2023/12/26
 * @Description: 轮岗记录
 */
const jobRotationRecord = {
    state: {
        postData:{},//答题时间 分钟
        leftTable: {},
        rightTable: {},
    },
    mutations: {
        set_postData: (state, postData) => {
            state.postData = postData
        },
        set_leftTable: (state, {leftTable,id}) => {
            state.leftTable[id] = leftTable
            state.leftTable = JSON.parse(JSON.stringify(state.leftTable))
        },
        set_rightTable: (state, {rightTable, id}) => {
            console.log(rightTable,'right')
            state.rightTable[id] = rightTable
            state.rightTable = JSON.parse(JSON.stringify(state.rightTable))
        },
        set_detailTable: (state, {data,type}) => {
          state[type] = data
        },
        reset_table: (state) => {
            state.leftTable = {}
            state.rightTable = {}
        }
    },
}
export default jobRotationRecord
