<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>



export default {
  name: 'App',
  created() {
    this.$store.dispatch('checkAuth');
  },
  components: {

  }
};
</script>

<style>
html,body,#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>