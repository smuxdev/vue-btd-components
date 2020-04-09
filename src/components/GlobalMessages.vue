<template>
  <div :class="['alert', 'alert-' + type]" role="alert">
    <i class="fas fa-info-circle"></i>
    {{msg}}
    <i class="fas fa-times close"></i>
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
.close {
  cursor: pointer;
  float: right;
  font-size: 1.5rem;
  color: #000;
  opacity: 0.5;
}
.close:hover {
  opacity: 0.7;
}
.close:active {
  opacity: 0.3;
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
