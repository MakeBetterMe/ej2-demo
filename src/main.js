import Vue from 'vue'
import App from './App.vue'
import {DiagramPlugin, Diagram, UndoRedo, HierarchicalTree,PrintAndExport} from '@syncfusion/ej2-vue-diagrams';

Diagram.Inject(UndoRedo, HierarchicalTree,PrintAndExport);
Vue.use(DiagramPlugin);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
