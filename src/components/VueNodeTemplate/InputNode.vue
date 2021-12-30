<template>
  <div>
    <div class="InputNode">
      <div>可输入节点</div>
      <input type="text" v-model="input">
    </div>
  </div>
</template>

<script>


export default {
  name: "InputNode",
  data() {
    return {
      input: '',
    }
  },
  created() {
    // console.log('InputNode created')
  },
  mounted() {
    // console.log('InputNode mounted')
  }
}
</script>

<style scoped>
.InputNode{
  width: 200px;
  height: 80px;
  color: white;
  background: #6BA5D7;
}
</style>
