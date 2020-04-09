<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <img class="mapfre-logo" alt="Mapfre logo" src="../assets/logo-mapfre-byn.png.webp" />

    <HelloWorld msg="Welcome to" title="Mapfre Vue Components" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>

<style scoped>
.mapfre-logo {
  position: relative;
  left: -5rem;
  bottom: 1rem;
}
</style>
