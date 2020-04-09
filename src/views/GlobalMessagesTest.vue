<template>
  <div class="global-messages-test">
    <h1>
      <span>&lt;GlobalMessages&gt;</span> component
      <img
        class="mapfre-logo"
        height="15px"
        alt="Mapfre logo"
        src="../assets/logo-mapfre-byn.png.webp"
      />
    </h1>
    <div class="component-content">
      <GlobalMessages />
    </div>
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
.catalog {
  text-align: left;
}
h1 {
  margin: 1rem;
  font-size: 1.5rem;
  background-color: #f3f5f7;
  border-top: solid 1px #d0d0d0;
  border-bottom: solid 1px #d0d0d0;
  padding-left: 1rem;
  padding-right: 1rem;
}
h1 span {
  font-family: Courier New, Courier, Lucida Sans Typewriter, Lucida Typewriter,
    monospace;
  font-size: 1.8rem;
  font-weight: bolder;
  color: #b9b9b9;
}
.mapfre-logo {
  float: right;
  position: relative;
  top: 9px;
}
.component-content {
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
