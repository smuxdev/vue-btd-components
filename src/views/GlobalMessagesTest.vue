<template>
  <div class="global-messages-test">
    <img class="mapfre-logo" alt="Mapfre logo" src="../assets/logo-mapfre-byn.png.webp" />
    <h1>Global Messages Component Test</h1>
    <GlobalMessages />
  </div>
</template>

<script>
// @ is an alias to /src
import GlobalMessages from "@/components/GlobalMessages.vue";

export default {
  name: "GlobalMessagesTest",
  components: {
    GlobalMessages
  }
};
</script>

<style scoped>
.global-messages-test {
  text-align: left;
}
</style>
