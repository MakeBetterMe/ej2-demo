<template>
  <div class="VueNodeTemplate">
    <!--    @historyChange="onHistoryChange" @historyStateChange="onHistoryStateChange"-->
    <ejs-diagram id="diagram" width='100%' height='100%' :nodes='nodes' :layout="layout" :nodeTemplate="nodeTemplate"
                 :getNodeDefaults="getNodeDefaults"/>
  </div>
</template>

<script>
import InputNodeTemplate from "./InputNode";

export default {
  name: 'VueNodeTemplate',
  data() {
    return {
      nodes: [
        {
          id: "Node1",
          width: 200,
          height: 80,
          shape: {
            type: 'HTML',
          }
        },
        {
          id: "Node2",
          width: 200,
          height: 80,
          shape: {
            type: 'HTML',
          }
        },
        {
          id: "Node3",
          width: 200,
          height: 80,
          shape: {
            type: 'HTML'
          }
        }
      ],
      
      layout: {
        type: 'HierarchicalTree'
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
      const node = {
          id: "Node4",
          width: 200,
          height: 80,
          shape: {
            type: 'HTML',
          }
        }
      diagramInstance.add(node)
      diagramInstance.doLayout()
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
