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
      <div class="test-area">
        <fieldset>
          <form id="testAreaForm">
            <legend>Global message configuration</legend>
            <span>
              <label>Message type:&nbsp;</label>
              <select v-model="type" required>
                <option value selected>-- Select --</option>
                <option value="success">success</option>
                <option value="info">info</option>
                <option value="warning">warning</option>
                <option value="danger">danger</option>
              </select>
            </span>
            <span>
              <label>Message content:&nbsp;</label>
              <input v-model="msg" type="text" style="min-width: 220px" required />
            </span>
            <span>
              <button v-on:click="showMessage">Show Message</button>
              <button v-on:click="hiddeMessage" v-show="globalMessagesVisible">Discard Message</button>
            </span>
          </form>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import GlobalMessages from "@/components/GlobalMessages.vue";

export default {
  name: "GlobalMessagesTest",
  data: function() {
    return {
      type: "",
      msg: "",
      globalMessagesVisible: false
    };
  },
  components: {
    GlobalMessages
  },
  methods: {
    showMessage() {
      let form = document.getElementById("testAreaForm");
      if (form.checkValidity()) {
        this.globalMessagesVisible = true;
        this.$root.$emit("showMessageEvent", this.type, this.msg);
      }
    },
    hiddeMessage() {
      this.globalMessagesVisible = false;
      this.$root.$emit("hiddeMessageEvent");
    }
  }
};
</script>

<style scoped>
.global-messages-test {
  text-align: left;
}
.test-area {
  padding: 1rem;
  background-color: #f3f5f7;
  border-radius: 0.25rem;
  border: solid 1px #d0d0d0;
}
.test-area span {
  margin: 0 1rem 0 1rem;
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
  font-size: 0.9rem;
}
fieldset {
  border-radius: 0.25rem;
  border: solid 1px #d0d0d0;
  padding: 1rem;
}
input:invalid,
select:invalid {
  border: solid 1px grey;
  border-left: solid 4px #d7725a;
}
</style>
