import { net } from '@/api/RequestList'

const equipment = {
    state: {
        equipmentStatusList: []
    },
    mutations: {
        set_equipmentStatusList: (state, list) => {
            state.equipmentStatusList = list
        }
    },
    actions: {
        async set_equipment_routerList({ commit }) {
            console.log('获取设备状态')
            let re = await net(
                "/equipment/common/selectEquipmentStatus",
                "get"
            );
            let arr = [];
            if (re.data) {
                re.data.forEach((item) => {
                    let obj = {
                        label: item.statusLabel,
                        value: Number(item.statusValue),
                    };
                    arr.push(obj);
                });

            }
            commit('set_equipmentStatusList', arr)
        }
    }
}

export default equipment