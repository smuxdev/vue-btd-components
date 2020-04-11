<template>
  <div class="english-kids-quarantine">
    <GlobalMessages />
    <GameTitle />

    <div class="custom-block tip">
      <p class="custom-block-title">INSTRUCTIONS</p>
      <p>
        <b>Find</b> the correct word.
        <b>Look</b> closely at the drawing and
        <b>find</b> the word in English.
      </p>
    </div>

    <ScoreBar />
    <GameBoard :inGame="inGame" />

    <footer class="footer">
      All images from: http://www.rawpixel.com
      <span class="credits">
        By Samuel González Izquerdo. 2020
        <a
          href="http://www.twitter.com/babytruckdriver"
          class="fab fa-twitter-square"
          target="_blank"
        ></a>
      </span>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import GlobalMessages from "@/components/GlobalMessages.vue";
import GameTitle from "@/components/gameComponents/GameTitle.vue";
import ScoreBar from "@/components/gameComponents/ScoreBar.vue";
import GameBoard from "@/components/gameComponents/GameBoard.vue";

export default {
  name: "EnglishKidsQuarantine",
  components: {
    GlobalMessages,
    GameTitle,
    ScoreBar,
    GameBoard
  },
  data: function() {
    return {
      inGame: false
    };
  },
  mounted() {
    this.$root.$on("gameStartEvent", () => {
      this.inGame = true;
    });
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.english-kids-quarantine,
a {
  color: #4b6988;
}
.footer {
  position: fixed;
  padding: 0.5rem;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #f3f5f7;
  text-align: left;
  font-size: 0.8rem;
  box-shadow: 0px 4px 14px 0px rgba(104, 104, 104, 0.75);
}
.credits {
  float: right;
  padding-right: 2rem;
}
.custom-block.tip {
  background-color: #f3f5f7;
  border-color: #d7725a;
  font-size: 1.2rem;
}
.custom-block.tip {
  padding: 0.1rem 1.5rem;
  border-left-width: 0.5rem;
  border-left-style: solid;
  margin: 0.5rem 0;
}
.custom-block .custom-block-title {
  font-weight: 600;
  margin-bottom: -0.4rem;
}
.custom-block p {
  line-height: 1.7;
}
</style>
