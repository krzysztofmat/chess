<script lang="ts">
import type { IPlayerAtGame } from '@/supports/colorModeEnum';
import type { PropType } from 'vue';

export default {
  props: {
    playerAtGame: {
      type: Object as PropType<IPlayerAtGame>,
      required: true,
    },
  },
};
</script>

<template>
  <div class="player-at-game flex">
    <div class="w-12 bg-white">&nbsp;</div>
    <div class="pl-1 flex flex-col">
      <div>
        <span class="font-semibold inline-block text-sm">{{
          playerAtGame.nickname
        }}</span>
        <span class="text-gray-400 ml-1 text-sm"
          >({{ playerAtGame.rating }})</span
        >
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
</template>

<style scoped></style>
