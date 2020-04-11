<template>
  <transition name="slide-fade">
    <div class="game-board" v-show="inGame">
      <span>
        <img src="../../assets/gameImg/draw-1.jpg" alt />
      </span>
      <span>
        <ul>
          <li>Torch</li>
          <li>Tree</li>
          <li>Elephant</li>
          <li>In</li>
          <li>In front of</li>
          <li>Cat</li>
          <li>Dog</li>
        </ul>
      </span>
    </div>
  </transition>
</template>

<script>
export default {
  name: "GameBoard",
  data: function() {
    return {};
  },
  props: {
    inGame: Boolean
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.game-board {
  text-align: left;
  display: flex;
}
.game-board img {
  width: 30rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
