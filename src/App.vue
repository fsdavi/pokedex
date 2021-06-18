<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

body {
  --bg-color: rgba(255, 255, 255, 0.75);
  padding: 0;
  margin: 0;
  background-image: linear-gradient(0deg, var(--bg-color), var(--bg-color)),
    url('./assets/bg.jpg');
}

button {
  cursor: pointer;
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
