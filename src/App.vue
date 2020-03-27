<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* CSS Document */
body, h1, h2, h3, h4, h5, h6, ol, ul, dl, dd, p, input, select, textarea, td {
  margin: 0;
  padding: 0;
}
html,body{
  height:100%;
  background-color: #f4f4f4;
}
html{
  font-size: 26.67vw;	}
a{
  text-decoration:none;
  color:black;
}
ul li{
  list-style-type: none;
}
img{
  display: block;
}
body{
  display: flex;
  flex-direction:column;
  position: relative;
}
</style>
