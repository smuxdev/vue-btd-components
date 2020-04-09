<template>
  <div class="hello">
    <h1>
      {{ msg }}
      <span>{{title}}</span>!
    </h1>
    <p>
      Just a bunch of
      <b>Vue Single File components</b> for use in your interfaces,
      <br />here they are:
      <router-link to="/catalog">Catalog</router-link>.
    </p>
    <div class="custom-block tip">
      <p class="custom-block-title">DISCLAIMER</p>
      <p>
        Use these components at your own risk. There is no support service, although the 'Development Support' team will be happy to assist you.
        You can modify the components as you wish according to your own needs.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    title: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello h1 span {
  font-weight: bolder;
  color: #d5ca93;
}
a {
  color: #42b983;
}
.custom-block.tip {
  background-color: #f3f5f7;
  border-color: #42b983;
}
.custom-block.tip {
  padding: 0.1rem 1.5rem;
  border-left-width: 0.5rem;
  border-left-style: solid;
  margin: 1rem 0;
}
.custom-block .custom-block-title {
  font-weight: 600;
  margin-bottom: -0.4rem;
}
.custom-block p {
  line-height: 1.7;
}
</style>
