<template>
  <div class="kevin_main_page">
    <el-form
      :model="form"
      ref="form"
      label-width="100px"
      :form="form"
      class="demo-ruleForm"
      :label-position="kevinJson.KevinWidget.formlabelPosition || 'top'"
    >
      <el-row v-if="!nullKevinJson">
        <kevin-render
          ref="KevinRender"
          :editEnv="businessEnv"
          :context="context"
          :Widget="renderWidget"
          :form="form"
        />
      </el-row>
      <el-empty
        v-else
        :description="`请配置【${widgetId}】低码唯一键`"
      ></el-empty>
    </el-form>
  </div>
</template>

<script setup>
import moment from "moment";
import {getCurrentInstance,ref,reactive,watch,nextTick} from "vue";
import {useRoute} from "vue-router";
const route = useRoute()
import {net} from '@/api/RequestList'
let vm = getCurrentInstance().proxy
let pluginsInfo = reactive({})
let businessConfigId = ref(null)
let businessEnv = ref('add')
let kevinJson = reactive({
  KevinWidget: {}
})
let businessData = reactive({})
let businessConfig = reactive({})
let nullKevinJson = ref(false)
let form = reactive({
  pageSize: 10,
  pageNum: 1
})
let context = reactive(vm)
let renderWidget = ref([])
let dialogFooterButtons = ref([])
let widgetId = ref('')
let container = ref(null)


watch(route.path,(val) => {
  widgetId.value = val.split('/').pop()
  e_getWidgetInfo()
},{
  deep: true,
  immediate: true
})
widgetId.value = route.params.widgetId
e_getWidgetInfo()



async function e_businessConfig() {
  if (kevinJson.KevinWidget.businessConfig) {
    for (
      let i = 0;
      i < kevinJson.KevinWidget.businessConfig.length;
      i++
    ) {
      let info = kevinJson.KevinWidget.businessConfig[i];
      businessConfig[info.key] = info.value;
    }
  }
}
let showKevinLog = ref(false)
let dialogTitle = ref('')
async function e_getWidgetInfo() {
  let re = await net("/formLayout/v2/getFormLayoutConfig", "get", {
    id: widgetId.value,
  });
  try {
    let formDataStr = re.data.configStr;
    let resultDataStr = formDataStr
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
    let info = JSON.parse(resultDataStr);
    let KevinJson = info.KevinJson;
    kevinJson = KevinJson;
    this.e_businessConfig();
    showKevinLog.value = true;
    dialogTitle.value = KevinJson.KevinWidget.title;
    renderWidget.value = KevinJson.KevinWidget.children;
    kevinJson.KevinWidget.diaLogFooterButton.forEach((dfb) => {
      if (
        !dfb.statusEvents ||
        new Function("ctx", "_this", dfb.statusEvents)(
          vm,
          vm.$refs.KevinRender
        )
      ) {
        dialogFooterButtons.value.push(dfb);
      }
    });
    nextTick(() => {
      runWidgetAutoEvents(KevinJson.KevinWidget.autoEvents);
      vm.$refs.KevinRender.getWidgetServerData(renderWidget.value);
      container = vm.$refs.KevinRender;
    });
  } catch {
    nullKevinJson.value = true;
  }
}
// 执行动态表单自动执行脚本
function runWidgetAutoEvents(autoEvents) {
  if (autoEvents) {
    for (let key in autoEvents) {
      new Function("ctx", "_this", "moment", autoEvents[key])(
        vm,
        vm.$refs.KevinRender,
        moment
      );
    }
  }
  form = { ...form };
}
function getList(data) {
  new Function(
    "ctx",
    "_this",
    "data",
    vm.KevinJson.KevinWidget.manuallyEvents.getList
  )(context, vm.$refs.KevinRender, data)
}


</script>

<style lang="less">
.kevin_main_page {
  margin: 0.7rem;
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  overflow: auto;
}

.kevin_main_page .el-form--inline .el-form-item {
  width: 100%;
}

.kevin_main_page .el-select {
  width: 100%;
}
</style>
