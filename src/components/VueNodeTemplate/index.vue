<template>
  <div class="VueNodeTemplate">
    <!--    @historyChange="onHistoryChange" @historyStateChange="onHistoryStateChange"-->
    <ejs-diagram id="diagram" width='100%' height='100%' :nodes='nodes' :connectors="connectors" :layout="layout"
                 :nodeTemplate="nodeTemplate"
                 :getNodeDefaults="getNodeDefaults"/>
  </div>
</template>

<script>
import InputNodeTemplate from "./InputNode";
import {createNode, createConnector} from "@/utils/factory";
// import { Rect } from '@syncfusion/ej2-vue-diagrams';


export default {
  name: 'VueNodeTemplate',
  data() {
    return {
      nodes: [
        createNode('n1'),
        createNode('n2'),
        createNode('n3'),
      ],
      connectors: [createConnector('c1', 'n1', 'n2')],
      layout: {
        type: 'HierarchicalTree',
        horizontalSpacing: 150,
        verticalSpacing: 150,
      },

      getNodeDefaults(obj) {
        console.log('getNodeDefaults', obj)
        return obj
      },

      nodeTemplate() {
        console.log('nodeTemplate')
        return {
          template: InputNodeTemplate
        }
      }
    }
  },
  methods: {
    // onHistoryChange(change) {
    //   console.log('HistoryChange', change)
    // },
    //
    // onHistoryStateChange(change){
    //   console.log('HistoryStateChange', change)
    // },

    addNode() {
      let diagramInstance;
      let diagramObj = document.getElementById("diagram");
      diagramInstance = diagramObj.ej2_instances[0];
      const node = createNode('n4');
      const node1 = createNode('n5');
      const node2 = createNode('n6');
      const node3 = createNode('n7');
      const node4 = createNode('n8');
      const c1 = createConnector('c2', 'n1', 'n4')
      const c2 = createConnector('c3', 'n1', 'n5')
      const c3 = createConnector('c4', 'n1', 'n6')
      const c4 = createConnector('c5', 'n1', 'n7')
      const c5 = createConnector('c6', 'n3', 'n8')
      diagramInstance.add(node)
      diagramInstance.add(node1)
      diagramInstance.add(node2)
      diagramInstance.add(node3)
      diagramInstance.add(node4)
      diagramInstance.add(c1)
      diagramInstance.add(c2)
      diagramInstance.add(c3)
      diagramInstance.add(c4)
      diagramInstance.add(c5)
      //刷新布局
      diagramInstance.doLayout()
      //自适应一下
      diagramInstance.fitToPage()
      //TODO:可以布局之后，更新垃圾节点的位置
      // const n = diagramInstance.nodes[2]
      // n.offsetX = 2000
      // n.offsetY = 2000

      // let bound = new Rect(200, 400, 500, 400);
      // diagramInstance.bringToCenter(bound);
    }
  },
  mounted() {
    setTimeout(() => {
      this.addNode()
    }, 2000)
  }
}
</script>
<style>
.VueNodeTemplate {
  height: 100%;
  width: 100%;
}
</style>
