<template>
  <div id="app">
    <VueNodeTemplate />
  </div>
</template>

<script>
import VueNodeTemplate from './components/VueNodeTemplate/index'

export default {
  name: 'App',
  components: {
    VueNodeTemplate
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

button{
  background-color: blueviolet;
  color: white;
  border: none;
  padding: 12px 20px;
  z-index: 2000;
  border-radius: 4px;
  cursor: pointer;
  font-weight:bolder;
}

</style>
