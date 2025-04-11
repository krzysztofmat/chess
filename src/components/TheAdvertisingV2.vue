<template>
  <table>
    <caption class="caption-bottom">
      Table 3.1: Professional wrestlers and their signature moves.
    </caption>
    <thead>
      <tr>
        <th>Wrestler</th>
        <th>Signature Move(s)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>"Stone Cold" Steve Austin</td>
        <td>Stone Cold Stunner, Lou Thesz Press</td>
      </tr>
      <tr>
        <td>Bret "The Hitman" Hart</td>
        <td>The Sharpshooter</td>
      </tr>
      <tr>
        <td>Razor Ramon</td>
        <td>Razor's Edge, Fallaway Slam</td>
      </tr>
    </tbody>
  </table>

  <div
    class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
  >
    <div>
      <span
        class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg"
      >
        <svg
          class="h-6 w-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <!-- ... -->
        </svg>
      </span>
    </div>
    <h3
      class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight"
    >
      Writes Upside-Down
    </h3>
    <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
      The Zero Gravity Pen can be used to write in any orientation, including
      upside-down. It even works in outer space.
    </p>
  </div>

  <div
    class="chess-board size-12 focus:ring italic"
    @mousedown="onPieceMouseDown"
    @mouseup="onPieceMouseUp"
  >
    <!-- Chess Piece -->
    <div
      class="chess-piece"
      ref="draggablePiece"
      :style="{
        top: piecePosition.y + 'px',
        left: piecePosition.x + 'px',
        position: 'absolute',
      }"
    >
      ♞
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ChessBoard',
  data() {
    return {
      piecePosition: {
        x: 100, // Initial X position
        y: 100, // Initial Y position
      },
      isDragging: false,
    };
  },
  methods: {
    onPieceMouseDown(event: MouseEvent) {
      this.isDragging = true;

      // Add mousemove listener to track the dragging
      window.addEventListener('mousemove', this.onPieceMouseMove);
    },
    onPieceMouseMove(event: MouseEvent) {
      if (this.isDragging) {
        // Get the element
        const element = document.querySelector('.chess-board');

        if (!element) {
          return;
        }

        // Get the bounding rectangle
        const rect = element.getBoundingClientRect();

        // Retrieve clientX and clientY for the top-left corner of the element
        const clientX = rect.left; // X-coordinate relative to the viewport
        const clientY = rect.top; // Y-coordinate relative to the viewport

        // Update the chess piece position based on mouse movement
        this.piecePosition.x = event.clientX - clientX - 25; // Offset for centering
        this.piecePosition.y = event.clientY - clientY - 25; // Offset for centering

        console.log('client', clientX, clientY);
        console.log(this.piecePosition);
      }
    },
    onPieceMouseUp() {
      this.isDragging = false;

      // Remove mousemove listener when dragging ends
      window.removeEventListener('mousemove', this.onPieceMouseMove);
    },
  },
});
</script>

<style scoped>
.chess-board {
  width: 400px;
  height: 400px;
  border: 2px solid #000;
  position: relative;
  overflow: hidden;
}

.chess-piece {
  width: 50px;
  height: 50px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
  border-radius: 50%;
}
</style>
