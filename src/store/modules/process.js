const process = {
    state:{
        itemCategoryList: [
            {
                value: 'shuizhifenxi',
                label: '水质分析',
                disabled: false,
                children: [{
                    value: 'zhongshui',
                    label: '中水'
                }, {
                    value: 'zilaishui',
                    label: '自来水'
                }]
            }, {
                value: 'chanpinfenxi',
                label: '综合分析',
                disabled: false,
                children: [{
                    value: 'yuanliao',
                    label: '原料'
                }, {
                    value: 'fuliao',
                    label: '辅料'
                }, {
                    value: 'chanpin',
                    label: '产品'
                }, {
                    value: 'qita',
                    label: '其他'
                }]
            }]//检测项目类别
    },
}

export default  process
