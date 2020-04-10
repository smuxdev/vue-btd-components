<template>
  <transition name="fade" mode="out-in">
    <div :class="['btd-alert', 'btd-alert-' + type]" v-if="visible">
      <i class="fas fa-info-circle"></i>
      {{msg}}
      <i class="fas fa-times btd-close" v-on:click="hideMessage"></i>
    </div>
  </transition>
</template>

<script>
export default {
  name: "GlobalMessages",
  data: function() {
    return {
      type: "success",
      msg: "Default message",
      visible: false
    };
  },
  mounted() {
    this.$root.$on("showMessageEvent", (type, msg) => {
      this.type = type;
      this.msg = msg;
      this.visible = true;
    });
    this.$root.$on("hiddeMessageEvent", () => {
      this.visible = false;
    });
  },
  methods: {
    hideMessage() {
      this.visible = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.btd-alert {
  position: relative;
  padding: 0.25rem 1rem;
  margin-bottom: 0.5rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1.5;
}
.btd-close {
  cursor: pointer;
  float: right;
  font-size: 1rem;
  line-height: 1.3;
  color: #000;
  opacity: 0.5;
}
.btd-close:hover {
  opacity: 0.7;
}
.btd-close:active {
  opacity: 0.3;
}
.btd-alert-danger {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}
.btd-alert-success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}
.btd-alert-warning {
  color: #856404;
  background-color: #fff3cd;
  border-color: #ffeeba;
}
.btd-alert-info {
  color: #0c5460;
  background-color: #d1ecf1;
  border-color: #bee5eb;
}
</style>
