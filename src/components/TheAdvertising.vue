<template>
  <div class="grid-container" ref="gridContainer">
    <div
      v-for="area in gridAreas"
      :key="area"
      :class="['grid-item', area, 'relative']"
      @dragover.prevent="handleDragOver"
      @drop="handleDrop(area)"
      style=""
    >
      <p>{{ area }}</p>
      <div
        v-if="currentArea === area"
        draggable="true"
        @dragstart="handleDragStart"
        @drag="handleDrag"
        @dragend="handleDragEnd"
        class="draggable"
        ref="draggableElement"
        :style="style"
      >
        Drag me
      </div>

      <div
        v-if="isDraggedElement"
        class="absolute w-full h-full bg-red-950"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, nextTick } from 'vue';

export default defineComponent({
  name: 'DraggableGrid',
  data() {
    return {
      gridAreas: ['area1', 'area2', 'area3', 'area4'], // grid areas
      currentArea: 'area1', // starting area
      draggedElement: null as HTMLElement | null,
      containerBounds: null as DOMRect | null,
      style: '',
      isDraggedElement: false,
    };
  },
  methods: {
    // async handleDragStart(event: DragEvent) {
    handleDragStart(event: DragEvent) {
      this.isDraggedElement = true;
      // console.log(event);
      // event.target.style.border = '2px solid red !important';
      if (!event.dataTransfer) {
        alert('t');
        // console.error('dataTransfer is null');
        return; // Exit if dataTransfer is unavailable
      }
      // event.dataTransfer.effectAllowed = 'link';
      // event.dataTransfer.dropEffect = 'link';

      // this.$refs.draggableElement.style.visibility = 'hidden';

      this.draggedElement = this.$refs.draggableElement as HTMLElement;

      // await nextTick();
      // await this.$nextTick();

      // this.style = 'border: 2px solid red !important; visibility: hidden;';
      // this.draggedElement.style.border = '2px solid red !important';
      // this.draggedElement.innerHTML = 'gggg';

      const container = this.$refs.gridContainer as HTMLElement;
      this.containerBounds = container.getBoundingClientRect();

      container.style.border = '2px solid red !important';

      // Apply absolute positioning for dragging
      if (this.draggedElement) {
        this.draggedElement.style.position = 'absolute';
      }
    },
    handleDrag(event: DragEvent) {
      if (
        !this.draggedElement ||
        !this.containerBounds ||
        event.clientX === 0 ||
        event.clientY === 0
      ) {
        return;
      }

      // Constrain movement within the container boundaries
      const constrainedX = Math.max(
        this.containerBounds.left,
        Math.min(
          event.clientX - this.draggedElement.offsetWidth / 2,
          this.containerBounds.right - this.draggedElement.offsetWidth,
        ),
      );

      const constrainedY = Math.max(
        this.containerBounds.top,
        Math.min(
          event.clientY - this.draggedElement.offsetHeight / 2,
          this.containerBounds.bottom - this.draggedElement.offsetHeight,
        ),
      );

      // Update element's position during dragging
      // this.draggedElement.style.left = `${constrainedX - this.containerBounds.left}px`;
      // this.draggedElement.style.top = `${constrainedY - this.containerBounds.top}px`;
    },
    handleDragEnd() {
      if (!this.draggedElement) {
        return;
      }

      this.draggedElement.style.border = '2px solid red !important';

      // Reset state on drag end
      this.draggedElement = null;
      this.isDraggedElement = false;
    },
    handleDrop(targetArea: string) {
      this.currentArea = targetArea; // Update area upon valid drop
      this.isDraggedElement = false;
    },
    handleDragOver(event: DragEvent) {
      event.preventDefault(); // Enable drop events
    },
  },
});
</script>

<style>
.grid-container {
  display: grid;
  grid-template-areas: 'area1 area2' 'area3 area4';
  grid-gap: 10px;
  width: 200px;
  height: 200px;
  border: 2px solid #000; /* Highlight container boundaries */
  position: relative; /* Set relative positioning for absolute child elements */
}

.grid-item {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
  position: relative;
}

.draggable {
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  cursor: grab;
  border-radius: 4px;
  position: absolute; /* Absolute positioning for smooth drag control */
  left: 0;
  top: 0;
}
</style>
