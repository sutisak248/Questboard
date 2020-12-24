<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <br>
    <router-link to="/">none</router-link>
    <br>
    <router-link to="/login">login</router-link>
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

body{
margin : 0;
padding : 0;
background : url(https://images.hdqwalls.com/download/evening-talks-4k-uq-1600x900.jpg);
background-position: center;
background-size: cover;
font-family: sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
