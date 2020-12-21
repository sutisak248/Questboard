<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <br>
    <router-link to="/">none</router-link>
    <br>
    <router-link to="/home">home</router-link>
    <router-view></router-view>
    
  </div>
</template>

<script>
// import home from './components/home.vue'
// import hello from './components/HelloWorld.vue'
// import VueRouter from 'vue-router'
// import Vue from 'vue'





export default {
  name: 'App',
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
