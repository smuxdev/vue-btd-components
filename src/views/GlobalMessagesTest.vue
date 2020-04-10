<template>
  <div class="global-messages-test">
    <h1>
      <code>&lt;GlobalMessages&gt;</code> component
      <img
        class="mapfre-logo"
        height="15px"
        alt="Mapfre logo"
        src="../assets/logo-mapfre-byn.png.webp"
      />
    </h1>
    <div class="component-content">
      <fieldset class="component-area">
        <legend>Component area</legend>
        <GlobalMessages />
      </fieldset>
      <fieldset class="test-area">
        <legend>Global message configuration</legend>
        <form id="testAreaForm">
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
            <button v-on:click="hiddeMessage" v-show="globalMessagesVisible">Discard</button>
          </span>
        </form>
      </fieldset>
      <p></p>
      <div class="custom-block tip">
        <p class="custom-block-title">DESCRIPTION</p>
        <p>
          This component displays a message to the user. Respond to
          <code>showMessageEvent</code> and
          <code>hiddeMessageEvent</code> events:
          <br />-
          <code>showMessageEvent (type, message)</code>: requires two parameters. The first will be the type of
          <code>message, success, info, warning or danger</code>, which will define the color of the alert.
          The second is the message that this alert will display.
          <br />-
          <code>hiddeMessageEvent</code>: has no parameters and triggers removal of the alert.
        </p>
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
code {
  font-family: Courier New, Courier, Lucida Sans Typewriter, Lucida Typewriter,
    monospace;
}
.test-area {
  padding: 1rem;
  background-color: #f3f5f7;
  border-radius: 0.25rem;
  border: solid 1px #d0d0d0;
  box-shadow: 0px 4px 14px 0px rgba(191, 191, 191, 0.75);
}
.test-area span {
  margin: 0 1rem 0 1rem;
}
fieldset legend {
  color: #d7725a;
}
.component-area {
  padding: 1rem;
  margin-bottom: 1em;
  border: solid 1px #d0d0d0;
  min-height: 4rem;
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
h1 code {
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
input:invalid,
select:invalid {
  border: solid 1px grey;
  border-left: solid 4px #d7725a;
}
button {
  border-radius: 0.25rem;
  border: solid 1px #b1b5b1;
  padding: 0.5em;
  margin: 0.5em;
  box-shadow: 0px 4px 10px 0px rgba(191, 191, 191, 0.75);
  cursor: pointer;
}
button:hover {
  opacity: 0.8;
}
button:active {
  opacity: 0.5;
}
.custom-block.tip {
  background-color: #f3f5f7;
  border-color: #d7725a;
}
.custom-block.tip {
  padding: 0.1rem 1.5rem;
  border-left-width: 0.5rem;
  border-left-style: solid;
  margin: 1rem 0;
  max-width: 60rem;
  margin: 0 auto;
}
.custom-block .custom-block-title {
  font-weight: 600;
  margin-bottom: -0.4rem;
}
.custom-block p {
  line-height: 1.7;
}
</style>
