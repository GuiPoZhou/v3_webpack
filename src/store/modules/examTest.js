/*
 * @Autor: yangxinming
 * @Date: 2023/12/26
 * @Description: 考试学生端
 */
const examTest = {
    state: {
        answerTime: '',//答题时间 分钟
        examId: '', //当前总题目id
        examList: [], //总题目合集
        bigExamList: [], //大题题目合集
        baseIndex: 0, //当前题目索引
        baseExam: {}, //当前题目 用于切换
    },
    mutations: {
        set_answerTime: (state, answerTime) => {
            state.answerTime = answerTime
        },
        set_examId: (state, examId) => {
          state.examId = examId
        },
        set_examList: (state, examList) => {
            state.examList = examList
        },
        set_baseExam: (state, baseExam) => {
            state.baseExam = baseExam
        },
        set_bigExamList: (state, bigExamList) => {
            state.bigExamList = bigExamList
        },
        set_baseIndex: (state, baseIndex) => {
            state.baseIndex = baseIndex
        }
    },
}
export default examTest
