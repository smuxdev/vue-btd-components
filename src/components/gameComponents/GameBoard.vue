<template>
  <transition name="slide-fade">
    <div class="game-board" v-show="inGame">
      <span>
        <img :src="`../../gameImg/draw-${imgNumber}.jpg`" alt />
      </span>
      <span class="word-list">
        <ul>
          <li
            v-for="answer in answers"
            :key="answer.imgNumber"
            v-on:click="checkAnswer"
            v-bind:value="answer.imgNumber"
          >{{answer.answer}}</li>
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
      tries: 0,
      answers: []
    };
  },
  props: {
    inGame: Boolean,
    lives: {
      default: 3,
      type: Number
    },
    points: {
      default: 0,
      type: Number
    }
  },
  watch: {
    inGame: function(val) {
      // Game initialization
      if (val) {
        this.answers = [
          { imgNumber: 1, answer: "Elephant", incorrect: false },
          { imgNumber: 2, answer: "Whale", incorrect: false },
          { imgNumber: 3, answer: "Jellyfish", incorrect: false },
          { imgNumber: 4, answer: "Penguin", incorrect: false },
          { imgNumber: 5, answer: "Bee", incorrect: false },
          { imgNumber: 6, answer: "Crocodile", incorrect: false },
          { imgNumber: 7, answer: "Owl", incorrect: false }
        ];
        this.imgNumber = Math.floor(Math.random() * 7) + 1;
      }
    }
  },
  computed: {
    needTip: function() {
      return this.lives < 3;
    }
  },
  methods: {
    checkAnswer(evt) {
      if (!event.target.className.includes("incorrect")) {
        this.tries += 1; // Sum one try
        if (evt.target.value !== this.imgNumber) {
          event.target.className += " incorrect";

          this.$root.$emit("loseLiveEvent");
        } else {
          // TODO: Well done!
          let points = 0;
          if (this.tries <= 1) {
            points = 10;
          } else if (this.tries === 2) {
            points = 5;
          } else if (this.tries === 3) {
            points = 2;
          }

          this.$root.$emit("addPointsEvent", points);
        }
      }
    },
    tipMe() {
      // TODO:
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
.word-list li:hover:not("incorrect") {
  transform: scale(1.2);
  transform: translateX(0.2rem);
  opacity: 0.9;
  color: rgb(134, 74, 74);
}
.word-list li:active,
.tip:active:not("incorrect") {
  transform: scale(0.9);
  opacity: 0.5;
}

.word-list li.incorrect {
  text-decoration: line-through;
  color: #d7725a;
  cursor: default;
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
  transition: opacity 0.3s ease;
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
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
