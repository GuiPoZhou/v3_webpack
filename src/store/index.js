
import Vuex from 'vuex'
import app from './modules/app'
import system from './system/index'
import process from './modules/process'
import standardManagement from './modules/standardManagement'
import masterBanUi from "@/store/modules/masterBanUi";
import BeiYuan from "./modules/BeiYuan";
import equipment from './modules/equipment';
import examTest from "@/store/modules/examTest";
import jobRotationRecord from "@/store/modules/jobRotationRecord.js";

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    equipment,
    system,
    process,
    standardManagement,
    app,
    BeiYuan,
    masterBanUi,
    examTest,
    jobRotationRecord,
  }
})
