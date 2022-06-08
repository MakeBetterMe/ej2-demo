<template>
  <div class="VueNodeTemplate">
    <button @click="onExportImg">导出图片</button>
    <ejs-diagram id="testdiagram" width='100%' height='100%' :nodes='nodes' :connectors="connectors" :layout="layout"
      :nodeTemplate="nodeTemplate" :commandManager="commandManager" :getNodeDefaults="getNodeDefaults" />
  </div>
</template>

<script>
import InputNodeTemplate from "./InputNode";
import { createNode, createConnector } from "@/utils/factory";

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
        // createNode('n3'),
      ],
      connectors: [
        // createConnector('c1', 'n1', 'n2')
      ],
      layout: {
        type: 'HierarchicalTree',
        horizontalSpacing: 100,
        verticalSpacing: 100,
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
        format: 'PNG',
        mode: 'Download',
        fileName: 'exported',
        region: 'Content',
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
      const n1 = createNode('n1',100);
      const n2 = createNode('n2',300);
      const n3 = createNode('n3',100);
      // const n4 = createNode('n4',600);
      // const n5 = createNode('n5',400);
      // const n6 = createNode('n6',100);
      // const n7 = createNode('n7',300);
      // const n8 = createNode('n8');
      // const n9 = createNode('n9');
      // const n10 = createNode('n10');
      // const n11 = createNode('n11');
      // const n12 = createNode('n12');
      // const n13 = createNode('n13');
      // const n14 = createNode('n14');
      // const n15 = createNode('n15');
      // const n16 = createNode('n16');
      // const n17 = createNode('n17');
      // const n18 = createNode('n18');
      // const n19 = createNode('n19');
      // const n20 = createNode('n20');
      // const n21 = createNode('n21',200);
      // const n22 = createNode('n22');
      // const n23 = createNode('n23',120);
      // const n24 = createNode('n24');
      // const n25 = createNode('n25');
      // const n26 = createNode('n26');
      // const n27 = createNode('n27');
      // const n28 = createNode('n28',520);
      const c1 = createConnector('c1', 'n1', 'n2')
      const c2 = createConnector('c2', 'n2', 'n3')
      // const c3 = createConnector('c3', 'n1', 'n4')
      // const c4 = createConnector('c4', 'n1', 'n5')
      // const c5 = createConnector('c5', 'n1', 'n6')
      // const c6 = createConnector('c6', 'n1', 'n7')
      // const c7 = createConnector('c7', 'n1', 'n8')
      // const c8 = createConnector('c8', 'n8', 'n9')
      // const c9 = createConnector('c9', 'n8', 'n10')
      // const c10 = createConnector('c10', 'n8', 'n11')
      // const c11 = createConnector('c11', 'n8', 'n12')
      // const c12 = createConnector('c12', 'n8', 'n13')
      // const c13 = createConnector('c13', 'n8', 'n14')
      // const c14 = createConnector('c14', 'n8', 'n15')
      // const c15 = createConnector('c15', 'n8', 'n16')
      // const c16 = createConnector('c16', 'n8', 'n17')
      // const c17 = createConnector('c17', 'n8', 'n18')


      // const c18 = createConnector('c18', 'n3', 'n19')
      // const c19 = createConnector('c19', 'n3', 'n20')
      // const c20 = createConnector('c20', 'n3', 'n21')
      // const c21 = createConnector('c21', 'n3', 'n22')
      // const c22 = createConnector('c22', 'n3', 'n23')
      // const c23 = createConnector('c23', 'n3', 'n24')
      // const c24 = createConnector('c24', 'n3', 'n25')
      // const c25 = createConnector('c25', 'n3', 'n26')
      //
      // const c26 = createConnector('c26', 'n5', 'n27')
      // const c27 = createConnector('c27', 'n5', 'n28')

      diagramInstance.add(n1)
      diagramInstance.add(n2)
      diagramInstance.add(n3)
      // diagramInstance.add(n4)
      // diagramInstance.add(n5)
      // diagramInstance.add(n6)
      // diagramInstance.add(n7)
      // diagramInstance.add(n8)
      // diagramInstance.add(n9)
      // diagramInstance.add(n10)
      // diagramInstance.add(n11)
      // diagramInstance.add(n12)
      // diagramInstance.add(n13)
      // diagramInstance.add(n14)
      // diagramInstance.add(n15)
      // diagramInstance.add(n16)
      // diagramInstance.add(n17)
      // diagramInstance.add(n18)
      // diagramInstance.add(n19)
      // diagramInstance.add(n20)
      // diagramInstance.add(n21)
      // diagramInstance.add(n22)
      // diagramInstance.add(n23)
      // diagramInstance.add(n24)
      // diagramInstance.add(n25)
      // diagramInstance.add(n26)
      // diagramInstance.add(n27)
      // diagramInstance.add(n28)
      diagramInstance.add(c1)
      diagramInstance.add(c2)
      // diagramInstance.add(c3)
      // diagramInstance.add(c4)
      // diagramInstance.add(c5)
      // diagramInstance.add(c6)
      // diagramInstance.add(c7)
      // diagramInstance.add(c8)
      // diagramInstance.add(c9)
      // diagramInstance.add(c10)
      // diagramInstance.add(c11)
      // diagramInstance.add(c12)
      // diagramInstance.add(c13)
      // diagramInstance.add(c14)
      // diagramInstance.add(c15)
      // diagramInstance.add(c16)
      // diagramInstance.add(c17)
      // diagramInstance.add(c18)
      // diagramInstance.add(c19)
      // diagramInstance.add(c20)
      // diagramInstance.add(c21)
      // diagramInstance.add(c22)
      // diagramInstance.add(c23)
      // diagramInstance.add(c24)
      // diagramInstance.add(c25)
      // diagramInstance.add(c26)
      // diagramInstance.add(c27)
      // diagramInstance.dataBind()
      //刷新布局
      diagramInstance.doLayout()
      //自适应一下
      // diagramInstance.fitToPage({mode:'Page',canZoomIn:true})
      setTimeout(()=>{
        const node =  diagramInstance.nodes[1]
        console.log(node)
      //   // const connectors =  diagramInstance.connectors
      //   // console.log(connectors)
      //   // console.log('111111111')
      //   // console.log(n2)
        node.height = 300
        // node.parentObj.dataBind()
        // node.parentObj.doLayout()
        diagramInstance.dataBind()
        diagramInstance.doLayout()
      //   // diagramInstance.dataBind()
      },3000)

      setTimeout(()=>{
        const n4 = createNode('n4',300);
        const c3 = createConnector('c3', 'n3', 'n4')
        diagramInstance.add(n4)
        diagramInstance.add(c3)
        const n5 = createNode('n5',300);
        const c4 = createConnector('c4', 'n4', 'n5')
        diagramInstance.add(n5)
        diagramInstance.add(c4)
        diagramInstance.dataBind()
        diagramInstance.doLayout()
      },3000)
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
