<template>
  <div :class="['alert', 'alert-' + type, 'alert-dismissible']" role="alert">
    <i class="fas fa-info-circle"></i>
    {{msg}}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">×</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "GlobalMessages",
  data: function() {
    return {
      type: "success",
      msg: "Default message"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.global-messages {
  text-align: left;
}
.alert {
  text-align: left;
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
}
.alert-dismissible {
  padding-right: 4rem;
}
.close {
  cursor: pointer;
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
  text-transform: none;
  overflow: visible;
  margin: 0;
  border-radius: 0;
}
.alert-danger {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}
.alert-success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}
.alert-warning {
  color: #856404;
  background-color: #fff3cd;
  border-color: #ffeeba;
}
.alert-info {
  color: #0c5460;
  background-color: #d1ecf1;
  border-color: #bee5eb;
}
</style>
