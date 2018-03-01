<template>
  <div id="app">
    <!-- <app-header></app-header>  -->
    <title>BlackJack</title>
    <router-view/>   
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

document.title = "blackjack"; // Change the title of the page here
export default {
  name: 'App',
  // components: { AppHeader }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
