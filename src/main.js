import './public-path';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import useaddRoute from "@/utils/loadingRouter";

let instance = null;
async function render(props = {}) {
  // 此处共享组件
  window.commonComponents = props.commonComponents
  window.loadMicroApp = props.loadMicroApp;
  window.commonComponents.RecordResult = recordResult
  await useaddRoute()
  instance = createApp(App);
  // 共享store
  instance.config.globalProperties.$mainStore = props.store
  instance.use(router);
  instance.use(store);
  instance.mount('#subProject');
}

 if (!window.__POWERED_BY_QIANKUN__) {
   render();
}

export async function bootstrap() {
  console.log('%c%s', 'color: green;', 'vue3.0 app bootstraped');
}


export async function mount(props) {
  render(props);
}

export async function unmount() {
  instance.unmount();
  instance._container.innerHTML = '';
  instance = null;
}
