<script lang="ts">
export default {};
</script>

<template>
  <div class="play-computer grid bg-gray-500 p-2 max-w-screen-2xl w-full">
    <div class="w-3/6">
      Chessboard, player info, current status, shortcut to settings
    </div>

    <div class="w-2/6">select engine, moves backward forward</div>

    <div class="w-1/6">Advertisment</div>
  </div>
</template>

<style scoped>
.play-computer {
  grid-template-columns: 3fr 2fr 1fr;
}
</style>
