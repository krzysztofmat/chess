<script lang="ts">
import { colorModeEnum } from '@/supports/colorModeEnum';
import type {
  colorModeEnumType,
  IColorModeOnSquares,
} from '@/supports/colorModeEnum';
import ChessSquare from './ChessSquare.vue';

const columns: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
const rows: number[] = [8, 7, 6, 5, 4, 3, 2, 1];
let grid_template_areas = 'grid-template-areas: ';
let currentColorMode = colorModeEnum.LIGHT;
const colorModeOnSquares: IColorModeOnSquares = {};
for (let i = 0; i < rows.length; i++) {
  grid_template_areas += "'";
  for (let j = 0; j < columns.length; j++) {
    const squareKey = `${columns[j]}${rows[i]}`;
    grid_template_areas += squareKey + ' ';
    colorModeOnSquares[squareKey] = currentColorMode;
    currentColorMode =
      currentColorMode === colorModeEnum.LIGHT
        ? colorModeEnum.DARK
        : colorModeEnum.LIGHT;
  }
  currentColorMode =
    currentColorMode === colorModeEnum.LIGHT
      ? colorModeEnum.DARK
      : colorModeEnum.LIGHT;
  grid_template_areas += "'";
}
grid_template_areas += ';';

export default {
  components: {
    ChessSquare: ChessSquare,
  },
  data() {
    return {
      columns: columns,
      rows: rows,
      grid_template_areas: grid_template_areas,
    };
  },
  methods: {
    showColumnName(column: number, row: number): boolean {
      if (row === 1) {
        return true;
      }

      return false;
    },
    showRowName(column: number, row: number): boolean {
      if (column === 1) {
        return true;
      }

      return false;
    },
    colorMode(column: number, row: number): colorModeEnumType {
      const squareKey = `${column}${row}`;

      return colorModeOnSquares[squareKey];
    },
  },
};
</script>

<template>
  <div class="chess-board grid aspect-square" :style="`${grid_template_areas}`">
    <template v-for="row in rows" :key="`row-${row}`">
      <template v-for="column in columns" :key="`${column}${row}`">
        <ChessSquare
          :row
          :column
          :showColumnName="showColumnName(column, row)"
          :showRowName="showRowName(column, row)"
          :colorMode="colorMode(column, row)"
        />
      </template>
    </template>
  </div>
</template>
5

<style scoped>
.chess-board {
  width: 100%;
  grid-auto-rows: calc(100% / 8);
  grid-auto-columns: calc(100% / 8);
}
</style>
