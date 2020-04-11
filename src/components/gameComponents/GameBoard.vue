<template>
  <transition name="slide-fade">
    <div class="game-board" v-show="inGame">
      <span>
        <img :src="`../../gameImg/draw-${imgNumber}.jpg`" alt />
      </span>
      <span class="word-list">
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
      <transition name="fade" mode="out-in">
        <span class="tip" v-show="needTip">
          <i class="fas fa-ambulance"></i>
        </span>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: "GameBoard",
  data: function() {
    return {
      imgNumber: 0,
      lives: 3
    };
  },
  props: {
    inGame: Boolean
  },
  watch: {
    inGame: function(val) {
      if (val) {
        this.imgNumber = Math.floor(Math.random() * 5) + 1;
      }
    }
  },
  computed: {
    needTip: function() {
      return this.lives < 3;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.game-board {
  color: rgb(73, 86, 99);
  font-family: "Titan One";
  font-size: 2rem;
  text-align: left;
  display: flex;
}
.game-board img {
  width: 30rem;
}
.word-list ul {
  cursor: pointer;
  list-style: none;
  user-select: none;
}
.word-list li:hover {
  transform: scale(1.2);
  transform: translateX(0.2rem);
  opacity: 0.9;
  color: rgb(134, 74, 74);
}
.word-list li:active,
.tip:active {
  transform: scale(0.9);
  opacity: 0.5;
}
.tip:hover {
  opacity: 0.8;
}
.tip {
  position: absolute;
  right: 2rem;
  bottom: 4rem;
  border: 4px solid #d7725a;
  border-radius: 1.5rem;
  padding: 0.5rem;
  box-shadow: 0px 4px 14px 0px rgba(104, 104, 104, 0.75);
  cursor: pointer;
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
