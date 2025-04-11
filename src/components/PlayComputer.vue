<script lang="ts">
import { playAsEnum, type IPlayerAtGame } from '@/supports/colorModeEnum';
import ChessBoard from './ChessBoard.vue';
import PlayerAtGame from './PlayerAtGame.vue';
import TheAdvertising from './TheAdvertising.vue';
import TheAdvertisingV2 from './TheAdvertisingV2.vue';

const mePlayer: IPlayerAtGame = {
  nickname: 'km',
  rating: 1400,
  playAs: playAsEnum.WHITE,
};
const opponentPlayer: IPlayerAtGame = {
  nickname: 'computer250',
  rating: 250,
  playAs: playAsEnum.BLACK,
};

export default {
  data() {
    return {
      mePlayer,
      opponentPlayer,
    };
  },
  components: {
    ChessBoard: ChessBoard,
    PlayerAtGame: PlayerAtGame,
    TheAdvertising,
    TheAdvertisingV2,
  },
};
</script>

<template>
  <div
    class="play-computer grid bg-neutral-800 p-2 max-w-screen-2xl w-full h-full min-h-screen text-white"
  >
    <div class="play-computer-chessboard grid">
      <div></div>
      <PlayerAtGame :playerAtGame="opponentPlayer" />
      <div class="flex flex-col">
        <span class="text-lg">&#x2699;</span>
        <span class="text-lg rotate-90">&#x21C6;</span>
      </div>

      <div>eva<br />bar</div>
      <div><ChessBoard></ChessBoard></div>
      <div class="flex flex-col-reverse">
        <span class="text-lg cursor-nw-resize">&#x2921;</span>
      </div>

      <div></div>
      <PlayerAtGame :playerAtGame="mePlayer" />
      <div></div>
    </div>

    <div class="play-computer-options-and-game"></div>

    <div class="play-computer-advertise">
      <TheAdvertising />
      <TheAdvertisingV2 />
    </div>
  </div>
</template>

<style scoped>
.play-computer {
  grid-template-columns: 3fr 2fr 1fr;
  column-gap: 1rem;
}
.play-computer-chessboard {
  grid-template-columns: 1rem 1fr 1rem;
  grid-template-rows: 3rem 1fr 3rem;
  row-gap: 0.5rem;
  column-gap: 0.5rem;
}
</style>
