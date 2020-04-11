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
  </div>
</template>

<script>
// @ is an alias to /src
import GlobalMessages from "@/components/GlobalMessages.vue";
import GameTitle from "@/components/gameComponents/GameTitle.vue";
import ScoreBar from "@/components/gameComponents/ScoreBar.vue";

export default {
  name: "EnglishKidsQuarantine",
  components: {
    GlobalMessages,
    GameTitle,
    ScoreBar
  }
};
</script>

<style scoped>
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
