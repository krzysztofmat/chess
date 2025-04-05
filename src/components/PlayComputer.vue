<script lang="ts">
import ChessBoard from './ChessBoard.vue';

export default {
  components: {
    ChessBoard: ChessBoard,
  },
};
</script>

<template>
  <div
    class="play-computer grid bg-neutral-800 p-2 max-w-screen-2xl w-full h-full min-h-screen text-white"
  >
    <div class="play-computer-chessboard grid">
      <div></div>
      <div class="flex">
        <div class="w-12 bg-white">&nbsp;</div>
        <div class="pl-1 flex flex-col">
          <div>
            <span class="font-semibold inline-block text-sm">Początkujący</span>
            <span class="text-gray-400 ml-1 text-sm">(250)</span>
          </div>
          <div class="h-6 flex" style="height: 1.5rem">
            <img src="@/assets/pieces/cburnett/wp.svg" style="height: 100%" />
            <img src="@/assets/pieces/cburnett/wb.svg" style="height: 100%" />
            <img
              src="@/assets/pieces/cburnett/wb.svg"
              class="-ml-3"
              style="height: 100%"
            />
          </div>
        </div>
      </div>
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
      <div class="flex">
        <div class="w-12 bg-white">&nbsp;</div>
        <div class="pl-1 flex flex-col">
          <div>
            <span class="font-semibold inline-block text-sm">Początkujący</span>
            <span class="text-gray-400 ml-1 text-sm">(250)</span>
          </div>
          <div class="h-6 flex" style="height: 1.5rem">
            <img src="@/assets/pieces/cburnett/wp.svg" style="height: 100%" />
            <img src="@/assets/pieces/cburnett/wb.svg" style="height: 100%" />
            <img
              src="@/assets/pieces/cburnett/wb.svg"
              class="-ml-3"
              style="height: 100%"
            />
          </div>
        </div>
      </div>
      <div></div>
    </div>

    <div class="play-computer-options-and-game">
      select engine, moves backward forward
    </div>

    <div class="play-computer-advertise">Advertisment</div>
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
