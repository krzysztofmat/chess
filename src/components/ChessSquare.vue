<script lang="ts">
import { colorModeEnum, colorModeEnumType } from '@/supports/colorModeEnum';
import type { PropType } from 'vue';

export default {
  props: {
    column: {
      type: String,
      required: true,
    },
    row: {
      type: Number,
      required: true,
    },
    showColumnName: {
      type: Boolean,
      required: false,
      default: true,
    },
    showRowName: {
      type: Boolean,
      required: false,
      default: true,
    },
    colorMode: {
      type: String as PropType<colorModeEnumType>,
      required: true,
    },
  },
  data() {},
  computed: {
    colorModeClasses() {
      if (this.colorMode === colorModeEnum.DARK) {
        return 'bg-green-600';
      }

      return 'bg-white';
    },
  },
};
</script>

<template>
  <div class="chess-square">
    <div
      class="chess-square-inside relative w-full h-full flex place-items-center text"
      :class="colorModeClasses"
    >
      <span
        v-if="showColumnName"
        class="absolute right-1 bottom-1 font-semibold text-black"
        >{{ column }}</span
      >
      <span
        v-if="showRowName"
        class="absolute left-1 top-1 text-bold font-semibold text-black"
        >{{ row }}</span
      >
      <!--
      <span style="color: black; background-color: white">&#9812;</span>
  -->
      <!--
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text x="10" y="50" font-size="48" fill="white">&#9812;</text>
      </svg>
      -->
      <img
        alt="Black bishop"
        class="absolute"
        src="@/assets/pieces/cburnett/bb.svg"
        width="125"
        height="125"
      />
    </div>
  </div>
</template>

<style scoped></style>
