<template>
  <div class="VueNodeTemplate">
    <button @click="onExportImg">导出图片</button>
    <ejs-diagram id="testdiagram" width='100%' height='100%' :nodes='nodes' :connectors="connectors" :layout="layout"
                 :nodeTemplate="nodeTemplate"
                 :layers="layers"
                 :commandManager="commandManager"
                 :getNodeDefaults="getNodeDefaults"/>
  </div>
</template>

<script>
import InputNodeTemplate from "./InputNode";
import {createNode, createConnector} from "@/utils/factory";

let diagramInstance;

export default {
  name: 'VueNodeTemplate',
  data() {
    return {
      commandManager: {
        commands: [
          {
            name: 'copy',
            canExecute: function (...args) {
              console.log('argsargsargs', args)
              return false;
            },
          },
          {
            name: 'paste',
            canExecute: function () {
              return false;
            },
          },
          {
            name: 'cut',
            canExecute: function () {
              return false;
            },
          }
        ]
      },
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
      layers: [
      //   {
      //   id: 'layer1',
      //   visible: false,
      //   objects: ['n1', 'n2', 'n3']
      // }
      ],

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
    init() {
      let diagramObj = document.getElementById("testdiagram");
      diagramInstance = diagramObj.ej2_instances[0];
    },

    onExportImg() {
      // console.log('导出图片')
      // const rect = diagramInstance.getDiagramBounds()
      // console.log('rect',rect)
      // let htmlData = diagramInstance.getDiagramContent();
      // console.log('htmlData',htmlData)
      // diagramInstance.exportImage(htmlData, {mode: 'Download', format:'PNG'})
      // console.log('diagramInstance',diagramInstance.exportDiagram)
      diagramInstance.exportDiagram({
        format:'PNG',
        mode: 'Download',
        fileName:'exported',
        region:'Content',
        // bounds:{
        //   height:200,
        //   width:200,
        //   x:50,
        //   y:50
        // }
      })
      // console.log('导出图片结束', data)
    },
    // onHistoryChange(change) {
    //   console.log('HistoryChange', change)
    // },
    //
    // onHistoryStateChange(change){
    //   console.log('HistoryStateChange', change)
    // },

    addNode() {
      const node = createNode('n4');
      const node1 = createNode('n5');
      const node2 = createNode('n6');
      const node3 = createNode('n7');
      const node4 = createNode('n8');
      const node5 = createNode('n9');
      const node6 = createNode('n10');
      const c1 = createConnector('c2', 'n1', 'n4')
      const c2 = createConnector('c3', 'n1', 'n5')
      const c3 = createConnector('c4', 'n1', 'n6')
      const c4 = createConnector('c5', 'n1', 'n7')
      const c5 = createConnector('c6', 'n3', 'n8')
      const c6 = createConnector('c7', 'n7', 'n9')
      const c7 = createConnector('c8', 'n7', 'n10')
      diagramInstance.add(node)
      diagramInstance.add(node1)
      diagramInstance.add(node2)
      diagramInstance.add(node3)
      diagramInstance.add(node4)
      diagramInstance.add(node5)
      diagramInstance.add(node6)
      diagramInstance.add(c1)
      diagramInstance.add(c2)
      diagramInstance.add(c3)
      diagramInstance.add(c4)
      diagramInstance.add(c5)
      diagramInstance.add(c6)
      diagramInstance.add(c7)
      // diagramInstance.dataBind()
      //刷新布局
      diagramInstance.doLayout()
      //自适应一下
      diagramInstance.fitToPage()
    },

    // addLayer(){
    //   diagramInstance.addLayer({
    //     id: 'layer1',
    //     visible: false,
    //     objects: ['n1', 'n2', 'n3']
    //   })
    // }
  },
  mounted() {
    this.init();
    this.addNode()
    // this.addLayer()
  }
}
</script>
<style scoped>
.VueNodeTemplate {
  height: 100%;
  width: 100%;
}

button {
  position: fixed;
  left: 20px;
  top: 12px;
}

</style>
